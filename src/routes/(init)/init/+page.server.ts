import { redirect, type Action, type Actions } from '@sveltejs/kit';
import { getTicketByUser } from './(utils)/tickets';
import { OAuthProvider } from 'appwrite';
import { Account, Client } from 'node-appwrite';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';

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
        const client = new Client();
        client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID);

        const githubInit = {
            account: new Account(client)
        };

        const redirectUrl = await githubInit.account.createOAuth2Token(
            OAuthProvider.Github,
            `${event.url.origin}/init/tickets?success=1`,
            `${event.url.origin}/init/tickets?error=1`,
            ['read:user']
        );

        redirect(302, redirectUrl);
    }
} satisfies Actions;
