import { getTicketByUser, getMockContributions, getUser, isLoggedIn } from '$routes/init/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
    const variant = url.searchParams.get('variant') ?? 'default';
    const loggedIn = await isLoggedIn();
    if (!loggedIn) {
        throw redirect(307, '/init/ticket');
    }

    const user = await getUser();

    const ticket = await getTicketByUser(user);

    return {
        ticket: { ...ticket, variant },
        user,
        streamed: {
            contributions: getMockContributions()
        }
    };
};
