// Audit d'accessibilité (WCAG 2.1 AA) avec axe-core et Chromium.
// Usage : npm run build && npx astro preview --port 4321 &  puis  npm run audit:a11y
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const axeSrc = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const base = process.env.BASE ?? 'http://localhost:4321';
const pages = ['/', '/b-oil/', '/actualites/', '/actualites/2026-09-23-b-oil-nouveau-produit/', '/mentions-legales/', '/confidentialite/'];
const browser = await chromium.launch();
let total = 0;
for (const path of pages) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(base + path, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '*{transition:none!important;animation:none!important}[data-reveal],[data-clip]{opacity:1!important;transform:none!important;clip-path:none!important}.manifesto .w{opacity:1!important}' });
  await page.evaluate(() => document.querySelectorAll('[data-reveal],[data-clip],.step').forEach((e) => e.classList.add('in')));
  await page.evaluate(axeSrc);
  const { violations } = await page.evaluate(() => axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }));
  console.log(`${path}  ->  ${violations.length} problème(s)`);
  for (const v of violations) { total += v.nodes.length; console.log(`   [${v.impact}] ${v.id}: ${v.help}`); v.nodes.slice(0, 3).forEach((n) => console.log('      ', n.target.join(' '), '|', (n.failureSummary || '').split('\n')[1] ?? '')); }
  await page.close();
}
await browser.close();
process.exitCode = total ? 1 : 0;
