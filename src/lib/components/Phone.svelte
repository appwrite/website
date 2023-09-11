<div class="phone">
	<div class="inner">
		<slot />
	</div>
</div>

<style lang="scss">
	.phone {
		@include border-gradient;
		--m-border-size: 1px;
		--m-border-radius: 2.5rem;
		--m-border-gradient-after: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 125.11%
		);

		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(8px);
		padding: 0.5rem;

		width: 275px;
		// height: 550px;
		flex-shrink: 0;

		aspect-ratio: 1 / 2;
	}

	.inner {
		background-color: white;
		border-radius: 2rem;
		width: 100%;
		height: 100%;

		position: relative;

		&::after {
			content: '';
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 0.5rem;

			border-radius: 100rem;
			background: var(--label-color-light-primary, #000);

			width: 6.25rem;
			height: 0.25rem;
		}
	}
</style>
