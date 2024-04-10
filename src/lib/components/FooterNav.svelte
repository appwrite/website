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
                { label: 'Flutter', href: '/docs/quick-starts/flutter' },
                { label: 'Next.js', href: '/docs/quick-starts/nextjs' },
                { label: 'Vue.js', href: '/docs/quick-starts/vue' },
                { label: 'SvelteKit', href: '/docs/quick-starts/sveltekit' },
                { label: 'Apple', href: '/docs/quick-starts/apple' },
                { label: 'Android', href: '/docs/quick-starts/android' },
                { label: 'Nuxt', href: '/docs/quick-starts/nuxt' },
                { label: 'Angular', href: '/docs/quick-starts/angular' },
                { label: 'Qwik', href: '/docs/quick-starts/qwik' },
                { label: 'Astro', href: '/docs/quick-starts/astro' }
            ],
            Products: [
                { label: 'Auth', href: '/docs/products/auth' },
                { label: 'Databases', href: '/docs/products/databases' },
                { label: 'Functions', href: '/docs/products/functions' },
                { label: 'Storage', href: '/docs/products/storage' },
                { label: 'Realtime', href: '/docs/apis/realtime' },
            ],
            Learn: [
                { label: 'Docs', href: '/docs' },
                { label: 'Community', href: '/community' },
                { label: 'Threads', href: '/threads' },
                { label: 'Blog', href: '/blog' },
                { label: 'Changelog', href: '/changelog' },
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
            Program: [
                { label: 'Heroes', href: '/heroes' },
                { label: 'Startups', href: '/startups' },
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
                { label: 'Assets', href: '/assets' },
            ],
            // Policies: [
            //     { label: 'Terms', href: '/terms' },
            //     { label: 'Privacy', href: '/privacy' },
            //     { label: 'Cookies', href: '/cookies' }
            // ]
        };
</script>

<nav
    aria-label="Footer"
    class="web-footer-nav u-margin-block-start-100 u-position-relative"
    class:web-u-sep-block-start={!noBorder}
>
    <img class="web-logo" src="/images/logos/appwrite.svg" alt="appwrite" height="24" width="130" />
    <ul class="web-footer-nav-main-list" use:melt={$root}>
        {#each Object.entries(links) as [title, items]}
            <li class="web-footer-nav-main-item web-is-not-mobile">
                <h2 class="web-footer-nav-main-title web-is-not-mobile web-caption-500 web-eyebrow">
                    {title}
                </h2>
                <ul class="web-footer-nav-secondary-list web-sub-body-400">
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
                        <span class="web-caption-500 web-eyebrow">{title}</span>
                        <span
                            class="web-icon-chevron-down web-u-transition"
                            class:web-u-rotate-180={$isSelected(title)}
                            style:font-size="1rem"
                        />
                    </button>
                </h5>
                {#if $isSelected(title)}
                    <ul
                        class="web-footer-nav-secondary-list web-sub-body-400"
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
