<script>
	import { objectKeys } from '$lib/utils/object';
	import { infos } from './Products.svelte';
</script>

<div class="wrapper">
	<span class="aw-badges aw-eyebrow">Products_</span>

	<h2 class="aw-display aw-u-color-text-primary u-margin-block-start-16">
		Your backend, minus the hassle
	</h2>

	<p class="aw-description u-margin-block-start-16">
		Build secure and scalable applications faster with Appwrite's core backend products and spend
		more time building the best products.
	</p>

	<div class="infos">
		{#each objectKeys(infos) as prod}
			{@const info = infos[prod]}

			{#if info}
				<div class="info">
					<h3>
						<img src={info.icon.active} alt="" />
						<span class="aw-label aw-u-color-text-primary">{info.title}</span>
					</h3>

					<h4 class="aw-title">{info.subtitle}</h4>
					<p>
						{info.description}
					</p>
					<ul class="features">
						{#each info.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>

					{#if info.shot}
						<img src={info.shot} alt="" />
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: none;
		padding-block-start: 5rem;
		padding-inline: 1.25rem;

		max-width: 800px;
		margin-inline: auto;
	}

	@media (max-width: 1439px) {
		.wrapper {
			display: block;
		}
	}

	.infos {
		margin-block-start: 3rem;

		display: flex;
		flex-direction: column;
		gap: 6rem;

		.info {
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

						background: url('/images/icons/colored/check.svg') no-repeat;
					}
				}
			}

			> img {
				width: 100%;
				margin-block-start: 2.5rem;
			}
		}
	}
</style>
