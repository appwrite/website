<script context="module" lang="ts">
	import './Fence.css';
	import hljs from 'highlight.js/lib/core';
	import dart from 'highlight.js/lib/languages/dart';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import xml from 'highlight.js/lib/languages/xml';
	import shell from 'highlight.js/lib/languages/shell';
	import markdown from 'highlight.js/lib/languages/markdown';
	import json from 'highlight.js/lib/languages/json';
	import swift from 'highlight.js/lib/languages/swift';
	import php from 'highlight.js/lib/languages/php';
	import python from 'highlight.js/lib/languages/python';
	import ruby from 'highlight.js/lib/languages/ruby';
	import kotlin from 'highlight.js/lib/languages/kotlin';
	import java from 'highlight.js/lib/languages/java';
	import csharp from 'highlight.js/lib/languages/csharp';
	import cpp from 'highlight.js/lib/languages/cpp';
	import bash from 'highlight.js/lib/languages/bash';
	import powershell from 'highlight.js/lib/languages/powershell';
	import dos from 'highlight.js/lib/languages/dos';
	import yaml from 'highlight.js/lib/languages/yaml';

	import diff from 'highlight.js/lib/languages/diff';
	import { getContext, hasContext } from 'svelte';
	import type { CodeContext } from '../tags/MultiCode.svelte';

	hljs.registerLanguage('dart', dart);
	hljs.registerLanguage('js', javascript);
	hljs.registerLanguage('ts', typescript);
	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('html', xml);
	hljs.registerLanguage('sh', shell);
	hljs.registerLanguage('md', markdown);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('swift', swift);
	hljs.registerLanguage('ruby', ruby);
	hljs.registerLanguage('php', php);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('csharp', csharp);
	hljs.registerLanguage('cpp', cpp);
	hljs.registerLanguage('kotlin', kotlin);
	hljs.registerLanguage('java', java);
	hljs.registerLanguage('dart', dart);
	hljs.registerLanguage('deno', javascript);
	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('powershell', powershell);
	hljs.registerLanguage('cmd', dos);
	hljs.registerLanguage('yaml', yaml);	
	hljs.registerLanguage('diff', diff);
</script>

<script lang="ts">
	export let content: string;
	export let language: string;
	export let process: boolean;

	const insideMultiCode = hasContext('multi-code');
	const selected = insideMultiCode ? getContext<CodeContext>('multi-code').selected : null;

	if (insideMultiCode) {
		getContext<CodeContext>('multi-code').snippets.update((n) => {
			n.add(language);

			return n;
		});
	}

	const result = process ? hljs.highlight(content, { language: language ?? 'sh' }).value : content;
</script>

{#if insideMultiCode}
	{#if $selected === language}
		<pre><code class={`language-${language}`}>{@html result}</code></pre>
	{/if}
{:else}
	<section class="theme-dark aw-code-snippet" aria-label="code-snippet panel">
		<header class="aw-code-snippet-header">
			<div class="aw-code-snippet-header-start">
				<div class="u-flex u-gap-16">
					<div class="aw-tag"><span class="text">Default</span></div>
				</div>
			</div>
			<div class="aw-code-snippet-header-end">
				<ul class="buttons-list u-flex u-gap-8">
					<li class="buttons-list-item aw-u-padding-inline-start-20">
						<button class="aw-icon-button" aria-label="copy code from code-snippet"
							><span class="icon-duplicate" aria-hidden="true" /></button
						>
					</li>
				</ul>
			</div>
		</header>
		<div class="aw-code-snippet-content">
			<pre><code class={`language-${language}`}>{@html result}</code></pre>
		</div>
	</section>
{/if}

<style lang="scss">

</style>
