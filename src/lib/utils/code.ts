import type { LanguageFn } from 'highlight.js';
import hljs from 'highlight.js/lib/core';
import go from 'highlight.js/lib/languages/go';
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
import kotlin from 'highlight.js/lib/languages/kotlin';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
import bash from 'highlight.js/lib/languages/bash';
import powershell from 'highlight.js/lib/languages/powershell';
import dos from 'highlight.js/lib/languages/dos';
import yaml from 'highlight.js/lib/languages/yaml';
import plaintext from 'highlight.js/lib/languages/plaintext';
import graphql from 'highlight.js/lib/languages/graphql';
import http from 'highlight.js/lib/languages/http';
import css from 'highlight.js/lib/languages/css';
import groovy from 'highlight.js/lib/languages/groovy';
import ini from 'highlight.js/lib/languages/ini';
import { Platform } from './references';
import { writable } from 'svelte/store';

const languages = {
    js: javascript,
    javascript: javascript,
    dart: dart,
    ts: typescript,
    typescript: typescript,
    deno: typescript,
    xml: xml,
    html: xml,
    sh: shell,
    md: markdown,
    json: json,
    swift: swift,
    php: php,
    diff: diff,
    python: python,
    ruby: ruby,
    csharp: csharp,
    kotlin: kotlin,
    java: java,
    cpp: cpp,
    bash: bash,
    powershell: powershell,
    cmd: dos,
    yaml: yaml,
    text: plaintext,
    graphql: graphql,
    http: http,
    go: go,
    py: python,
    rb: ruby,
    cs: csharp,
    css: css,
    groovy: groovy,
    ini: ini,
    env: ini
} as const satisfies Record<string, LanguageFn>;

const platformAliases: Record<string, keyof typeof languages> = {
    [Platform.ClientWeb]: 'js',
    [Platform.ClientFlutter]: 'dart',
    [Platform.ClientApple]: 'swift',
    [Platform.ClientAndroidJava]: 'java',
    [Platform.ClientAndroidKotlin]: 'kotlin',
    [Platform.ClientReactNative]: 'js',
    [Platform.ClientGraphql]: 'graphql',
    [Platform.ClientRest]: 'http',
    [Platform.ServerDart]: 'dart',
    [Platform.ServerDeno]: 'ts',
    [Platform.ServerDotNet]: 'cs',
    [Platform.ServerNodeJs]: 'js',
    [Platform.ServerPhp]: 'php',
    [Platform.ServerPython]: 'py',
    [Platform.ServerRuby]: 'rb',
    [Platform.ServerSwift]: 'swift',
    [Platform.ServerJava]: 'java',
    [Platform.ServerKotlin]: 'kotlin',
    [Platform.ServerGraphql]: 'graphql',
    [Platform.ServerRest]: 'http',
    [Platform.ServerGo]: 'go',
    vue: 'html',
    svelte: 'html'
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
    const lines = res.split(/\n/g);

    while (lines.length > 0 && lines[lines.length - 1] === '') {
        lines.pop();
    }

    const final = lines.reduce((carry, line) => {
        carry += `<span class="line">${line}</span>\n`;
        return carry;
    }, '');

    return `<pre><code class="web-code language-${language} ${
        withLineNumbers ? 'line-numbers' : ''
    }">${final}</code></pre>`;
};

/**
 * Stores the currently selected language within a `MultiCode` instance.
 *
 * Defaults to `references#preferredPlatform` on component mount if not already set.
 */
export const multiCodeSelectedLanguage = writable<Language | null>(null);
