<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { MeiliSearch } from 'meilisearch';

	export let open: boolean = true;
	let value: string;
	let element: HTMLInputElement;

	const client = new MeiliSearch({
		host: 'https://search.appwrite.org',
		apiKey: 'd7e83e21c0daf2a471ef4c463c7872e55b91b0cd02e2d20e9c6f6f1c4cd09ed3'
	});
	const index = client.index('website');

	async function search(value: string) {
		const promise = index.search(value, {
			limit: 10
		});
		if (dev)
			return promise.then((results) => {
				return {
					...results,
					hits: results.hits.map((hit) => {
						return {
							...hit,
							url: hit.url.replace('https://website-appwrite.vercel.app', '')
						};
					})
				};
			});

		return promise;
	}
</script>

<dialog class="modal" class:is-open={open}>
	<input type="text" bind:value bind:this={element} />
	<div style:height="90%" style:overflow="auto">
		{#if value}
			<ul class="aw-pink-dots">
				{#await search(value) then results}
					{#each results.hits as hit}
						<li>
							<a href={hit.url} class="aw-link">
								<h3>{hit.hierarchy_lvl0}</h3>
								<p>{hit.content}</p>
							</a>
						</li>
					{:else}
						<h1>no results for '{value}'</h1>
					{/each}
				{/await}
			</ul>
		{/if}
	</div>
</dialog>
<div class="backdrop" on:click={() => (open = false)} />

<style>
	.modal {
		display: none;
		height: 80vh;
		width: 80vw;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		padding: 1em;
		z-index: 999999;
	}

	.modal.is-open {
		display: block;
	}

	.backdrop {
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 999998;
	}

	.modal.is-open + .backdrop {
		display: block;
	}
</style>
