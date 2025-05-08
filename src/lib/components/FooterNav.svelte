<script lang="ts">
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';

    export let noBorder = false;

    const {
        elements: { content, heading, item, root, trigger },
        helpers: { isSelected }
    } = createAccordion({
        multiple: true,
        forceVisible: true
    });

    const links: Record<string, { label: string; href: string; target?: string; rel?: string }[]> =
        {
            'Quick starts': [
                { label: 'Web', href: '/docs/quick-starts/web' },
                { label: 'Next.js', href: '/docs/quick-starts/nextjs' },
                { label: 'React', href: '/docs/quick-starts/react' },
                { label: 'Vue.js', href: '/docs/quick-starts/vue' },
                { label: 'Nuxt', href: '/docs/quick-starts/nuxt' },
                { label: 'SvelteKit', href: '/docs/quick-starts/sveltekit' },
                { label: 'Refine', href: '/docs/quick-starts/refine' },
                { label: 'Angular', href: '/docs/quick-starts/angular' },
                { label: 'React Native', href: '/docs/quick-starts/react-native' },
                { label: 'Flutter', href: '/docs/quick-starts/flutter' },
                { label: 'Apple', href: '/docs/quick-starts/apple' },
                { label: 'Android', href: '/docs/quick-starts/android' },
                { label: 'Qwik', href: '/docs/quick-starts/qwik' },
                { label: 'Astro', href: '/docs/quick-starts/astro' },
                { label: 'Solid', href: '/docs/quick-starts/solid' }
            ],
            Products: [
                { label: 'Auth', href: '/products/auth' },
                { label: 'Databases', href: '/docs/products/databases' },
                { label: 'Functions', href: '/products/functions' },
                { label: 'Messaging', href: '/products/messaging' },
                { label: 'Storage', href: '/products/storage' },
                { label: 'Realtime', href: '/docs/apis/realtime' },
                { label: 'Network', href: '/docs/products/network' }
            ],
            Learn: [
                { label: 'Blog', href: '/blog' },
                { label: 'Docs', href: '/docs' },
                { label: 'Integrations', href: '/integrations' },
                { label: 'Community', href: '/community' },
                { label: 'Init', href: '/init' },
                { label: 'Threads', href: '/threads' },
                { label: 'Changelog', href: '/changelog' },
                {
                    label: 'Roadmap',
                    href: 'https://github.com/orgs/appwrite/projects',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                {
                    label: 'Source code',
                    href: 'https://github.com/appwrite',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
                // {
                //     label: 'Status',
                //     href: 'https://appwrite.online',
                //     target: '_blank',
                //     rel: 'noopener noreferrer'
                // }
            ],
            Programs: [
                { label: 'Heroes', href: '/heroes' },
                { label: 'Startups', href: '/startups' },
                { label: 'Education', href: '/education' },
                { label: 'Partners', href: '/partners' }
            ],
            About: [
                { label: 'Company', href: '/company' },
                { label: 'Pricing', href: '/pricing' },
                {
                    label: 'Careers',
                    href: 'https://appwrite.careers',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                {
                    label: 'Store',
                    href: 'https://appwrite.store',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                { label: 'Contact us', href: '/contact-us' },
                { label: 'Assets', href: '/assets' }
            ]
        };
</script>

<nav
    aria-label="Footer"
    class="web-footer-nav relative container mt-24"
    class:web-u-sep-block-start={!noBorder}
>
    <img class="web-logo" src="/images/logos/appwrite.svg" alt="appwrite" height="24" width="130" />
    <ul class="web-footer-nav-main-list" use:melt={$root}>
        {#each Object.entries(links) as [title, items]}
            <li class="web-footer-nav-main-item web-is-not-mobile">
                <h2
                    class="web-footer-nav-main-title web-is-not-mobile text-caption font-medium uppercase"
                >
                    {title}
                </h2>
                <ul class="web-footer-nav-secondary-list text-sub-body">
                    {#each items as { href, label, target, rel }}
                        <li>
                            <a class="web-link" {href} {target} {rel}>{label}</a>
                        </li>
                    {/each}
                </ul>
            </li>
            <li
                class="web-footer-nav-main-item web-is-only-mobile"
                use:melt={$item({ value: title })}
            >
                <h5 use:melt={$heading({ level: 5 })}>
                    <button
                        class="web-footer-nav-button web-is-only-mobile"
                        use:melt={$trigger({ value: title })}
                    >
                        <span class="text-caption font-medium uppercase">{title}</span>
                        <span
                            class="web-icon-chevron-down web-u-transition"
                            class:web-u-rotate-180={$isSelected(title)}
                            style:font-size="1rem"
                        ></span>
                    </button>
                </h5>
                {#if $isSelected(title)}
                    <ul
                        class="web-footer-nav-secondary-list text-sub-body"
                        use:melt={$content({ value: title })}
                        transition:slide={{ duration: 250 }}
                    >
                        {#each items as { href, label, target, rel }}
                            <li>
                                <a class="web-link" {href} {target} {rel}>{label}</a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</nav>
