export function isVisible(
    element: Element,
    visRect: { left: number; right: number; top: number; bottom: number }
) {
    const rect = element.getBoundingClientRect();
    const vertInView = rect.top <= visRect.bottom && rect.bottom >= visRect.top;
    const horInView = rect.left <= visRect.right && rect.right >= visRect.left;

    return vertInView && horInView;
}
