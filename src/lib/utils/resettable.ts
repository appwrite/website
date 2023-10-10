const braindeadUUID = () => {
    return (
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
};

const deepClone = (v: any) => {
    return JSON.parse(JSON.stringify(v));
};

export const createResettable = <Value>(defaultValue: Value) => {
    type GlobalState = Record<string, Value>;
    type SubscribeCallback = (v: Value) => void;
    let subscribeCallbacks: SubscribeCallback[] = [];

    const d = deepClone(defaultValue);

    let currUuid = braindeadUUID();
    const state: GlobalState = {
        [currUuid]: deepClone(d)
    };

    const subscribe = (cb: SubscribeCallback) => {
        subscribeCallbacks.push(cb);
        cb(state[currUuid]);

        return () => {
            subscribeCallbacks = subscribeCallbacks.filter((c) => c !== cb);
        };
    };

    const reset = () => {
        currUuid = braindeadUUID();
        const fixedId = currUuid;
        const set = (v: Value) => {
            state[fixedId] = v;
            subscribeCallbacks.forEach((cb) => cb(state[currUuid]));
        };

        const update = (fn: (v: Value) => Value) => {
            set(fn(state[fixedId]));
        };

        set(deepClone(d));
        return { set, update };
    };

    return {
        subscribe,
        reset,
        set: (v: Value) => {
            state[currUuid] = v;
            subscribeCallbacks.forEach((cb) => cb(state[currUuid]));
        },
        update: (fn: (v: Value) => Value) => {
            state[currUuid] = fn(state[currUuid]);
            subscribeCallbacks.forEach((cb) => cb(state[currUuid]));
        }
    };
};
