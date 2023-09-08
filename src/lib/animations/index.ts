import {
	type ElementOrSelector,
	type MotionKeyframesDefinition,
	type AnimationOptionsWithOverrides,
	type AnimationControls,
	animate as motionAnimate
} from 'motion';

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
