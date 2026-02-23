export type WriteAnimation = Promise<void> & { cancel: () => void };

export function write(
    text: string,
    cb: (v: string) => void,
    duration = 500,
    from = 0
): WriteAnimation {
    const remaining = text.length - from;
    if (remaining <= 0) {
        cb(text);
        const p = Promise.resolve() as WriteAnimation;
        p.cancel = () => {};
        return p;
    }
    const step = duration / text.length;
    let i = from;
    let intervalId: ReturnType<typeof setInterval>;
    const promise = new Promise<void>((resolve) => {
        intervalId = setInterval(() => {
            cb(text.slice(0, ++i));
            if (i === text.length) {
                clearInterval(intervalId);
                resolve();
            }
        }, step);
    }) as WriteAnimation;
    promise.cancel = () => {
        clearInterval(intervalId);
    };
    return promise;
}

export function unwrite(text: string, cb: (v: string) => void, duration = 500): WriteAnimation {
    if (text.length === 0) {
        cb('');
        const p = Promise.resolve() as WriteAnimation;
        p.cancel = () => {};
        return p;
    }
    const step = duration / text.length;
    let i = text.length;
    let intervalId: ReturnType<typeof setInterval>;
    const promise = new Promise<void>((resolve) => {
        intervalId = setInterval(() => {
            cb(text.slice(0, --i));
            if (i === 0) {
                clearInterval(intervalId);
                resolve();
            }
        }, step);
    }) as WriteAnimation;
    promise.cancel = () => {
        clearInterval(intervalId);
    };
    return promise;
}

export function sleep(duration: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
