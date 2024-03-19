import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(301, '/blog/post/meet-the-new-appwrite');
}