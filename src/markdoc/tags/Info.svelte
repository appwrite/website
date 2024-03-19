<script lang="ts">
	export let title: string;
</script>

<div class="aw-inline-info">
	<span class="icon-info" aria-hidden="true" />
	<h5 class="aw-sub-body-500 aw-u-color-text-primary">{title}</h5>
	<slot />
</div>
