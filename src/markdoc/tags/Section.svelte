<script lang="ts">
	import Heading from '../nodes/Heading.svelte';

	export let id: string;
	export let step: number;
	export let title: string;
	export let isWithLine: boolean = true;
</script>

<section class="web-article-content-section" class:is-with-line={isWithLine}>
	<section class="web-article-content-sub-section">
		<header class="web-article-content-header">
			<span class="web-numeric-badge">{step}</span>
			<Heading level={2} {id} {step}>
				{title}
			</Heading>
		</header>
		<slot />
	</section>
</section>
