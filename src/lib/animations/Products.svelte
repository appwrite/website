<script lang="ts">
	import { toScale, type Scale } from '$lib/utils/toScale';

	import CodeWindow from '$lib/animations/CodeWindow/index.svelte';
	import Phone from '$lib/animations/Phone.svelte';
	import { Switch } from '$lib/components';
	import { objectKeys } from '$lib/utils/object';
	import { flip } from 'svelte/animate';
	import { fade, fly, slide } from 'svelte/transition';
	import { createProgressSequence, scroll, type ProgressSequence } from '.';
	import PseudoTable from './PseudoTable.svelte';
	import ScrollIndicator from './scroll-indicator.svelte';

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
	// General vars
	let showPhone = false;
	let showCode = false;
	let showTable = false;

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

	/* Animation sequences */
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
			}
		]),
		databases: createProgressSequence([]),
		storage: createProgressSequence([]),
		functions: createProgressSequence([]),
		realtime: createProgressSequence([])
	};

	$: active = (function getActiveInfo() {
		const activeIdx = productsScales.findIndex(([min, max], i) => {
			if (i === 0 && scrollInfo.percentage < min) return true;
			return scrollInfo.percentage >= min && scrollInfo.percentage < max;
		});

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
						<li>
							<h3>
								<img src="./images/icons/illustrated/auth.svg" alt="" />
								<span class="aw-label aw-u-color-text-primary">Auth</span>
							</h3>
							<h4 class="aw-title">Secure login for all your users</h4>
							<p>Sign in users with multiple OAuth providers and multi factor authentication.</p>
							<ul class="features">
								<li>Two-Factor Authentication support</li>
								<li>30+ login methods</li>
								<li>State-of-the-art password hashing support</li>
							</ul>
						</li>
					</ul>
				</div>

				<div class="animated">
					{#if showPhone}
						<div class="phone" transition:fly={{ y: 16, duration: 150 }}>
							<Phone>
								<div class="auth-phone theme-light">
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
										<span class="with-sep" transition:fade={{ duration: 100 }}>or sign up with</span
										>
									{/if}
									<div class="oauth-btns">
										{#each objectKeys(controls).filter((p) => controlsEnabled && controls[p]) as provider (provider)}
											<button
												class="oauth"
												transition:fade={{ duration: 100 }}
												animate:flip={{ duration: 250 }}
											>
												<span class="aw-icon-{provider.toLowerCase()}" />
												<span>{provider}</span>
											</button>
										{/each}
									</div>
								</div>
							</Phone>
						</div>
					{/if}

					{#if showCode}
						<div class="code-window" transition:fly={{ y: 16 }}>
							<CodeWindow let:Code>
								<div>
									<Code content={authCode} />
								</div>
							</CodeWindow>
						</div>
					{/if}

					{#if showTable}
						<div class="pseudo-table" transition:fly={{ y: 16 }}>
							<PseudoTable title="Users" columns={['Name', 'identifier']} let:rowClass>
								{#each authData as user (user.id)}
									<div
										class={rowClass}
										in:fly={{ duration: 100, x: -16, delay: 100 }}
										out:fly={{ duration: 100, x: -16 }}
										animate:flip={{ duration: 250 }}
									>
										<div class="u-flex u-cross-center u-gap-12">
											<div class="avatar is-size-small">{user.avatar}</div>
											<span class="truncated">{user.name}</span>
										</div>
										<span class="truncated">{user.email}</span>
									</div>
								{/each}
							</PseudoTable>
						</div>
					{/if}

					{#if showControls}
						<div class="auth-controls" transition:fly={{ y: 16 }}>
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
	/* Auth */
	.auth-phone {
		padding-block: 2rem 3rem;
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
			gap: 0.5rem;
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
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
			margin-block-start: 0.75rem;
		}

		.oauth {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			width: 40%;

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

			flex-grow: 1;
			padding: 0.375rem 1rem;
		}
	}

	.pseudo-table .avatar {
		background-color: hsl(var(--aw-color-greyscale-700));
		border-color: hsl(var(--aw-color-greyscale-700));
	}

	.pseudo-table .truncated {
		display: block;
		text-overflow: ellipsis;
		overflow: hidden;
	}

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

	/* General */
	#products {
		height: 30000px;
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
		justify-content: space-between;

		position: sticky;

		top: 0;
		height: 100vh;
		overflow: hidden;

		padding-inline: 1.25rem;
		--navbar-height: 8rem;
		--padding-block: 7.5rem; // TODO: Improve padding responsiveness
		padding-block: calc(var(--navbar-height) + var(--padding-block)) var(--padding-block);

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
			max-width: 25rem;

			.descriptions {
				margin-inline-start: 2rem;
				text-align: left;

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
			left: 15rem;
		}
	}
</style>
