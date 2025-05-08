import { redirect } from '@sveltejs/kit';
import { createNewTicket } from '../../(utils)/tickets';

export const load = async ({ url, locals }) => {
    return await createNewTicket(locals.initUser);
};
