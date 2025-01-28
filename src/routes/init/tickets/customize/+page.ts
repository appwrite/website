import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$lib/utils/init';
import { BASE_URL } from '$routes/(init)/playground/tickets/constants.js';
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
