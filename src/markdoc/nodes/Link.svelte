<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a class="aw-link" {href} {title}><slot /></a>
