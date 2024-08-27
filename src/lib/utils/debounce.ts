export function createDebounce(delay = 500) {
    let timeout: NodeJS.Timeout;
    return {
        debounce: (callback: () => void) => {
            clearTimeout(timeout);
            timeout = setTimeout(callback, delay);
        },
        reset: () => clearTimeout(timeout),
        immediate: (callback: () => void) => {
            clearTimeout(timeout);
            callback();
        }
    };
}
