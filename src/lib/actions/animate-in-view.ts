import { inView, type InViewOptions } from 'motion';
import { writable } from 'svelte/store';

export const useAnimateInView = ({ options }: { options?: InViewOptions }) => {
    let animate = writable<boolean>(false);

    const action = (node: HTMLElement) => {
        inView(
            node,
            () => {
                animate.set(true);
            },
            { ...options }
        );
    };

    return {
        animate,
        action
    };
};
