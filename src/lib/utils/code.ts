import {
    createCssVariablesTheme,
    createHighlighter,
    type BuiltinLanguage,
    type PlainTextLanguage
} from 'shiki';
import { Platform } from './references';

export type Language = BuiltinLanguage | PlainTextLanguage;

const languages: Language[] = [
    'js',
    'javascript',
    'dart',
    'ts',
    'typescript',
    'xml',
    'html',
    'sh',
    'md',
    'json',
    'swift',
    'php',
    'diff',
    'python',
    'ruby',
    'csharp',
    'kotlin',
    'java',
    'cpp',
    'bash',
    'powershell',
    'cmd',
    'yaml',
    'text',
    'graphql',
    'http',
    'go',
    'py',
    'rb',
    'cs',
    'css',
    'groovy',
    'ini',
    'txt',
    'dotenv'
];

const platformAliases: Record<string, Language> = {
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
    [Platform.ServerGo]: 'go'
};

type Args = {
    content: string;
    language?: Language;
    withLineNumbers?: boolean;
};

const theme = createCssVariablesTheme({
    name: 'appwrite',
    variablePrefix: '--shiki-',
    fontStyle: true
});

const highlighter = await createHighlighter({
    langs: languages,
    themes: [theme],
    langAlias: {
        deno: 'ts',
        vue: 'html',
        svelte: 'html',
        ...platformAliases
    }
});

export const getCodeHtml = (args: Args): string => {
    const { content, language, withLineNumbers } = args;

    return highlighter.codeToHtml(content.trim(), {
        lang: language?.toLowerCase() ?? 'sh',
        transformers: [
            {
                code(node) {
                    this.addClassToHast(node, 'web-code');
                    if (withLineNumbers) this.addClassToHast(node, 'line-numbers');
                }
            }
        ],
        theme: 'appwrite'
    });
};
