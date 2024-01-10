import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
import { appwriteInit } from '$lib/appwrite/init';
import { ID, Query, type Models } from 'appwrite';
import {
    getGithubUser,
    isLoggedInGithub,
    type GithubUser,
    getGithubContributions
} from '../helpers';

export const ssr = false;

type Ticket = Pick<Models.Document, '$id'> & {
    name: string;
    tribe: string;
    gh_user: string;
    id: number;
};

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
    if (await isLoggedInGithub()) {
        const ghUser = await getGithubUser();
        const [ticket, contributions] = await Promise.all([
            getTicketDetails(ghUser),
            getGithubContributions(ghUser.login)
        ]);

        return {
            ticket,
            contributions
        };
    }
};
