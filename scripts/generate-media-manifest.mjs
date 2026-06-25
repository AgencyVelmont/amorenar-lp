import { readdirSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const mediaDir = join(process.cwd(), "public", "assets", "videos");
const outputPath = join(process.cwd(), "src", "data", "localMediaManifest.ts");
const allowedExtensions = new Set([".mp4", ".webm", ".mov", ".jpg", ".jpeg", ".png", ".webp"]);

const files = readdirSync(mediaDir)
  .filter((fileName) => allowedExtensions.has(extname(fileName).toLowerCase()))
  .sort((first, second) => first.localeCompare(second))
  .map((fileName) => `/assets/videos/${fileName}`);

const entries = files.map((fileName) => `  ${JSON.stringify(fileName)},`).join("\n");
const content = `export const localMediaFiles = [
${entries}
] as const;
`;

writeFileSync(outputPath, content);
