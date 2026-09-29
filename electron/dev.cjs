const { spawn } = require('node:child_process');
const { createServer } = require('node:net');
const http = require('node:http');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const viteCli = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const electronCli = path.join(root, 'node_modules', 'electron', 'cli.js');

function findFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close(error => error ? reject(error) : resolve(address.port));
    });
  });
}

function waitForServer(url, serverProcess) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      if (serverProcess.exitCode !== null) return reject(new Error('Vite stopped before it was ready.'));
      const request = http.get(url, response => { response.resume(); resolve(); });
      request.on('error', () => {
        if (++attempts > 100) return reject(new Error('Timed out waiting for Vite.'));
        setTimeout(check, 100);
      });
    };
    check();
  });
}

let vite;
let electron;
let shuttingDown = false;
function stop(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  if (vite && vite.exitCode === null) vite.kill();
  if (electron && electron.exitCode === null) electron.kill();
  process.exitCode = code;
}

process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));

findFreePort().then(async port => {
  const url = `http://127.0.0.1:${port}`;
  vite = spawn(process.execPath, [viteCli, '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { cwd: root, stdio: 'inherit' });
  vite.once('error', error => { console.error(error); stop(1); });
  vite.once('exit', code => { if (!shuttingDown && code !== 0) stop(code || 1); });
  await waitForServer(url, vite);
  const env = { ...process.env, VITE_DEV_SERVER_URL: url };
  delete env.ELECTRON_RUN_AS_NODE;
  electron = spawn(process.execPath, [electronCli, root], { cwd: root, env, stdio: 'inherit' });
  electron.once('error', error => { console.error(error); stop(1); });
  electron.once('exit', code => stop(code || 0));
}).catch(error => { console.error(error); stop(1); });
