import { APPWRITE_COL_INIT_ID, APPWRITE_DB_INIT_ID } from '$env/static/private';
import { appwriteInit } from '$lib/appwrite/init.js';
import { getTicketVariant } from '$routes/init/helpers.js';
import sharp from 'sharp';
import type { TicketData } from '../../constants.js';
import { getTicketSvg } from './getTicketSvg.server.js';

export async function GET({ params, fetch }) {
    const ticket = (await appwriteInit.database.getDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        params.id
    )) as unknown as TicketData;
    ticket.variant = getTicketVariant(ticket);
    const svg = await getTicketSvg({ ...ticket }, fetch);

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
