import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$lib/utils/init';
import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$lib/utils/init';

export const load = async ({ fetch }) => {
    const loggedIn = await isLoggedIn();
    console.log('loggedIn', loggedIn);
    if (!loggedIn) {
        redirect(307, BASE_URL);
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
