<script lang="ts">
	import CodeWindow from '$lib/animations/CodeWindow/CodeWindow.svelte';
	import Phone from '$lib/animations/Phone.svelte';
	import { flip } from '$lib/utils/flip.js';
	import { fly, slide } from 'svelte/transition';
	import AnimatedBox from './AnimatedBox.svelte';
	import TaskCheckbox from './TaskCheckbox.svelte';
	import { onMount } from 'svelte';
	import { animate } from 'motion';
	import { sleep } from '@melt-ui/svelte/internal/helpers';

	/* Animation variables */
	let elements = {
		phone: undefined as HTMLElement | undefined,
		box: undefined as HTMLElement | undefined,
		code: undefined as HTMLElement | undefined
	};

	// Database
	type Task = {
		id: string;
		title: string;
		checked: boolean;
	};

	let dbTasks: Task[] = [
		{
			id: '3397fecdedb13397fecdedb1',
			title: 'Research user needs',
			checked: true
		}
	];

	let tableSlice = 1;

	let dbCode = `
const result = databases.createDocument(  
	'Your-tasks',  
	tasks,  
	ID.unique(),
	{
		'description': 'Research user needs',
		'tags': ['UX', 'design'],  
	}
);`.trim();

	onMount(async () => {
		console.log('elements', elements);
		if (!elements.phone || !elements.box || !elements.code) {
			return;
		}
		const { phone, box, code } = elements;

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

		dbTasks.push({
			id: '3397fecdedb13397fecdedb2',
			title: 'Create wireframes',
			checked: false
		});
		dbTasks = dbTasks;

		await sleep(500);

		tableSlice++;

		await sleep(500);

		dbTasks.push({
			id: '3397fecdedb13397fecdedb3',
			title: 'Create visual design',
			checked: false
		});

		dbTasks = dbTasks;

		await sleep(500);

		tableSlice++;
	});
</script>

<div class="phone" bind:this={elements.phone}>
	<Phone>
		<div class="inner-phone theme-light">
			<div class="header">
				<p class="title">Your tasks</p>
				<span class="icon-menu" aria-label="menu" />
			</div>

			<div class="date">Today</div>
			<div class="tasks">
				{#each dbTasks as task (task.id)}
					<div class="task" data-checked={task.checked ? '' : undefined} in:fly={{ x: -16 }}>
						<TaskCheckbox bind:checked={task.checked} />
						<span class="title">{task.title}</span>
					</div>
				{/each}
			</div>

			<button class="add-btn">
				<span class="aw-icon-plus" />
			</button>
		</div>
	</Phone>
</div>

<div class="box-wrapper" bind:this={elements.box}>
	<AnimatedBox>
		<div class="top" slot="top">
			<p class="title">Tasks</p>
		</div>

		<div class="pseudo-table">
			<div class="header">
				<span class="aw-eyebrow">Document ID</span>
				<span class="aw-eyebrow">Task</span>
			</div>
			{#each dbTasks.slice(0, tableSlice) as task (task.id)}
				<div class="row" transition:slide={{ duration: 150 }} animate:flip={{ duration: 150 }}>
					<div class="copy-button">
						<span class="aw-icon-copy" />
						<span>{task.id}</span>
					</div>
					<span class="truncated">{task.title}</span>
				</div>
			{/each}
		</div>
	</AnimatedBox>
</div>

<div class="code-window" bind:this={elements.code}>
	<CodeWindow let:Code>
		<div>
			<Code content={dbCode} />
		</div>
	</CodeWindow>
</div>

<style lang="scss">
	/* Product specifics */

	.inner-phone {
		padding-block: 3rem;
		padding-inline: 1rem;

		color: rgba(67, 67, 71, 1);
		text-align: left;

		position: relative;
		height: 100%;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				color: var(--color-greyscale-800, #2d2d31);
				font-family: Inter;
				font-size: 1rem;
				font-style: normal;
				font-weight: 600;
				line-height: 1.375rem; /* 137.5% */
				letter-spacing: -0.014rem;
			}

			[class*='icon-'] {
				font-size: 1.25rem;
				color: hsl(var(--aw-color-greyscale-500));
			}
		}

		.date {
			margin-block-start: 3rem;

			color: hsl(var(--aw-color-greyscale-600));
			font-family: Inter;
			font-size: 0.75rem;
			font-style: normal;
			font-weight: 500;
			line-height: 1.25rem; /* 166.667% */
		}

		.tasks {
			margin-block-start: 0.5rem;

			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.task {
				display: flex;
				align-items: center;
				gap: 0.75rem;

				border-radius: 0.5rem;
				border: 1px solid hsl(var(--aw-color-greyscale-50));
				background: hsl(var(--aw-color-white));
				color: var(--greyscale-700, var(--color-greyscale-700, #56565c));

				padding-block: 0.55rem;
				padding-inline: 0.88rem;

				/* Responsive/SubBody-400 */
				font-family: Inter;
				font-size: 0.875rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.375rem; /* 157.143% */
				letter-spacing: -0.00394rem;

				transition: opacity 200ms ease;

				&[data-checked] {
					opacity: 0.6;
				}
			}
		}

		.add-btn {
			position: absolute;
			right: 1rem;
			bottom: 2.5rem;

			width: 2.5rem;
			height: 2.5rem;
			flex-shrink: 0;
			box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
			background-color: rgba(124, 103, 254, 1);
			color: rgba(237, 237, 240, 1);
			font-size: 1.5rem;

			display: grid;
			place-items: center;
			border-radius: 100%;
		}
	}

	/* General */

	.phone {
		position: absolute;
		top: 0;
		left: 0;
		z-index: var(--z-phone);
	}

	.code-window {
		position: absolute;
		z-index: var(--z-above-phone);
		top: 0;
		left: 0;
		opacity: 0;
	}

	.box-wrapper {
		position: absolute;
		top: 0;
		z-index: 0;

		width: 25rem;

		transform: translateX(16.5rem) translateY(2rem);

		.pseudo-table {
			.header,
			.row {
				display: grid;
				grid-template-columns: 10rem 1fr;
				justify-content: space-between;
				align-items: center;
				gap: 1.5rem 3rem;
			}

			.header {
				border-bottom: 1px solid hsl(var(--aw-color-greyscale-700));
				color: var(--greyscale-400, #adadb1);

				text-transform: uppercase;
				padding: 1rem;
			}

			.row {
				padding-block: 0.5rem;
				padding-inline: 1rem;

				color: var(--greyscale-400, #adadb1);
				font-family: Inter;
				font-size: 0.875rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.25rem; /* 142.857% */
			}

			.truncated {
				display: block;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}

	.copy-button {
		display: flex;
		padding: 0.25rem 0.5rem;
		align-items: center;
		gap: 0.375rem;

		border-radius: 62.4375rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(2.6666667461395264px);

		[class*='icon-'] {
			font-size: 1.25rem;
			color: hsl(var(--aw-color-greyscale-600));
		}

		span:not([class*='icon-']) {
			color: var(--greyscale-400, #adadb1);
			font-family: Inter;
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.25rem; /* 142.857% */

			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
