#!/usr/bin/env node
// 巡检 data/tools.json 里的官网与源码链接。
// 使用 Node 18+ 内置 fetch，无第三方依赖。
//
// 判定：
//   2xx / 3xx           -> 正常（fetch 默认跟随重定向）
//   403 / 405 / 406/429 -> 跳过（站点反爬，不代表链接失效）
//   404 / 410 / 5xx/网络错误 -> 记为失效，退出码 1

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

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
const broken = results.filter((r) => !r.ok && !SKIP.has(r.status));

for (const r of broken) {
  console.log(`✗ [${r.status || 'ERR'}] ${r.name} — ${r.url}${r.error ? ` (${r.error})` : ''}`);
}

console.log(`\n共 ${results.length} 个链接：${results.length - skipped.length - broken.length} 个正常，${skipped.length} 个因站点反爬跳过，${broken.length} 个失效。`);

if (skipped.length) {
  console.log('\n跳过（多为 Cloudflare / 反爬，需人工确认）：');
  for (const r of skipped) console.log(`  · [${r.status}] ${r.name} — ${r.url}`);
}

if (broken.length) {
  console.error('\n存在失效链接，请更新 data/tools.json。');
  process.exit(1);
}
