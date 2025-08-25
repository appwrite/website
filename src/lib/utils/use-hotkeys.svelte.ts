import { browser } from '$app/environment';

const IS_MAC = browser && /Mac|iPod|iPhone|iPad/.test(window.navigator.userAgent);

export const useHotkeys = (hotkeys: string[], callback: () => void) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        const pressedKeys = hotkeys.map((key) => key.toLowerCase());

        const isHotkeyPressed = pressedKeys.every((key) => {
            if (key === 'ctrl') return event.ctrlKey;
            if (key === 'meta' || key === 'cmd') return event.metaKey;
            if (key === 'shift') return event.shiftKey;
            if (key === 'alt') return event.altKey;
            return event.key.toLowerCase() === key;
        });

        const requiredModifiers = {
            ctrl: pressedKeys.includes('ctrl'),
            meta: pressedKeys.includes('meta') || pressedKeys.includes('cmd'),
            shift: pressedKeys.includes('shift'),
            alt: pressedKeys.includes('alt')
        };

        const hasExtraModifiers =
            (event.ctrlKey && !requiredModifiers.ctrl) ||
            (event.metaKey && !requiredModifiers.meta) ||
            (event.shiftKey && !requiredModifiers.shift) ||
            (event.altKey && !requiredModifiers.alt);

        if (isHotkeyPressed && !hasExtraModifiers) {
            event.preventDefault();
            callback();
        }
    };

    $effect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
};
