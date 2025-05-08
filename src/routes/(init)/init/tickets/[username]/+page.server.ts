import { getTicketDocByUsername } from '../../(utils)/tickets';
import { error, redirect, type Actions } from '@sveltejs/kit';
import { getTicketContributions } from '../../(utils)/contributions';
import { OAuthProvider } from 'appwrite';
import { Account, Client } from 'node-appwrite';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { loginGithub } from '../../(utils)/auth';

export const ssr = true;

export const load = async ({ params, locals }) => {
    try {
        const isCurrentUsersTicket = locals.initUser.github?.login === params.username;
        const ticket = await getTicketDocByUsername(params.username);

        return {
            ticket,
            isCurrentUsersTicket,
            streamed: {
                contributions: getTicketContributions(ticket.$id)
            }
        };
    } catch (e) {
        console.error(e);
        error(404, 'Ticket not found');
    }
};

export const actions = {
    oauth: async (event) => {
        const redirectUrl = await loginGithub(event.url);
        redirect(302, redirectUrl);
    }
} satisfies Actions;
