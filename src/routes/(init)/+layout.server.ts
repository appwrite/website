import { appwriteInit } from './init/(utils)/appwrite';
import { cookieKey } from './init/(utils)/auth';

export const load = async ({ cookies }) => {
    const sessionCookie = cookies.get(cookieKey);

    if (sessionCookie) {
        appwriteInit.client.setSession(sessionCookie);
    }
};
