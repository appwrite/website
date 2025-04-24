import { APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID } from '$env/static/private';
import { appwriteInitServer } from '../(utils)/appwrite.server';
import { Query, ID, type Models } from 'appwrite';
import type { User } from './auth';

type SendToUserListArgs = {
    name: string;
    email: string;
    userId: string;
};

const sendToUserList = async ({ name, email, userId }: SendToUserListArgs) => {
    await fetch('https://growth.appwrite.io/v1/mailinglists/init-3.0', {
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
    // Extract commonly used properties with fallbacks
    const githubLogin = user.github?.login;
    const githubEmail = user.github?.email;
    const githubName = user.github?.name;
    const githubAvatar = user.github?.avatar_url;

    const appwriteId = user.appwrite?.$id;
    const appwriteEmail = user.appwrite?.email;
    const appwriteName = user.appwrite?.name;

    // Send request details to user list for growth in production
    if (process.env.NODE_ENV === 'production' && githubEmail) {
        sendToUserList({
            name: appwriteName ?? githubName ?? githubEmail,
            email: appwriteEmail ?? githubEmail,
            userId: appwriteId ?? ''
        });
    }

    // Fetch a user's github account and appwrite account in parallel
    const [githubAccount, appwriteAccount] = await Promise.all([
        githubLogin
            ? appwriteInitServer.databases.listDocuments(
                  APPWRITE_DB_INIT_ID,
                  APPWRITE_COL_INIT_ID,
                  [Query.equal('gh_user', githubLogin)]
              )
            : null,
        appwriteEmail
            ? appwriteInitServer.databases.listDocuments(
                  APPWRITE_DB_INIT_ID,
                  APPWRITE_COL_INIT_ID,
                  [Query.equal('aw_email', appwriteEmail)]
              )
            : null
    ]);

    const getFirstName = (fullName?: string) => fullName?.split(' ')[0] ?? undefined;
    const firstName = getFirstName(appwriteName) ?? getFirstName(githubName);

    if (!githubAccount?.total) {
        const countQuery = await appwriteInitServer.databases.listDocuments(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            [Query.limit(1), Query.orderAsc('id'), Query.offset(0)]
        );

        const nextId = (countQuery.total > 0 ? countQuery.documents[0].id : 0) + 1;

        const newDoc = await appwriteInitServer.databases.createDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            ID.unique(),
            {
                aw_email: appwriteEmail,
                gh_user: githubLogin,
                avatar_url: githubAvatar,
                id: nextId,
                name: firstName,
                title: ''
            }
        );

        return newDoc as unknown as TicketDoc;
    }

    const githubDoc = githubAccount?.documents[0] as unknown as TicketDoc;
    const appwriteDoc = appwriteAccount?.documents[0] as unknown as TicketDoc;

    // If we don't have both docs, or they are the same doc
    if (!githubDoc || !appwriteDoc || githubDoc.$id === appwriteDoc.$id) {
        const doc = githubDoc;

        // If the doc is missing either the GitHub or Appwrite user, add it
        if (!doc.gh_user || !doc.aw_email) {
            const updatedDoc = await appwriteInitServer.databases.updateDocument(
                APPWRITE_DB_INIT_ID,
                APPWRITE_COL_INIT_ID,
                doc.$id,
                {
                    gh_user: githubLogin,
                    aw_email: appwriteEmail
                }
            );

            return updatedDoc as unknown as TicketDoc;
        }

        return doc;
    }

    const oldest = githubDoc.id < appwriteDoc.id ? githubDoc.$id : appwriteDoc.$id;
    const newest = githubDoc.id > appwriteDoc.id ? githubDoc.$id : appwriteDoc.$id;

    const [_, updatedDoc] = await Promise.all([
        appwriteInitServer.databases.updateDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            oldest,
            {
                gh_user: null,
                aw_email: null
            }
        ),
        appwriteInitServer.databases.updateDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            newest,
            {
                gh_user: githubLogin,
                aw_email: appwriteEmail,
                avatar_url: githubAvatar
            }
        )
    ]);

    return updatedDoc as unknown as TicketDoc;
};

export const getUserHasTicket = async (gh_user: string) => {
    const { documents } = await appwriteInitServer.databases.listDocuments(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        [Query.equal('gh_user', gh_user)]
    );

    return !!documents[0];
};

export const getTicketDocById = async (id: string) => {
    return (await appwriteInitServer.databases.getDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        id
    )) as unknown as Omit<TicketData, 'contributions'>;
};

export type TicketData = Pick<Models.Document, '$id'> & {
    name: string;
    title?: string;
    gh_user?: string;
    aw_email?: string;
    avatar_url?: string;
    id: number;
    contributions?: number[];
    sticker?: number | null;
};

export type TicketDoc = Omit<TicketData, 'contributions'>;
