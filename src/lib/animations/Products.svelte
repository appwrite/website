<script lang="ts">
	import { toScale, type Scale } from '$lib/utils/toScale';

	import { Phone } from '$lib/components';
	import { clamp } from '$lib/utils/clamp';
	import { fly, slide } from 'svelte/transition';
	import { scroll, type ScrollInfo } from '.';
	import ScrollIndicator from './scroll-indicator.svelte';

	const sections = ['auth', 'databases', 'storage', 'functions', 'realtime'];

	const animScale: Scale = [0, sections.length];
	const percentScale: Scale = [0.25, 0.9];
	$: sectionIndex = Math.floor(
		clamp(0, toScale(scrollInfo.percentage, percentScale, animScale), sections.length - 1)
	);

	let scrollInfo: ScrollInfo = {
		percentage: 0,
		traversed: 0,
		remaning: Infinity
	};
</script>

<div
	id="products"
	use:scroll
	on:aw-scroll={({ detail }) => {
		const { percentage } = detail;
		scrollInfo = detail;
	}}
>
	<div class="sticky-wrapper">
		<div class="text">
			{#if scrollInfo.percentage > 0}
				<span class="aw-badges aw-eyebrow" transition:slide={{ axis: 'x' }}>Products_</span>
			{/if}
			{#if scrollInfo.percentage > 0.075}
				<h2 class="aw-display aw-u-color-text-primary" transition:slide={{ axis: 'x' }}>
					Your backend, minus the hassle
				</h2>
			{/if}
			{#if scrollInfo.percentage > 0.15}
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

		{#if scrollInfo.percentage > 0.25}
			<div class="products" transition:fly={{ y: 16 }}>
				<div class="u-flex">
					<ScrollIndicator percentage={toScale(scrollInfo.percentage, [0.25, 1], [0, 1])} />
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
				<Phone id="products-phone">
					<div class="phone-auth theme-light">
						<p class="title">Create an Account</p>
						<p class="subtitle">Please enter your details</p>
						<div class="inputs">
							<fieldset>
								<label for="name">Your Name</label>
								<input type="name" id="name" placeholder="Enter your name" />
							</fieldset>
							<fieldset>
								<label for="email">Your Email</label>
								<input type="email" id="email" placeholder="Enter your email" />
							</fieldset>
							<fieldset>
								<label for="password">Create Password</label>
								<input type="password" id="password" placeholder="Enter Password" />
							</fieldset>
						</div>
						<button class="sign-up">Sign Up</button>
					</div>
				</Phone>
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
		--padding-block: 7.5rem;
		padding-block: calc(var(--navbar-height) + var(--padding-block)) var(--padding-block);

		width: 100%;
		height: 100vh;

		text-align: center;

		.text {
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
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 1244px;

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

	.phone-auth {
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
			margin-block-start: 4rem;

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
	}
</style>
