import { json } from '@sveltejs/kit';
import { VARS } from '$lib/system';

export async function GET() {
    try {
        const url = `${VARS.ARENA_ENDPOINT || 'https://arena.appwrite.network'}/api/summary/with-skills.json`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Arena API responded with status ${res.status}`);
        }

        const data = await res.json();
        return json(data);
    } catch (e) {
        console.error('Failed to fetch arena data on server:', e);
        // Default to returning an empty wrapper so the client can fail gracefully
        return json({ models: [] }, { status: 500 });
    }
}
