import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(301, '/blog/post/hacktoberfest-2023');
}