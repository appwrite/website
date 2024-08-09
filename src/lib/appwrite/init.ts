import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { Client, Account } from '@appwrite.io/console';

const client = new Client();
client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID);

export const appwriteInit = {
    client,
    account: new Account(client)
};
