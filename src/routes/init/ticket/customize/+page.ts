import { getTicketByUser, getTicketContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        throw redirect(307, '/init/ticket');
    }

    console.time('user');
    const user = await getUser();
    console.timeEnd('user');
    console.time('ticket');
    const ticket = await getTicketByUser(user);
    console.timeEnd('ticket');

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id, fetch)
        }
    };
};
