import { redirect } from '@sveltejs/kit';

import { getTicketByUser } from '../../(utils)/tickets';
import { getTicketContributions } from '../../(utils)/contributions';
import type { Actions } from './$types';
import { APPWRITE_COL_INIT_ID, APPWRITE_DB_INIT_ID } from '$env/static/private';
import { Query } from 'node-appwrite';
import { createInitServerClient } from '../../(utils)/appwrite';

export const load = async ({ locals }) => {
    const ticket = await getTicketByUser(locals.initUser);
    const isCurrentUsersTicket = ticket?.gh_user === locals.initUser.github?.login;

    if (!locals.initUser.github || !isCurrentUsersTicket) {
        redirect(307, '/init');
    }

    return {
        ticket,
        streamed: {
            contributions: getTicketContributions(ticket!.$id)
        }
    };
};

export const actions = {
    default: async ({ request, locals }) => {
        const { databases } = createInitServerClient();
        const data = await request.formData();

        const documentsList = await databases.listDocuments(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            [Query.equal('gh_user', locals.initUser.github!.login)]
        );

        if (!documentsList.total) return;

        const document = documentsList.documents[0];

        await databases.updateDocument(APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID, document.$id, {
            name: data.get('name'),
            title: data.get('title'),
            sticker: Number(data.get('sticker'))
        });
    }
} satisfies Actions;
