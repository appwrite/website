const braindeadUUID = () => {
    return (
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
};

export const createResettable = <Value>(defaultValue: Value) => {
    type SubscribeCallback = (v: Value) => void;
    let subscribeCallbacks: SubscribeCallback[] = [];

    let currUuid = braindeadUUID();
    let state = structuredClone(defaultValue);

    const subscribe = (cb: SubscribeCallback) => {
        subscribeCallbacks.push(cb);
        cb(state);

        return () => {
            subscribeCallbacks = subscribeCallbacks.filter((c) => c !== cb);
        };
    };

    const reset = () => {
        currUuid = braindeadUUID();
        const fixedId = currUuid;
        const set = (v: Value) => {
            if (fixedId !== currUuid) return;
            state = v;
            subscribeCallbacks.forEach((cb) => cb(state));
        };

        const update = (fn: (v: Value) => Value) => {
            set(fn(state));
        };

        set(structuredClone(defaultValue));
        return { set, update };
    };

    return {
        subscribe,
        reset,
        set: (v: Value) => {
            state = v;
            subscribeCallbacks.forEach((cb) => cb(state));
        },
        update: (fn: (v: Value) => Value) => {
            state = fn(state);
            subscribeCallbacks.forEach((cb) => cb(state));
        }
    };
};
