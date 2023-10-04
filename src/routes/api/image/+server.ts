import { error } from '@sveltejs/kit';
import sharp from 'sharp';

const formats = ['webp', 'jpeg', 'png', 'tiff', 'avif'] as const;

const filenameMap: Record<ImageFormat, string> = {
    webp: 'webp',
    jpeg: 'jpg',
    png: 'png',
    tiff: 'tiff',
    avif: 'avif'
};

const getFilename = (imgUrl: string, format: ImageFormat) => {
    const filename = imgUrl.split('/').pop() ?? '';
    const ext = filename.split('.').pop() ?? '';
    if (ext === filenameMap[format]) return filename;
    return filename.replace(ext, filenameMap[format]);
};

export type ImageFormat = (typeof formats)[number];

const isFormat = (format: unknown): format is ImageFormat => {
    return typeof format === 'string' && formats.includes(format as ImageFormat);
};

export const GET = async ({ fetch, url }) => {
    const img = url.searchParams.get('img');
    const format = url.searchParams.get('format') || 'webp';
    if (!img) throw error(400, 'Missing image parameter');
    if (!isFormat(format)) throw error(400, 'Invalid format parameter');

    try {
        const fetchedImg = await fetch(img);
        const imgBuffer = await fetchedImg.arrayBuffer();
        return new Response(await sharp(imgBuffer).toFormat(format).toBuffer(), {
            headers: {
                'Content-Type': `image/${format}`,
                'Content-Disposition': `attachment; filename="${getFilename(img, format)}"`
            }
        });
    } catch (e) {
        throw error(400, 'Invalid image URL');
    }
};
