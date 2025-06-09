import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';
import { Client, Databases, Functions, Storage } from '@appwrite.io/console';

export const client = new Client();

client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const functions = new Functions(client);
export const storage = new Storage(client);
