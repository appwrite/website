import { redirect } from '@sveltejs/kit';

import { browser } from '$app/environment';
import { getGithubContributions, getGithubUser, isLoggedInGithub } from '../../helpers';

export const load = async () => {
    if (await isLoggedInGithub()) {
        const user = await getGithubUser();

        return {
            contributions: await getGithubContributions(user.login),
            user
        };
    } else if (browser) {
        throw redirect(307, '/init/ticket');
    }
};
