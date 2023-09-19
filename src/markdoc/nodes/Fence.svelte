<script lang="ts">
	import './Fence.css';
	import { getCodeHtml, type Language } from '$lib/utils/code';
	import { getContext, hasContext } from 'svelte';
	import type { CodeContext } from '../tags/MultiCode.svelte';
	export let content: string;
	export let language: Language;
	export let process: boolean;

	const insideMultiCode = hasContext('multi-code');
	const selected = insideMultiCode ? getContext<CodeContext>('multi-code').selected : null;

	if (insideMultiCode) {
		getContext<CodeContext>('multi-code').snippets.update((n) => {
			n.add(language);

			return n;
		});
	}

	$: result = process ? getCodeHtml({ content, language: language ?? 'sh' }) : content;
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
				<!-- <div class="u-flex u-gap-16">
					<div class="aw-tag"><span class="text">Default</span></div>
				</div> -->
			</div>
			<div class="aw-code-snippet-header-end">
				<ul class="buttons-list u-flex u-gap-8">
					<li class="buttons-list-item aw-u-padding-inline-start-20">
						<button class="aw-icon-button" aria-label="copy code from code-snippet">
							<span class="icon-duplicate" aria-hidden="true" />
						</button>
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
