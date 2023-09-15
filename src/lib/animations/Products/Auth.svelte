<script lang="ts">
	import CodeWindow from '$lib/animations/CodeWindow/CodeWindow.svelte';
	import Phone from '$lib/animations/Phone.svelte';
	import { Switch } from '$lib/components';
	import { flip } from '$lib/utils/flip.js';
	import { objectKeys } from '$lib/utils/object';
	import { animate } from 'motion';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import AnimatedBox from './AnimatedBox.svelte';
	import { getInitials, sleep, write } from '..';

	/* Animation constants */
	const authEmail = 'walterobrian@example.com';
	const authPassword = 'password';

	/* Animation variables */
	let elements = {
		phone: undefined as HTMLElement | undefined,
		box: undefined as HTMLElement | undefined,
		code: undefined as HTMLElement | undefined,
		controls: undefined as HTMLElement | undefined
	};

	let nameInput = "Walter O'Brian";
	let emailInput = '';
	let passwordInput = '';
	let authSubmitted = false;
	let showControls = false;
	let controls = {
		GitHub: true,
		Google: false,
		Apple: false,
		Microsoft: false
	};

	onMount(async () => {
		try {
			if (!elements.phone || !elements.box || !elements.code || !elements.controls) {
				return;
			}

			// Reset
			await animate(elements.phone, { x: 0, y: 0 }, { duration: 0 }).finished;
			await animate(elements.box, { x: 260, y: 32, opacity: 0 }, { duration: 0 }).finished;
			await animate(elements.code, { x: 200, y: 460, opacity: 0 }, { duration: 0 }).finished;
			await animate(elements.controls, { x: 420, y: 0, opacity: 0 }, { duration: 0 }).finished;
			authSubmitted = false;
			showControls = false;
			emailInput = '';
			passwordInput = '';

			// Start
			await animate(
				elements.box,
				{ x: [260, 260], y: [48, 32], opacity: 1 },
				{ duration: 0.25, delay: 1 }
			).finished;

			await sleep(150);

			await write(authEmail, (v) => (emailInput = v), 300);
			await sleep(150);

			await write(authPassword, (v) => (passwordInput = v), 300);
			await sleep(500);

			animate(elements.code, { x: [200, 200], y: [460 + 16, 460], opacity: 1 }, { duration: 0.25 });

			await sleep(500);

			authSubmitted = true;

			await sleep(1000);

			showControls = true;
			animate(elements.controls, { x: [420, 420], y: [16, 0], opacity: 1 }, { duration: 0.5 });
		} catch {
			// Do nothing. It's expected to error when trying to animate elements that no longer exist,
			// e.g. when the component is unmounted.
		}
	});

	/* Reactive variables */
	$: authCode = `const result = account.create(\n\tID.unique(),\n\t'${emailInput}',\n\t'${passwordInput}',\n\t"${nameInput}"\n);`;

	type AuthEntry = {
		avatar: string;
		name: string;
		email: string;
		id: number;
	};
	$: authData = [
		authSubmitted
			? {
					avatar: getInitials(nameInput),
					name: nameInput,
					email: emailInput,
					id: 0
			  }
			: undefined,
		{
			avatar: 'BD',
			name: 'Benjamin Davis',
			email: 'benjamin.davis@example.com',
			id: 1
		},
		{
			avatar: 'OS',
			name: 'Olivia Smith',
			email: 'olivia.smith@example.com',
			id: 2
		},
		{
			avatar: 'EW',
			name: 'Ethan Wilson',
			email: 'ethan.wilson@example.com',
			id: 3
		}
	].filter(Boolean) as AuthEntry[];

	$: controlsEnabled = showControls && Object.values(controls).some(Boolean);
</script>

<div class="phone" bind:this={elements.phone}>
	<Phone>
		<div class="inner-phone theme-light">
			<p class="title">Create an Account</p>
			<p class="subtitle">Please enter your details</p>
			<div class="inputs">
				<fieldset>
					<label for="name">Your Name</label>
					<input type="name" id="name" placeholder="Enter your name" bind:value={nameInput} />
				</fieldset>
				<fieldset>
					<label for="email">Your Email</label>
					<input type="email" id="email" placeholder="Enter your email" bind:value={emailInput} />
				</fieldset>
				<fieldset>
					<label for="password">Create Password</label>
					<input
						type="password"
						id="password"
						placeholder="Enter Password"
						bind:value={passwordInput}
					/>
				</fieldset>
			</div>
			<button class="sign-up">Sign Up</button>
			{#if controlsEnabled}
				<span class="with-sep" transition:fade={{ duration: 100 }}>or sign up with</span>
				<div class="oauth-btns" transition:fade={{ duration: 100 }}>
					{#each objectKeys(controls).filter((p) => controls[p]) as provider (provider)}
						<button
							class="oauth"
							transition:fade={{ duration: 100 }}
							animate:flip={{ duration: 250 }}
						>
							<div class="inner">
								<span class="aw-icon-{provider.toLowerCase()}" />
								<span>{provider}</span>
							</div>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</Phone>
</div>

<div class="box-wrapper" bind:this={elements.box}>
	<AnimatedBox>
		<div class="top" slot="top">
			<p class="title">Users</p>
		</div>

		<div class="pseudo-table">
			<div class="header">
				<span class="aw-eyebrow">Name</span>
				<span class="aw-eyebrow">Identifier</span>
			</div>
			{#each authData as user (user.id)}
				<div
					class="row"
					in:fly={{ duration: 100, x: -16, delay: 100 }}
					out:fly={{ duration: 100, x: -16 }}
					animate:flip={{ duration: 150 }}
				>
					<div class="u-flex u-cross-center u-gap-12">
						<div class="avatar is-size-small">{user.avatar}</div>
						<span class="truncated">{user.name}</span>
					</div>
					<span class="truncated">{user.email}</span>
				</div>
			{/each}
		</div>
	</AnimatedBox>
</div>

<div class="code-window" bind:this={elements.code}>
	<CodeWindow let:Code>
		<div>
			<Code content={authCode} />
		</div>
	</CodeWindow>
</div>

<div class="auth-controls" bind:this={elements.controls}>
	{#each objectKeys(controls) as provider, i}
		{@const isLast = i === objectKeys(controls).length - 1}
		<div>
			<span class="aw-icon-{provider.toLowerCase()}" />
			<span>{provider}</span>
			<Switch bind:checked={controls[provider]} />
		</div>
		{#if !isLast}
			<div class="sep" />
		{/if}
	{/each}
</div>

<style lang="scss">
	.auth-controls {
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
		opacity: 0;

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

	.phone {
		position: absolute;
		top: 0;
		left: 0;
		z-index: var(--z-phone);
		opacity: 1;

		.inner-phone {
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
		opacity: 0;

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
	}
</style>
