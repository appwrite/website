import { BANNER_KEY } from './constants.js';

const isVercel = process.env.VERCEL === '1';

export const prerender = isVercel;

export const POST = ({ cookies }) => {
    cookies.set(BANNER_KEY, 'true', {
        path: '/'
    });

    return new Response(null, {
        status: 200
    });
};
