import esbuild from 'esbuild'
import chokidar from 'chokidar';

const esbuildConfig = {
  entryPoints: ['./app/main.jsx'],
  outdir: './build',
  platform: 'browser',
  format: 'esm',
  bundle: true,
  splitting: true,
  sourcemap: true,
  treeShaking: true,
  mainFields: ['browser', 'module', 'main'],
  jsx: 'automatic',
  metafile: true,
}

// let ctx = await esbuild.context({
//   entryPoints: ['./app/main.jsx'],
//   outdir: './build',
//   platform: 'browser',
//   format: 'esm',
//   bundle: true,
//   splitting: true,
//   sourcemap: true,
//   treeShaking: true,
//   mainFields: ['browser', 'module', 'main'],
//   jsx: 'automatic',
//   metafile: true,
// })

let watcher = chokidar.watch(['./app'], {
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 100,
    pollInterval: 100,
  },
}).on('change', async () => {
  await rebuild();
})

async function rebuild() {
  const startTime = Date.now();
  await esbuild.build(esbuildConfig);
  console.log('rebuild in ', + (Date.now() - startTime) + 'ms');
}

// console.log('watching');
rebuild();
