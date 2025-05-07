import { redirect, type Action, type Actions } from '@sveltejs/kit';
import { getTicketByUser } from './(utils)/tickets';
import { OAuthProvider } from 'appwrite';

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
    oauth: async ({ locals }) => {
        const redirectUrl = await locals.initSession.createOAuth2Token(
            OAuthProvider.Github,
            `${window.location.origin}/init/tickets?success=1`,
            `${window.location.origin}/init/tickets?error=1`,
            ['read:user']
        );

        redirect(302, redirectUrl);
    }
} satisfies Actions;
