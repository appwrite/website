import { cookieKey, type GithubUser } from '$routes/(init)/init/(utils)/auth.js';
import { z } from 'zod';
import { appwriteInitServer } from '../../../(utils)/appwrite.server';
import { APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID } from '$env/static/private';
import { Query } from 'appwrite';

const updateSchema = z.object({
    name: z.string(),
    title: z.string(),
    sticker: z.number().max(4)
});

const emptyResponse = new Response(null, {
    status: 204
});

export const POST = async ({ request, cookies }) => {
    const data = await updateSchema.parseAsync(await request.json());
    const secret = cookies.get(cookieKey);

    if (!secret) return emptyResponse;

    const identitiesList = await appwriteInitServer.account.listIdentities();

    if (!identitiesList.total) return emptyResponse;

    const { providerAccessToken } = identitiesList.identities[0];

    const res = await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${providerAccessToken}`
        }
    });

    const user = (await res.json()) as GithubUser;

    const documentsList = await appwriteInitServer.databases.listDocuments(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        [Query.equal('gh_user', user.login)]
    );

    if (!documentsList.total) return emptyResponse;

    const document = documentsList.documents[0];

    await appwriteInitServer.databases.updateDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        document.$id,
        {
            ...data
        }
    );

    return new Response(JSON.stringify(data), {
        headers: {
            'content-type': 'application/json'
        }
    });
};
