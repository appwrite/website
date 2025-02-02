import { redirect } from '@sveltejs/kit';
import { isLoggedIn } from '$routes/(init)/init/utils';
import { auth } from '../(utils)/auth';

export const load = async ({ url, cookies }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');
    if (secret && userId) {
        const response = await auth(userId, secret, cookies);
        console.log({ response });

        redirect(307, '/init/tickets/customize');
    } else if (await isLoggedIn()) {
        redirect(307, '/init/tickets/customize');
    }
};
