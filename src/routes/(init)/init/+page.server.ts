import { getInitUser } from './(utils)/auth';
import { getTicketByUser } from './(utils)/tickets';

export const prerender = false;

export const load = async () => {
    const user = await getInitUser();
    const ticket = await getTicketByUser(user);

    if (!ticket || !user.github?.login) {
        return {
            claimed: false
        };
    }

    return {
        ticketId: ticket.gh_user,
        claimed: true
    };
};
