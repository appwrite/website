import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect(307, '/init/tickets');
    }

    const user = await getUser();
    const ticket = await getTicketByUser(user, fetch);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id, fetch)
        }
    };
};
