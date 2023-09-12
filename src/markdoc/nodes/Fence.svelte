<script lang="ts">
	import '$scss/hljs.css';
	import { getContext, hasContext } from 'svelte';
	import { platformMap } from '$lib/utils/references';
	import { Tooltip } from '$lib/components';
	import { copy } from '$lib/utils/copy';
	import type { CodeContext } from '../tags/MultiCode.svelte';
	import { getCodeHtml, type Language } from '$lib/utils/code';
	export let content: string;
	export let language: Language;
	export let process: boolean;
	export let withLineNumbers = true;

	const insideMultiCode = hasContext('multi-code');
	const selected = insideMultiCode ? getContext<CodeContext>('multi-code').selected : null;

	enum CopyStatus {
		Copy = 'Copy',
		Copied = 'Copied!'
	}
	let copyText = CopyStatus.Copy;
	async function handleCopy() {
		await copy(content);

		copyText = CopyStatus.Copied;
		setTimeout(() => {
			copyText = CopyStatus.Copy;
		}, 1000);
	}

	if (insideMultiCode) {
		const ctx = getContext<CodeContext>('multi-code');

		ctx.snippets.update((n) => {
			n.add(language);

			return n;
		});

		ctx.selected.subscribe((n) => {
			if (n === language) {
				ctx.content.set(content);
			}
		});
	}

	const result = process ? getCodeHtml({ content, language: language ?? 'sh' }) : content;
</script>

{#if insideMultiCode}
	{#if $selected === language}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html result}
	{/if}
{:else}
	<section class="theme-dark aw-code-snippet" aria-label="code-snippet panel">
		<header class="aw-code-snippet-header">
			<div class="aw-code-snippet-header-start">
				<div class="u-flex u-gap-16">
					<div class="aw-tag"><span class="text">{platformMap[language]}</span></div>
				</div>
			</div>
			<div class="aw-code-snippet-header-end">
				<ul class="buttons-list u-flex u-gap-8">
					<li class="buttons-list-item aw-u-padding-inline-start-20">
						<Tooltip>
							<button
								on:click={handleCopy}
								class="aw-icon-button"
								aria-label="copy code from code-snippet"
							>
								<span class="aw-icon-copy" aria-hidden="true" />
							</button>
							<svelte:fragment slot="tooltip">
								{copyText}
							</svelte:fragment>
						</Tooltip>
					</li>
				</ul>
			</div>
		</header>
		<div class="aw-code-snippet-content">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html result}
		</div>
	</section>
{/if}
