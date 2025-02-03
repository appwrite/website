import { getTicketDocByUser } from './(utils)/tickets';
import { getInitUser } from './(utils)/auth';

export const load = async () => {
    const user = await getInitUser();

    if (!user.github) return;

    const ticket = await getTicketDocByUser(user);

    return {
        claimed: !!ticket
    };
};
