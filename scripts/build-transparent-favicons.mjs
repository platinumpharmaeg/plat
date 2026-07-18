import { writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'public', 'images', 'favicon.png');

// Trim empty transparent margins so the logo fills the icon better at small sizes.
const trimmed = await sharp(source).ensureAlpha().trim({ threshold: 5 }).toBuffer();
const trimmedMeta = await sharp(trimmed).metadata();
console.log(`Trimmed source: ${trimmedMeta.width}x${trimmedMeta.height}`);

async function makeSquarePng(size, outPath, { paddingRatio = 0.1 } = {}) {
  const pad = Math.max(1, Math.round(size * paddingRatio));
  const inner = Math.max(1, size - pad * 2);

  const logo = await sharp(trimmed)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toBuffer();

  const buffer = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logo, gravity: 'centre' }])
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toBuffer();

  writeFileSync(outPath, buffer);
  console.log(`Created ${outPath} (${size}x${size}, ${buffer.length} bytes)`);
  return buffer;
}

/** Build a .ico that embeds PNG payloads (keeps real transparency). */
function pngBuffersToIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = [];

  for (const png of pngBuffers) {
    entries.push({ offset, size: png.length });
    offset += png.length;
  }

  const dims = pngBuffers.map((png) => ({
    width: png.readUInt32BE(16),
    height: png.readUInt32BE(20),
  }));

  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);

  for (let i = 0; i < count; i++) {
    const entryOffset = 6 + i * 16;
    const w = dims[i].width >= 256 ? 0 : dims[i].width;
    const h = dims[i].height >= 256 ? 0 : dims[i].height;
    out.writeUInt8(w, entryOffset);
    out.writeUInt8(h, entryOffset + 1);
    out.writeUInt8(0, entryOffset + 2);
    out.writeUInt8(0, entryOffset + 3);
    out.writeUInt16LE(1, entryOffset + 4);
    out.writeUInt16LE(32, entryOffset + 6);
    out.writeUInt32LE(entries[i].size, entryOffset + 8);
    out.writeUInt32LE(entries[i].offset, entryOffset + 12);
    pngBuffers[i].copy(out, entries[i].offset);
  }

  return out;
}

const sizes = [
  { size: 16, path: join(root, 'public', 'favicon-16.png'), paddingRatio: 0.06 },
  { size: 32, path: join(root, 'public', 'favicon-32.png'), paddingRatio: 0.08 },
  { size: 48, path: join(root, 'public', 'favicon-48.png'), paddingRatio: 0.08 },
  { size: 96, path: join(root, 'public', 'icon.png'), paddingRatio: 0.08 },
  { size: 192, path: join(root, 'public', 'icon-192.png'), paddingRatio: 0.08 },
  { size: 512, path: join(root, 'public', 'icon-512.png'), paddingRatio: 0.08 },
  // Apple home-screen icons composite transparency on black — keep a light soft pad but still transparent alpha
  { size: 180, path: join(root, 'public', 'apple-touch-icon.png'), paddingRatio: 0.1 },
];

const pngs = {};
for (const item of sizes) {
  pngs[item.size] = await makeSquarePng(item.size, item.path, {
    paddingRatio: item.paddingRatio,
  });
}

copyFileSync(join(root, 'public', 'icon.png'), join(root, 'src', 'app', 'icon.png'));
console.log('Copied src/app/icon.png');

const ico = pngBuffersToIco([pngs[16], pngs[32], pngs[48]]);
writeFileSync(join(root, 'public', 'favicon.ico'), ico);
writeFileSync(join(root, 'src', 'app', 'favicon.ico'), ico);
console.log(`Created favicon.ico (${ico.length} bytes, PNG-embedded, transparent)`);

const { data, info } = await sharp(pngs[96]).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
console.log(
  `icon.png corner RGBA: ${data[0]}, ${data[1]}, ${data[2]}, ${data[3]} (channels=${info.channels})`,
);
