// Génère l'emblème rogné, les favicons et l'image Open Graph à partir des photos sources.
import sharp from 'sharp';

const emblem = await sharp('src/assets/logo.png')
  .extract({ left: 127, top: 0, width: 148, height: 150 })
  .png()
  .toBuffer();
await sharp(emblem).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('src/assets/emblem.png');
await sharp(emblem).resize(180, 180, { fit: 'contain', background: '#fbf8f1' }).png().toFile('public/apple-touch-icon.png');
await sharp(emblem).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/favicon-48.png');

// Open Graph 1200x630 : photo de palmeraie + voile + emblème
const bg = await sharp('src/assets/photo-5.jpg').resize(1200, 630, { fit: 'cover', position: 'attention' }).toBuffer();
const veil = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0b2a1c" stop-opacity=".94"/><stop offset=".7" stop-color="#0b2a1c" stop-opacity=".55"/><stop offset="1" stop-color="#0b2a1c" stop-opacity=".15"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<text x="80" y="340" font-family="Georgia, serif" font-size="92" fill="#fbf8f1" font-weight="600">SOCOOCA PK</text>
<text x="82" y="405" font-family="Georgia, serif" font-size="38" fill="#f1b24a" font-style="italic">Coopérative agricole de Koukoué</text>
<text x="82" y="470" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#fbf8f1" opacity=".85">Huile rouge B-OIL · Cacao · Plants de palmier · Cameroun</text>
</svg>`);
const badge = await sharp(emblem).resize(150, 152).toBuffer();
await sharp(bg).composite([{ input: veil }, { input: badge, left: 80, top: 100 }]).jpeg({ quality: 84, mozjpeg: true }).toFile('public/og-image.jpg');

// Favicon SVG (monogramme)
import { writeFile } from 'node:fs/promises';
await writeFile('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#0f3d2a"/><path d="M32 50V26" stroke="#f1b24a" stroke-width="4" stroke-linecap="round"/><path d="M32 28c-3-9-12-12-19-9 3 8 11 12 19 9Zm0 0c3-9 12-12 19-9-3 8-11 12-19 9Z" fill="#f6f0e3"/><circle cx="32" cy="48" r="4" fill="#d6401f"/></svg>`);
console.log('ok');
