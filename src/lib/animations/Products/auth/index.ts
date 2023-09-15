import Phone from './phone.svelte';
import Box from './box.svelte';
import Code from './code.svelte';
import Controls from './controls.svelte';

export const Auth = {
	Phone,
	Box,
	Code,
	Controls
};

import { sleep, write } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { animate } from 'motion';

type State = {
	email: string;
	password: string;
	name: string;

	showControls: boolean;
	submitted: boolean;
	controls: {
		GitHub: boolean;
		Google: boolean;
		Apple: boolean;
		Microsoft: boolean;
	};
};

const state = createResettable<State>({
	email: '',
	password: '',
	name: "Walter O'Brian",
	showControls: false,
	submitted: false,
	controls: {
		GitHub: true,
		Google: false,
		Apple: false,
		Microsoft: false
	}
});

const emailToSet = 'walterobrian@example.com';
const passwordToSet = 'password';

type ExecuteArgs = {
	elements: {
		phone: HTMLElement | undefined;
		box: HTMLElement | undefined;
		code: HTMLElement | undefined;
		controls: HTMLElement | undefined;
	};
};

const execute = async ({ elements }: ExecuteArgs) => {
	try {
		const { phone, box, code, controls } = elements;
		if (!phone || !box || !code || !controls) {
			return;
		}

		// Reset
		const { update } = state.reset();
		await animate(phone, { x: 0, y: 0 }, { duration: 0 }).finished;
		await animate(box, { x: 260, y: 32, opacity: 0 }, { duration: 0 }).finished;
		await animate(code, { x: 200, y: 460, opacity: 0 }, { duration: 0 }).finished;
		await animate(controls, { x: 420, y: 0, opacity: 0 }, { duration: 0 }).finished;

		// Start
		await animate(box, { x: [260, 260], y: [48, 32], opacity: 1 }, { duration: 0.25, delay: 1 })
			.finished;

		await sleep(150);

		await write(emailToSet, (v) => update((p) => ({ ...p, email: v })), 300);
		await sleep(150);

		await write(passwordToSet, (v) => update((p) => ({ ...p, password: v })), 300);
		await sleep(500);

		console.log('animating code');
		await animate(code, { x: [200, 200], y: [460 + 16, 460], opacity: [0, 1] }, { duration: 0.25 })
			.finished;

		await sleep(500);

		update((p) => ({ ...p, submitted: true }));

		await sleep(1000);

		update((p) => ({ ...p, showControls: true }));
		animate(controls, { x: [420, 420], y: [16, 0], opacity: 1 }, { duration: 0.5 });
	} catch {
		// Do nothing. It's expected to error when trying to animate elements that no longer exist,
		// e.g. when the component is unmounted.
	}
};

export const authController = {
	execute,
	state
};
