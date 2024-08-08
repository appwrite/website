import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
    return {
        tutorials: {
            raw: loadRaw(),
            default: loadDefault(),
        },
        pathname: url.pathname
    };
};

function loadDefault() {
    return import.meta.glob('./**/*.markdoc', {
        eager: true
    });
}

function loadRaw() {
    return import.meta.glob('./**/*.markdoc', {
        eager: true,
        query: 'raw',
        import: 'default'
    });
}