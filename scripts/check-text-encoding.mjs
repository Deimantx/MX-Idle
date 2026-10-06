import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const bad = ['\u00c3\u201a', '\u00c3\u0192', '\u00c3\u201e', '\u00c2', '\u00e2\u20ac', '\u00ef\u00bf\u00bd', '\ufffd'];
const sourceRoot = path.resolve('src');
const failures = [];

async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await scan(file);
    else if (/\.(tsx?|css|html|json|md)$/.test(entry.name)) {
      const text = await readFile(file, 'utf8');
      for (const marker of bad) if (text.includes(marker)) failures.push(path.relative(process.cwd(), file));
    }
  }
}

await scan(sourceRoot);
if (failures.length) {
  console.error(`Suspicious text encoding in: ${[...new Set(failures)].join(', ')}`);
  process.exitCode = 1;
} else console.log('Player-facing source text encoding looks clean.');
