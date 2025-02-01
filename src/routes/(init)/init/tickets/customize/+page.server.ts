import { getInitUser } from '$routes/(init)/init/utils';
import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$routes/(init)/init/utils';
import { getTicketDocByUser } from '../../(utils)/tickets';
import { getTicketContributions } from '../../(utils)/contributions';

export const load = async ({ fetch }) => {
    const user = await getInitUser();

    if (!user.github) {
        redirect(307, BASE_URL);
    }

    const ticket = await getTicketDocByUser(user);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id, fetch)
        }
    };
};
