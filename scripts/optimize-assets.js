import { readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root_dir = join(__dirname, '../static');

const config = {
    jpeg: { quality: 80 },
    webp: { quality: 80 },
    png: { compressionLevel: 9 },
    gif: { quality: 80 }
};

function* walkSync(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const pathToFile = join(dir, file);
        const isDirectory = statSync(pathToFile).isDirectory();
        if (isDirectory) {
            yield* walkSync(pathToFile);
        } else {
            yield pathToFile;
        }
    }
}

function isImage(file) {
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
  const extension = file.split(".").pop().toLowerCase();

  return imageExtensions.includes(extension);
}

function get_relative_path(file) {
    return relative(root_dir, file)
}

async function main() {
    for (const file of walkSync(join(__dirname, '../static'))) {
        if (!isImage(file)) continue;
        console.log(get_relative_path(file));

        const image = sharp(file);
        const size_before = (await image.toBuffer()).length;
        const meta = await image.metadata();
        const buffer = await image[meta.format](config[meta.format]).toBuffer();
        const size_after = buffer.length;
        if (size_after >= size_before) continue;

        await sharp(buffer).toFile(file);
    }
}

await main();
