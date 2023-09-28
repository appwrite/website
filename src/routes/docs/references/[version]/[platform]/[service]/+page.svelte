<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { MainFooter } from '$lib/components';
	import { DEFAULT_HOST } from '$lib/utils/metadata';
	import { layoutState, toggleReferences } from '$lib/layouts/Docs.svelte';
	import { parse } from '$lib/utils/markdown';
	import {
		Platform,
		platformMap,
		preferredPlatform,
		preferredVersion,
		serviceMap,
		versions,
		type Version
	} from '$lib/utils/references';
	import type { LayoutContext } from '$markdoc/layouts/Article.svelte';
	import { Fence, Heading } from '$markdoc/nodes/_Module.svelte';
	import { DOCS_TITLE_SUFFIX } from '$routes/titles.js';
	import { getContext, onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;

	setContext<LayoutContext>('headings', writable({}));

	const headings = getContext<LayoutContext>('headings');

	let selected: string | undefined = undefined;
	headings.subscribe((n) => {
		const noVisible = Object.values(n).every((n) => !n.visible);
		if (selected && noVisible) {
			return;
		}
		for (const key in n) {
			if (n[key].visible) {
				selected = key;
				break;
			}
		}
	});

	function selectPlatform(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		const { version, service } = $page.params;
		const platform = event.currentTarget.value as Platform;
		preferredPlatform.set(platform);
		goto(`/docs/references/${version}/${event.currentTarget.value}/${service}`, {
			noScroll: true
		});
	}

	function selectVersion(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		const { platform, service } = $page.params;
		const version = event.currentTarget.value as Version;
		preferredVersion.set(version);
		goto(`/docs/references/${version}/${platform}/${service}`, {
			noScroll: true
		});
	}

	onMount(() => {
		preferredVersion.set($page.params.version as Version);
		preferredPlatform.set($page.params.platform as Platform);
	});

	$: platform = $page.params.platform as Platform;
	$: platformType = platform.startsWith('client-') ? 'CLIENT' : 'SERVER';
	$: serviceName = serviceMap[data.service?.name];
	$: title = serviceName + DOCS_TITLE_SUFFIX;
	$: description = data.service?.description;
	$: ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';
</script>

<svelte:head>
	<!-- Titles -->
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<!-- Desscription -->
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<!-- Image -->
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="u-contents">
	<article class="aw-article u-contents">
		<header class="aw-article-header">
			<div class="aw-article-header-start">
				<h1 class="aw-title">{serviceName}</h1>
				<div class="aw-inline-code">{platformType}</div>
			</div>
			<div class="aw-article-header-end">
				<div class="u-flex u-gap-24 aw-u-color-text-primary">
					<div class="u-flex u-cross-center u-gap-8">
						<label class="u-small is-not-mobile" for="platform">Platform</label>
						<div class="aw-select is-colored">
							<select id="platform" on:change={selectPlatform} value={platform}>
								<optgroup label="Client">
									{#each Object.values(Platform).filter((p) => p.startsWith('client-')) as platform}
										<option value={platform}>{platformMap[platform]}</option>
									{/each}
								</optgroup>
								<optgroup label="Server">
									{#each Object.values(Platform).filter((p) => p.startsWith('server-')) as platform}
										<option value={platform}>{platformMap[platform]}</option>
									{/each}
								</optgroup>
							</select>
							<span class="icon-cheveron-down" aria-hidden="true" />
						</div>
					</div>
					<div class="u-flex u-cross-center u-gap-8">
						<label class="u-small is-not-mobile" for="version">Version</label>
						<div class="aw-select is-colored">
							<select id="version" on:change={selectVersion} value={$page.params.version}>
								<option value="cloud">Cloud</option>
								{#each versions as version}
									<option value={version}>{version}</option>
								{/each}
							</select>
							<span class="icon-cheveron-down" aria-hidden="true" />
						</div>
					</div>
				</div>
			</div>
		</header>
		<div class="aw-article-content">
			<section class="aw-article-content-grid-6-4">
				<div class="aw-article-content-grid-6-4-column-1 u-flex-vertical u-gap-32">
					{@html parse(data.service?.description)}
				</div>
				{#if data.methods.length === 0}
					<div class="aw-article-content-grid-6-4-column-2 u-flex-vertical u-gap-32">
						<div class="aw-inline-info">
							<span class="icon-info" aria-hidden="true" />
							<h5 class="aw-sub-body-500 aw-u-color-text-primary">
								No endpoint found for this version and platform
							</h5>
							Please switch to a newer version or different platform.
						</div>
					</div>
				{/if}
			</section>
			{#each data.methods as method (method.id)}
				<section class="aw-article-content-grid-6-4">
					<div class="aw-article-content-grid-6-4-column-1 u-flex-vertical u-gap-32">
						<header class="aw-article-content-header">
							<Heading id={method.id} level={2}>{method.title}</Heading>
						</header>
						<p class="aw-sub-body-400">
							{@html parse(method.description)}
						</p>
						<ul
							class="collapsible u-width-full-line"
							style="--p-toggle-border-color: var(--aw-color-border);"
						>
							{#if method.parameters.length > 0}
								<li class="collapsible-item">
									<details class="collapsible-wrapper" open>
										<summary class="collapsible-button">
											<span class="text">Request</span>
											<div class="icon aw-u-color-text-primary">
												<span class="icon-cheveron-down" aria-hidden="true" />
											</div>
										</summary>
										<div class="collapsible-content">
											<div class="aw-card is-transparent u-padding-16 u-margin-block-start-16">
												<ul class="u-flex-vertical">
													{#each method.parameters as parameter, i}
														{@const first = i === 0}
														<li
															class:u-sep-block-start={!first}
															class:u-padding-block-start-16={!first}
															class="u-margin-block-start-16"
														>
															<article>
																<header class="u-flex u-cross-baseline u-gap-8">
																	<span class="aw-eyebrow aw-u-color-text-primary">
																		{parameter.name}
																	</span>
																	<span class="aw-caption-400">{parameter.type}</span>
																	{#if parameter.required}
																		<div class="aw-tag">required</div>
																	{/if}
																</header>
																<p class="aw-sub-body-400 u-margin-block-start-16">
																	{@html parse(parameter.description)}
																</p>
															</article>
														</li>
													{/each}
												</ul>
											</div>
										</div>
									</details>
								</li>
							{/if}
							<li class="collapsible-item">
								<details class="collapsible-wrapper">
									<summary class="collapsible-button">
										<span class="text">Response</span>
										<div class="icon aw-u-color-text-primary">
											<span class="icon-cheveron-down" aria-hidden="true" />
										</div>
									</summary>
									<div class="collapsible-content">
										<div class="aw-card is-transparent u-padding-16 u-margin-block-start-16">
											<ul>
												{#each method.responses as response}
													{#if response.models}
														<li>
															<article>
																<header class="u-flex u-cross-baseline u-gap-8">
																	<span class="aw-eyebrow aw-u-color-text-primary">
																		{response.code}
																	</span>
																	<span class="aw-caption-400">application/json</span>
																</header>
																<ul class="aw-sub-body-400 u-margin-block-start-16">
																	{#each response.models as model}
																		<li>
																			<a
																				class="aw-link"
																				href={`/docs/references/${$page.params.version}/models/${model.id}`}
																			>
																				{model.name}
																			</a>
																		</li>
																	{/each}
																</ul>
															</article>
														</li>
													{/if}
												{/each}
											</ul>
										</div>
									</div>
								</details>
							</li>
						</ul>
					</div>
					<div class="aw-article-content-grid-6-4-column-2 u-flex-vertical u-gap-32">
						<div class="u-contents theme-dark">
							<div
								class="u-position-sticky"
								style="--inset-block-start:var(--p-grid-huge-navs-secondary-sticky-position);"
							>
								<Fence language={platform} content={method.demo} process withLineNumbers={false} />
							</div>
						</div>
					</div>
				</section>
			{/each}
		</div>
		<aside class="aw-references-menu" class:is-open={$layoutState.showReferences}>
			<button class="aw-icon-button" id="refOpen" on:click={toggleReferences}>
				<span class="icon-menu-alt-4" aria-hidden="true" />
			</button>
			<div class="aw-references-menu-content">
				<div
					class="aw-references-menu-header u-flex u-main-space-between u-cross-center u-gap-16 u-margin-block-start-24"
				>
					<h5 class="aw-references-menu-title aw-eyebrow">On This Page</h5>
					<button class="aw-icon-button" id="refClose" on:click={toggleReferences}>
						<span class="icon-x" aria-hidden="true" />
					</button>
				</div>
				<ul class="aw-references-menu-list">
					{#each data.methods as method}
						<li class="aw-references-menu-item">
							<a
								href={`#${method.id}`}
								class="aw-references-menu-link aw-caption-400"
								class:is-selected={method.id === selected}>{method.title}</a
							>
						</li>
					{/each}
				</ul>
				<div class="u-sep-block-start aw-u-padding-block-20">
					<a class="aw-link u-inline-flex u-cross-center u-gap-8" href="#top">
						<span class="aw-icon-arrow-up" aria-hidden="true" />
						<span class="aw-sub-body-500">Back to top</span>
					</a>
				</div>
			</div>
		</aside>
	</article>
</main>
<MainFooter variant="docs" />
