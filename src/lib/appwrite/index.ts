import { PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';
import { Client, Databases, Functions } from '@appwrite.io/console';

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PUBLIC_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const functions = new Functions(client);
