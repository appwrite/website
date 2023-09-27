import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const prerender = false;

export const actions = {
	default: async ({ fetch, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const firstName = data.get('name');
		const subject = data.get('subject');
		const message = data.get('message');

		const response = await fetch('https://growth.appwrite.io/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				firstName,
				subject,
				message
			})
		});
		if (response.status >= 400) {
			return {
				error: {
					status: response.status,
					message: response.status >= 500 ? 'Server Error.' : 'Error submitting form.'
				}
			};
		}

		return {
			submitted: true
		};
	}
} satisfies Actions;
