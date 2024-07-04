import { redirect } from '@sveltejs/kit';

export const load = async () => {
    redirect(301, 'https://appwrite.careers');
};
