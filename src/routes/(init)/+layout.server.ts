import { PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { appwriteInit } from './init/(utils)/appwrite';

export const load = async ({ cookies }) => {
    const session = cookies.get(`a_session_${PUBLIC_APPWRITE_PROJECT_INIT_ID}`);

    if (session) {
        appwriteInit.client.setSession(session);
    }
};
