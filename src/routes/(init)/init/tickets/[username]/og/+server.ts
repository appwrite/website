import { APPWRITE_COL_INIT_ID, APPWRITE_DB_INIT_ID } from '$env/static/private';
import sharp from 'sharp';
import { getTicketSvg } from '../../../(utils)/get-ticket-svg.js';
import type { TicketData } from '$routes/(init)/init/(utils)/tickets.js';
import { appwriteInitServer } from '$routes/(init)/init/(utils)/appwrite.server.js';

export const GET = async ({ params }) => {
    const ticket = (await appwriteInitServer.databases.getDocument(
        APPWRITE_DB_INIT_ID,
        APPWRITE_COL_INIT_ID,
        params.id
    )) as unknown as TicketData;
    const svg = await getTicketSvg({ ...ticket });

    const svgBuffer = Buffer.from(svg);
    const pngBuffer = await sharp(svgBuffer, {})
        .resize({
            width: 1200,
            height: 630,
            kernel: 'nearest'
        })
        .toFormat('png')
        .toBuffer();

    return new Response(pngBuffer, {
        headers: {
            'Content-Type': 'image/png'
        }
    });
};
