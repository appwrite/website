import { APPWRITE_INIT_DB_ID, APPWRITE_INIT_COLLECTION_ID } from '$env/static/private';
import { appwriteInitServer } from '$lib/appwrite/init.server';
import { Query, ID } from 'appwrite';
import { BASE_URL, type TicketDoc, type User } from '../utils';
import { v5 as uuid } from 'uuid';
import { z } from 'zod';

type SendToUserListArgs = {
    name: string;
    email: string;
    userId: string;
};

const sendToUserList = async ({ name, email, userId }: SendToUserListArgs) => {
    await fetch('https://growth.appwrite.io/v1/mailinglists/init-2.0', {
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
};

export const getTicketDocByUser = async (user: User) => {
    // send request details to user list for Growth
    if (user.github?.email) {
        sendToUserList({
            name: user.appwrite?.name ?? user.github?.name ?? user.github.email,
            email: user.appwrite?.email ?? user.github?.email,
            userId: user.appwrite?.$id ?? ''
        });
    }

    // fetch a user's github account, appwrite account, and
    const [githubAccount, appwriteAccount] = await Promise.all([
        user.github?.login
            ? appwriteInitServer.databases.listDocuments(
                  APPWRITE_INIT_DB_ID,
                  APPWRITE_INIT_COLLECTION_ID,
                  [Query.equal('gh_user', user.github.login)]
              )
            : null,
        user.appwrite?.$id
            ? appwriteInitServer.databases.listDocuments(
                  APPWRITE_INIT_DB_ID,
                  APPWRITE_INIT_COLLECTION_ID,
                  [Query.equal('aw_email', user.appwrite.email)]
              )
            : null
    ]);

    if (!githubAccount?.total) {
        return (await appwriteInitServer.databases.createDocument(
            APPWRITE_INIT_DB_ID,
            APPWRITE_INIT_COLLECTION_ID,
            ID.unique(),
            {
                aw_email: user.appwrite?.email ?? undefined,
                gh_user: user.github?.login ?? undefined,
                id: uuid,
                name: user.appwrite?.name ?? user.github?.name,
                title: '',
                show_contributions: true
            }
        )) as unknown as TicketDoc;
    }

    // get a user's github account doc from the collection
    const githubDoc = githubAccount?.documents[0] as unknown as TicketDoc;
    // get a user's appwrite account doc from the collection
    const appwriteDoc = appwriteAccount?.documents[0] as unknown as TicketDoc;

    // if we don't have both docs, or they are the same doc
    if (!githubDoc || !appwriteDoc || githubDoc.$id === appwriteDoc.$id) {
        const doc = githubDoc;

        // if the doc is missing either the GitHub or Appwrite user, add it
        if (!doc.gh_user || !doc.aw_email) {
            return (await appwriteInitServer.databases.updateDocument(
                APPWRITE_INIT_DB_ID,
                APPWRITE_INIT_COLLECTION_ID,
                doc.$id,
                {
                    gh_user: user.github?.login,
                    aw_email: user.appwrite?.email
                }
            )) as unknown as TicketDoc;
        }

        return doc;
    }

    const oldest = githubDoc.id < appwriteDoc.id ? githubDoc.$id : appwriteDoc.$id;
    const newest = githubDoc.id > appwriteDoc.id ? githubDoc.$id : appwriteDoc.$id;

    await appwriteInitServer.databases.updateDocument(
        APPWRITE_INIT_DB_ID,
        APPWRITE_INIT_COLLECTION_ID,
        oldest,
        {
            gh_user: null,
            aw_email: null
        }
    );

    return (await appwriteInitServer.databases.updateDocument(
        APPWRITE_INIT_DB_ID,
        APPWRITE_INIT_COLLECTION_ID,
        newest,
        {
            gh_user: user.github?.login,
            aw_email: user.appwrite?.email
        }
    )) as unknown as TicketDoc;
};

const contributionsSchema = z.array(z.array(z.number()));
export type ContributionsMatrix = z.infer<typeof contributionsSchema>;

export const getMockContributions = () => {
    const result: ContributionsMatrix = [];
    for (let i = 0; i < 53; i++) {
        result.push([]);
        for (let j = 0; j < 7; j++) {
            result[i].push(Math.floor(Math.random() * 4));
        }
    }
    return result;
};

export const getTicketContributions = async (id: string, f = fetch) => {
    const res = await f(`${BASE_URL}/tickets/${id}/get-contributions`);

    try {
        return contributionsSchema.parseAsync((await res.json()).data);
    } catch (e) {
        console.error(e);
        return { data: null };
    }
};
