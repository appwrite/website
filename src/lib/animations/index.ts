import {
	type ElementOrSelector,
	type MotionKeyframesDefinition,
	type AnimationOptionsWithOverrides,
	type AnimationControls,
	animate as motionAnimate
} from 'motion';
import type { Action } from 'svelte/action';

export type AnimateReturn = AnimationControls & {
	elementOrSelector: ElementOrSelector;
};

export function animate(
	elementOrSelector: ElementOrSelector,
	keyframes: MotionKeyframesDefinition,
	options?: AnimationOptionsWithOverrides
): AnimateReturn {
	const returned = motionAnimate(elementOrSelector, keyframes, options);

	return {
		...returned,
		cancel() {
			returned.cancel();
			if (Array.isArray(elementOrSelector) || elementOrSelector instanceof NodeList) {
				elementOrSelector.forEach((element) => {
					element.removeAttribute('style');
				});
			} else if (typeof elementOrSelector === 'string') {
				const elementsArray = document.querySelectorAll(elementOrSelector);
				elementsArray.forEach((element) => {
					element.removeAttribute('style');
				});
			} else {
				elementOrSelector.removeAttribute('style');
			}
		},
		elementOrSelector
	};
}

type Unsubscriber = () => void;

export type ScrollCallback = {
	percentage: number;
	whenAfter?: () => Unsubscriber | void;
	whenBefore?: () => Unsubscriber | void;
};

type ScrollCallbackState = {
	previous: 'before' | 'after';
	unsubscribe?: Unsubscriber;
};

export function createScrollHandler(callbacks: ScrollCallback[]) {
	const states = callbacks.map(() => ({ previous: 'after' } as ScrollCallbackState));

	return function (scrollPercentage: number) {
		callbacks.forEach((callback, i) => {
			const { percentage, whenAfter, whenBefore } = callback;
			const { previous, unsubscribe } = states[i];

			if (scrollPercentage >= percentage && previous === 'before') {
				unsubscribe?.();
				states[i].unsubscribe = whenAfter?.() ?? undefined;
				states[i].previous = 'after';
				console.log('after', states[i]);
			} else if (scrollPercentage < percentage && previous === 'after') {
				unsubscribe?.();
				states[i].unsubscribe = whenBefore?.() ?? undefined;
				states[i].previous = 'before';
			}
		});
	};
}

type ScrollDetail = {
	scrollPercentage: number;
	scrollY: number;
	scrollHeight: number;
	top: number;
};

export const scroll: Action<
	HTMLElement,
	undefined,
	{ 'on:aw-scroll': (e: CustomEvent<ScrollDetail>) => void }
> = (node) => {
	const handleScroll = () => {
		const { top, height } = node.getBoundingClientRect();
		const { innerHeight, scrollY } = window;

		const scrollHeight = height - innerHeight;
		const scrollPercentage = (-1 * top) / scrollHeight;

		node.dispatchEvent(
			new CustomEvent<ScrollDetail>('aw-scroll', {
				detail: {
					scrollPercentage,
					scrollY,
					scrollHeight,
					top
				}
			})
		);
	};

	window.addEventListener('scroll', handleScroll);

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
		}
	};
};
