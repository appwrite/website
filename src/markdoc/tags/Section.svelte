<script lang="ts">
	import Heading from '../nodes/Heading.svelte';

	export let id: string;
	export let step: number;
	export let title: string;
</script>

<section class="aw-article-content-section is-with-line">
	<section class="aw-article-content-sub-section">
		<header class="aw-article-content-header">
			<span class="aw-numeric-badge">{step}</span>
			<Heading level={2} {id} {step}>
				{title}
			</Heading>
		</header>
		<slot />
	</section>
</section>
