import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
    const videoId = url.searchParams.get('id');

    if (!videoId) {
        return new Response(JSON.stringify({ error: 'Video ID is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // fetch the video page HTML
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const response = await fetch(videoUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch video page: ${response.status}`);
        }

        const html = await response.text();
        let durationSeconds = 0;

        const schemaMatch = html.match(/itemprop="duration" content="([^"]+)"/);
        if (schemaMatch) {
            const duration = schemaMatch[1];
            const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
            if (match) {
                const hours = parseInt(match[1] || '0');
                const minutes = parseInt(match[2] || '0');
                const seconds = parseInt(match[3] || '0');
                durationSeconds = hours * 3600 + minutes * 60 + seconds;
            }
        }
        if (durationSeconds === 0) {
            const lengthMatch = html.match(/"lengthSeconds":"(\d+)"/);
            if (lengthMatch) {
                durationSeconds = parseInt(lengthMatch[1]);
            }
        }

        if (durationSeconds === 0) {
            return new Response(JSON.stringify({ error: 'Duration not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ duration: durationSeconds }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=86400'
            }
        });
    } catch (error) {
        console.error('Error fetching YouTube duration:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch video duration' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
