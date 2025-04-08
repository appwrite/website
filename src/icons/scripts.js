import { basename, extname, resolve } from 'path';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
// @ts-ignore
import SVGFixer from 'oslllo-svg-fixer';

const src = resolve(process.cwd(), 'src/icons/svg');
const optimized = resolve(process.cwd(), 'src/icons/optimized');
const output = resolve(process.cwd(), 'src/lib/components/ui/icon');

const generateIconsSprite = () => {
    const files = readdirSync(optimized);
    const outputDir = resolve(`${output}/sprite`);
    const spriteOutputPath = resolve(outputDir, 'sprite.svelte');

    if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
    }

    let spriteContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">\n`;

    files.forEach((file) => {
        if (!file.endsWith('.svg')) return;

        const filePath = resolve(optimized, file);
        const fileName = basename(file, '.svg');
        const svgContent = readFileSync(filePath, 'utf8');

        const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);

        if (svgMatch && svgMatch[1]) {
            const innerContent = svgMatch[1].trim().replace(/fill="[^"]*"/g, 'fill="currentColor"');
            const viewBoxMatch = svgContent.match(/viewBox=['"]([^'"]*)['"]/i);
            const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

            spriteContent += `  <symbol id="${fileName}" viewBox="${viewBox}">\n    ${innerContent}\n  </symbol>\n`;
        }
    });

    spriteContent += '</svg>';

    writeFileSync(spriteOutputPath, spriteContent);
    console.log(`Created SVG sprite at ${spriteOutputPath}`);

    return spriteOutputPath;
};

const generateIconType = () => {
    try {
        const files = readdirSync(optimized);

        const fileNames = files
            .filter((file) => extname(file) !== '')
            .map((file) => basename(file, extname(file)));

        const typeDefinition = `export type IconType = ${fileNames.map((name) => `"${name}"`).join(' | ')};`;

        writeFileSync(`${output}/types.ts`, typeDefinition);

        console.log(`Type generated successfully at ${output}`);
    } catch (error) {
        console.error('Error generating filename type:', error);
    }
};

export const optimizeSVG = async () => {
    const fixer = new SVGFixer(src, optimized, {
        showProgressBar: true
    });

    await fixer.fix();
};

export const generateIcons = async () => {
    try {
        await optimizeSVG().then(() => {
            generateIconsSprite();
            generateIconType();
        });
        console.log('Icons generated successfully!');
    } catch (error) {
        console.error('Error generating icons:', error);
    }
};
