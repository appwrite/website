import { writable } from 'svelte/store';
import { tryCatch } from './try-catch';

export const copyToClipboard = async (value: string) => {
    const { data } = await tryCatch(navigator.clipboard.writeText(value));

    return data;
};

export const createCopy = (value: string) => {
    const copied = writable(false);

    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    const handleCopy = async () => {
        console.log('copying', value);
        if (timeout) clearTimeout(timeout);
        copied.set(true);
        copyToClipboard(value);
        timeout = setTimeout(() => copied.set(false), 1000);
    };

    return {
        copied,
        copy: handleCopy
    };
};

export const handleCopy = (value: string, duration: number = 1000) => {
    const copied = writable<boolean>(false);
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    const copy = () => {
        if (timeout) clearTimeout(timeout);
        copied.set(true);
        copyToClipboard(value);
        timeout = setTimeout(() => copied.set(false), duration);
    };

    return {
        copied,
        copy
    };
};

// backward compatibility
export { copyToClipboard as copy };
