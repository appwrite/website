import { APPWRITE_API_KEY_INIT } from '$env/static/private';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { Account, Client, Databases } from 'node-appwrite';

const initServerClient = new Client();
initServerClient
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID)
    .setKey(APPWRITE_API_KEY_INIT);

export const appwriteInitServer = {
    account: new Account(initServerClient),
    databases: new Databases(initServerClient)
};
