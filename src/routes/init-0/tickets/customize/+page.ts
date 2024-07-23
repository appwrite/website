import {
    getTicketByUser,
    getTicketContributions,
    getUser,
    isLoggedIn
} from '$routes/init-0/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect(307, '/init-0/tickets');
    }

    const user = await getUser();
    const ticket = await getTicketByUser(user);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id, fetch)
        }
    };
};
