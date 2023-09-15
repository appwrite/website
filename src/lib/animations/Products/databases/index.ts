import Box from './box.svelte';
import Code from './code.svelte';
import Phone from './phone.svelte';

import { sleep } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { animate } from 'motion';

type Task = {
	id: string;
	title: string;
	checked: boolean;
};

type State = {
	tasks: Task[];
	tableSlice: number;
};

const state = createResettable<State>({
	tasks: [
		{
			id: '3397fecdedb13397fecdedb1',
			title: 'Research user needs',
			checked: true
		}
	],
	tableSlice: 1
});

type ExecuteArgs = {
	elements: {
		phone: HTMLElement | undefined;
		box: HTMLElement | undefined;
		code: HTMLElement | undefined;
	};
};

const execute = async ({ elements }: ExecuteArgs) => {
	try {
		const { phone, box, code } = elements;
		if (!phone || !box || !code) {
			return;
		}
		const { update } = state.reset();

		await Promise.all([
			animate(
				phone,
				{
					x: [0, 390],
					y: [0, 0]
				},
				{ duration: 0.5 }
			).finished,
			animate(box, {
				x: [260, 0],
				y: [32, 32],
				opacity: [0, 1]
			}).finished,

			animate(code, { x: 200, y: 460, opacity: [0] }, { duration: 0 }).finished.then(() => {
				animate(code, { x: 80, y: 460, opacity: [1, 1] }, { duration: 0.5 });
			})
		]);

		await sleep(1000);

		update((p) => ({
			...p,
			tasks: [
				...p.tasks,
				{
					id: '3397fecdedb13397fecdedb2',
					title: 'Create wireframes',
					checked: false
				}
			]
		}));
		await sleep(500);

		update((p) => ({
			...p,
			tableSlice: p.tableSlice + 1
		}));

		await sleep(500);

		update((p) => ({
			...p,
			tasks: [
				...p.tasks,
				{
					id: '3397fecdedb13397fecdedb3',
					title: 'Create visual design',
					checked: false
				}
			]
		}));

		await sleep(500);

		update((p) => ({
			...p,
			tableSlice: p.tableSlice + 1
		}));
	} catch {
		// Do nothing. It's expected to error when trying to animate elements that no longer exist,
		// e.g. when the component is unmounted.
	}
};

export const databasesController = {
	execute,
	state
};

export const Databases = {
	Phone,
	Box,
	Code
};
