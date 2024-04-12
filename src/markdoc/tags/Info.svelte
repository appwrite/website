<script lang="ts">
	export let title: string;
</script>

<div class="web-inline-info">
	<span class="icon-info" aria-hidden="true" />
	<h5 class="web-sub-body-500 web-u-color-text-primary">{title}</h5>
	<slot />
</div>
