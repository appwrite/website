<script lang="ts">
	import { setContext } from 'svelte';

	export let href: string;
	export let title: string;

	setContext('no-paragraph', true);
</script>

<li>
	<a {href} class="aw-card is-normal" style:margin-block-end="0">
		<h4 class="aw-sub-body-500 aw-u-color-text-primary">
			{title}
		</h4>
		<p class="aw-sub-body-400 u-margin-block-start-4" style:margin-block="0">
			<slot />
		</p>
	</a>
</li>
