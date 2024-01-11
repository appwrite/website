import { getGithubUser, getTicketByUser, isLoggedInGithub } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const loggedIn = await isLoggedInGithub();
    if (!loggedIn) {
        throw redirect(307, '/init/ticket');
    }

    const user = await getGithubUser();
    const ticket = await getTicketByUser(user);

    return {
        ticket
    };
};
