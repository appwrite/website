import { getInitUser } from './(utils)/auth';
import { getTicketDocByUser } from './(utils)/tickets';

export const prerender = false;

export const load = async () => {
    const user = await getInitUser();
    const ticket = await getTicketDocByUser(user);

    if (!ticket || !user.github?.login) {
        return {
            claimed: false
        };
    }

    return {
        ticketId: ticket.$id,
        claimed: true
    };
};
