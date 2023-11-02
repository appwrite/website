import { BANNER_KEY } from './constants.js';

export const POST = ({ cookies }) => {
    cookies.set(BANNER_KEY, 'true', {
        path: '/'
    });

    return new Response(null, {
        status: 200
    });
};
