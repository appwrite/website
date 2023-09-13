import type { LanguageFn } from 'highlight.js';
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
import diff from 'highlight.js/lib/languages/diff';
import ruby from 'highlight.js/lib/languages/ruby';
import csharp from 'highlight.js/lib/languages/csharp';

const languages = {
	js: javascript,
	dart: dart,
	ts: typescript,
	xml: xml,
	html: xml,
	sh: shell,
	md: markdown,
	json: json,
	swift: swift,
	php: php,
	diff: diff,
	py: python,
	rb: ruby,
	cs: csharp
} as const satisfies Record<string, LanguageFn>;

Object.entries(languages).forEach(([key, value]) => {
	hljs.registerLanguage(key, value);
});

export type Language = keyof typeof languages;

type Args = {
	content: string;
	language?: Language;
};

export const getCodeHtml = (args: Args) => {
	const { content, language } = args;
	const res = hljs.highlight(content, { language: language ?? 'sh' }).value;

	return `<pre><code class="language-${language}">${res}</code></pre>`;
};
