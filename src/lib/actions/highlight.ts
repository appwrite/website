export const highlight = (node: HTMLElement, text: string[]) => {
    text.forEach((word) => {
        const regex = new RegExp(`(${word})`, 'gi');
        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const span = document.createElement('span');
                span.innerHTML = child.textContent?.replace(regex, '<mark>$1</mark>') || '';
                child.replaceWith(...Array.from(span.childNodes));
            }
        });
    });
};
