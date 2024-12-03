import { writable } from 'svelte/store';

async function securedCopy(value: string) {
    try {
        await navigator.clipboard.writeText(value);
    } catch {
        return false;
    }

    return true;
}

function unsecuredCopy(value: string) {
    const textArea = document.createElement('textarea');
    textArea.value = value;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    let success = true;
    try {
        document.execCommand('copy');
    } catch {
        success = false;
    } finally {
        document.body.removeChild(textArea);
    }

    return success;
}

export async function copy(value: string) {
    // securedCopy works only in HTTPS environment.
    // unsecuredCopy works in HTTP and only runs if securedCopy fails.
    const success = (await securedCopy(value)) || unsecuredCopy(value);

    return success;
}

export function createCopy(value: string) {
    const copied = writable(false);

    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
    function handleCopy() {
        if (timeout) clearTimeout(timeout);
        copied.set(true);
        copy(value);
        timeout = setTimeout(() => copied.set(false), 1000);
    }

    return {
        copied,
        copy: handleCopy
    };
}
