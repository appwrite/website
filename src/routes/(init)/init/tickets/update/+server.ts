import { APPWRITE_INIT_COLLECTION_ID, APPWRITE_INIT_DB_ID } from '$env/static/private';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { appwriteInitServer } from '../../(utils)/appwrite.server';
import { Account, Client, Query } from 'node-appwrite';
//import { z } from 'zod';
import { cookieKey, type GithubUser } from '../../(utils)/auth';

export async function POST({ request, cookies }) {
    const secret = cookies.get(cookieKey);

    if (!secret) {
        return new Response(
            JSON.stringify({
                data: null
            }),
            {
                status: 403,
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    }

    const client = new Client();
    client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID);
    client.headers['X-Appwrite-Session'] = secret;
    const account = new Account(client);
    try {
        // retrieve the providerAccessToken from the GitHub identity because
        // it's not set in the session when the session is created via
        // account.createOAuth2Token()
        const identitiesList = await account.listIdentities();
        if (!identitiesList.total) {
            return new Response(
                JSON.stringify({
                    data: null
                }),
                {
                    status: 403,
                    headers: {
                        'content-type': 'application/json'
                    }
                }
            );
        }
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

        if (!documentsList.documents.length) {
            return new Response(
                JSON.stringify({
                    data: null
                }),
                {
                    status: 403,
                    headers: {
                        'content-type': 'application/json'
                    }
                }
            );
        }

        const document = documentsList.documents[0];

        // const schema = z.object({
        //     name: z.string(),
        //     title: z.string(),
        //     showGitHub: z.boolean(),
        //     stickers: z.array(z.number()).nullable()
        // });

        const data = await request.json();

        await appwriteInitServer.databases.updateDocument(
            APPWRITE_INIT_DB_ID,
            APPWRITE_INIT_COLLECTION_ID,
            document.$id,
            {
                name: data.name,
                title: data.title,
                show_contributions: data.showGitHub
            }
        );

        return new Response(
            JSON.stringify({
                data: null
            }),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    } catch (e) {
        console.error(e);
        return new Response(
            JSON.stringify({
                data: null
            }),
            {
                status: 403,
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    }
}
