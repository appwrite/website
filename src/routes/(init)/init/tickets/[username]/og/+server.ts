import sharp from 'sharp';
import { getTicketSvg } from '../../../(utils)/get-ticket-svg.js';
import { getTicketDocByUsername } from '$routes/(init)/init/(utils)/tickets.js';

export const GET = async ({ params }) => {
    const ticket = await getTicketDocByUsername(params.username);
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

    return new Response(Buffer.from(pngBuffer), {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
            'Content-Disposition': `inline; filename="${params.username}.png"`,
            'Content-Length': pngBuffer.byteLength.toString()
        }
    });
};
