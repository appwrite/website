import { APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID } from '$env/static/private';
import { appwriteInitServer } from '$lib/appwrite/init.server';
import { isProUser } from '$lib/utils/console.js';
import { type User } from '$routes/init/helpers.js';
import { ID, Query } from '@appwrite.io/console';
import type { TicketData, TicketDoc } from '../constants.js';
import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';

type SendToHubspotArgs = {
    name: string;
    email: string;
    userId: string;
};

async function sendToUserList({ name, email, userId }: SendToHubspotArgs) {
    await fetch(`${PUBLIC_GROWTH_ENDPOINT}/mailinglists/init-2.0`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            name,
            userId
        })
    });
}

async function getTicketDocByUser(user: User) {
    if (user.github?.email) {
        sendToUserList({
            name: user.appwrite?.name ?? user.github?.name ?? user.github.email,
            email: user.appwrite?.email ?? user.github?.email,
            userId: user.appwrite?.$id ?? ''
        });
    }

    const [gh, aw, isPro] = await Promise.all([
        user.github?.login
            ? appwriteInitServer.databases.listDocuments(
                  APPWRITE_DB_INIT_ID,
                  APPWRITE_COL_INIT_ID,
                  [Query.equal('gh_user', user.github.login)]
              )
            : null,
        user.appwrite?.$id
            ? appwriteInitServer.databases.listDocuments(
                  APPWRITE_DB_INIT_ID,
                  APPWRITE_COL_INIT_ID,
                  [Query.equal('aw_email', user.appwrite.email)]
              )
            : null,
        isProUser()
    ]);

    if (gh?.total) {
        const gh_doc = gh?.documents[0] as unknown as TicketDoc;
        const aw_doc = aw?.documents[0] as unknown as TicketDoc;

        // If both documents exist, and they are not the same, delete the oldest one
        if (gh_doc && aw_doc && gh_doc.$id !== aw_doc.$id) {
            const oldest = gh_doc.id < aw_doc.id ? gh_doc.$id : aw_doc.$id;
            const newest = gh_doc.id > aw_doc.id ? gh_doc.$id : aw_doc.$id;
            await appwriteInitServer.databases.updateDocument(
                APPWRITE_DB_INIT_ID,
                APPWRITE_COL_INIT_ID,
                oldest,
                {
                    gh_user: null,
                    aw_email: null
                }
            );
            return (await appwriteInitServer.databases.updateDocument(
                APPWRITE_DB_INIT_ID,
                APPWRITE_COL_INIT_ID,
                newest,
                {
                    gh_user: user.github?.login,
                    aw_email: user.appwrite?.email
                }
            )) as unknown as TicketDoc;
        }

        const doc = gh_doc;

        // If the document is missing either the GitHub or Appwrite user, update it
        if (!doc.gh_user || !doc.aw_email) {
            return (await appwriteInitServer.databases.updateDocument(
                APPWRITE_DB_INIT_ID,
                APPWRITE_COL_INIT_ID,
                doc.$id,
                {
                    gh_user: user.github?.login,
                    aw_email: user.appwrite?.email
                }
            )) as unknown as TicketDoc;
        }

        // If the user's pro status has changed, update the document
        if (!!user.appwrite && doc.is_pro !== isPro) {
            return (await appwriteInitServer.databases.updateDocument(
                APPWRITE_DB_INIT_ID,
                APPWRITE_COL_INIT_ID,
                doc.$id,
                {
                    is_pro: isPro
                }
            )) as unknown as TicketDoc;
        }

        // Otherwise, return the document as is
        return doc;
    } else {
        // If no document exists, create one
        const allDocs = await appwriteInitServer.databases.listDocuments(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID
        );
        return (await appwriteInitServer.databases.createDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            ID.unique(),
            {
                aw_email: user.appwrite?.email ?? undefined,
                gh_user: user.github?.login ?? undefined,
                id: allDocs.total + 1,
                name: user.appwrite?.name ?? user.github?.name,
                title: '',
                show_contributions: true
            }
        )) as unknown as TicketDoc;
    }
}

async function getTicketDocById(id: string) {
    return (await appwriteInitServer.databases.getDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        id
    )) as unknown as Omit<TicketData, 'contributions' | 'variant'>;
}

export async function GET({ url }) {
    if (url.searchParams.has('id')) {
        const res = await getTicketDocById(url.searchParams.get('id') ?? '');
        return new Response(JSON.stringify(res), {
            headers: {
                'content-type': 'application/json'
            }
        });
    } else {
        const user = JSON.parse(url.searchParams.get('user') ?? '{}') as User;
        const res = await getTicketDocByUser(user);
        return new Response(JSON.stringify(res), {
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}
