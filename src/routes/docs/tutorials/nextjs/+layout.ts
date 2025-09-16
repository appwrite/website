import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
    const tutorials = import.meta.glob('./**/*.markdoc', {
        eager: true
    });
    return {
        tutorials,
        pathname: url.pathname
    };
};
