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
import http from 'highlight.js/lib/languages/http';
import kotlin from 'highlight.js/lib/languages/kotlin';
import java from 'highlight.js/lib/languages/java';
import css from 'highlight.js/lib/languages/css';
import graphql from 'highlight.js/lib/languages/graphql';
import { Platform } from './references';

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
	cs: csharp,
	http: http,
	kotlin: kotlin,
	java: java,
	css: css,
	graphql: graphql
} as const satisfies Record<string, LanguageFn>;

const platformAliases: Record<Platform, keyof typeof languages> = {
	[Platform.ClientWeb]: 'js',
	[Platform.ClientFlutter]: 'dart',
	[Platform.ClientAndroidJava]: 'java',
	[Platform.ClientAndroidKotlin]: 'kotlin',
	[Platform.ClientApple]: 'swift',
	[Platform.ServerDart]: 'dart',
	[Platform.ServerDeno]: 'ts',
	[Platform.ServerDotNet]: 'cs',
	[Platform.ServerNodeJs]: 'js',
	[Platform.ServerPhp]: 'php',
	[Platform.ServerPython]: 'py',
	[Platform.ServerRuby]: 'rb',
	[Platform.ServerSwift]: 'swift'
};

Object.entries(languages).forEach(([key, value]) => {
	hljs.registerLanguage(key, value);
});

Object.entries(platformAliases).forEach(([key, value]) => {
	hljs.registerAliases(key, {
		languageName: value
	});
});

export type Language = keyof typeof languages | Platform;

type Args = {
	content: string;
	language?: Language;
	withLineNumbers?: boolean;
};

export const getCodeHtml = (args: Args) => {
	const { content, language, withLineNumbers } = args;
	const res = hljs.highlight(content, { language: language ?? 'sh' }).value;
	const lines = res.split(/\n/g).slice(0, -1);
	const final = lines.reduce((carry, line) => {
		carry += `<span class="line">${line}</span>\n`;
		return carry;
	}, '');

	return `<pre><code class="language-${language} ${
		withLineNumbers ? 'line-numbers' : ''
	}">${final}</code></pre>`;
};
