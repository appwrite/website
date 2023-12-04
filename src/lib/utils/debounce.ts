export function createDebounce(delay = 500) {
    let timeout: NodeJS.Timeout;
    return (callback: () => void) => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    };
}
