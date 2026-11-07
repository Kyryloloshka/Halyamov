// Usage: node scripts/optimize-images.mjs <image> [image...]
// Resizes to max 1400px wide (the screenshots are shown at <=700 CSS px,
// so this covers 2x screens) and saves WebP into src/assets/projects/.
// next/image then generates the smaller responsive sizes from these.
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = "src/assets/projects";
const MAX_WIDTH = 1400;

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Pass one or more image paths.");
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

for (const file of files) {
  const name = path.parse(file).name;
  const out = path.join(OUT_DIR, `${name}.webp`);
  await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(out);
  const [before, after] = await Promise.all([stat(file), stat(out)]);
  console.log(
    `${path.basename(file)} ${Math.round(before.size / 1024)}KB -> ${out} ${Math.round(after.size / 1024)}KB`
  );
}
