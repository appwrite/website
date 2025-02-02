import { OAuthProvider, type Models } from 'appwrite';

import { getAppwriteUser, type AppwriteUser } from '$lib/utils/console';
import { invalidate } from '$app/navigation';
import { appwriteInit } from './(utils)/appwrite';

export const isLoggedIn = async () => {
    const user = await getInitUser();

    return !!user.github;
};

export interface GithubUser {
    login: string;
    name: string;
    email: string;
}

export const getGithubUser = async () => {
    try {
        const identitiesList = await appwriteInit.account.listIdentities();
        if (!identitiesList.total) return null;
        const identity = identitiesList.identities[0];
        const { providerAccessToken, provider } = identity;
        if (provider !== 'github') return null;

        const res = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${providerAccessToken}`
            }
        })
            .then((res) => {
                return res.json() as Promise<GithubUser>;
            })
            .then((n) => ({
                login: n.login,
                name: n.name,
                email: n.email
            }));

        if (!res.login) {
            await appwriteInit.account.deleteSession('current');
            return null;
        }

        return res;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export type User = {
    github: GithubUser | null;
    appwrite: AppwriteUser | null;
};

export const getInitUser = async () => {
    const [github, appwrite] = await Promise.all([getGithubUser(), getAppwriteUser()]);

    return { github, appwrite };
};

export const loginGithub = async () => {
    await appwriteInit.account.createOAuth2Token(
        OAuthProvider.Github,
        `${window.location.origin}/init/tickets/customize?success=1`,
        `${window.location.origin}/init/tickets/customize?error=1`,
        ['read:user']
    );
};

export type TicketData = Pick<Models.Document, '$id'> & {
    name: string;
    tribe?: string | null;
    title?: string;
    gh_user?: string;
    aw_email?: string;
    id: number;
    show_contributions?: boolean;
    is_pro?: boolean;
    contributions?: number[];
};

export type TicketDoc = Omit<TicketData, 'contributions'>;

export const TICKET_DEP = 'ticket';
export const invalidateTicket = () => {
    invalidate(TICKET_DEP);
};

export const BASE_URL = '/init';
