import svgtofont from 'svgtofont';
import SVGFixer from 'oslllo-svg-fixer';
import { resolve } from 'path';

const src = resolve(process.cwd(), 'svg');

export const generateIcons = async () => {
	await svgtofont({
		classNamePrefix: 'aw-',
		src: src,
		dist: resolve(process.cwd(), 'static/icon-font'),
		fontName: 'icon',
		styleTemplates: resolve(process.cwd(), 'src/icons/templates'),
		css: {
			fontSize: '16px'
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
		generateInfoData: true,
		svgoOptions: {
			full: false
		}
	});
};

export const optimizeSVG = async () => {
	const fixer = new SVGFixer(src, src, {
		showProgressBar: true
	});

	await fixer.fix();
};
