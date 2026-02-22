export function write(
    text: string,
    cb: (v: string) => void,
    duration = 500,
    { signal, startIndex = 0 }: { signal?: AbortSignal; startIndex?: number } = {}
) {
    if (text.length === 0) {
        cb('');
        return Promise.resolve();
    }
    if (startIndex >= text.length) {
        cb(text);
        return Promise.resolve();
    }
    const step = duration / text.length;
    let i = startIndex;

    return new Promise<void>((resolve, reject) => {
        const interval = setInterval(() => {
            if (signal?.aborted) {
                clearInterval(interval);
                return reject(new Error('Aborted'));
            }

            cb(text.slice(0, ++i));
            if (i === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, step);

        signal?.addEventListener(
            'abort',
            () => {
                clearInterval(interval);
                reject(new Error('Aborted'));
            },
            { once: true }
        );
    });
}

export function unwrite(
    text: string,
    cb: (v: string) => void,
    duration = 500,
    { signal, startIndex }: { signal?: AbortSignal; startIndex?: number } = {}
) {
    if (text.length === 0) {
        cb('');
        return Promise.resolve();
    }
    const step = duration / text.length;
    let i = startIndex ?? text.length;
    
    if (i <= 0) {
        cb('');
        return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
        const interval = setInterval(() => {
            if (signal?.aborted) {
                clearInterval(interval);
                return reject(new Error('Aborted'));
            }

            cb(text.slice(0, --i));
            if (i === 0) {
                clearInterval(interval);
                resolve();
            }
        }, step);

        signal?.addEventListener(
            'abort',
            () => {
                clearInterval(interval);
                reject(new Error('Aborted'));
            },
            { once: true }
        );
    });
}

export function sleep(duration: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
