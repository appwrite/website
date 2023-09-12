import type { LanguageFn } from 'highlight.js';
import hljs from 'highlight.js/lib/core';
import dart from 'highlight.js/lib/languages/dart';
import diff from 'highlight.js/lib/languages/diff';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import php from 'highlight.js/lib/languages/php';
import shell from 'highlight.js/lib/languages/shell';
import swift from 'highlight.js/lib/languages/swift';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

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
	diff: diff
} as const satisfies Record<string, LanguageFn>;
export type Language = keyof typeof languages;

const registerLanguages = () => {
	Object.entries(languages).forEach(([key, value]) => {
		hljs.registerLanguage(key, value);
	});
};

type Args = {
	content: string;
	language?: Language;
};

export const getCodeHtml = (args: Args) => {
	registerLanguages();

	const { content, language } = args;
	const res = hljs.highlight(content, { language: language ?? 'sh' }).value;

	return `<pre><code class="language-${language}">${res}</code></pre>`;
};
