import { APPWRITE_INIT_DB_ID, APPWRITE_INIT_COLLECTION_ID } from '$env/static/private';
import { appwriteInitServer } from '$lib/appwrite/init.server';
import { type User } from '$routes/(init)/init/utils';
import type { TicketData } from '$routes/(init)/init/utils';
import { getTicketDocByUser } from '../utils';

const getTicketDocById = async (id: string) => {
    return (await appwriteInitServer.databases.getDocument(
        APPWRITE_INIT_DB_ID,
        APPWRITE_INIT_COLLECTION_ID,
        id
    )) as unknown as Omit<TicketData, 'contributions' | 'variant'>;
};

export async function GET({ url }) {
    if (url.searchParams.has('id')) {
        const res = await getTicketDocById(url.searchParams.get('id') ?? '');
        return new Response(JSON.stringify(res), {
            headers: {
                'content-type': 'application/json'
            }
        });
    } else {
        const user = JSON.parse(url.searchParams.get('user') ?? '{}') as User;
        const res = await getTicketDocByUser(user);
        return new Response(JSON.stringify(res), {
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}
