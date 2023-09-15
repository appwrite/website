<script lang="ts">
	import { toScale, type Scale } from '$lib/utils/toScale';

	import { fly, slide } from 'svelte/transition';
	import { scroll } from '..';
	import ScrollIndicator from '../scroll-indicator.svelte';
	import Auth from './Auth.svelte';
	import Databases from './Databases.svelte';

	/* Basic Animation setup */
	let scrollInfo = {
		percentage: 0,
		traversed: 0,
		remaning: Infinity
	};

	const products = ['auth', 'databases', 'storage', 'functions', 'realtime'] as const;
	type Product = (typeof products)[number];

	const animScale: Scale = [0.2, 0.95];
	const productsScales = products.map((_, idx) => {
		const diff = animScale[1] - animScale[0];
		const step = diff / products.length;
		return [animScale[0] + step * idx, animScale[0] + step * (idx + 1)] as Scale;
	});

	$: active = (function getActiveInfo() {
		let activeIdx = productsScales.findIndex(([min, max], i) => {
			return scrollInfo.percentage >= min && scrollInfo.percentage < max;
		});

		const product = products[activeIdx] as Product | undefined;
		const scale = productsScales[activeIdx] as Scale | undefined;
		const percent = scale ? toScale(scrollInfo.percentage, scale, [0, 1]) : 0;

		return {
			product,
			scale,
			percent
		};
	})();

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
			<pre>{JSON.stringify({ active })}</pre>
			<pre>{JSON.stringify({ scrollInfo })}</pre>
		</div>

		{#if scrollInfo.percentage < 0.2}
			<div
				class="main-text"
				out:fly={{ duration: 250, y: -300 }}
				in:fly={{ duration: 250, delay: 250, y: -300 }}
			>
				{#if scrollInfo.percentage > 0}
					<span class="aw-badges aw-eyebrow" transition:slide={{ axis: 'x' }}>Products_</span>

					<h2 class="aw-display aw-u-color-text-primary" transition:fly={{ y: 16, delay: 250 }}>
						Your backend, minus the hassle
					</h2>
					<p
						class="aw-description aw-u-max-width-700 u-margin-inline-auto"
						transition:fly={{
							y: 16,
							delay: 400
						}}
					>
						Build secure and scalable applications faster with Appwrite's core backend products and
						spend more time building the best products.
					</p>
				{/if}
			</div>
		{:else}
			<div
				class="products"
				out:fly={{ duration: 250, y: 300 }}
				in:fly={{ duration: 500, delay: 250, y: 300 }}
				data-active={scrollInfo.percentage > 0.1 ? '' : undefined}
			>
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
					{#if active.product === 'auth'}
						<Auth />
					{:else if active.product === 'databases'}
						<Databases />
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
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
	}
</style>
