<script lang="ts" context="module">
	const products = ['auth', 'databases', 'storage', 'functions', 'realtime'] as const;
	type Product = (typeof products)[number];

	type ProductsContext = {
		scrollInfo: Readable<ScrollInfo>;
		active: Readable<Product>;
	};

	const ctx_key = Symbol();
	export const ctx = {
		set: (v: ProductsContext) => {
			setContext(ctx_key, v);
		},
		get: () => {
			return getContext<ProductsContext>(ctx_key);
		}
	};
</script>

<script lang="ts">
	import { toScale, type Scale } from '$lib/utils/toScale';

	import { clamp } from '$lib/utils/clamp';
	import { getContext, setContext } from 'svelte';
	import { writable, type Readable, type Writable } from 'svelte/store';
	import { crossfade, fly, slide } from 'svelte/transition';
	import { scroll, type ScrollInfo } from '.';
	import Auth from './products/auth';
	import Databases from './products/databases';
	import ScrollIndicator from './scroll-indicator.svelte';
	import Phone from '$lib/components/Phone.svelte';

	let scrollInfo: Writable<ScrollInfo> = writable({
		percentage: 0,
		traversed: 0,
		remaning: Infinity
	});

	const animScale: Scale = [0, products.length];
	const percentScale: Scale = [0.25, 0.9];
	$: activeProductIdx = Math.floor(
		clamp(0, toScale($scrollInfo.percentage, percentScale, animScale), products.length - 1)
	);

	const activeProduct = writable<Product>(products[0]);
	$: {
		activeProduct.set(products[activeProductIdx]);
	}

	ctx.set({
		scrollInfo,
		active: activeProduct
	});
</script>

<div
	id="products"
	use:scroll
	on:aw-scroll={({ detail }) => {
		const { percentage } = detail;
		scrollInfo.set(detail);
	}}
>
	<div class="sticky-wrapper">
		<div class="text">
			{#if $scrollInfo.percentage > 0}
				<span class="aw-badges aw-eyebrow" transition:slide={{ axis: 'x' }}>Products_</span>
			{/if}
			{#if $scrollInfo.percentage > 0.075}
				<h2 class="aw-display aw-u-color-text-primary" transition:fly={{ y: 16 }}>
					Your backend, minus the hassle
				</h2>
			{/if}
			{#if $scrollInfo.percentage > 0.15}
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

		{#if $scrollInfo.percentage > 0.25}
			<div class="products" transition:fly={{ y: 16 }}>
				<div class="text">
					<ScrollIndicator percentage={toScale($scrollInfo.percentage, [0.25, 1], [0, 1])} />
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
					<Auth.Content />
					<div class="phone-wrapper">
						<Phone id="products-phone">
							<Auth.Phone />
							<Databases.Phone />
						</Phone>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	#products {
		height: 7500px;
		position: relative;
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
		background: hsl(250 50 50 / 0.25);

		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 77.75rem;

		.text {
			display: flex;
			background: hsl(200 50 50 / 0.25);
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
		background: hsl(100 50 50 / 0.25);
		width: min(42rem, 50vw);
		height: min(38.75rem, 90vh);

		position: relative;
		--z-behind-phone: 10;
		--z-phone: 20;
		--z-infront-phone: 30;
	}

	.phone-wrapper {
		position: absolute;
		z-index: var(--z-phone);
	}
</style>
