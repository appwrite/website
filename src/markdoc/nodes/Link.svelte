<script lang="ts">
	export let href: string;
	export let title: string;

	const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
	const target = isExternal ? '_blank' : undefined;
	const rel = isExternal ? 'noopener nofollow' : undefined;
</script>

<a class="aw-link" {href} {title} {target} {rel}>
	<slot />
	{#if !isExternal}
	<!-- <span class="icon-cheveron-right" /> -->
	{/if}
</a>
