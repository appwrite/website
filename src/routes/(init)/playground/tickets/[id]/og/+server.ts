import { APPWRITE_COL_INIT_ID_NEW, APPWRITE_DB_INIT_ID } from '$env/static/private';
import { appwriteInitServer } from '$lib/appwrite/init.server';
import sharp from 'sharp';
import type { TicketData } from '../../constants.js';
import { getTicketSvg } from './getTicketSvg.server.js';

export async function GET({ params }) {
    const ticket = (await appwriteInitServer.databases.getDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID_NEW,
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
