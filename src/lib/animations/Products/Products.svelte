<script lang="ts">
	import { toScale, type Scale } from '$lib/utils/toScale';

	import CodeWindow from '$lib/animations/CodeWindow/CodeWindow.svelte';
	import Phone from '$lib/animations/Phone.svelte';
	import { Switch } from '$lib/components';
	import { objectKeys } from '$lib/utils/object';
	import { flip } from '$lib/utils/flip.js';
	import { fade, fly, slide } from 'svelte/transition';
	import { createProgressSequence, scroll, type ProgressSequence, safeAnimate } from '..';
	import AnimatedBox from './AnimatedBox.svelte';
	import ScrollIndicator from '../scroll-indicator.svelte';
	import { animate } from 'motion';
	import TaskCheckbox from './TaskCheckbox.svelte';

	/* Utils */
	function write(text: string, cb: (v: string) => void, duration = 500) {
		const step = duration / text.length;
		let i = 0;
		return new Promise((resolve) => {
			const interval = setInterval(() => {
				cb(text.slice(0, ++i));
				if (i === text.length) {
					clearInterval(interval);
					resolve(undefined);
				}
			}, step);
		});
	}

	function sleep(duration: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, duration);
		});
	}

	function getInitials(name: string) {
		return name
			.split(' ')
			.map((word) => word?.[0]?.toUpperCase() ?? '')
			.join('')
			.slice(0, 2);
	}

	/* Basic Animation setup */
	let scrollInfo = {
		percentage: 0,
		traversed: 0,
		remaning: Infinity
	};

	const products = ['auth', 'databases', 'storage', 'functions', 'realtime'] as const;
	type Product = (typeof products)[number];

	const animScale: Scale = [0.1, 0.95];
	const productsScales = products.map((_, idx) => {
		const diff = animScale[1] - animScale[0];
		const step = diff / products.length;
		return [animScale[0] + step * idx, animScale[0] + step * (idx + 1)] as Scale;
	});

	/* Animation constants */
	const authEmail = 'walterobrian@example.com';
	const authPassword = 'password';

	/* Animation variables */
	let showPhone = true;
	let showCode = true;
	let showTable = true;

	// Auth
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

	/* Animation sequences */
	let animatedBox = false;

	const sequences: Record<Product, ProgressSequence> = {
		auth: createProgressSequence([
			{
				percentage: -0.05,
				callback() {
					showPhone = false;
				}
			},
			{
				percentage: 0,
				callback() {
					showPhone = true;
					showTable = false;
				}
			},
			{
				percentage: 0.15,
				async callback() {
					showTable = true;
				}
			},
			{
				percentage: 0.3,
				async callback() {
					showCode = false;
					if (!emailInput) {
						await write(authEmail, (v) => (emailInput = v), 150);
					}
					if (!passwordInput) {
						write(authPassword, (v) => (passwordInput = v), 150);
					}
				}
			},
			{
				percentage: 0.45,
				callback() {
					authSubmitted = false;
					showCode = true;
				}
			},
			{
				percentage: 0.6,
				callback() {
					showControls = false;
					authSubmitted = true;
				}
			},
			{
				percentage: 0.75,
				callback() {
					showControls = true;
				}
			},
			{
				percentage: 0.9,
				callback() {
					showControls = true;
					safeAnimate(
						'#products-phone',
						{ x: 0 },
						{
							easing: 'ease',
							duration: 0.25
						}
					);

					if (animatedBox) {
						safeAnimate(
							'#products-box',
							{ x: 264, y: 32 },
							{
								easing: 'ease',
								duration: 0.25
							}
						);
						animatedBox = false;
					}
				}
			}
		]),
		databases: createProgressSequence([
			{
				percentage: 0,
				callback() {
					showPhone = true;
					showTable = true;
					showCode = true;

					showControls = false;
					safeAnimate(
						'#products-phone',
						{ x: 500 },
						{
							easing: 'ease',
							duration: 0.25
						}
					);

					safeAnimate(
						'#products-box',
						{ x: 0, y: 32 },
						{
							easing: 'ease',
							duration: 0.25
						}
					);
					animatedBox = true;
				}
			},
			{
				percentage: 0.1,
				callback() {
					// no-op
				}
			}
		]),
		storage: createProgressSequence([]),
		functions: createProgressSequence([]),
		realtime: createProgressSequence([])
	};

	$: active = (function getActiveInfo() {
		let activeIdx = productsScales.findIndex(([min, max], i) => {
			if (i === 0 && scrollInfo.percentage < min) return true;
			return scrollInfo.percentage >= min && scrollInfo.percentage < max;
		});

		activeIdx = activeIdx === -1 ? products.length - 1 : activeIdx;

		const product = products[activeIdx] as Product | undefined;
		const scale = productsScales[activeIdx] as Scale | undefined;
		const percent = scale ? toScale(scrollInfo.percentage, scale, [0, 1]) : 0;
		const sequence = product ? sequences[product] : undefined;

		return {
			product,
			scale,
			percent,
			sequence
		};
	})();
	$: active.sequence?.(active.percent);

	$: {
		Object.values(sequences).forEach((sequence) => {
			if (sequence === active.sequence) return;
			sequence.resetLastEventIdx();
		});
	}

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

	/* Products infos */
	type ProductInfo = {
		icon: {
			active: string;
			inactive: string;
		};
		title: string;
		subtitle: string;
		description: string;
		features: string[];
	};
	const infos: Record<Product, ProductInfo> = {
		auth: {
			icon: {
				active: './images/icons/illustrated/auth.svg',
				inactive: './images/icons/illustrated/auth-gray.svg'
			},
			title: 'Auth',
			subtitle: 'Secure login for all your users',
			description: 'Sign in users with multiple OAuth providers and multi factor authentication.',
			features: [
				'Two-Factor Authentication support',
				'30+ login methods',
				'State-of-the-art password hashing support'
			]
		},
		databases: {
			icon: {
				active: './images/icons/illustrated/databases.svg',
				inactive: './images/icons/illustrated/databases-gray.svg'
			},
			title: 'Databases',
			subtitle: 'Store, query and manage your data',
			description:
				'Store, query and manage access to your app’s data in real-time with a robust and scalable database.',
			features: ['Relationships are a big deal']
		},
		storage: {
			icon: {
				active: './images/icons/illustrated/storage.svg',
				inactive: './images/icons/illustrated/storage-gray.svg'
			},
			title: 'Storage',
			subtitle: 'Secure login for all your users',
			description: 'Sign in users with multiple OAuth providers and multi factor authentication.',
			features: [
				'Two-Factor Authentication support',
				'30+ login methods',
				'State-of-the-art password hashing support'
			]
		},
		functions: {
			icon: {
				active: './images/icons/illustrated/functions.svg',
				inactive: './images/icons/illustrated/functions-gray.svg'
			},
			title: 'Functions',
			subtitle: 'Secure login for all your users',
			description: 'Sign in users with multiple OAuth providers and multi factor authentication.',
			features: [
				'Two-Factor Authentication support',
				'30+ login methods',
				'State-of-the-art password hashing support'
			]
		},
		realtime: {
			icon: {
				active: './images/icons/illustrated/realtime.svg',
				inactive: './images/icons/illustrated/realtime-gray.svg'
			},
			title: 'Realtime',
			subtitle: 'Secure login for all your users',
			description: 'Sign in users with multiple OAuth providers and multi factor authentication.',
			features: [
				'Two-Factor Authentication support',
				'30+ login methods',
				'State-of-the-art password hashing support'
			]
		}
	};
</script>

<div
	id="products"
	use:scroll
	on:aw-scroll={({ detail }) => {
		scrollInfo = detail;
	}}
>
	<div class="sticky-wrapper">
		<div class="debug">
			<pre>{JSON.stringify({ ...active })}</pre>
		</div>
		<div class="text">
			{#if scrollInfo.percentage > 0}
				<span class="aw-badges aw-eyebrow" transition:slide={{ axis: 'x' }}>Products_</span>
			{/if}
			{#if scrollInfo.percentage > 0.025}
				<h2 class="aw-display aw-u-color-text-primary" transition:fly={{ y: 16 }}>
					Your backend, minus the hassle
				</h2>
			{/if}
			{#if scrollInfo.percentage > 0.075}
				<p
					class="aw-description aw-u-max-width-700 u-margin-inline-auto"
					transition:fly={{
						y: 16
					}}
				>
					Build secure and scalable applications faster with Appwrite's core backend products and
					spend more time building the best products.
				</p>
			{/if}
		</div>

		{#if scrollInfo.percentage > 0.1}
			<div class="products" transition:fly={{ y: 16 }}>
				<div class="text">
					<ScrollIndicator percentage={toScale(scrollInfo.percentage, animScale, [0, 1])} />
					<ul class="descriptions">
						{#each products as product}
							{@const copy = infos[product]}
							{@const isActive = active.product === product}

							<li data-active={isActive ? '' : undefined}>
								<h3>
									<img src={isActive ? copy.icon.active : copy.icon.inactive} alt="" />
									<span class="aw-label aw-u-color-text-primary">{copy.title}</span>
								</h3>
								{#if isActive}
									<div transition:slide>
										<h4 class="aw-title">{copy.subtitle}</h4>
										<p>
											{copy.description}
										</p>
										<ul class="features">
											{#each copy.features as feature}
												<li>{feature}</li>
											{/each}
										</ul>
									</div>
								{/if}
							</li>
						{/each}
					</ul>
				</div>

				<div class="animated">
					{#if showPhone}
						<div class="phone" id="products-phone" transition:fly={{ y: 16, duration: 150 }}>
							<Phone>
								{#if active.product === 'auth'}
									<div class="AUTH-phone theme-light">
										<p class="title">Create an Account</p>
										<p class="subtitle">Please enter your details</p>
										<div class="inputs">
											<fieldset>
												<label for="name">Your Name</label>
												<input
													type="name"
													id="name"
													placeholder="Enter your name"
													bind:value={nameInput}
												/>
											</fieldset>
											<fieldset>
												<label for="email">Your Email</label>
												<input
													type="email"
													id="email"
													placeholder="Enter your email"
													bind:value={emailInput}
												/>
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
											<span class="with-sep" transition:fade={{ duration: 100 }}
												>or sign up with</span
											>
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
								{:else if active.product === 'databases'}
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
								{/if}
							</Phone>
						</div>
					{/if}

					{#if showTable}
						<div
							class="box-wrapper"
							id="products-box"
							in:fly={{ y: 16 }}
							out:fly={{ y: 16, duration: 150 }}
						>
							<AnimatedBox>
								<div class="top" slot="top">
									<p class="title">
										{#if active.product === 'auth'}
											Users
										{:else if active.product === 'databases'}
											Tasks
										{/if}
									</p>
								</div>
								{#if active.product === 'auth'}
									<div class="pseudo-table">
										<div class="header">
											<span>Name</span>
											<span>Identifier</span>
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
								{:else if active.product === 'databases'}
									<div class="pseudo-table">
										<div class="header">
											<span>Document ID</span>
											<span>Task</span>
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
								{/if}
							</AnimatedBox>
						</div>
					{/if}

					{#if showCode}
						<div class="code-window" in:fly={{ y: 16 }} out:fly={{ y: 16, duration: 150 }}>
							<CodeWindow let:Code>
								<div>
									{#if active.product === 'auth'}
										<Code content={authCode} />
									{:else if active.product === 'databases'}
										<Code content={dbCode} />
									{/if}
								</div>
							</CodeWindow>
						</div>
					{/if}

					{#if showControls}
						<div class="AUTH-controls" in:fly={{ y: 16 }} out:fly={{ y: 16, duration: 150 }}>
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
					{/if}
				</div>
			</div>
		{/if}
	</div>
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
		right: 2rem;
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
		height: 20000px;
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
		--navbar-height: 8rem;
		// --padding-block: 7.5rem; // TODO: Improve padding responsiveness
		// padding-block: calc(var(--navbar-height) + var(--padding-block)) var(--padding-block);
		padding-block-start: var(--navbar-height);

		width: 100%;
		height: 100vh;

		text-align: center;

		> .text {
			display: flex;
			flex-direction: column;
			align-items: center;

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

	.products {
		background: var(--debug-bg, hsl(250 50 50 / 0.25));

		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 77.75rem;

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
			bottom: 0;
			left: 12rem;
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
			font-family: Inter;
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.25rem; /* 142.857% */
			text-transform: uppercase;
			padding: 1rem;
			padding-block-end: 0.75rem;
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
