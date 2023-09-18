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
	ServerDart = 'server-dart',
	ServerDeno = 'server-deno',
	ServerDotNet = 'server-dotnet',
	ServerNodeJs = 'server-nodejs',
	ServerPhp = 'server-php',
	ServerPython = 'server-python',
	ServerRuby = 'server-ruby',
	ServerSwift = 'server-swift'
}

export const languageMap: Record<Platform, Language> = {
	[Platform.ClientApple]: 'swift',
	[Platform.ClientFlutter]: 'dart',
	[Platform.ClientWeb]: 'js',
	[Platform.ClientAndroidKotlin]: 'kotlin',
	[Platform.ClientAndroidJava]: 'java',
	[Platform.ServerDart]: 'dart',
	[Platform.ServerDeno]: 'ts',
	[Platform.ServerDotNet]: 'cs',
	[Platform.ServerNodeJs]: 'js',
	[Platform.ServerPhp]: 'php',
	[Platform.ServerPython]: 'py',
	[Platform.ServerRuby]: 'rb',
	[Platform.ServerSwift]: 'swift'
};

export const platformMap: Record<Platform, string> = {
	[Platform.ClientApple]: 'Apple SDK',
	[Platform.ClientFlutter]: 'Flutter SDK',
	[Platform.ClientWeb]: 'Web SDK',
	[Platform.ClientAndroidKotlin]: 'Android SDK (Kotlin)',
	[Platform.ClientAndroidJava]: 'Android SDK (Java)',
	[Platform.ServerDart]: 'Dart SDK',
	[Platform.ServerDeno]: 'Deno SDK',
	[Platform.ServerDotNet]: '.NET SDK',
	[Platform.ServerNodeJs]: 'Node.js SDK',
	[Platform.ServerPhp]: 'PHP SDK',
	[Platform.ServerPython]: 'Python SDK',
	[Platform.ServerRuby]: 'Ruby SDK',
	[Platform.ServerSwift]: 'Swift SDK'
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
