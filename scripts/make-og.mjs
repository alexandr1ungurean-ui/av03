// Generate the Open Graph / social preview image (1200x630).
//
//   node scripts/make-og.mjs                 -> paper poster (no photograph)
//   node scripts/make-og.mjs img/shop.jpg    -> split layout, photo down the right
//
// Usage: node scripts/make-og.mjs [source-photo] [output]
import sharp from 'sharp';

const SRC = process.argv[2];
const OUT = process.argv[3] || 'public/og.jpg';
const W = 1200;
const H = 630;
const PANEL = 700;

const frameAndText = (panelWidth) => `
  <rect x="58" y="58" width="${panelWidth - 116}" height="${H - 116}" fill="none" stroke="#231a14" stroke-opacity="0.3" stroke-width="2"/>
  <text x="92" y="146" font-family="Georgia, 'Times New Roman', serif" font-size="19" letter-spacing="7" fill="#7a2b2b">EST. 1978 · DETROIT, MICHIGAN</text>
  <text x="92" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="72" letter-spacing="2" fill="#231a14">GOLDEN ERA</text>
  <text x="92" y="326" font-family="Georgia, 'Times New Roman', serif" font-size="72" letter-spacing="2" fill="#231a14">MOTORS</text>
  <rect x="92" y="362" width="104" height="4" fill="#7a2b2b"/>
  <text x="92" y="420" font-family="Georgia, 'Times New Roman', serif" font-size="23" fill="#6b5b4b">American classics — sales, restoration</text>
  <text x="92" y="454" font-family="Georgia, 'Times New Roman', serif" font-size="23" fill="#6b5b4b">&amp; service</text>
  <text x="92" y="${H - 78}" font-family="Georgia, 'Times New Roman', serif" font-size="19" letter-spacing="3" fill="#6b5b4b">av03.pages.dev</text>`;

const defs = `
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f9f3e7"/>
      <stop offset="1" stop-color="#efe3cf"/>
    </linearGradient>
    <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="#231a14" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>`;

/** Poster with no photograph: ornament on the right instead. */
const posterSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  <rect width="${W}" height="${H}" fill="url(#paper)"/>
  <rect x="14" y="0" width="${W - 14}" height="${H}" fill="url(#hatch)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#7a2b2b"/>
  ${frameAndText(W)}

  <g transform="translate(830 200)">
    <rect x="-40" y="-6" width="290" height="1.5" fill="#231a14" fill-opacity="0.35"/>
    <text x="96" y="62" font-family="Georgia, 'Times New Roman', serif" font-size="86" letter-spacing="6" fill="#231a14" fill-opacity="0.55" text-anchor="middle">1978</text>
    <rect x="-40" y="92" width="290" height="1.5" fill="#231a14" fill-opacity="0.35"/>
    <g fill="#7a2b2b" fill-opacity="0.7">
      <rect x="90" y="112" width="10" height="10" transform="rotate(45 95 117)"/>
      <rect x="66" y="112" width="10" height="10" transform="rotate(45 71 117)"/>
      <rect x="114" y="112" width="10" height="10" transform="rotate(45 119 117)"/>
    </g>
  </g>
</svg>`;

/** Split layout: paper panel on the left, photograph down the right. */
const splitSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  <rect width="${PANEL}" height="${H}" fill="url(#paper)"/>
  <rect width="${PANEL}" height="${H}" fill="url(#hatch)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#7a2b2b"/>
  <rect x="${PANEL}" y="0" width="3" height="${H}" fill="#231a14" fill-opacity="0.35"/>
  ${frameAndText(PANEL)}
</svg>`;

let image;
if (SRC) {
  const right = W - PANEL;
  const photo = await sharp(SRC)
    .resize(right, H, { fit: 'cover', position: 'centre' })
    .modulate({ brightness: 1.02, saturation: 0.9 })
    .toBuffer();
  image = sharp({ create: { width: W, height: H, channels: 3, background: '#f3ebdd' } }).composite([
    { input: photo, top: 0, left: PANEL },
    { input: Buffer.from(splitSvg), top: 0, left: 0 },
  ]);
} else {
  image = sharp(Buffer.from(posterSvg));
}

await image.jpeg({ quality: 88, mozjpeg: true }).toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`og written: ${OUT} -> ${meta.width}x${meta.height}${SRC ? ` (photo: ${SRC})` : ''}`);
