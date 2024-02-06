import { writable } from 'svelte/store';
import type { Language } from './code';
import { browser } from '$app/environment';

const allVersions = ['1.4.x', '1.3.x', '1.2.x', '1.1.x', '1.0.x', '0.15.x', 'cloud'] as const;

export type Version = (typeof allVersions)[number];

export const versions: Readonly<Array<Omit<Version, 'cloud'>>> = allVersions.filter(
    (v) => v !== 'cloud'
);

export enum Service {
    Account = 'account',
    Avatars = 'avatars',
    Databases = 'databases',
    Functions = 'functions',
    Health = 'health',
    Locale = 'locale',
    Storage = 'storage',
    Teams = 'teams',
    Users = 'users'
}

export enum Platform {
    ClientWeb = 'client-web',
    ClientFlutter = 'client-flutter',
    ClientApple = 'client-apple',
    ClientAndroidKotlin = 'client-android-kotlin',
    ClientAndroidJava = 'client-android-java',
    ClientGraphql = 'client-graphql',
    ClientRest = 'client-rest',
    ServerDart = 'server-dart',
    ServerDeno = 'server-deno',
    ServerDotNet = 'server-dotnet',
    ServerNodeJs = 'server-nodejs',
    ServerPhp = 'server-php',
    ServerPython = 'server-python',
    ServerRuby = 'server-ruby',
    ServerSwift = 'server-swift',
    ServerKotlin = 'server-kotlin',
    ServerJava = 'server-java',
    ServerGraphql = 'server-graphql',
    ServerRest = 'server-rest'
}

export const platformMap: Record<Language | string, string> = {
    [Platform.ClientApple]: 'Apple',
    [Platform.ClientFlutter]: 'Flutter',
    [Platform.ClientWeb]: 'Web',
    [Platform.ClientAndroidKotlin]: 'Android (Kotlin)',
    [Platform.ClientAndroidJava]: 'Android (Java)',
    [Platform.ClientGraphql]: 'GraphQL',
    [Platform.ClientRest]: 'REST',
    [Platform.ServerDart]: 'Dart',
    [Platform.ServerDeno]: 'Deno',
    [Platform.ServerDotNet]: '.NET',
    [Platform.ServerNodeJs]: 'Node.js',
    [Platform.ServerPhp]: 'PHP',
    [Platform.ServerPython]: 'Python',
    [Platform.ServerRuby]: 'Ruby',
    [Platform.ServerSwift]: 'Swift',
    [Platform.ServerKotlin]: 'Kotlin',
    [Platform.ServerJava]: 'Java',
    [Platform.ServerGraphql]: 'GraphQL',
    [Platform.ServerRest]: 'REST',
    sh: 'Shell',
    js: 'JavaScript',
    ts: 'TypeScript',
    jsx: 'React',	
    tsx: 'React',
    typescript: 'TypeScript',
    dart: 'Dart',
    java: 'Java',
    kotlin: 'Kotlin',
    cs: 'C#',
    py: 'Python',
    rb: 'Ruby',
    php: 'PHP',
    swift: 'Swift',
    xml: 'XML',
    html: 'HTML',
    md: 'Markdown',
    json: 'JSON',
    diff: 'Diff',
    http: 'HTTP',
    css: 'CSS',
    graphql: 'GraphQL',
    deno: 'Deno',
    python: 'Python',
    ruby: 'Ruby',
    csharp: 'C#',
    cpp: 'C++',
    bash: 'Bash',
    powershell: 'PowerShell',
    cmd: 'CMD',
    yaml: 'YAML',
    text: 'Text',
    vue: 'Vue',
    svelte: 'Svelte',
    groovy: 'Groovy'
};

export const serviceMap: Record<Service, string> = {
    [Service.Account]: 'Account',
    [Service.Avatars]: 'Avatars',
    [Service.Databases]: 'Databases',
    [Service.Functions]: 'Functions',
    [Service.Health]: 'Health',
    [Service.Locale]: 'Locale',
    [Service.Storage]: 'Storage',
    [Service.Teams]: 'Teams',
    [Service.Users]: 'Users'
};

export const preferredVersion = writable<Version | null>(
    globalThis?.localStorage?.getItem('preferredVersion') as Version
);
export const preferredPlatform = writable<Platform | null>(
    globalThis?.localStorage?.getItem('preferredPlatform') as Platform
);

if (browser) {
    preferredVersion.subscribe((value) => {
        if (value) globalThis?.sessionStorage?.setItem('preferredVersion', value);
    });
    preferredPlatform.subscribe((value) => {
        if (value) globalThis?.sessionStorage?.setItem('preferredPlatform', value);
    });
}
