import { PUBLIC_APPWRITE_DB_INIT_ID, PUBLIC_APPWRITE_COL_INIT_ID } from '$env/static/public';
import { appwriteInit } from '$lib/appwrite/init';
import {
    isLoggedInGithub,
    type GithubUser,
    getGithubUser,
    getGithubContributions
} from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';
import { Query, ID } from 'appwrite';
import type { Ticket } from '../constants';

async function getTicketDetails({ login, name }: GithubUser) {
    const { documents, total } = await appwriteInit.database.listDocuments(
        PUBLIC_APPWRITE_DB_INIT_ID,
        PUBLIC_APPWRITE_COL_INIT_ID,
        [Query.equal('gh_user', login)]
    );

    if (total) {
        return documents[0] as unknown as Ticket;
    } else {
        const allDocs = await appwriteInit.database.listDocuments(
            PUBLIC_APPWRITE_DB_INIT_ID,
            PUBLIC_APPWRITE_COL_INIT_ID
        );
        return (await appwriteInit.database.createDocument(
            PUBLIC_APPWRITE_DB_INIT_ID,
            PUBLIC_APPWRITE_COL_INIT_ID,
            ID.unique(),
            {
                gh_user: login,
                id: allDocs.total + 1,
                name
            }
        )) as unknown as Ticket;
    }
}

export const load = async () => {
    const loggedIn = await isLoggedInGithub();
    if (!loggedIn) {
        throw redirect(307, '/init/ticket');
    }

    const user = await getGithubUser();
    const [ticket, contributions] = await Promise.all([
        getTicketDetails(user),
        getGithubContributions(user.login)
    ]);

    return {
        ticket,
        contributions
    };
};
