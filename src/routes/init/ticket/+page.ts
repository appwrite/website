import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
    const data = await parent();
    if (data.ticket) {
        throw redirect(307, '/init/ticket/thank-you');
    }
};
