import { BASE_URL } from '../../utils';

export async function auth(userId: string, secret: string, f = fetch) {
    const response = await f(`${BASE_URL}/tickets/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, secret })
    });

    return await response.json();
}
