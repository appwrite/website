import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    console.log({ locals });
};
