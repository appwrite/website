<script lang="ts">
	import CodeWindow from '$lib/animations/CodeWindow/CodeWindow.svelte';
	import Phone from '$lib/animations/Phone.svelte';
	import { flip } from '$lib/utils/flip.js';
	import { fly } from 'svelte/transition';
	import AnimatedBox from './AnimatedBox.svelte';
	import TaskCheckbox from './TaskCheckbox.svelte';

	/* Animation variables */
	let elements = {
		phone: undefined as HTMLElement | undefined,
		box: undefined as HTMLElement | undefined,
		code: undefined as HTMLElement | undefined,
		controls: undefined as HTMLElement | undefined
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
</script>

<div class="phone" bind:this={elements.phone}>
	<Phone>
		<div class="DATABASES-phone theme-light">
			<div class="header">
				<p class="title">Your tasks</p>
				<span class="icon-menu" aria-label="menu" />
			</div>

			<div class="date">Today</div>
			<div class="tasks">
				{#each dbTasks as task (task.id)}
					<div class="task" data-checked={task.checked ? '' : undefined}>
						<TaskCheckbox bind:checked={task.checked} />
						<span class="title">Research user needs</span>
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
			{#each dbTasks.slice(0, 1) as task (task.id)}
				<div
					class="row"
					in:fly={{ duration: 100, x: -16, delay: 100 }}
					out:fly={{ duration: 100, x: -16 }}
					animate:flip={{ duration: 150 }}
				>
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
	.AUTH-phone {
		padding-block: 3rem;
		padding-inline: 1rem;

		color: rgba(67, 67, 71, 1);
		text-align: left;

		.title {
			color: #434347;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 600;
			line-height: 22px; /* 137.5% */
			letter-spacing: -0.224px;
		}

		.subtitle {
			color: var(--greyscale-700, var(--color-greyscale-700, #56565c));
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px; /* 142.857% */
			letter-spacing: -0.196px;
		}

		.inputs {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
			margin-block-start: 1.5rem;

			fieldset {
				display: flex;
				flex-direction: column;
				gap: 0.3125rem;
				width: 100%;

				label {
					color: var(--color-greyscale-700, #56565c);
					font-family: Inter;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 16px; /* 133.333% */
					letter-spacing: -0.168px;
				}

				input {
					all: unset;
					display: flex;
					padding: 8px 12px;
					align-items: flex-start;
					align-self: stretch;
					border-radius: 8px;
					border: 1px solid #d8d8db;

					color: #434347;
					font-family: Inter;
					font-size: 12px;
					font-style: normal;
					font-weight: 400;
					line-height: 16px; /* 133.333% */
					letter-spacing: -0.168px;
				}
			}
		}

		.sign-up {
			padding: 0.375rem 0.75rem;
			text-align: center;
			width: 100%;
			margin-block-start: 1.25rem;

			border-radius: 0.5rem;
			background: var(--appwrite-purple, #7c67fe);
			box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);

			color: var(--color-bw-white, #fff);
			text-align: center;

			/* Responsive/SubBody-500 */
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 22px; /* 157.143% */
			letter-spacing: -0.07px;
		}

		.with-sep {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			font-family: Inter;
			font-size: 0.75rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.25rem; /* 166.667% */
			letter-spacing: -0.0105rem;
			color: hsl(var(--aw-color-greyscale-500));

			margin-block-start: 0.75rem;

			&::before,
			&::after {
				content: '';
				height: 1px;
				flex-grow: 1;
				background-color: hsl(var(--aw-color-greyscale-200));
			}
		}

		.oauth-btns {
			--gap: 0.5rem;
			display: flex;
			flex-wrap: wrap;
			gap: var(--gap);
			margin-block-start: 0.75rem;
		}

		.oauth {
			display: flex;
			justify-content: center;
			align-items: center;

			border-radius: 0.5rem;
			border: 1px solid #d9d9d9;
			color: hsl(var(--aw-color-greyscale-750));
			text-align: center;

			/* Responsive/Caption-500 */
			font-family: Inter;
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 500;
			line-height: 1.375rem; /* 157.143% */
			letter-spacing: -0.01575rem;

			flex: 1 1 calc(50% - var(--gap));
			padding-block: 0.375rem;
			position: relative;
			height: 2.125rem;

			.inner {
				position: absolute;
				left: 50%;
				top: 50%;

				display: flex;
				justify-content: center;
				align-items: center;
				gap: 0.5rem;
				transform: translate(-50%, -50%) scale(var(--inverse-sx, 1), var(--inverse-sy, 1));
			}
		}
	}

	.AUTH-controls {
		@include border-gradient;
		--m-border-radius: 1rem;
		--m-border-gradient-before: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 125.11%
		);

		display: flex;
		flex-direction: column;

		background: rgba(255, 255, 255, 0.08);
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.06), -2px 4px 9px 0px rgba(0, 0, 0, 0.06),
			-8px 15px 17px 0px rgba(0, 0, 0, 0.05), -19px 34px 23px 0px rgba(0, 0, 0, 0.03),
			-33px 60px 27px 0px rgba(0, 0, 0, 0.01), -52px 94px 30px 0px rgba(0, 0, 0, 0);
		backdrop-filter: blur(20px);
		padding: 0.75rem;

		position: absolute;
		top: 0;
		left: 0;
		z-index: 30;

		width: 12.5rem;

		> div {
			display: flex;
			align-items: center;

			> :nth-child(2) {
				margin-left: 0.75rem;
				color: hsl(var(--aw-color-white));

				font-family: Inter;
				font-size: 0.875rem;
				font-style: normal;
				font-weight: 500;
				line-height: 1.375rem; /* 157.143% */
				letter-spacing: -0.00394rem;
			}

			> :global(:nth-child(3)) {
				margin-left: auto;
			}
		}

		.sep {
			width: 100%;
			height: 1px;
			background-color: rgba(255, 255, 255, 0.12);
			margin-block: 0.5rem;
		}

		[class*='icon-'] {
			--size: 2rem;
			font-size: var(--size);
			width: var(--size);
			height: var(--size);
			color: hsl(var(--aw-color-greayscale-50));

			position: relative;

			&::before {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}

	.DATABASES-phone {
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
	#products {
		min-height: 500vh;
		height: 5000px;
		position: relative;

		--debug-bg: transparent;
	}

	.debug {
		position: absolute;
		top: 8rem;
		left: 0;
	}

	.sticky-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		gap: 1rem;

		position: sticky;

		top: 0;
		min-height: 58rem;
		height: 100vh;
		overflow: hidden;

		padding-inline: 1.25rem;

		width: 100%;
		height: 100vh;

		> .main-text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			display: flex;
			flex-direction: column;
			align-items: center;
			min-height: 15rem;
			text-align: center;

			h2 {
				white-space: nowrap;
				margin-top: 1.5rem;
			}

			p {
				margin-top: 1.25rem;
				max-width: 48.875rem;
			}

			@media (min-width: 1024px) {
				h2 {
					max-width: 61.375rem;
				}
			}
		}
	}

	.products:not([data-active]) {
		opacity: 0;
	}

	.products[data-active] {
		opacity: 1;
	}

	.products {
		background: var(--debug-bg, hsl(250 50 50 / 0.25));

		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 77.75rem;

		transition: 200ms ease;

		.text {
			background: var(--debug-bg, hsl(200 50 50 / 0.25));
			display: flex;
			flex-grow: 1;
			max-width: 25rem;
			position: relative;

			.descriptions {
				margin-inline-start: 2rem;
				text-align: left;
				position: absolute;
				width: 100%;

				> li {
					&:not(:first-child) {
						padding-block-start: 1.5rem;
					}

					&:not(:last-child)[data-active] {
						padding-block-end: 4.25rem;
					}

					transition: 100ms ease;
				}

				h3 {
					display: flex;
					align-items: center;
					gap: 0.75rem;

					.aw-label {
						margin-block-start: 0.25rem;
					}
				}

				h4 {
					color: hsl(var(--aw-color-primary));
					margin-block-start: 0.75rem;
				}

				p {
					margin-block-start: 1rem;
				}

				.features {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;
					margin-block-start: 2rem;

					li {
						--marker-size: 1.25rem;
						--margin-left: calc(var(--marker-size) + 0.75rem);
						position: relative;
						margin-inline-start: var(--margin-left);

						&::before {
							content: '';
							position: absolute;

							left: calc(var(--margin-left) * -1);
							top: 50%;
							width: var(--marker-size);
							height: var(--marker-size);

							transform: translateY(-50%);

							background: url('./images/icons/colored/check.svg') no-repeat;
						}
					}
				}
			}
		}
	}

	.animated {
		background: var(--debug-bg, hsl(100 50 50 / 0.25));
		width: min(42rem, 50vw);
		height: min(38.75rem, 90vh);

		position: relative;

		--z-beneath-phone: 0;
		--z-phone: 10;
		--z-above-phone: 20;

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
		}
	}

	.box-wrapper {
		position: absolute;
		top: 0;
		z-index: 0;

		width: 25rem;

		transform: translateX(16.5rem) translateY(2rem);
	}

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

		.avatar {
			background-color: hsl(var(--aw-color-greyscale-700));
			border-color: hsl(var(--aw-color-greyscale-700));
		}

		.truncated {
			display: block;
			text-overflow: ellipsis;
			overflow: hidden;
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
