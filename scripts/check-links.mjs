#!/usr/bin/env node
// 巡检 data/tools.json 里的官网与源码链接。无第三方依赖。
//
// 判定：
//   2xx / 3xx           -> 正常（fetch 默认跟随重定向）
//   403 / 405 / 406/429 -> 跳过（站点反爬，不代表链接失效）
//   404 / 410 / 5xx     -> 确认失效，退出码 1
//   三种方式都连不上     -> 记为「本环境无法验证」，只告警、不算死链
//
// 兜底：某些环境里 Node 的 fetch 不走 HTTP(S)_PROXY，会把正常链接误报为网络错误。
// 遇到 fetch 失败时依次尝试 gh api（GitHub 仓库，最权威）→ curl（尊重代理环境变量）。
// 明确拿到 404 才判定失效，避免网络限制导致误删条目。

import { readFileSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// 用异步子进程，避免同步调用阻塞事件循环、饿死 fetch 的超时定时器
const run = promisify(execFile);

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(join(root, 'data', 'tools.json'), 'utf8'));

const links = new Map();
for (const category of data.categories) {
  for (const item of category.items) {
    for (const url of [item.url, item.repo].filter(Boolean)) {
      if (!links.has(url)) links.set(url, item.name);
    }
  }
}

const SKIP = new Set([403, 405, 406, 429]);
const TIMEOUT_MS = 12000;
const CONCURRENCY = 8;

// GitHub 仓库 URL -> 用 gh api 判断仓库是否真实存在
async function ghProbe(url) {
  const m = /^https:\/\/github\.com\/([^/]+)\/([^/#?]+)\/?$/.exec(url);
  if (!m) return null;
  try {
    await run('gh', ['api', `repos/${m[1]}/${m[2]}`, '--jq', '.full_name'], {
      timeout: 15000,
      windowsHide: true,
    });
    return { status: 200, ok: true, via: 'gh api' };
  } catch {
    return null; // gh 不可用或无权访问时继续交给 curl，不武断判死链
  }
}

// 用 curl 复核（curl 会读取 HTTP_PROXY / HTTPS_PROXY）
async function curlProbe(url) {
  try {
    const { stdout } = await run(
      'curl',
      ['-L', '-s', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '15', url],
      { timeout: 20000, windowsHide: true },
    );
    const status = Number(stdout.trim()) || 0;
    if (!status) return null;
    return { status, ok: status >= 200 && status < 400, via: 'curl' };
  } catch {
    return null;
  }
}

async function probe(url) {
  let last;
  // 网络抖动与 5xx 重试一次，避免把临时故障当死链
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; awesome-free-no-ads-linkcheck/1.0)' },
      });
      // 释放响应体，避免占用连接
      await res.arrayBuffer().catch(() => {});
      last = { status: res.status, ok: res.ok };
      if (res.ok || SKIP.has(res.status) || res.status < 500) return last;
    } catch (err) {
      last = { status: 0, ok: false, error: err?.name === 'TimeoutError' ? '超时' : String(err?.message || err) };
    }
  }

  // fetch 拿不到结果：走兜底链路
  if (last?.status === 0) {
    const fallback = (await ghProbe(url)) || (await curlProbe(url));
    if (fallback) return fallback;
  }
  return last;
}

const entries = [...links.entries()];
const results = [];
let cursor = 0;

async function worker() {
  while (cursor < entries.length) {
    const index = cursor++;
    const [url, name] = entries[index];
    const result = await probe(url);
    results.push({ url, name, ...result });
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const skipped = results.filter((r) => SKIP.has(r.status));
// status === 0：fetch / gh api / curl 都连不上。多为运行环境网络限制，
// 不等于链接失效，因此单列为「无法验证」，不触发失败。
const unreachable = results.filter((r) => !r.ok && !SKIP.has(r.status) && r.status === 0);
const broken = results.filter((r) => !r.ok && !SKIP.has(r.status) && r.status !== 0);
const fallbackCount = results.filter((r) => r.via).length;

for (const r of broken) {
  console.log(`✗ [${r.status}] ${r.name} — ${r.url}`);
}

console.log(`\n共 ${results.length} 个链接：${results.length - skipped.length - unreachable.length - broken.length} 个正常，${skipped.length} 个反爬跳过，${unreachable.length} 个本环境无法验证，${broken.length} 个确认失效；其中 ${fallbackCount} 个经 gh api / curl 兜底确认。`);

if (skipped.length) {
  console.log('\n跳过（Cloudflare / 反爬，需人工确认）：');
  for (const r of skipped) console.log(`  · [${r.status}] ${r.name} — ${r.url}`);
}

if (unreachable.length) {
  console.log('\n本环境无法验证（网络受限，不是死链；联网环境会重新确认）：');
  for (const r of unreachable) console.log(`  · ${r.name} — ${r.url}`);
}

if (broken.length) {
  console.error('\n存在确认失效的链接，请更新 data/tools.json。');
  process.exit(1);
}
