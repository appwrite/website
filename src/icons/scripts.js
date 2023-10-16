// @ts-expect-error missing types
import SVGFixer from 'oslllo-svg-fixer';
import svgtofont from 'svgtofont';
import { resolve } from 'path';

const src = resolve(process.cwd(), 'src/icons/svg');
const optimized = resolve(process.cwd(), 'src/icons/optimized');
const dist = resolve(process.cwd(), 'src/icons/output');

export const optimizeSVG = async () => {
    const fixer = new SVGFixer(src, optimized, {
        showProgressBar: true
    });

    await fixer.fix();
};

export const generateIcons = async () => {
    await svgtofont({
        classNamePrefix: 'aw-icon',
        src: optimized,
        dist: dist,
        fontName: 'aw-icon',
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
    });
};
