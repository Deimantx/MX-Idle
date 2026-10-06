import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('src');
const extensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.svg', '.json']);
const signatures = ['Ã‚', 'Ãƒ', 'Ã¢â‚¬', 'Ã¢â€ ', 'Ã¢â‚¬Â¢', 'Ã¢â‚¬â„¢', 'ï¿½'];
const ignored = new Set(['node_modules', 'dist', 'build', 'coverage', '__generated__', 'generated']);
const files = [];

async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignored.has(entry.name)) await collect(path.join(directory, entry.name));
    } else if (extensions.has(path.extname(entry.name).toLowerCase())) files.push(path.join(directory, entry.name));
  }
}

await collect(root);
const issues = [];
for (const file of files) {
  const text = await readFile(file, 'utf8');
  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    if (signatures.some(signature => line.includes(signature))) {
      issues.push(`${path.relative(process.cwd(), file)}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (issues.length) {
  console.error(`Found ${issues.length} likely text encoding issue${issues.length === 1 ? '' : 's'} in src:`);
  for (const issue of issues) console.error(issue);
  process.exitCode = 1;
} else {
  console.log(`UI text integrity passed (${files.length} source files scanned).`);
}
