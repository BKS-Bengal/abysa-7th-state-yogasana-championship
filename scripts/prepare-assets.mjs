import fs from "fs";
import path from "path";
import sharp from "sharp";

const srcDir = "C:\\Users\\asits\\.cursor\\projects\\c\\assets";
const videoDir = "C:\\Users\\asits\\Downloads\\Telegram Desktop";
const root = path.resolve("public/assets");

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".jpg"));

function findStamp(stamp) {
  const hit = files.find((f) => f.includes(stamp));
  if (!hit) throw new Error(`Missing ${stamp}`);
  return path.join(srcDir, hit);
}

const stills = [
  ["11-04-14", "hero/prakriti-jagaran.webp", 1920],
  ["11-04-24", "logo/yogasana-bharat.webp", 640],
  ["11-06-05", "gallery/athletes-hall.webp", 1600],
  ["11-05-56", "gallery/hall-assembly.webp", 1600],
  ["11-05-53", "gallery/championship-dais.webp", 1600],
  ["11-04-48", "gallery/address.webp", 1600],
  ["11-05-39", "gallery/dais-speaker.webp", 1600],
  ["11-04-54", "gallery/dance-pair.webp", 1600],
  ["11-04-50", "gallery/dance-record.webp", 1600],
  ["11-04-44", "gallery/dance-turn.webp", 1600],
  ["11-04-57", "gallery/remembrance.webp", 1600],
  ["11-04-38", "gallery/ceremony-table.webp", 1600],
  ["11-05-04", "gallery/offering.webp", 1600],
  ["11-04-27", "gallery/young-athletes.webp", 1600],
  ["11-04-41", "gallery/hall-wide.webp", 1600],
  ["11-06-02", "gallery/from-the-floor.webp", 1600],
  ["11-05-59", "gallery/crossing-dais.webp", 1600],
  ["11-03-43", "gallery/field-circle.webp", 1600],
  ["11-03-39", "gallery/courtyard.webp", 1600],
  ["11-03-19", "gallery/practice-ground.webp", 1600],
  ["11-03-22", "gallery/practice-warrior.webp", 1600],
  ["11-03-25", "gallery/practice-squat.webp", 1600],
  ["11-03-27", "gallery/practice-open.webp", 1600],
  ["11-03-32", "gallery/practice-rise.webp", 1600],
  ["11-03-36", "gallery/practice-lead.webp", 1600],
];

for (const [stamp, rel, width] of stills) {
  const dest = path.join(root, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(findStamp(stamp))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  console.log(rel);
}

const films = [
  ["video_2026-10-02_11-04-31.mp4", "video/film-corridor.mp4", "video/film-corridor.webp"],
  ["video_2026-10-02_11-05-00.mp4", "video/film-ceremony.mp4", "video/film-ceremony.webp"],
  ["video_2026-10-02_11-05-41.mp4", "video/film-dais.mp4", "video/film-dais.webp"],
  ["video_2026-10-02_11-05-47.mp4", "video/film-athletes.mp4", "video/film-athletes.webp"],
];

for (const [file, rel, poster] of films) {
  const dest = path.join(root, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.join(videoDir, file), dest);
  const posterSrc = path.resolve("scripts/review", file.replace(".mp4", ".jpg"));
  await sharp(posterSrc)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(root, poster));
  console.log(rel);
}
