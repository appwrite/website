<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { melt, createCollapsible } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';
    import type { SubmenuItem } from './ProductsSubmenu.svelte';

    export let label: string;

    const {
        elements: { root, content, trigger },
        states: { open }
    } = createCollapsible();

    let products: Array<SubmenuItem> = [
        {
            name: 'Auth',
            href: '/products/auth',
            description: 'Secure login for all users with multi-factor authentication and more.',
            icon: '/images/icons/illustrated/dark/auth.png'
        },
        {
            name: 'Database',
            href: '/products/databases',
            description: 'Scalable and robust database backed by the latest technologies.',
            icon: '/images/icons/illustrated/dark/databases.png'
        },
        {
            name: 'Storage',
            href: '/products/storage',
            description: 'Securely store files with advanced compression and encryption.',
            icon: '/images/icons/illustrated/dark/storage.png'
        },
        {
            name: 'Functions',
            href: '/products/functions',
            description: 'Deploy & scale serverless functions in secure, isolated runtimes.',
            icon: '/images/icons/illustrated/dark/functions.png'
        },
        {
            name: 'Messaging',
            href: '/products/messaging',
            description: 'Set up a full-functioning messaging service for your application.',
            icon: '/images/icons/illustrated/dark/messaging.png'
        },
        {
            name: 'Realtime',
            href: '/products/realtime',
            description: 'Subscribe and react to any Appwrite event using the Realtime API.',
            icon: '/images/icons/illustrated/dark/realtime.png'
        },
        {
            name: 'Sites',
            href: '/products/sites',
            beta: true,
            description: 'Host your domain and take control over your page’s analytics.',
            icon: '/images/icons/illustrated/dark/sites.png'
        }
    ];
</script>

<div use:melt={$root} class="relative mx-auto block md:hidden">
    <div class="flex items-center justify-between">
        <button
            use:melt={$trigger}
            class="text-caption web-side-nav-button flex items-center justify-between"
            >{label}
            <span
                class={classNames('web-icon-chevron-down transition-transform', {
                    'rotate-180': $open
                })}
            /></button
        >
    </div>

    <div>
        {#if $open}
            <div use:melt={$content} transition:slide>
                <div class="flex flex-col gap-2 py-3 px-4">
                    {#each products as product}
                        <a
                            href={product.href}
                            class="group flex gap-3 rounded-xl p-2 text-white outline-none transition-colors focus:bg-white/8"
                        >
                            <div
                                class="flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/6"
                            >
                                <img
                                    src={product.icon}
                                    alt={product.name}
                                    class="size-6 grayscale transition-all group-focus:grayscale-0"
                                />
                            </div>
                            <div class="">
                                <span class="text-sub-body text-primary font-medium"
                                    >{product.name}

                                    {#if product.beta}
                                        <span
                                            class="text-caption bg-accent/24 ml-1 rounded py-1 px-2 font-medium text-white"
                                            >Coming soon</span
                                        >
                                    {/if}
                                </span>
                                <p class="text-caption text-secondary text-pretty">
                                    {product.description}
                                </p>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>
