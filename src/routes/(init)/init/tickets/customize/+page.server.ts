import { redirect } from '@sveltejs/kit';

import { getTicketDocByUser } from '../../(utils)/tickets';
import { getTicketContributions } from '../../(utils)/contributions.server';
import { cookieKey, getInitUser, type GithubUser } from '../../(utils)/auth';
import type { Actions } from './$types';
import { zfd } from 'zod-form-data';
import { appwriteInit } from '../../(utils)/appwrite';
import { appwriteInitServer } from '../../(utils)/appwrite.server';
import { APPWRITE_INIT_COLLECTION_ID, APPWRITE_INIT_DB_ID } from '$env/static/private';
import { Query } from 'node-appwrite';

export const load = async () => {
    const user = await getInitUser();

    if (!user.github) {
        redirect(307, '/init');
    }

    const ticket = await getTicketDocByUser(user);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id)
        }
    };
};

const updateSchema = zfd.formData({
    name: zfd.text(),
    title: zfd.text(),
    stickers: zfd.text()
});

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await updateSchema.parseAsync(await request.formData());
        const secret = cookies.get(cookieKey);

        if (!secret) return;

        const identitiesList = await appwriteInit.account.listIdentities();

        if (!identitiesList.total) return;

        const { providerAccessToken } = identitiesList.identities[0];

        const res = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${providerAccessToken}`
            }
        });

        const user = (await res.json()) as GithubUser;

        const documentsList = await appwriteInitServer.databases.listDocuments(
            APPWRITE_INIT_DB_ID,
            APPWRITE_INIT_COLLECTION_ID,
            [Query.equal('gh_user', user.login)]
        );

        if (!documentsList.total) return;

        const document = documentsList.documents[0];

        await appwriteInitServer.databases.updateDocument(
            APPWRITE_INIT_DB_ID,
            APPWRITE_INIT_COLLECTION_ID,
            document.$id,
            {
                ...data,
                stickers: data.stickers.split(',').map((s) => Number(s.trim()))
            }
        );
    }
} satisfies Actions;
