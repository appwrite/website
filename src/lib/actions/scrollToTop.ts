export const scrollToTop = (node: HTMLElement) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    node.addEventListener('click', handleClick);

    return {
        destroy() {
            node.removeEventListener('click', handleClick);
        }
    };
};
