<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';

	export type LayoutContext = Writable<
		Record<string, {
			text: string;
			step?: number;
		}>
	>;
</script>

<script lang="ts">
	import { Docs } from '$lib/layouts';
	import Sidebar from '$routes/docs/Sidebar.svelte';
	import { getContext, setContext } from 'svelte';

	export let title: string;
	export let difficulty: string;
	export let readtime: string;

	setContext<LayoutContext>('headings', writable({}));

	const headings = getContext<LayoutContext>('headings');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Docs variant="two-side-navs">
	<Sidebar />
	<main class="u-contents">
		<article class="aw-article u-contents">
			<header class="aw-article-header">
				<div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
					<button
						class="
                            aw-button is-text aw-is-only-mobile
                            aw-u-padding-block-0 aw-u-padding-inline-start-0 aw-u-padding-inline-end-12"
						aria-label="previous page"
					>
						<span class="icon-cheveron-left" aria-hidden="true" />
					</button>
					<ul class="aw-metadata aw-caption-400">
						{#if difficulty}
							<li>{difficulty}</li>
						{/if}
						{#if readtime}
							<li>{readtime} min</li>
						{/if}
					</ul>
					<div class="u-position-relative u-flex u-cross-center">
						<button
							class="
                            aw-button is-text is-icon aw-u-cross-center aw-u-size-40
                            u-position-absolute u-inset-inline-start-0 aw-u-translate-x-negative"
							aria-label="previous page"
						>
							<span
								class="icon-cheveron-left aw-u-font-size-24 aw-u-color-text-primary"
								aria-hidden="true"
							/>
						</button>
						<h1 class="aw-title">{title}</h1>
					</div>
				</div>
				<div class="aw-article-header-end" />
			</header>
			<div class="aw-article-content">
				<slot />

				<section class="aw-content-footer">
					<header class="aw-content-footer-header">
						<div class="aw-content-footer-header-start">
							<h5 class="aw-main-body-500 aw-u-color-text-primary">Was this page helpful?</h5>
							<div class="u-flex u-gap-8">
								<input
									class="aw-radio-button is-like"
									type="radio"
									aria-label="Helpful"
									name="happy"
								/>
								<input
									class="aw-radio-button is-dislike"
									type="radio"
									aria-label="UnHelpful"
									name="happy"
								/>
							</div>
						</div>
						<div class="aw-content-footer-header-end">
							<ul class="aw-metadata aw-caption-400">
								<li>Last updated on July 16, 2023</li>
								<li>
									<button class="">
										<!-- TODO: wait for implement icons in website -->
										<span class="icon-edit" aria-hidden="true" />
										<span>Update on GitHub</span>
									</button>
								</li>
							</ul>
						</div>
					</header>
					<div class="aw-card is-transparent" style="--card-padding:1rem">
						<label for="message">
							<span class="aw-u-color-text-primary">What did you like?</span>
							<span class="">(optional)</span>
						</label>
						<textarea
							class="aw-input-text u-margin-block-start-8"
							id="message"
							placeholder="Write your message"
						/>
						<div class="u-flex u-main-end u-margin-block-start-16">
							<button class="aw-button is-text">
								<span class="">Cancel</span>
							</button>
							<button class="aw-button">
								<span class="">Submit</span>
							</button>
						</div>
					</div>
				</section>
			</div>
			<aside class="aw-references-menu aw-u-padding-inline-start-24">
				<div class="aw-references-menu-content">
					<div class="u-flex u-main-space-between u-cross-center u-gap-16">
						<h5 class="aw-references-menu-title aw-eyebrow">On This Page</h5>
					</div>
					<ol class="aw-references-menu-list">
						{#each Object.entries($headings) as [id, heading]}
							<li class="aw-references-menu-item">
								<a href={`#${id}`} class="aw-references-menu-link">
									{#if heading.step !== undefined}
										<span class="aw-numeric-badge">{heading.step}</span>
									{/if}
									<span class="aw-caption-400">{heading.text}</span>
								</a>
							</li>
						{/each}
					</ol>
					<div class="u-sep-block-start u-padding-block-start-20">
						<a class="aw-button is-text u-main-start aw-u-padding-inline-0" href=".">
							<span class="icon-arrow-up" aria-hidden="true" />
							<span class="aw-sub-body-500">Back to top</span>
						</a>
					</div>
				</div>
			</aside>
		</article>
	</main>
	<footer class="aw-main-footer u-margin-block-start-48 u-small">
		<div class="aw-main-footer-grid-1">
			<ul class="aw-main-footer-grid-1-column-1 u-flex u-gap-8">
				<li>
					<button class="aw-icon-button" aria-label="Appwrite on Discord">
						<span class="icon-discord" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite GitHub">
						<span class="icon-github" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite on Twitter">
						<span class="icon-twitter" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite on LinkedIn">
						<span class="icon-linkedin" aria-hidden="true" />
					</button>
				</li>
				<li>
					<button class="aw-icon-button" aria-label="Appwrite YouTube">
						<span class="icon-youtube" aria-hidden="true" />
					</button>
				</li>
			</ul>
			<div class="aw-main-footer-grid-1-column-2">
				<div class="aw-select is-colored">
					<button class="physical-select">
						<span class="icon-moon" aria-hidden="true" />
						<span>Dark</span>
					</button>
					<span class="icon-cheveron-down" aria-hidden="true" />
				</div>
			</div>
			<ul class="aw-main-footer-grid-1-column-3 aw-main-footer-links">
				<li>
					<a href=".">Supports</a>
				</li>
				<li>
					<a href=".">Status</a>
				</li>
				<li>
					<a href=".">Changelog</a>
				</li>
			</ul>
			<div class="aw-main-footer-grid-1-column-4 aw-main-footer-copyright">
				Copyright © 2023 Appwrite
			</div>
		</div>
	</footer>
</Docs>
