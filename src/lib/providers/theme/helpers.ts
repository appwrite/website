import { MEDIA } from './constants';

export const getTheme = (key: string, fallback?: string): string | undefined => {
	if (typeof window === 'undefined') return undefined;
	let theme: string | undefined = undefined;
	try {
		theme = localStorage.getItem(key) as string || undefined;
	} catch (e) {
		// Unsupported
	}
	return theme || fallback as string;
};

export const disableAnimation = () => {
	const css = document.createElement('style');
	css.appendChild(
		document.createTextNode(
			`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
		)
	);
	document.head.appendChild(css);

	return () => {
		// Force restyle
		(() => window.getComputedStyle(document.body))();

		// Wait for next tick before removing
		setTimeout(() => {
			document.head.removeChild(css);
		}, 1);
	};
};

export const getSystemTheme = (e?: MediaQueryList): string => {
	if (!e && typeof window !== 'undefined') {
		e = window.matchMedia(MEDIA);
	}

	const isDark = e?.matches;
	const systemTheme = isDark ? 'dark' : 'light';
	return systemTheme;
};
