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
                { label: 'Realtime', href: '/docs/apis/realtime' }
            ],
            Learn: [
                { label: 'Docs', href: '/docs' },
                { label: 'Blog', href: '/blog' },
                { label: 'Community', href: '/community' },
                { label: 'Heroes', href: '/heroes' },
                {
                    label: 'Source code',
                    href: 'https://github.com/appwrite',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                {
                    label: 'Status',
                    href: 'https://appwrite.online',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            ],
            About: [
                { label: 'Pricing', href: '/pricing' },
                { label: 'Company', href: '/company' },
                {
                    label: 'Careers',
                    href: 'https://appwrite.careers',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                { label: 'Heroes', href: '/heroes' },
                {
                    label: 'Store',
                    href: 'https://appwrite.store',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                { label: 'Contact us', href: '/contact-us' },
                { label: 'Assets', href: '/assets' }
            ],
            Policies: [
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Cookies', href: '/cookies' }
            ]
        };
</script>

<nav aria-label="Footer"
    class="aw-footer-nav u-margin-block-start-100 u-position-relative"
    class:aw-u-sep-block-start={!noBorder}
>
    <img class="aw-logo" src="/images/logos/appwrite.svg" alt="appwrite" height="24" width="130" />
    <ul class="aw-footer-nav-main-list" use:melt={$root}>
        {#each Object.entries(links) as [title, items]}
            <li class="aw-footer-nav-main-item aw-is-not-mobile">
                <h5 class="aw-footer-nav-main-title aw-is-not-mobile aw-caption-500 aw-eyebrow">
                    {title}
                </h5>
                <ul class="aw-footer-nav-secondary-list aw-sub-body-400">
                    {#each items as { href, label, target, rel }}
                        <li>
                            <a class="aw-link" {href} {target} {rel}>{label}</a>
                        </li>
                    {/each}
                </ul>
            </li>
            <li
                class="aw-footer-nav-main-item aw-is-only-mobile"
                use:melt={$item({ value: title })}
            >
                <h5 use:melt={$heading({ level: 5 })}>
                    <button
                        class="aw-footer-nav-button aw-is-only-mobile"
                        use:melt={$trigger({ value: title })}
                    >
                        <span class="aw-caption-500 aw-eyebrow">{title}</span>
                        <span
                            class="aw-icon-chevron-down aw-u-transition"
                            class:aw-u-rotate-180={$isSelected(title)}
                            style:font-size="1rem"
                        />
                    </button>
                </h5>
                {#if $isSelected(title)}
                    <ul
                        class="aw-footer-nav-secondary-list aw-sub-body-400"
                        use:melt={$content({ value: title })}
                        transition:slide={{ duration: 250 }}
                    >
                        {#each items as { href, label, target, rel }}
                            <li>
                                <a class="aw-link" {href} {target} {rel}>{label}</a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</nav>
