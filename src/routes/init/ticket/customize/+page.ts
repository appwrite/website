import { getTicketByUser, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        throw redirect(307, '/init/ticket');
    }

    const user = await getUser();
    const ticket = await getTicketByUser(user);

    return {
        ticket
    };
};
