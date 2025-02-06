import { getInitUser } from './(utils)/auth';

export const prerender = false;

export const load = async () => {
    const user = await getInitUser();

    console.log({ user });

    if (!user.github) return;

    return {
        claimed: !!user.github
    };
};
