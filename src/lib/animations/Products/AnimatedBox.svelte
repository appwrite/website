<script lang="ts">
	import AutoHeight from '../AutoBox.svelte';
</script>

<div class="anim-box">
	<div class="top"><slot name="top" /></div>
	<div class="content">
		<AutoHeight>
			<slot />
		</AutoHeight>
	</div>
</div>

<style lang="scss">
	.anim-box {
		@include border-gradient;
		--m-border-radius: 1rem;
		--m-border-gradient-before: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 125.11%
		);
		border-radius: var(--m-border-radius);
		background: hsl(var(--aw-color-card));
		backdrop-filter: blur(8px);

		padding: 0.5rem;
		padding-block-start: 0;

		text-align: left;

		.top {
			color: var(--greyscale-50, #ededf0);
			font-family: Aeonik Pro;
			font-size: 1.25rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2rem; /* 160% */
			letter-spacing: -0.0125rem;

			padding: 1rem;
			text-align: left;
		}

		.content {
			border-radius: 0.75rem;
			background: rgba(255, 255, 255, 0.04);
			backdrop-filter: blur(30px);

			position: relative;
		}
	}
</style>
