export const highlight = (node: HTMLElement, text: string[]) => {
    text.forEach((word) => {
        const regex = new RegExp(`(${word})`, 'gi');
        node.innerHTML = node.innerHTML.replace(regex, '<mark>$1</mark>');
    });
};
