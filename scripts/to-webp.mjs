// Convert car photos to optimized WebP + AVIF before committing.
// Emits four variants per source image:
//   <name>.webp        full size, WebP  (hero on the detail page)
//   <name>-card.webp   smaller, WebP   (catalog + homepage cards)
//   <name>.avif        full size, AVIF (preferred, ~1.5x lighter)
//   <name>-card.avif   smaller, AVIF
// Usage:
//   node scripts/to-webp.mjs img [public/cars]
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const IN = process.argv[2];
const OUT = process.argv[3] || path.join(process.cwd(), 'public', 'cars');
const FULL_DIM = 1000;
const CARD_DIM = 800;
const FULL_Q = 72;
const CARD_Q = 78;
const AVIF_FULL_Q = 52;
const AVIF_CARD_Q = 60;

if (!IN) {
  console.error('Usage: node scripts/to-webp.mjs <input-dir|file> [output-dir]');
  process.exit(1);
}

async function convert(file) {
  const name = path.basename(file, path.extname(file));
  const base = sharp(file).rotate(); // auto-orient from EXIF

  const full = base
    .clone()
    .resize({ width: FULL_DIM, height: FULL_DIM, fit: 'inside', withoutEnlargement: true });
  const card = base
    .clone()
    .resize({ width: CARD_DIM, height: CARD_DIM, fit: 'inside', withoutEnlargement: true });

  await full.clone().webp({ quality: FULL_Q, effort: 4 }).toFile(path.join(OUT, `${name}.webp`));
  await card.clone().webp({ quality: CARD_Q, effort: 4 }).toFile(path.join(OUT, `${name}-card.webp`));
  await full.clone().avif({ quality: AVIF_FULL_Q, effort: 4 }).toFile(path.join(OUT, `${name}.avif`));
  await card
    .clone()
    .avif({ quality: AVIF_CARD_Q, effort: 4 })
    .toFile(path.join(OUT, `${name}-card.avif`));

  console.log(`ok: ${name} -> webp + avif (full + card)`);
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const s = await stat(IN);

  if (s.isDirectory()) {
    const files = (await readdir(IN))
      .filter((f) => /\.(jpe?g|png|webp|avif|tiff|gif)$/i.test(f))
      .map((f) => path.join(IN, f));
    if (files.length === 0) {
      console.error(`No images found in ${IN}`);
      process.exit(1);
    }
    for (const f of files) await convert(f);
  } else {
    await convert(IN);
  }
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
