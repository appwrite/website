export function clickOutside(node: HTMLElement, callback: (e: MouseEvent) => void) {
    const handleClick = (event: MouseEvent) => {
        if (node && !node.contains(event.target as Node)) {
            callback(event);
        }
    };

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}
