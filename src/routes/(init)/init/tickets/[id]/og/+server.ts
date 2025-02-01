import { APPWRITE_INIT_COLLECTION_ID, APPWRITE_INIT_DB_ID } from '$env/static/private';
import { appwriteInitServer } from '$lib/appwrite/init.server';
import sharp from 'sharp';
import { getTicketSvg } from './getTicketSvg.server.js';
import type { TicketData } from '$routes/(init)/init/utils.js';

export async function GET({ params }) {
    const ticket = (await appwriteInitServer.databases.getDocument(
        APPWRITE_INIT_DB_ID,
        APPWRITE_INIT_COLLECTION_ID,
        params.id
    )) as unknown as TicketData;
    const svg = await getTicketSvg({ ...ticket });

    const svgBuffer = Buffer.from(svg);
    const pngBuffer = await sharp(svgBuffer, {})
        .resize({
            // width: 1000
        })
        .toFormat('png')
        .toBuffer();

    return new Response(pngBuffer, {
        headers: {
            'Content-Type': 'image/png'
        }
    });
}
