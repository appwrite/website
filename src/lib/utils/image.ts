import type { ImageFormat } from '$routes/api/image/+server';

export const getImageUrl = (img: string, format: ImageFormat) => {
    return `/api/image?img=${encodeURIComponent(img)}&format=${format}`;
};
