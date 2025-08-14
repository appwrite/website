let isOpen = $state<boolean>(false);

export const menuState = () => {
    $effect(() => {
        window.addEventListener('resize', () => {
            isOpen = false;
        });

        return () => {
            window.removeEventListener('resize', () => {
                isOpen = false;
            });
        };
    });

    return {
        get isOpen() {
            return isOpen;
        }
    };
};
