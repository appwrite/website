import { getInitUser } from './(utils)/auth';

export const load = async () => {
    const user = await getInitUser();

    if (!user.github) return;

    return {
        claimed: !!user
    };
};
