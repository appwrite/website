export type Variant = 'client' | 'server' | 'console';

export const VERSIONS = [
    '1.8.x',
    '1.7.x',
    '1.6.x',
    '1.5.x',
    '1.4.x',
    '1.3.x',
    '1.2.x',
    '1.1.x',
    '1.0.x',
    '0.15.x'
] as const;

export type Version = (typeof VERSIONS)[number];

export const Service = {
    Account: 'account',
    Avatars: 'avatars',
    Databases: 'databases',
    TablesDB: 'tablesDB',
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

export type Platform = (typeof Platform)[keyof typeof Platform];
