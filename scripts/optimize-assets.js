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

function* walk_directory(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const pathToFile = join(dir, file);
        const isDirectory = statSync(pathToFile).isDirectory();
        if (isDirectory) {
            yield* walk_directory(pathToFile);
        } else {
            yield pathToFile;
        }
    }
}

function is_image(file) {
  const image_extensions = ["jpg", "jpeg", "png", "gif", "webp"];
  const extension = file.split(".").pop().toLowerCase();

  return image_extensions.includes(extension);
}

function get_relative_path(file) {
    return relative(root_dir, file)
}

async function main() {
    for (const file of walk_directory(join(__dirname, '../static'))) {
        if (!is_image(file)) continue;
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
