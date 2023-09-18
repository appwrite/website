<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { MainFooter } from '$lib/components';
	import { parse } from '$lib/utils/markdown';
	import { Platform, platformMap, serviceMap, versions } from '$lib/utils/references.js';
	import { Fence } from '$markdoc/nodes/_Module.svelte';

	export let data;

	function handleRefClick() {
		document.querySelector('.aw-references-menu')?.classList.toggle('is-open');
		document.querySelector('.aw-grid-two-side-navs')?.classList.remove('is-open');
	}

	function selectPlatform(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		const { version, service } = $page.params;
		goto(`/docs/references/${version}/${event.currentTarget.value}/${service}`, {
			noScroll: true
		});
	}

	function selectVersion(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		const { platform, service } = $page.params;
		goto(`/docs/references/${event.currentTarget.value}/${platform}/${service}`, {
			noScroll: true
		});
	}

	$: platform = $page.params.platform as Platform;
	$: platformType = platform.startsWith('client-') ? 'CLIENT' : 'SERVER';
</script>

<main class="u-contents">
	<article class="aw-article u-contents">
		<header class="aw-article-header">
			<div class="aw-article-header-start">
				<h1 class="aw-title">{serviceMap[data.service?.name]}</h1>
				<div class="aw-inline-code">{platformType}</div>
			</div>
			<div class="aw-article-header-end">
				<div class="u-flex u-gap-24 aw-u-color-text-primary">
					<div class="u-flex u-cross-center u-gap-8">
						<label class="u-small" for="platform">Platform</label>
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
						<label class="u-small" for="version">Version</label>
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
					<p class="aw-paragraph-md">
						{data.service?.description}
					</p>
				</div>
			</section>
			{#each data.methods as method (method.id)}
				<section class="aw-article-content-grid-6-4">
					<div class="-article-content-grid-6-4-column-1 u-flex-vertical u-gap-32">
						<header class="aw-article-content-header">
							<h2 id={method.id} class="aw-main-body-500 aw-snap-location">{method.title}</h2>
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
																	<h3 class="aw-eyebrow aw-u-color-text-primary">
																		{parameter.name}
																	</h3>
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
													<li>
														<article>
															<header class="u-flex u-cross-baseline u-gap-8">
																<h3 class="aw-eyebrow aw-u-color-text-primary">
																	{response.code}
																</h3>
																<span class="aw-caption-400">{response.model?.name}</span>
															</header>
															<p class="aw-sub-body-400 u-margin-block-start-16">
																<a href="#">Payload <span class="icon-cheveron-right" /></a>
															</p>
														</article>
													</li>
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
		<aside class="aw-references-menu">
			<button class="aw-icon-button" id="refOpen" on:click={handleRefClick}>
				<span class="icon-menu-alt-4" aria-hidden="true" />
			</button>
			<div class="aw-references-menu-content">
				<div class="u-flex u-main-space-between u-cross-center u-gap-16">
					<h5 class="aw-references-menu-title aw-eyebrow">On This Page</h5>
					<button class="aw-icon-button" id="refClose" on:click={handleRefClick}>
						<span class="icon-x" aria-hidden="true" />
					</button>
				</div>
				<ul class="aw-references-menu-list">
					{#each data.methods as method}
						<li class="aw-references-menu-item">
							<a href={`#${method.id}`} class="aw-references-menu-link aw-caption-400"
								>{method.title}</a
							>
						</li>
					{/each}
				</ul>
				<div class="u-sep-block-start u-padding-block-start-20">
					<a class="aw-button is-text u-main-start aw-u-padding-inline-0" href="#top">
						<span class="icon-arrow-up" aria-hidden="true" />
						<span class="aw-sub-body-500">Back to top</span>
					</a>
				</div>
			</div>
		</aside>
	</article>
</main>
<MainFooter variant="docs" />
