import { getTicketByUser } from './(utils)/tickets';

export const prerender = false;

export const load = async ({ locals }) => {
    const ticket = await getTicketByUser(locals.initUser);

    if (!ticket) {
        return {
            claimed: false
        };
    }

    return {
        ticketId: ticket.gh_user,
        claimed: true
    };
};
