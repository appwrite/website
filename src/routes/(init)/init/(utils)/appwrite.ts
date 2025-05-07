import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { Client, Account } from 'appwrite';
import type { RequestEvent } from '../$types';
import { cookieKey } from './auth';
import type { Cookies } from '@sveltejs/kit';

export const createInitSessionClient = (cookies: Cookies) => {
    const client = new Client();
    client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID);

    const session = cookies.get(cookieKey);
    if (!session) {
        throw new Error('No user session');
    }

    client.setSession(session);

    return {
        account: new Account(client)
    };
};
