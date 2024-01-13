import { existsSync } from 'fs';
import { globSync } from 'glob';
import path from 'path';
import sharp from 'sharp';

console.log('Transforming images...');

const inputFormats = ['png', 'jpg', 'svg'];
const outputFormats = ['png', 'jpg'];
const files = globSync(`./static/assets/**/*.{${inputFormats.join(',')}}`);

console.log('Found files:', files);

files.forEach((file) => {
    const fileName = path.basename(file, path.extname(file));
    const fileDir = path.dirname(file);

    console.log('Transforming file:', file);

    outputFormats.forEach((format) => {
        const outputFile = path.join(fileDir, `${fileName}.${format}`);

        if (!existsSync(outputFile)) {
            sharp(file)
                .toFormat(format)
                .toFile(outputFile, (err) => {
                    if (err) {
                        console.error(`Error transforming file ${file} to ${format}:`, err);
                    } else {
                        console.log(`Transformed file ${file} to ${format}`);
                    }
                });
        } else {
            console.log(`File ${outputFile} already exists. Skipping transformation.`);
        }
    });
});
