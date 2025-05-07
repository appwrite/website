import { type AppwriteUser } from '$lib/utils/console';
import { PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import type { Cookies } from '@sveltejs/kit';
import { createInitServerClient } from './appwrite';

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
