/**
 * Canonical list of `/docs/quick-starts/*` entries shown on the homepage platforms strip.
 * Order: homepage priority list first (`MARKETING_HOME_FIRST_NAMES`), then remaining frameworks in stable source order.
 * Keep in sync with docs quick-start routes (see `docs/quick-starts/+page.svelte`).
 *
 * Icons: console-style glyphs from `static/images/platforms/{dark|light}/*.svg`
 * (synced from the Appwrite console / `vibes` repo `public/icons/` — light fills ~#32323C for docs light UI only).
 */
const ICON = '/images/platforms';

function dual(slug: string): { dark: string; light: string } {
    return {
        dark: `${ICON}/dark/${slug}.svg`,
        light: `${ICON}/light/${slug}.svg`
    };
}

export type QuickStartStripItem = {
    name: string;
    href: string;
    /** Brand tint for hover gradient (start). */
    primary: string;
    /** Second brand stop for hover gradient; always set so tiles never fall back to transparent. */
    secondary: string;
    /** Console-style icon for dark UI */
    dark: string;
    /** Same mark, strokes for docs light UI only (`#32323C`); marketing always uses `dark` */
    light: string;
};

/** Icons per page on the homepage paginated strip (large viewports; full-width row). */
export const FRAMEWORKS_GALLERY_PAGE_SIZE = 14;

/** Priority order for the start of `allFrameworkStrip` (homepage / docs ordering). */
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
    {
        name: 'React',
        href: '/docs/quick-starts/react',
        primary: '#53C1DE',
        secondary: '#087EA4',
        ...dual('react')
    },
    {
        name: 'Next.js',
        href: '/docs/quick-starts/nextjs',
        primary: '#000000',
        secondary: '#0070F3',
        ...dual('nextjs')
    },
    {
        name: 'Vue',
        href: '/docs/quick-starts/vue',
        primary: '#4FC08D',
        secondary: '#35495E',
        ...dual('vue')
    },
    {
        name: 'TanStack Start',
        href: '/docs/quick-starts/tanstack-start',
        primary: '#FF4255',
        secondary: '#0C1116',
        ...dual('tanstack')
    },
    {
        name: 'Angular',
        href: '/docs/quick-starts/angular',
        primary: '#DD0031',
        secondary: '#9F1239',
        ...dual('angular')
    },
    {
        name: 'SvelteKit',
        href: '/docs/quick-starts/sveltekit',
        primary: '#FF3E00',
        secondary: '#FF8C42',
        ...dual('svelte')
    },
    {
        name: 'Nuxt',
        href: '/docs/quick-starts/nuxt',
        primary: '#00DC82',
        secondary: '#003737',
        ...dual('nuxt')
    },
    {
        name: 'Astro',
        href: '/docs/quick-starts/astro',
        primary: '#FF5D01',
        secondary: '#BC38E0',
        ...dual('astro')
    },
    {
        name: 'Qwik',
        href: '/docs/quick-starts/qwik',
        primary: '#18B6F6',
        secondary: '#AC87EB',
        ...dual('qwik')
    },
    {
        name: 'Solid',
        href: '/docs/quick-starts/solid',
        primary: '#518AC8',
        secondary: '#2C4F7C',
        ...dual('solid')
    },
    {
        name: 'Refine',
        href: '/docs/quick-starts/refine',
        primary: '#FF6E42',
        secondary: '#0D131B',
        ...dual('refine')
    },
    {
        name: 'Remix',
        href: '/docs/products/sites/quick-start/remix',
        primary: '#3992FF',
        secondary: '#121212',
        ...dual('remix')
    },
    {
        name: 'Web',
        href: '/docs/quick-starts/web',
        primary: '#FFCA28',
        secondary: '#3E3E3E',
        ...dual('javascript')
    },
    {
        name: 'React Native',
        href: '/docs/quick-starts/react-native',
        primary: '#61DAFB',
        secondary: '#087EA4',
        ...dual('react-native')
    },
    {
        name: 'Node.js',
        href: '/docs/quick-starts/node',
        primary: '#8CC84B',
        secondary: '#3C873A',
        ...dual('node')
    },
    {
        name: 'Python',
        href: '/docs/quick-starts/python',
        primary: '#F9C600',
        secondary: '#327EBD',
        ...dual('python')
    },
    {
        name: 'PHP',
        href: '/docs/quick-starts/php',
        primary: '#8892BF',
        secondary: '#4F5B93',
        ...dual('php')
    },
    {
        name: 'Ruby',
        href: '/docs/quick-starts/ruby',
        primary: '#791C12',
        secondary: '#9E120B',
        ...dual('ruby')
    },
    {
        name: '.NET',
        href: '/docs/quick-starts/dotnet',
        primary: '#512BD4',
        secondary: '#68217A',
        ...dual('dotnet')
    },
    {
        name: 'Go',
        href: '/docs/quick-starts/go',
        primary: '#00ADD8',
        secondary: '#007D9C',
        ...dual('go')
    },
    {
        name: 'Deno',
        href: '/docs/quick-starts/deno',
        primary: '#70FFAF',
        secondary: '#000000',
        ...dual('deno')
    },
    {
        name: 'Dart',
        href: '/docs/quick-starts/dart',
        primary: '#01579B',
        secondary: '#29B6F6',
        ...dual('dart')
    },
    {
        name: 'Rust',
        href: '/docs/quick-starts/rust',
        primary: '#CE422B',
        secondary: '#3C1414',
        ...dual('rust')
    },
    {
        name: 'Kotlin',
        href: '/docs/quick-starts/kotlin',
        primary: '#6D74E1',
        secondary: '#E1725C',
        ...dual('kotlin')
    },
    {
        name: 'Swift',
        href: '/docs/quick-starts/swift',
        primary: '#F88A36',
        secondary: '#FD2020',
        ...dual('swift')
    },
    {
        name: 'Android',
        href: '/docs/quick-starts/android',
        primary: '#3DDC84',
        secondary: '#073042',
        ...dual('android')
    },
    {
        name: 'Android (Java)',
        href: '/docs/quick-starts/android-java',
        primary: '#F89820',
        secondary: '#5382A1',
        ...dual('java')
    },
    {
        name: 'iOS',
        href: '/docs/quick-starts/apple',
        primary: '#007AFF',
        secondary: '#5856D6',
        ...dual('apple')
    },
    {
        name: 'Flutter',
        href: '/docs/quick-starts/flutter',
        primary: '#00569E',
        secondary: '#47C5FB',
        ...dual('flutter')
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
