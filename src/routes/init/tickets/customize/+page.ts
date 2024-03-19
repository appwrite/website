import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        throw redirect(307, '/init/tickets');
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
