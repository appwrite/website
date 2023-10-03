<script lang="ts">
    import type { Action } from 'svelte/action';
    const accordion: Action<HTMLButtonElement> = (node) => {
        const callback = () => {
            node.classList.toggle('is-open');
        };
        node.addEventListener('click', callback);

        return {
            destroy() {
                node.removeEventListener('click', callback);
            }
        };
    };

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
                    href: 'https://status.appwrite.io',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            ],
            About: [
                { label: 'Pricing', href: '/pricing' },
                { label: 'Company', href: '/company' },
                {
                    label: 'Careers',
                    href: 'https://careers.appwrite.io/',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                { label: 'Heroes', href: '/heroes' },
                {
                    label: 'Store',
                    href: 'https://store.appwrite.io',
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

<nav class="aw-footer-nav u-margin-block-start-100 u-position-relative aw-u-sep-block-start">
    <img class="aw-logo" src="/images/logos/appwrite.svg" alt="appwrite" height="24" width="130" />
    <ul class="aw-footer-nav-main-list">
        {#each Object.entries(links) as [title, items]}
            <li class="aw-footer-nav-main-item">
                <h5 class="aw-footer-nav-main-title aw-is-not-mobile aw-caption-500 aw-eyebrow">
                    {title}
                </h5>
                <button class="aw-footer-nav-button aw-is-only-mobile" use:accordion>
                    <span class="aw-caption-500 aw-eyebrow">{title}</span>
                    <svg
                        class="aw-footer-nav-button-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4243 13.0243C10.19 13.2586 9.81007 13.2586 9.57576 13.0243L5.07576 8.52426C4.84145 8.28995 4.84145 7.91005 5.07576 7.67574C5.31007 7.44142 5.68997 7.44142 5.92429 7.67574L10 11.7515L14.0758 7.67574C14.3101 7.44142 14.69 7.44142 14.9243 7.67574C15.1586 7.91005 15.1586 8.28995 14.9243 8.52426L10.4243 13.0243Z"
                            fill="#ADADB0"
                        />
                    </svg>
                </button>
                <ul class="aw-footer-nav-secondary-list aw-sub-body-400">
                    {#each items as { href, label, target, rel }}
                        <li>
                            <a class="aw-link" {href} {target} {rel}>{label}</a>
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</nav>
