// @ts-expect-error missing types
import SVGFixer from 'oslllo-svg-fixer';
import svgtofont from 'svgtofont';
import { basename, extname, resolve } from 'path';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';

const src = resolve(process.cwd(), 'src/icons/svg');
const optimized = resolve(process.cwd(), 'src/icons/optimized');
const dist = resolve(process.cwd(), 'src/icons/output');
const outputPath = resolve(process.cwd(), 'src/lib/components/ui/icon');

const generateIconSprite = () => {
    const files = readdirSync(optimized);
    const outputDir = resolve(`${outputPath}/sprite`);
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

        // Extract the SVG content (everything between <svg> and </svg>)
        const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);

        if (svgMatch && svgMatch[1]) {
            const innerContent = svgMatch[1].trim();
            const viewBoxMatch = svgContent.match(/viewBox=['"]([^'"]*)['"]/i);
            const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

            // Add symbol with the extracted content
            spriteContent += `  <symbol id="${fileName}" stroke="currentColor" viewBox="${viewBox}">\n    ${innerContent}\n  </symbol>\n`;
        }
    });

    // Close the sprite
    spriteContent += '</svg>';

    // Write the sprite file
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

        writeFileSync(`${outputPath}/types.ts`, typeDefinition);

        console.log(`Type generated successfully at ${outputPath}`);
        console.log(`Generated type: ${typeDefinition}`);
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
    await svgtofont({
        classNamePrefix: 'web-icon',
        src: optimized,
        dist: dist,
        fontName: 'web-icon',
        styleTemplates: resolve(process.cwd(), 'src/icons/templates'),
        css: {
            fontSize: '20px'
        },
        outSVGReact: false,
        svgicons2svgfont: {
            centerHorizontally: true,
            centerVertically: true,
            fixedWidth: true,
            fontHeight: 1000,
            normalize: true,
            descent: 200
        },
        emptyDist: true,
        generateInfoData: true
    })
        .then(() => generateIconSprite())
        .then(() => generateIconType());
};
