import { APPWRITE_DB_INIT_ID, APPWRITE_COL_INIT_ID, NODE_ENV } from '$env/static/private';
import { appwriteInitServer } from '../(utils)/appwrite.server';
import { Query, ID, type Models } from 'appwrite';
import type { User } from './auth';

type SendToUserListArgs = {
    name: string;
    email: string;
    userId: string;
};

const sendToUserList = async ({ name, email, userId }: SendToUserListArgs) => {
    try {
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
    } catch (e) {
        console.error('Error sending to user list', e);
    }
};

export const getTicketByUser = async (user: User) => {
    const githubLogin = user.github?.login;
    const appwriteEmail = user.appwrite?.email;

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

    const githubDoc = githubAccount?.documents[0] as unknown as TicketDoc;

    return githubDoc;
};

export const createNewTicket = async (user: User) => {
    const githubLogin = user.github?.login;
    const githubEmail = user.github?.email;
    const githubName = user.github?.name;
    const githubAvatar = user.github?.avatar_url;

    const appwriteId = user.appwrite?.$id;
    const appwriteEmail = user.appwrite?.email;
    const appwriteName = user.appwrite?.name;

    // Send request details to user list for growth in production
    if (NODE_ENV === 'production' && githubEmail && appwriteId) {
        await sendToUserList({
            name: appwriteName ?? githubName ?? githubEmail,
            email: appwriteEmail ?? githubEmail,
            userId: appwriteId ?? ''
        });
    }

    if (!githubLogin) return;
    const githubTicket = await appwriteInitServer.databases.listDocuments(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        [Query.equal('gh_user', githubLogin)]
    );

    const getFirstName = (fullName?: string) => fullName?.split(' ')[0] ?? undefined;
    const firstName = getFirstName(appwriteName) ?? getFirstName(githubName);

    if (!githubTicket?.total) {
        const countQuery = await appwriteInitServer.databases.listDocuments(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID
        );

        const newDoc = await appwriteInitServer.databases.createDocument(
            APPWRITE_DB_INIT_ID,
            APPWRITE_COL_INIT_ID,
            ID.unique(),
            {
                aw_email: appwriteEmail,
                gh_user: githubLogin,
                avatar_url: githubAvatar,
                id: countQuery.total + 1,
                name: firstName,
                title: ''
            }
        );

        return newDoc as unknown as TicketDoc;
    }
};

export const getTicketDocByUsername = async (username: string) => {
    const tickets = await appwriteInitServer.databases.listDocuments(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        [Query.equal('gh_user', username)]
    );

    return tickets.documents[0] as unknown as TicketDoc;
};

export type TicketData = Pick<Models.Document, '$id'> & {
    name: string;
    title?: string;
    gh_user: string;
    aw_email?: string;
    avatar_url?: string;
    id: number;
    contributions?: number[];
    sticker?: number | null;
};

export type TicketDoc = Omit<TicketData, 'contributions'>;
