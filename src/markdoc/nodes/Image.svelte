<script lang="ts">
	export let src: string;
	export let alt: string;
	export let title: string;
</script>

<div class="aw-media">
	<img {src} {alt} {title} loading="lazy" />
</div>
