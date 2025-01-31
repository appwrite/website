import {
    getTicketByUser,
    getTicketContributions,
    getUser,
    isLoggedIn
} from '$routes/(init)/init/utils';
import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$routes/(init)/init/utils';

export const load = async ({ fetch }) => {
    const loggedIn = await isLoggedIn();
    console.log('load,', { loggedIn });

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
