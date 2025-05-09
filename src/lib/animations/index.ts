export function write(text: string, cb: (v: string) => void, duration = 500) {
    const step = duration / text.length;
    let i = 0;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            cb(text.slice(0, ++i));
            if (i === text.length) {
                clearInterval(interval);
                resolve(undefined);
            }
        }, step);
    });
}

export function unwrite(text: string, cb: (v: string) => void, duration = 500) {
    const step = duration / text.length;
    let i = text.length;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            cb(text.slice(0, --i));
            if (i === 0) {
                clearInterval(interval);
                resolve(undefined);
            }
        }, step);
    });
}

export function sleep(duration: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
