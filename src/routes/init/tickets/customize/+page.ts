import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { BASE_URL } from '$routes/playground/tickets/constants.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        redirect(307, `${BASE_URL}/tickets`);
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
