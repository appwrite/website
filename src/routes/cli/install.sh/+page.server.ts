import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(301, 'https://raw.githubusercontent.com/appwrite/sdk-for-cli/master/install.sh');
}
