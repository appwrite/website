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
	ClientApple = 'client-apple',
	ClientFlutter = 'client-flutter',
	ClientWeb = 'client-web',
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
	[Platform.ServerDart]: 'dart',
	[Platform.ServerDeno]: 'ts',
	[Platform.ServerDotNet]: 'cs',
	[Platform.ServerNodeJs]: 'js',
	[Platform.ServerPhp]: 'php',
	[Platform.ServerPython]: 'py',
	[Platform.ServerRuby]: 'rb',
	[Platform.ServerSwift]: 'swift'
};
