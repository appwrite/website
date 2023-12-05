import { page } from '$app/stores';
import { writable, type Readable } from 'svelte/store';

const safeSubscribe = <T>(store: Readable<T>, cb: (value: T) => void) => {
    try {
        return store.subscribe(cb);
    } catch (e) {
        return () => {
            // void
        };
    }
};

const createSearchParams = () => {
    const store = writable<URLSearchParams>(new URLSearchParams());

    const unsubPage = safeSubscribe(page, (value) => {
        store.set(value.url.searchParams);
    });

    function subscribe(...args: Parameters<typeof store.subscribe>) {
        const unsubStore = store.subscribe(...args);

        return () => {
            unsubStore();
            unsubPage();
        };
    }

    const update = (callback: (value: URLSearchParams) => URLSearchParams) => {
        store.update((prev) => {
            const newV = callback(prev);
            window.history.pushState(null, '', `?${newV.toString()}`);
            return newV;
        });
    };

    const set = (value: URLSearchParams) => {
        update(() => value);
    };

    return {
        ...store,
        subscribe,
        set,
        update
    };
};

export const searchParams = createSearchParams();
