import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '../constants.js';

export const load = async ({ fetch }) => {
    const loggedIn = await isLoggedIn();
    console.log({ loggedIn });
    // if (!loggedIn) {
    //     redirect(307, BASE_URL);
    // }

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
