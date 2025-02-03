import { appwriteInit } from './init/(utils)/appwrite';
import { cookieKey } from './init/(utils)/auth';

export const load = async ({ cookies }) => {
    const session = cookies.get(cookieKey);

    if (session) {
        appwriteInit.client.setSession(session);
    }
};
