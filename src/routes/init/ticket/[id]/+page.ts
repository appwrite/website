import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
import { appwriteInit } from '$lib/appwrite/init.js';
import { error } from '@sveltejs/kit';
import type { Ticket } from '../constants.js';

export const ssr = true;

export const load = async ({ params }) => {
    const { id } = params;
    try {
        const ticket = (await appwriteInit.database.getDocument(
            PUBLIC_APPWRITE_DB_INIT_ID,
            PUBLIC_APPWRITE_COL_INIT_ID,
            id
        )) as unknown as Ticket;

        return {
            ticket
        };
    } catch {
        throw error(404, 'Ticket not found');
    }
};
