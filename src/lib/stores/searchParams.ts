import { afterNavigate } from '$app/navigation';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

export const createSearchParams = () => {
    const store = writable<URLSearchParams>(new URLSearchParams());

    onMount(() => {
        store.set(new URLSearchParams(window.location.search));
    });

    afterNavigate(() => {
        store.set(new URLSearchParams(window.location.search));
    });

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
        set,
        update
    };
};
