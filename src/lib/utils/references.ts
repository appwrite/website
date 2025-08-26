import { writable } from 'svelte/store';
import type { Language } from './code';
import { browser } from '$app/environment';

const allVersions = [
    '1.8.x',
    '1.7.x',
    '1.6.x',
    '1.5.x',
    '1.4.x',
    '1.3.x',
    '1.2.x',
    '1.1.x',
    '1.0.x',
    '0.15.x',
    'cloud'
] as const;

export type Version = (typeof allVersions)[number];

export const versions: Readonly<Array<Omit<Version, 'cloud'>>> = allVersions.filter(
    (v) => v !== 'cloud'
);

export const Service = {
    Account: 'account',
    Avatars: 'avatars',
    Databases: 'databases',
    TablesDB: 'tablesdb',
    Functions: 'functions',
    Messaging: 'messaging',
    Health: 'health',
    Locale: 'locale',
    Storage: 'storage',
    Teams: 'teams',
    Users: 'users',
    Sites: 'sites',
    Tokens: 'tokens'
} as const;

export type ServiceType = typeof Service;
export type ServiceValue = (typeof Service)[keyof typeof Service];

export const Platform = {
    ClientWeb: 'client-web',
    ClientFlutter: 'client-flutter',
    ClientReactNative: 'client-react-native',
    ClientApple: 'client-apple',
    ClientAndroidKotlin: 'client-android-kotlin',
    ClientAndroidJava: 'client-android-java',
    ClientGraphql: 'client-graphql',
    ClientRest: 'client-rest',
    ServerNodeJs: 'server-nodejs',
    ServerPython: 'server-python',
    ServerDart: 'server-dart',
    ServerPhp: 'server-php',
    ServerRuby: 'server-ruby',
    ServerDotNet: 'server-dotnet',
    ServerDeno: 'server-deno',
    ServerGo: 'server-go',
    ServerSwift: 'server-swift',
    ServerKotlin: 'server-kotlin',
    ServerJava: 'server-java',
    ServerGraphql: 'server-graphql',
    ServerRest: 'server-rest'
} as const;

type PlatformType = typeof Platform;
export type Platform = (typeof Platform)[keyof typeof Platform];
export const VALID_PLATFORMS = new Set(Object.values(Platform));

export const Framework = {
    NextJs: 'Next.js',
    SvelteKit: 'SvelteKit',
    VueJs: 'Vue.js',
    Nuxt3: 'Nuxt3',
    Astro: 'Astro',
    Remix: 'Remix'
} as const;

export const platformMap: Record<Language | string, string> = {
    [Platform.ClientApple]: 'Apple',
    [Platform.ClientFlutter]: 'Flutter',
    [Platform.ClientWeb]: 'Web',
    [Platform.ClientAndroidKotlin]: 'Android (Kotlin)',
    [Platform.ClientAndroidJava]: 'Android (Java)',
    [Platform.ClientReactNative]: 'React Native',
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
    [Platform.ServerGo]: 'Go',
    sh: 'Shell',
    js: 'JavaScript',
    ts: 'TypeScript',
    jsx: 'React',
    tsx: 'React',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
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
    groovy: 'Groovy',
    go: 'Go'
};

export const serviceMap: Record<ServiceValue, string> = {
    [Service.Account]: 'Account',
    [Service.Avatars]: 'Avatars',
    [Service.Databases]: 'Databases',
    [Service.TablesDB]: 'TablesDB',
    [Service.Functions]: 'Functions',
    [Service.Messaging]: 'Messaging',
    [Service.Health]: 'Health',
    [Service.Locale]: 'Locale',
    [Service.Storage]: 'Storage',
    [Service.Teams]: 'Teams',
    [Service.Users]: 'Users',
    [Service.Sites]: 'Sites',
    [Service.Tokens]: 'Tokens'
};

export const preferredVersion = writable<Version | null>(
    globalThis?.localStorage?.getItem('preferredVersion') as Version
);

function getInitialPlatform(): Platform {
    const stored = globalThis?.localStorage?.getItem('preferredPlatform') ?? Platform.ClientWeb;
    // return if this platform is valid
    if (VALID_PLATFORMS.has(stored as Platform)) {
        return stored as Platform;
    } else {
        return Platform.ClientWeb;
    }
}

export const preferredPlatform = writable<Platform>(getInitialPlatform());

if (browser) {
    preferredVersion.subscribe((value) => {
        if (value) globalThis?.localStorage?.setItem('preferredVersion', value);
    });

    preferredPlatform.subscribe((value) => {
        // only save the ones for which we have api references.
        if (value && VALID_PLATFORMS.has(value)) {
            globalThis?.localStorage?.setItem('preferredPlatform', value);
        }
    });
}
