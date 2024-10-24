import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(301, '/blog/post/meet-the-new-appwrite');
}
