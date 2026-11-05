#!/usr/bin/env node
// 从 data/tools.json 生成 README 中的统计信息与清单区块。
// 用法: node scripts/build.mjs [--check]
//   --check 只校验「README 是否与数据一致」，不写文件（供 CI 使用）。

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = join(root, 'data', 'tools.json');
const readmePath = join(root, 'README.md');

const data = JSON.parse(readFileSync(dataPath, 'utf8'));
const readme = readFileSync(readmePath, 'utf8');

// 数据自检：必填字段、链接格式、类型、重复条目
function validate() {
  const errors = [];
  const seen = new Set();
  for (const c of data.categories) {
    if (!c.title || !c.desc || !Array.isArray(c.items)) errors.push(`分类字段不完整: ${c.id}`);
    for (const it of c.items || []) {
      const label = it.name || '(未命名)';
      if (!it.name || !it.url || !it.desc) errors.push(`必填字段缺失: ${label}`);
      if (!data.types[it.type]) errors.push(`未知类型 ${it.type}: ${label}`);
      for (const key of ['url', 'repo']) {
        if (it[key] && !/^https:\/\/\S+$/.test(it[key])) errors.push(`${key} 不是有效 https 地址: ${label}`);
      }
      const key = `${it.name}|${it.url}`;
      if (seen.has(key)) errors.push(`重复条目: ${label}`);
      seen.add(key);
    }
  }
  if (errors.length) {
    console.error('data/tools.json 校验失败:\n - ' + errors.join('\n - '));
    process.exit(1);
  }
}
validate();

function renderItem(item) {
  const tag = data.types[item.type];
  if (!tag) throw new Error(`未知类型: ${item.type} (${item.name})`);

  let line = `- **[${item.name}](${item.url})**`;
  if (item.repo) line += ` · [源码](${item.repo})`;
  line += ` · ${tag} — ${item.desc}`;
  if (item.platform) line += ` · *${item.platform}*`;
  if (item.note) line += `\n  - 💬 ${item.note}`;
  return line;
}

const total = data.categories.reduce((n, c) => n + c.items.length, 0);
const byType = { open: 0, free: 0, paid: 0 };
for (const c of data.categories) for (const it of c.items) byType[it.type] += 1;

const stats = `收录 **${total}** 款工具，覆盖 **${data.categories.length}** 个分类 · ${data.types.open} ${byType.open} · ${data.types.free} ${byType.free} · ${data.types.paid} ${byType.paid} · 最后核对 ${data.updated}`;

const list = data.categories
  .map((c) => {
    const head = `## ${c.title}\n\n> ${c.desc}\n`;
    return `${head}\n${c.items.map(renderItem).join('\n')}`;
  })
  .join('\n\n');

function replaceBetween(text, start, end, body) {
  const a = text.indexOf(start);
  const b = text.indexOf(end);
  if (a === -1 || b === -1 || b < a) throw new Error(`找不到标记: ${start} / ${end}`);
  return text.slice(0, a + start.length) + `\n${body}\n` + text.slice(b);
}

let next = replaceBetween(readme, '<!-- STATS:START -->', '<!-- STATS:END -->', stats);
next = replaceBetween(next, '<!-- LIST:START -->', '<!-- LIST:END -->', list);

if (process.argv.includes('--check')) {
  if (next !== readme) {
    console.error('README 与 data/tools.json 不一致，请运行 node scripts/build.mjs 后重新提交。');
    process.exit(1);
  }
  console.log(`校验通过：${total} 款工具，${data.categories.length} 个分类。`);
} else {
  if (next !== readme) writeFileSync(readmePath, next, 'utf8');
  console.log(`已生成 README：${total} 款工具，${data.categories.length} 个分类。`);
}
