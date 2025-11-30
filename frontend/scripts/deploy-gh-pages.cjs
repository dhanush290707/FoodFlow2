const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

function run(cmd, opts = {}) {
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

async function main() {
  const repoRoot = path.resolve(__dirname, '..', '..');
  const frontendDir = path.resolve(__dirname, '..');
  const distDir = path.join(frontendDir, 'dist');

  if (!fs.existsSync(distDir)) {
    console.error('Build output not found. Run `npm run build` in frontend first.');
    process.exit(1);
  }

  let repoUrl = '';
  try {
    repoUrl = execSync('git config --get remote.origin.url', { cwd: repoRoot })
      .toString()
      .trim();
  } catch (err) {
    console.error('Failed to read git remote URL from repository root:', err.message);
    process.exit(1);
  }

  const tmpDir = path.join(os.tmpdir(), 'ff2-gh-pages-' + Date.now());
  try {
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
    fs.mkdirSync(tmpDir, { recursive: true });

    // init git repo
    run('git init', { cwd: tmpDir });
    run('git checkout -b gh-pages', { cwd: tmpDir });

    // copy built files (Node >=16.7 has cpSync)
    fs.cpSync(distDir, tmpDir, { recursive: true });

    // create a simple index.html fallback for empty builds (not usually needed)
    if (!fs.existsSync(path.join(tmpDir, 'index.html'))) {
      fs.writeFileSync(path.join(tmpDir, 'index.html'), '<!-- empty -->');
    }

    // commit and push
    run('git add -A', { cwd: tmpDir });

    // ensure git user is configured for this repo
    try {
      const name = execSync('git config user.name', { cwd: repoRoot }).toString().trim();
      const email = execSync('git config user.email', { cwd: repoRoot }).toString().trim();
      if (!name) {
        run('git config user.name "deploy-script"', { cwd: tmpDir });
      } else {
        run(`git config user.name "${name}"`, { cwd: tmpDir });
      }
      if (!email) {
        run('git config user.email "deploy@local"', { cwd: tmpDir });
      } else {
        run(`git config user.email "${email}"`, { cwd: tmpDir });
      }
    } catch (e) {
      run('git config user.name "deploy-script"', { cwd: tmpDir });
      run('git config user.email "deploy@local"', { cwd: tmpDir });
    }

    try {
      run('git commit -m "Deploy to gh-pages"', { cwd: tmpDir });
    } catch (e) {
      // commit may fail if there are no changes; ignore
    }
    run(`git remote add origin ${repoUrl}`, { cwd: tmpDir });
    run('git push --force origin gh-pages', { cwd: tmpDir });

    console.log('Deployed to gh-pages branch successfully.');
  } catch (err) {
    console.error('Deploy failed:', err && err.message ? err.message : err);
    process.exit(1);
  } finally {
    try {
      // cleanup
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {
      // ignore
    }
  }
}

main();
