import {
    codeToHtml,
    createCssVariablesTheme,
    type CodeToHastOptions
} from 'shiki';
import { Platform } from './references';

export type Language = CodeToHastOptions['lang'] | Platform;

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
    [Platform.ServerGo]: 'go',
    vue: 'html',
    svelte: 'html'
};

type Args = {
    content: string;
    language?: Language;
    withLineNumbers?: boolean;
};

const resolveLanguage = (language: CodeToHastOptions['lang'] | undefined): Language => {
    if (language === undefined) return 'sh';
    if (language in platformAliases) return platformAliases[language];
    return language;
};

const theme = createCssVariablesTheme({
    name: 'appwrite',
    variablePrefix: '--shiki-',
    fontStyle: true
});

export const getCodeHtml = async (args: Args) => {
    const { content, language, withLineNumbers } = args;

    return codeToHtml(content.trim(), {
        lang: resolveLanguage(language),
        transformers: [
            {
                code(node) {
                    this.addClassToHast(node, 'web-code');
                    if (withLineNumbers) this.addClassToHast(node, 'line-numbers');
                }
            }
        ],
        theme
    });
};
