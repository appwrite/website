import { redirect } from '@sveltejs/kit';
import { isLoggedIn } from '$routes/(init)/init/utils';
import { BASE_URL } from '$routes/(init)/init/utils';

export const load = async () => {
    const loggedIn = await isLoggedIn();
    console.log('loggedIn', loggedIn);
    if (!loggedIn) redirect(307, BASE_URL);

    redirect(307, `${BASE_URL}/tickets/customize`);
};
