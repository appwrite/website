<script lang="ts">
	export let href: string;
	export let title: string;

	const target = href.startsWith('http') ? '_blank' : undefined;
</script>

<a class="aw-link" {href} {title} {target}><slot /></a>
