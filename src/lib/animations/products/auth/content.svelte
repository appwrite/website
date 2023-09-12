<script lang="ts">
	import { code } from '$lib/actions/code';
	import { ctx } from '$lib/animations/Products.svelte';

	const { active } = ctx.get();

	const content = `const result = account.create(\n\tID.unique(),\n\t'walterobrian@example.com',\n\t'password',\n\t"Walter O'Brian"\n);`;
</script>

{#if $active}
	<div class="code-console">
		<div class="header">
			<div class="ellipse" />
			<div class="ellipse-2" />
			<div class="ellipse-3" />
		</div>
		<div class="block" use:code={{ content, language: 'js' }} />
	</div>
{/if}

<style lang="scss">
	.code-console {
		@include border-gradient;
		--p-radius: 16px;

		display: flex;
		flex-direction: column;

		background-color: hsl(var(--aw-color-card));
		border-radius: var(--p-radius);
		--m-border-radius: var(--p-radius);
		--m-border-gradient-before: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 125.11%
		);
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.06), -2px 4px 9px 0px rgba(0, 0, 0, 0.06),
			-8px 15px 17px 0px rgba(0, 0, 0, 0.05), -19px 34px 23px 0px rgba(0, 0, 0, 0.03),
			-33px 60px 27px 0px rgba(0, 0, 0, 0.01), -52px 94px 30px 0px rgba(0, 0, 0, 0);
		backdrop-filter: blur(8px);

		width: 334px;
		height: 202px;
		padding: 0 0.25rem 0.25rem;
	}

	.block {
		// position: absolute;
		// width: 326px;
		// height: 166px;
		// top: 32px;
		// left: 4px;
		// border-radius: 12px;
		// overflow: hidden;
		width: 100%;
		flex-grow: 1;
		text-align: left;

		border-radius: 12px;
		background: linear-gradient(129deg, rgba(0, 0, 0, 0.48) 22.38%, rgba(0, 0, 0, 0) 136.5%);
	}

	.header {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.75rem;

		.ellipse {
			background-color: #ec6a5e;

			width: 8px;
			height: 8px;
			top: 12px;
			border-radius: 4px;
		}

		.ellipse-2 {
			background-color: #f5bf4f;

			width: 8px;
			height: 8px;
			top: 12px;
			border-radius: 4px;
		}

		.ellipse-3 {
			background-color: #61c554;

			width: 8px;
			height: 8px;
			top: 12px;
			border-radius: 4px;
		}
	}
</style>
