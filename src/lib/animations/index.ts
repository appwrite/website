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
			// state.unsubscribe?.();
			state.unsubscribe = undefined;
			state.previous = undefined;
			state.executedCount = 0;
		});
	};

	return handler;
}

export type ScrollInfo = {
	percentage: number;
	traversed: number;
	remaning: number;
};

export const scroll: Action<
	HTMLElement,
	undefined,
	{
		'on:aw-scroll': (e: CustomEvent<ScrollInfo>) => void;
		'on:aw-resize': (e: CustomEvent<ScrollInfo>) => void;
	}
> = (node) => {
	function getScrollInfo(): ScrollInfo {
		const { top, height } = node.getBoundingClientRect();
		const { innerHeight } = window;

		const scrollHeight = height - innerHeight;
		const scrollPercentage = (-1 * top) / scrollHeight;

		const traversed = scrollPercentage * scrollHeight;
		const remaning = scrollHeight - traversed;

		return {
			percentage: scrollPercentage,
			traversed,
			remaning
		};
	}

	const handleScroll = () => {
		node.dispatchEvent(
			new CustomEvent<ScrollInfo>('aw-scroll', {
				detail: getScrollInfo()
			})
		);
	};

	const handleResize = () => {
		node.dispatchEvent(
			new CustomEvent<ScrollInfo>('aw-resize', {
				detail: getScrollInfo()
			})
		);
	};

	window.addEventListener('scroll', handleScroll);
	window.addEventListener('resize', handleResize);

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		}
	};
};
