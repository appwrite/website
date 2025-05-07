import { type AppwriteUser } from '$lib/utils/console';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { Client, OAuthProvider, Account } from 'node-appwrite';
import type { RequestEvent } from '../$types';

export const cookieKey = `init_session_${PUBLIC_APPWRITE_PROJECT_INIT_ID}`;

export interface GithubUser {
    login: string;
    name: string;
    email: string;
    avatar_url?: string;
}

export type User = {
    github: GithubUser | null;
    appwrite: AppwriteUser | null;
};

export const loginGithub = async (url: RequestEvent['url']) => {
    const client = new Client();
    client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID);

    const githubInit = {
        account: new Account(client)
    };

    const redirectUrl = await githubInit.account.createOAuth2Token(
        OAuthProvider.Github,
        `${url.origin}/init/tickets?success=1`,
        `${url.origin}/init/tickets?error=1`,
        ['read:user']
    );

    return redirectUrl;
};
