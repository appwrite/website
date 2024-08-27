import { readonly, writable } from 'svelte/store';

export function withPrevious<T>(initial: T) {
    const previous = writable(initial);
    const store = writable(initial);

    const update: typeof store.update = (fn) => {
        store.update((current) => {
            previous.set(current);
            return fn(current);
        });
    };

    const set: typeof store.set = (value) => {
        update(() => value);
    };

    return {
        ...store,
        previous: readonly(previous),
        set,
        update
    };
}
