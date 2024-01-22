import { getContributions } from './helpers.server.js';

const emptyResponse = new Response(JSON.stringify({ data: null }), {
    status: 404,
    headers: {
        'content-type': 'application/json'
    }
});

export async function GET({ params }) {
    const matrix = getContributions(params.id);
    if (!matrix) return emptyResponse;

    return new Response(
        JSON.stringify({
            data: matrix
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        }
    );
}
