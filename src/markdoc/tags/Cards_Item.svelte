<script lang="ts">
	import { setContext } from 'svelte';

	export let href: string;
	export let icon = '';
	export let title: string;

	setContext('no-paragraph', true);
</script>

<li>
	<a {href} class="web-card is-normal" style:margin-block-end="0">
		<header class="u-flex u-cross-baseline u-gap-4">
			{#if icon}
			<span
				class="{icon} web-u-font-size-24"
				aria-hidden="true"
			/>
			{/if}
			<h4 class="web-sub-body-500 web-u-color-text-primary">
				{title}
			</h4>
		</header>
		<p class="web-sub-body-400 u-margin-block-start-4" style:margin-block="0">
			<slot />
		</p>
	</a>
</li>
