import * as esbuild from 'esbuild';

// JSX를 사전 빌드해 app.js 단일 번들 생성 (React 포함, 런타임 CDN/Babel 불필요).
// process.env.NODE_ENV를 반드시 문자열 "production"으로 치환해야 React 개발 경고/ReferenceError를 피함.
await esbuild.build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  outfile: 'app.js',
  logLevel: 'info',
});
