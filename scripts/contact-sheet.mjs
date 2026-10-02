import fs from "fs";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";

const srcDir = "C:\\Users\\asits\\.cursor\\projects\\c\\assets";
const outDir = path.resolve("scripts/review");
fs.mkdirSync(outDir, { recursive: true });

const files = fs
  .readdirSync(srcDir)
  .filter((f) => f.includes("photo_2026-10-02") && f.endsWith(".jpg"))
  .sort();

const seen = new Map();
const unique = [];
for (const file of files) {
  const buf = fs.readFileSync(path.join(srcDir, file));
  const hash = crypto.createHash("sha1").update(buf).digest("hex").slice(0, 10);
  const stamp = file.match(/11-\d{2}-\d{2}/)?.[0] ?? file;
  if (seen.has(hash)) {
    console.log(`DUP ${stamp} == ${seen.get(hash)}`);
    continue;
  }
  seen.set(hash, stamp);
  unique.push({ file, stamp, buf });
}

const cellW = 360;
const cellH = 280;
const cols = 4;
const rows = Math.ceil(unique.length / cols);
const sheet = sharp({
  create: {
    width: cols * cellW,
    height: rows * cellH,
    channels: 3,
    background: "#111111",
  },
});

const composites = [];
for (let i = 0; i < unique.length; i++) {
  const item = unique[i];
  const meta = await sharp(item.buf).metadata();
  const thumb = await sharp(item.buf)
    .resize(cellW, cellH - 36, { fit: "cover", position: "attention" })
    .jpeg({ quality: 70 })
    .toBuffer();
  const label = Buffer.from(
    `<svg width="${cellW}" height="36" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#111"/>
      <text x="8" y="24" fill="#f4e7cf" font-size="18" font-family="Arial">${item.stamp}  ${meta.width}x${meta.height}</text>
    </svg>`,
  );
  const col = i % cols;
  const row = Math.floor(i / cols);
  composites.push({ input: thumb, left: col * cellW, top: row * cellH });
  composites.push({ input: label, left: col * cellW, top: row * cellH + (cellH - 36) });
  console.log(`${item.stamp}\t${meta.width}x${meta.height}`);
}

await sheet.composite(composites).jpeg({ quality: 78 }).toFile(path.join(outDir, "sheet.jpg"));
console.log(`WROTE ${unique.length} unique frames`);
