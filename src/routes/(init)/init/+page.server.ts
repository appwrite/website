import { redirect, type Actions } from '@sveltejs/kit';
import { getTicketByUser } from './(utils)/tickets';
import { loginGithub } from './(utils)/auth';

export const prerender = false;

export const load = async ({ locals }) => {
    const ticket = await getTicketByUser(locals.initUser);

    if (!ticket) {
        return {
            claimed: false
        };
    }

    return {
        ticketId: ticket.gh_user,
        claimed: true
    };
};

export const actions = {
    oauth: async (event) => {
        const redirectUrl = await loginGithub(event.url);
        redirect(302, redirectUrl);
    }
} satisfies Actions;
