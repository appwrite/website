export const autoHash = (
    node: Element,
    callback: (entries: IntersectionObserverEntry[]) => void
) => {
    const observer = new IntersectionObserver(callback, {
        threshold: 1
    });

    observer.observe(node);

    return { destroy: () => observer.disconnect() };
};
