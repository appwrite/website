import { PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { Client, Account, Databases } from '@appwrite.io/console';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PUBLIC_APPWRITE_PROJECT_INIT_ID);

export const appwriteInit = {
    client,
    account: new Account(client),
    database: new Databases(client)
};
