<script lang="ts">
	import { setContext } from 'svelte';

	export let href: string;
	export let light = '';
	export let dark = '';
	export let title: string;

	setContext('no-paragraph', true);
</script>

<li>
	<a {href} class="web-card is-normal" style:margin-block-end="0">
		<img
			src={dark}
			alt=""
			class="u-only-dark"
			width="48"
			height="48"
		/>
		<img
			src={light}
			alt=""
			class="u-only-light"
			width="48"
			height="48"
		/>
		<h4                                 
			class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-8"
		>
			{title}
		</h4>
		<p class="web-sub-body-400 u-margin-block-start-4">
			<slot />
		</p>
	</a>
</li>
