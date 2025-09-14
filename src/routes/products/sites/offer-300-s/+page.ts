import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(302, '/products/sites/offer-300?format=short');
}
