import { getInitUser } from './(utils)/auth';
import { getUserHasTicket } from './(utils)/tickets';

export const prerender = false;

export const load = async () => {
    const user = await getInitUser();

    if (!user.github?.login) return;

    return {
        claimed: await getUserHasTicket(user.github.login)
    };
};
