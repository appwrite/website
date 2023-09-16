<script lang="ts">
	import { slide } from 'svelte/transition';
	import { storageController } from '.';
	import { flip } from '$lib/utils/flip';

	const { state } = storageController;
</script>

<div class="pseudo-table">
	<div class="header">
		<span class="aw-eyebrow">Filename</span>
		<span class="aw-eyebrow">Type</span>
		<span class="aw-eyebrow">Size</span>
	</div>
	{#each $state.files as file (file.src)}
		<div class="row" in:slide={{ duration: 150 }} animate:flip={{ duration: 150 }}>
			<div class="img-wrapper">
				<img src={file.src} alt="" />
				<span>{file.filename}</span>
			</div>
			<span class="truncated">{file.type}</span>
			<span class="truncated">{file.size}</span>
		</div>
	{/each}
</div>

<style lang="scss">
	.header,
	.row {
		grid-template-columns: 7rem 1fr 1fr !important;
		gap: 1.5rem 3rem;
	}

	.img-wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
