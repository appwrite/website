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
        const patterns = [
            /"lengthSeconds":"(\d+)"/,
            /"approxDurationMs":"(\d+)"/,
            /"videoDetails":\s*\{[^}]*"lengthSeconds":\s*"(\d+)"/,
            /"lengthSeconds":\s*"(\d+)"/,
            /"duration":\s*"PT(\d+)S"/,
            /itemprop="duration"\s+content="PT(\d+)S"/
        ];

        let durationSeconds = 0;

        for (const pattern of patterns) {
            const match = html.match(pattern);
            if (match) {
                if (pattern.source.includes('DurationMs')) {
                    durationSeconds = Math.floor(parseInt(match[1]) / 1000);
                } else {
                    durationSeconds = parseInt(match[1]);
                }
                if (durationSeconds > 0) {
                    break;
                }
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
