import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(301, '/blog/post/hacktoberfest-2023');
}
