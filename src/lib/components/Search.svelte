<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Action } from 'svelte/action';
	import { MeiliSearch, type Hits, type Hit } from 'meilisearch';
	import { afterNavigate } from '$app/navigation';

	export let open: boolean = true;

	let value: string;
	let container: HTMLDivElement;

	const client = new MeiliSearch({
		host: 'https://search.appwrite.org',
		apiKey: 'd7e83e21c0daf2a471ef4c463c7872e55b91b0cd02e2d20e9c6f6f1c4cd09ed3'
	});
	const index = client.index<Props>('website');

	type Props = {
		url: string;
		title?: string;
		uid?: string;
		meta?: Record<string, string>;
		page_block?: number;
		urls_tags?: Array<string>;
		h1?: string;
		h2?: string;
		h3?: string;
		h4?: string;
		h5?: string;
		h6?: string;
		p?: string;
		anchor?: string;
	};

	let results: Hits<Props> = [];

	async function search(value: string) {
		return index.search(value, {
			limit: 20
		});
	}

	async function handleInput(value: string) {
		if (!value) {
			results = [];
		} else {
			const response = await search(value);
			results = response.hits;
		}
	}

	function handleExit(event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		if (event.target === container) {
			open = false;
		}
	}

	function createHref(hit: Hit<Props>): string {
		const anchor = hit.anchor === '#' ? '' : hit.anchor ?? '';
		const target = new URL(hit.url + anchor);

		return target.toString();
	}

	const recommended: Hits<Props> = [
		{
			uid: 'recommended-references-account',
			url: 'https://website-appwrite.vercel.app/docs/references/cloud/client-web/databases',
			h1: 'References',
			h2: 'Databases'
		},
		{
			uid: 'recommended-references-teans',
			url: 'https://website-appwrite.vercel.app/docs/references/cloud/client-web/teams',
			h1: 'References',
			h2: 'Teams'
		},
		{
			uid: 'recommended-references-databases',
			url: 'https://website-appwrite.vercel.app/docs/references/cloud/client-web/databases',
			h1: 'References',
			h2: 'Databases'
		},
		{
			uid: 'recommended-references-storage',
			url: 'https://website-appwrite.vercel.app/docs/references/cloud/client-web/storage',
			h1: 'References',
			h2: 'Storage'
		}
	];

	const arrowKeyFocus: Action = (node) => {
		const callback = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowDown':
					{
						event.preventDefault();
						const index = Number(node.getAttribute('data-hit'));
						if (index === null) return;
						const target = index + 1;
						const element = document.querySelector(`[data-hit="${target}"]`) as HTMLElement;
						element?.focus();
					}
					break;
				case 'ArrowUp':
					{
						event.preventDefault();
						const index = Number(node.getAttribute('data-hit'));
						if (index === null) return;
						const target = index - 1;
						const element = document.querySelector(`[data-hit="${target}"]`) as HTMLElement;
						element?.focus();
					}
					break;
			}
		};

		node.addEventListener('keydown', callback);

		return {
			destroy() {
				node.removeEventListener('keydown', callback);
			}
		};
	};

	afterNavigate(() => {
		open = false;
	});

	$: handleInput(value);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if open}
	<div
		class="u-position-fixed u-padding-0 u-inset-0 u-flex u-main-center u-cross-center"
		style:z-index="100"
		style:background="hsl(var(--aw-color-black) / 0.3)"
		style:backdrop-filter="blur(15px)"
		style:-webkit-backdrop-filter="blur(15px)"
		bind:this={container}
		on:click={handleExit}
		transition:fade={{ duration: 50 }}
	>
		<div
			class="aw-input-text-search-wrapper aw-u-max-width-680 aw-u-margin-inline-20 u-width-full-line"
		>
			<span class="aw-icon-search u-z-index-5" aria-hidden="true" style="inset-block-start:0.9rem" />
			<div id="searchbox" />

			<!-- svelte-ignore a11y-autofocus -->
			<input
				autofocus
				class="aw-input-button -u-padding-block-0 u-position-relative u-z-index-1"
				type="text"
				id="search"
				bind:value
				placeholder="Search in docs"
				style="border-end-start-radius:0; border-end-end-radius:0;"
				use:arrowKeyFocus
				data-hit="-1"
			/>
			<div
				class="aw-card is-normal u-overflow-y-auto"
				style="--card-padding-mobile:1rem; border-radius:0 0 0.5rem 0.5rem; margin-block-start:-0.0625rem; max-block-size: min(18.75rem, calc(100vh - 5.5rem)); border-block-start-width:0;"
			>
				<div class="u-flex-vertical u-gap-24">
					{#if value}
						{#if results.length > 0}
							<section>
								<h6 class="aw-eyebrow">{results.length} results found</h6>
								<ul class="u-margin-block-start-8">
									{#each results as hit, i (hit.uid)}
										<li>
											<a
												data-hit={i}
												href={createHref(hit)}
												use:arrowKeyFocus
												class="aw-button aw-caption-400 is-text u-flex-vertical u-gap-8 u-min-width-100-percent aw-u-padding-block-4 aw-u-cross-start u-max-width-100-percent"
											>
												<div class="aw-u-trim-1">
													<span class="aw-u-color-text-secondary">{hit.h1}</span>
													{#if hit.h2}
														<span class="aw-u-color-text-secondary"> / </span>
														<span class="aw-u-color-text-primary">{hit.h2}</span>
													{/if}
												</div>
												{#if hit.p}
													<div class="u-inline aw-u-color-text-secondary aw-u-trim-1">
														{hit.p}
													</div>
												{/if}
											</a>
										</li>
									{/each}
								</ul>
							</section>
						{:else}
							<p class="aw-caption-400">No results found for <span class="u-bold">{value}</span></p>
						{/if}
					{/if}
					<section>
						<h6 class="aw-eyebrow">Recommended</h6>
						<ul class="u-flex-vertical u-gap-4 u-margin-block-start-8">
							{#each recommended as hit, i (hit.uid)}
								{@const index = i + (results.length ? results.length : 0)}
								<li>
									<a
										data-hit={index}
										href={createHref(hit)}
										use:arrowKeyFocus
										class="aw-button aw-caption-400 is-text u-flex-vertical u-gap-8 u-min-width-100-percent aw-u-padding-block-4 aw-u-cross-start"
									>
										<div class="aw-u-trim-1">
											<span class="aw-u-color-text-secondary">{hit.h1}</span>
											{#if hit.h2}
												<span class="aw-u-color-text-secondary"> / </span>
												<span class="aw-u-color-text-primary">{hit.h2}</span>
											{/if}
										</div>
									</a>
								</li>
							{/each}
						</ul>
					</section>
				</div>
			</div>
		</div>
	</div>
{/if}
