import { writable } from 'svelte/store';
import { browser } from '$app/environment';

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

export const LASTSTATEDEVLANGUAGE_KEY = 'devLanguage';
type LastStateDev= {
    client:string;
    others:string;
}

export const getParsedState = (): LastStateDev => {
    let data:LastStateDev = {client : "", others: ""};
    let storedValue =  browser ? localStorage.getItem(LASTSTATEDEVLANGUAGE_KEY)?? 
     JSON.stringify(data): JSON.stringify(data);

    data = JSON.parse(storedValue === null? JSON.stringify(data): storedValue);
    return data;
}

export const setLastStateDevLanguage = (value:string) => {
    if(!value) return ;
    let data = getParsedState();

    if(value?.includes("client-")){
        data.client = value;
    }
    else {
        data.others = value;
    }
    if(browser){
        localStorage.setItem(LASTSTATEDEVLANGUAGE_KEY, JSON.stringify(data));
    }
}

export const getLastStateDevLanguage = (): LastStateDev => {
    const state = getParsedState();
    return state;
}
