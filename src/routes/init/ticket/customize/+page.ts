import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
    const data = await parent();
    if (!data.ghUser) throw redirect(307, '/init/ticket');
};
