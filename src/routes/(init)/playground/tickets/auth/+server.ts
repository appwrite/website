import { PUBLIC_APPWRITE_PROJECT_INIT_ID } from '$env/static/public';
import { appwriteInitServer } from '$lib/appwrite/init.server.js';

export async function POST({ request, cookies }) {
    const { userId, secret } = await request.json();

    if (!userId || !secret) {
        return new Response(
            JSON.stringify({
                data: null
            }),
            {
                status: 403,
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    }

    try {
        const session = await appwriteInitServer.account.createSession(userId, secret);
        cookies.set(`a_session_${PUBLIC_APPWRITE_PROJECT_INIT_ID}`, session.secret, {
            path: '/',
            httpOnly: true,
            secure: true
        });
        const cookieFallback = {
            [`a_session_${PUBLIC_APPWRITE_PROJECT_INIT_ID}`]: session.secret
        };
        return new Response(
            JSON.stringify({
                cookieFallback: JSON.stringify(cookieFallback)
            }),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    } catch (e) {
        console.error(e);
        return new Response(
            JSON.stringify({
                data: null
            }),
            {
                status: 403,
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
    }
}
