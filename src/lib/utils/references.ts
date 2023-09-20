import type { Language } from './code';

export const versions = ['1.4.x', '1.3.x', '1.2.x', '1.1.x', '1.0.x', '0.15.x'];

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
	ServerSwift = 'server-swift'
}

export const platformMap: Record<Language, string> = {
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
	sh: 'Shell',
	js: 'JavaScript',
	ts: 'TypeScript',
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
	graphql: 'GraphQL'
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
