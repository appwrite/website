<script lang="ts">
	let className = '';
	export { className as class };
</script>

<button class="btn border-gradient {className}">
	<span class="border-gradient-s1" />
	<span class="border-gradient-s2" />
	<span class="text">
		<slot />
	</span>
</button>

<style lang="scss">
	.btn {
		display: flex;
		padding: 0.5625rem 0.875rem;
		align-items: center;

		color: #e8e9f0;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.375rem;
		letter-spacing: -0.0045rem;

		background: rgba(253, 54, 110, 0.04);
		box-shadow: 0px -6px 10px 0px rgba(253, 54, 110, 0.12) inset;

		border-radius: 0.5rem;

		/* Border gradient vars   */
		--border-radius: 0.5rem;
		--border-size: 0.0625rem;
	}

	/* Easy class */
	.border-gradient {
		position: relative;
	}

	[class^='border-gradient'] {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: var(--border-radius);
		border: var(--border-size) solid transparent;
		background: var(--border-gradient) border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: destination-out;
		mask-composite: exclude;
		pointer-events: none;
	}

	.border-gradient-s1 {
		--border-gradient: linear-gradient(
			to bottom,
			rgba(253, 54, 110, 0.48) 0%,
			rgba(253, 54, 110, 0) 180%
		);
	}

	.border-gradient-s2 {
		--border-gradient: radial-gradient(
			42.86% 42.86% at 50.55% -0%,
			rgba(255, 255, 255, 0.2) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}
</style>
