import type { Action } from 'svelte/action';
import type { Writable } from 'svelte/store';

type Args = Writable<DOMRect | null>;

export const rect: Action<HTMLElement, Args> = (node, store) => {
    let observer: ResizeObserver | null = null;
    const update = (store: Args) => {
        observer?.disconnect();

        store.set(node.getBoundingClientRect());

        // Observe resize
        observer = new ResizeObserver(() => {
            store.set(node.getBoundingClientRect());
        });
        observer.observe(node);
    };

    update(store);

    return {
        update,
        destroy() {
            // no-op
        }
    };
};
