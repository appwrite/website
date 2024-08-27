import { isVisible } from '$lib/utils/isVisible';
import type { Action } from 'svelte/action';

type Args =
    | {
          top?: number;
          bottom?: number;
          left?: number;
          right?: number;
      }
    | undefined;

export const visible: Action<
    HTMLElement,
    Args,
    { 'on:visible': (e: CustomEvent<boolean>) => void }
> = (node, args) => {
    let visible = false;

    const createVisibilityHandler = (newArgs: Args) => {
        const argsWithDefaults = {
            top: 0,
            bottom: window.innerHeight,
            left: 0,
            right: window.innerWidth,
            ...newArgs
        };
        return () => {
            visible = isVisible(node, argsWithDefaults);
            node.dispatchEvent(new CustomEvent('visible', { detail: visible }));
        };
    };

    let handleVisibility = createVisibilityHandler(args);
    handleVisibility();

    function destroy() {
        window.removeEventListener('scroll', handleVisibility);
        window.removeEventListener('resize', handleVisibility);
    }

    function update(args: Args) {
        destroy();
        handleVisibility = createVisibilityHandler(args);
        window.addEventListener('scroll', handleVisibility);
        window.addEventListener('resize', handleVisibility);
    }

    update(args);

    return {
        update,
        destroy() {
            window.removeEventListener('scroll', handleVisibility);
            window.removeEventListener('resize', handleVisibility);
        }
    };
};
