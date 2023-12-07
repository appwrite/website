import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { a, b } = await request.json();
    return json(a + b);
}
