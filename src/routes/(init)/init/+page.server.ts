import { getInitUser } from './(utils)/auth';

export const prerender = false;

export const load = async () => {
    const user = await getInitUser();

    if (!user.github?.login) return;

    return {
        claimed: !!user.github?.login
    };
};
