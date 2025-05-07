import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { Client, Account, Databases } from 'node-appwrite';
import type { RequestEvent } from '../$types';
import { cookieKey } from './auth';
import type { Cookies } from '@sveltejs/kit';
import { APPWRITE_API_KEY_INIT } from '$env/static/private';

export const createInitServerClient = () => {
    const client = new Client()
        .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
        .setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID)
        .setKey(APPWRITE_API_KEY_INIT);

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }
    };
};

export const createInitSessionClient = async (cookies: Cookies) => {
    const client = new Client();
    client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID);

    const session = cookies.get(cookieKey);
    if (!session) return;

    client.setSession(session);
    return {
        get account() {
            return new Account(client);
        }
    };
};
