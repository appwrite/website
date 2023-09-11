import type { Action } from 'svelte/action';
import {
	animate as motionAnimate,
	type ElementOrSelector,
	type MotionKeyframesDefinition,
	type AnimationOptionsWithOverrides
} from 'motion';

export function animation(
	elementOrSelector: ElementOrSelector,
	keyframes: MotionKeyframesDefinition,
	options?: AnimationOptionsWithOverrides
) {
	const play = () => {
		const played = motionAnimate(elementOrSelector, keyframes, options);
		return played;
	};

	const reverse = () => {
		const reversedKeyframes = Object.fromEntries(
			Object.entries(keyframes).map(([key, keyframe]) => {
				return [key, Array.isArray(keyframe) ? [...keyframe].reverse() : keyframe];
			})
		) as typeof keyframes;
		const reversed = motionAnimate(elementOrSelector, reversedKeyframes, options);
		return reversed;
	};

	return {
		play,
		reverse
	};
}

export type Animation = ReturnType<typeof animation>;

type Unsubscriber = () => void;

type PreviousScroll = 'before' | 'after' | undefined;

type ScrollCallbackState = {
	previous?: PreviousScroll;
	unsubscribe?: Unsubscriber;
	executedCount: number;
};

export type ScrollCallback = {
	percentage: number;
	whenAfter?: (args: Omit<ScrollCallbackState, 'unsubscribe'>) => Unsubscriber | void;
};

export function createScrollHandler(callbacks: ScrollCallback[]) {
	const states: ScrollCallbackState[] = callbacks.map(() => ({ executedCount: 0 }));

	const handler = function (scrollPercentage: number) {
		callbacks.forEach((callback, i) => {
			const { percentage, whenAfter } = callback;
			const { previous, unsubscribe, executedCount } = states[i];

			if (scrollPercentage >= percentage && previous !== 'after') {
				// Execute whenAfter
				states[i].unsubscribe = whenAfter?.({ previous, executedCount }) ?? undefined;
				states[i].previous = 'after';
				if (whenAfter) {
					states[i].executedCount++;
				}
			} else if (scrollPercentage < percentage && previous === 'after') {
				unsubscribe?.();
				states[i].unsubscribe = undefined;
				states[i].previous = 'before';
			}
		});
	};

	handler.reset = () => {
		states.forEach((state) => {
			state.unsubscribe?.();
			state.unsubscribe = undefined;
			state.previous = undefined;
			state.executedCount = 0;
		});
	};

	return handler;
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
