import type { Action } from 'svelte/action';
import {
    animate as motionAnimate,
    type ElementOrSelector,
    type MotionKeyframesDefinition,
    type AnimationOptionsWithOverrides,
    animate
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

export const safeAnimate = (
    elementOrSelector: ElementOrSelector,
    keyframes: MotionKeyframesDefinition,
    options?: AnimationOptionsWithOverrides
) => {
    try {
        return animate(elementOrSelector, keyframes, options);
    } catch {
        // do nothing lol
    }
};

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
    const states: ScrollCallbackState[] = callbacks.map(() => ({
        executedCount: 0
    }));

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
        'on:web-scroll': (e: CustomEvent<ScrollInfo>) => void;
        'on:web-resize': (e: CustomEvent<ScrollInfo>) => void;
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

    const createHandler = (eventName: 'web-scroll' | 'web-resize') => {
        return () => {
            node.dispatchEvent(
                new CustomEvent<ScrollInfo>(eventName, {
                    detail: getScrollInfo()
                })
            );
        };
    };

    const handleScroll = createHandler('web-scroll');
    const handleResize = createHandler('web-resize');

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return {
        destroy() {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    };
};

type TimelineEvent = {
    at: number;
    callback: () => void;
};

export function createTimeline(events: TimelineEvent[]) {
    let timeoutIds: NodeJS.Timeout[] = [];

    const play = () => {
        events.forEach((event) => {
            const timeoutId = setTimeout(event.callback, event.at);
            timeoutIds.push(timeoutId);
        });
    };

    const cancel = () => {
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
    };

    return { play, cancel };
}

type ProgressEvent = {
    percentage: number;
    callback: () => void;
};

/**
 * Given a list of events, create a sequence of events that will be executed
 * when a given percentage is greater than the event percentage, and before
 * the next event percentage.
 * e.g. const handler = createProgressSequence(events) // where there's an event for each 0.1 percentage
 * handler(0.45) // will execute the event with percentage 0.4.
 */
export function createProgressSequence(events: ProgressEvent[]) {
    // Sort from highest to lowest percentage
    const sortedEvents = [...events].sort((a, b) => b.percentage - a.percentage);

    let lastEventIdx = -1;

    const handler = (percentage: number) => {
        const idx = sortedEvents.findIndex((event) => event.percentage <= percentage);
        if (idx === lastEventIdx) {
            return;
        }
        const event = sortedEvents[idx];
        event?.callback();
        lastEventIdx = idx;
    };

    handler.resetLastEventIdx = () => {
        lastEventIdx = -1;
    };

    return handler;
}

export type ProgressSequence = ReturnType<typeof createProgressSequence>;

export function write(text: string, cb: (v: string) => void, duration = 500) {
    const step = duration / text.length;
    let i = 0;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            cb(text.slice(0, ++i));
            if (i === text.length) {
                clearInterval(interval);
                resolve(undefined);
            }
        }, step);
    });
}

export function unwrite(text: string, cb: (v: string) => void, duration = 500) {
    const step = duration / text.length;
    let i = text.length;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            cb(text.slice(0, --i));
            if (i === 0) {
                clearInterval(interval);
                resolve(undefined);
            }
        }, step);
    });
}

export function sleep(duration: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export function getInitials(name: string) {
    return name
        .split(' ')
        .map((word) => word?.[0]?.toUpperCase() ?? '')
        .join('')
        .slice(0, 2);
}
