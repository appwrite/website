import { writable } from 'svelte/store';

type Adapter = {
    get: (key: string) => unknown;
    set: <V>(key: string, value: V) => void;
};

const localStorageAdapter: Adapter = {
    get: (key: string) => {
        if (typeof window === 'undefined') return undefined;

        const value = localStorage.getItem(key);

        if (value === null) {
            return undefined;
        }
        return JSON.parse(value);
    },
    set: (key, value) => {
        if (typeof window === 'undefined') return;

        localStorage.setItem(key, JSON.stringify(value));
    }
};

type Options<Value> = {
    defaultValue?: Value;
    adapter?: Adapter;
    validate: (v: unknown) => v is Value;
};

export const persisted = <Value>(
    key: string,
    { defaultValue, adapter = localStorageAdapter, validate }: Options<Value>
) => {
    const localValue = adapter.get(key);
    let initialValue: Value | undefined = defaultValue;

    if (validate(localValue)) {
        initialValue = localValue;
    }

    const store = writable<Value | undefined>(initialValue);

    const update: typeof store.update = (fn) => {
        store.update((v) => {
            const newValue = fn(v);
            if (!validate(newValue)) {
                throw new Error(`Invalid value for ${key}`);
            }
            adapter.set(key, newValue);
            return newValue;
        });
    };

    const set: typeof store.set = (v) => {
        update(() => v);
    };

    return {
        ...store,
        update,
        set
    };
};
