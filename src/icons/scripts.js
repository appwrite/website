import { readdirSync, writeFileSync } from 'fs';
// @ts-expect-error no types
import SVGFixer from 'oslllo-svg-fixer';
import { basename, extname, resolve } from 'path';
import svgtofont from 'svgtofont';

const src = resolve(process.cwd(), 'src/icons/svg');
const optimized = resolve(process.cwd(), 'src/icons/optimized');
const dist = resolve(process.cwd(), 'src/icons/output');
const outputPath = resolve(process.cwd(), 'src/lib/components/icon/types.ts');

const generateIconType = () => {
    try {
        const files = readdirSync(optimized);

        const fileNames = files
            .filter((file) => extname(file) !== '')
            .map((file) => basename(file, extname(file)));

        const typeDefinition = `export type Icon = ${fileNames.map((name) => `"${name}"`).join(' | ')};`;

        writeFileSync(outputPath, typeDefinition);

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

    await fixer.fix().then(() => generateIconType());
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
    }).then(() => generateIconType());
};
