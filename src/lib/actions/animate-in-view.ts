import { inView } from 'motion';
import { writable } from 'svelte/store';

export const useAnimateInView = () => {
    let animate = writable<boolean>(false);

    const action = (node: HTMLElement) => {
        inView(node, () => {
            animate.set(true);
        });
    };

    return {
        animate,
        action
    };
};
