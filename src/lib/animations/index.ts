export function write(text: string, cb: (v: string) => void, duration = 500) {
    if (text.length === 0) {
        cb('');
        return Promise.resolve();
    }
    const step = duration / text.length;
    let i = 0;
    return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
            cb(text.slice(0, ++i));
            if (i === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, step);
    });
}

export function unwrite(text: string, cb: (v: string) => void, duration = 500) {
    if (text.length === 0) {
        cb('');
        return Promise.resolve();
    }
    const step = duration / text.length;
    let i = text.length;
    return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
            cb(text.slice(0, --i));
            if (i === 0) {
                clearInterval(interval);
                resolve();
            }
        }, step);
    });
}

export function sleep(duration: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
