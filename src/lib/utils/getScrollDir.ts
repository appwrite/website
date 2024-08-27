let lastScrollPos = 0;

export function getScrollDir() {
    const scrollPos = window.scrollY;
    const scrollDir = scrollPos > lastScrollPos ? 'down' : 'up';
    lastScrollPos = scrollPos;
    return scrollDir;
}
