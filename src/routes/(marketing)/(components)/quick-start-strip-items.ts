/**
 * Canonical list of `/docs/quick-starts/*` entries shown on the homepage platforms strip.
 * Order: homepage priority list first (`MARKETING_HOME_FIRST_NAMES`), then remaining frameworks in stable source order.
 * Keep in sync with docs quick-start routes (see `docs/quick-starts/+page.svelte`).
 */
import Python from '../(assets)/icons/python.svg';
import Node from '../(assets)/icons/node.svg';
import Flutter from '../(assets)/icons/flutter.svg';
import Kotlin from '../(assets)/icons/kotlin.svg';
import Apple from '../(assets)/icons/apple.svg';
import AppleLight from '../(assets)/icons/light/apple.svg';
import Android from '../(assets)/icons/android.svg';
import Java from '../(assets)/icons/java.svg';
import Dart from '../(assets)/icons/dart.svg';
import Php from '../(assets)/icons/php.svg';
import Ruby from '../(assets)/icons/ruby.svg';
import Deno from '../(assets)/icons/deno.svg';
import DenoLight from '../(assets)/icons/light/deno.svg';
import Swift from '../(assets)/icons/swift.svg';
import Net from '../(assets)/icons/net.svg';
import Go from '../(assets)/icons/go.svg';
import GoLight from '../(assets)/icons/light/go.svg';
import React from '../(assets)/icons/react.svg';
import Nextjs from '../(assets)/icons/nextjs.svg';
import Svelte from '../(assets)/icons/svelte.svg';
import Vue from '../(assets)/icons/vue.svg';
import Angular from '../(assets)/icons/angular.svg';
import ReactNative from '../(assets)/icons/react-native.svg';
import TanStack from '../(assets)/icons/tanstack.svg';
import TanStackLight from '../(assets)/icons/light/tanstack.svg';
import Rust from '../(assets)/icons/rust.svg';
import RustLight from '../(assets)/icons/light/rust.svg';
import Nuxt from '../(assets)/icons/nuxt.svg';
import Astro from '../(assets)/icons/astro.svg';
import Solid from '../(assets)/icons/solid.svg';
import Qwik from '../(assets)/icons/qwik.svg';
import Javascript from '../(assets)/icons/javascript.svg';
import Refine from '$icons/svg/refine.svg';
import Remix from '$icons/svg/remix.svg';

export type QuickStartStripItem = {
    name: string;
    href: string;
    primary: string;
    secondary?: string;
    dark: string;
    light?: string;
};

/** Icons per page on the homepage strip and headline strip (paginated on large viewports). */
export const FRAMEWORKS_GALLERY_PAGE_SIZE = 10;

/** First screen of homepage strip; order matches the start of `allFrameworkStrip` (length matches page size). */
export const MARKETING_HOME_FIRST_NAMES = [
    'React',
    'Next.js',
    'Vue',
    'TanStack Start',
    'SvelteKit',
    'Nuxt',
    'Astro',
    'Android',
    'iOS',
    'Flutter'
] as const;

const quickStartStripSource: QuickStartStripItem[] = [
    { name: 'React', dark: React, href: '/docs/quick-starts/react', primary: '#53C1DE' },
    { name: 'Next.js', dark: Nextjs, href: '/docs/quick-starts/nextjs', primary: '#fff' },
    { name: 'Vue', dark: Vue, href: '/docs/quick-starts/vue', primary: '#4FC08D' },
    {
        name: 'TanStack Start',
        dark: TanStack,
        light: TanStackLight,
        href: '/docs/quick-starts/tanstack-start',
        primary: '#fff'
    },
    { name: 'Angular', dark: Angular, href: '/docs/quick-starts/angular', primary: '#DD0031' },
    {
        name: 'SvelteKit',
        dark: Svelte,
        href: '/docs/quick-starts/sveltekit',
        primary: '#FF3E00'
    },
    { name: 'Nuxt', dark: Nuxt, href: '/docs/quick-starts/nuxt', primary: '#00DC82' },
    { name: 'Astro', dark: Astro, href: '/docs/quick-starts/astro', primary: '#FF5D01' },
    { name: 'Qwik', dark: Qwik, href: '/docs/quick-starts/qwik', primary: '#18B6F6' },
    { name: 'Solid', dark: Solid, href: '/docs/quick-starts/solid', primary: '#518AC8' },
    { name: 'Refine', dark: Refine, href: '/docs/quick-starts/refine', primary: '#FF6E42' },
    {
        name: 'Remix',
        dark: Remix,
        href: '/docs/products/sites/quick-start/remix',
        primary: '#3992FF',
        secondary: '#121212'
    },
    {
        name: 'Web',
        dark: Javascript,
        href: '/docs/quick-starts/web',
        primary: '#FFCA28',
        secondary: '#3E3E3E'
    },
    {
        name: 'React Native',
        dark: ReactNative,
        href: '/docs/quick-starts/react-native',
        primary: '#61DAFB'
    },
    { name: 'Node.js', dark: Node, href: '/docs/quick-starts/node', primary: '#8CC84B' },
    {
        name: 'Python',
        dark: Python,
        href: '/docs/quick-starts/python',
        primary: '#F9C600',
        secondary: '#327EBD'
    },
    { name: 'PHP', dark: Php, href: '/docs/quick-starts/php', primary: '#8892BF' },
    {
        name: 'Ruby',
        dark: Ruby,
        href: '/docs/quick-starts/ruby',
        primary: '#791C12',
        secondary: '#9E120B'
    },
    { name: '.NET', dark: Net, href: '/docs/quick-starts/dotnet', primary: '#512BD4' },
    { name: 'Go', dark: Go, light: GoLight, href: '/docs/quick-starts/go', primary: '#fff' },
    {
        name: 'Deno',
        dark: Deno,
        light: DenoLight,
        href: '/docs/quick-starts/deno',
        primary: '#fff'
    },
    {
        name: 'Dart',
        dark: Dart,
        href: '/docs/quick-starts/dart',
        primary: '#01579B',
        secondary: '#29B6F6'
    },
    {
        name: 'Rust',
        dark: Rust,
        light: RustLight,
        href: '/docs/quick-starts/rust',
        primary: '#CE422B'
    },
    {
        name: 'Kotlin',
        dark: Kotlin,
        href: '/docs/quick-starts/kotlin',
        primary: '#6D74E1',
        secondary: '#E1725C'
    },
    {
        name: 'Swift',
        dark: Swift,
        href: '/docs/quick-starts/swift',
        primary: '#F88A36',
        secondary: '#FD2020'
    },
    { name: 'Android', dark: Android, href: '/docs/quick-starts/android', primary: '#3DDC84' },
    {
        name: 'Android (Java)',
        dark: Java,
        href: '/docs/quick-starts/android-java',
        primary: '#F89820',
        secondary: '#5382A1'
    },
    {
        name: 'iOS',
        dark: Apple,
        light: AppleLight,
        href: '/docs/quick-starts/apple',
        primary: '#fff'
    },
    {
        name: 'Flutter',
        dark: Flutter,
        href: '/docs/quick-starts/flutter',
        primary: '#00569E',
        secondary: '#47C5FB'
    }
];

function buildOrderedQuickStartStrip(source: QuickStartStripItem[]): QuickStartStripItem[] {
    const byName = new Map(source.map((p) => [p.name, p]));
    const out: QuickStartStripItem[] = [];
    const used = new Set<string>();
    for (const name of MARKETING_HOME_FIRST_NAMES) {
        const p = byName.get(name);
        if (p) {
            out.push(p);
            used.add(p.name);
        }
    }
    for (const p of source) {
        if (!used.has(p.name)) out.push(p);
    }
    return out;
}

export const allFrameworkStrip = buildOrderedQuickStartStrip(quickStartStripSource);
