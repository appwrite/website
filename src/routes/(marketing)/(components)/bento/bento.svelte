<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Auth from './(animations)/auth.svelte';
    import Databases from './(animations)/databases.svelte';
    import Functions from './(animations)/functions.svelte';
    import Messaging from './(animations)/messaging.svelte';
    import Realtime from './(animations)/realtime.svelte';
    import Sites from './(animations)/sites.svelte';
    import Storage from './(animations)/storage.svelte';

    const build = [
        {
            label: 'Auth',
            icon: '/images/icons/illustrated/dark/auth.png',
            href: '/products/auth'
        },
        {
            label: 'Databases',
            icon: '/images/icons/illustrated/dark/databases.png',
            href: '/docs/products/databases'
        },
        {
            label: 'Storage',
            icon: '/images/icons/illustrated/dark/storage.png',
            href: '/products/storage'
        },
        {
            label: 'Functions',
            icon: '/images/icons/illustrated/dark/functions.png',
            href: '/products/functions'
        },
        {
            label: 'Realtime',
            icon: '/images/icons/illustrated/dark/realtime.png',
            href: '/docs/apis/realtime'
        },
        {
            label: 'Messaging',
            icon: '/images/icons/illustrated/dark/messaging.png',
            href: '/products/messaging'
        }
    ];

    const deploy = [
        {
            label: 'Sites',
            icon: '/images/icons/illustrated/dark/sites.png',
            href: '/products/sites'
        }
    ];
</script>

<div class="container py-20">
    <div class="mx-auto mb-16 flex max-w-5xl flex-col gap-8">
        <h2 class="text-primary font-aeonik-pro mx-auto max-w-lg text-center text-4xl md:text-5xl">
            All the products you need, in one platform
        </h2>

        <div class="hidden justify-between gap-8 lg:flex">
            <div
                class={classNames(
                    'bg-card border-smooth text-primary relative flex h-10 items-center gap-4 rounded-full border border-dashed p-1 text-sm',
                    'after:border-smooth after:absolute after:top-1/2 after:-right-22 after:h-px after:w-22 after:-translate-y-1/2 after:border-b after:border-dashed'
                )}
            >
                <span class="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase"
                    >Build</span
                >
                <div class="flex h-full w-full justify-between gap-2">
                    {#each build as product}
                        <a
                            href={product.href}
                            class="bg-greyscale-800 hover:bg-greyscale-750/50 flex h-full w-fit items-center justify-center gap-2 rounded-full px-3 backdrop-blur-lg transition-opacity"
                        >
                            <span
                                class="text-primary text-caption flex items-center justify-center gap-1 font-medium"
                            >
                                <img
                                    loading="lazy"
                                    src={product.icon}
                                    alt={product.label}
                                    class="size-6"
                                />
                                {product.label}</span
                            >
                        </a>
                    {/each}
                </div>
            </div>

            <div
                class="bg-card border-smooth text-primary flex h-10 items-center gap-4 rounded-full border border-dashed p-1 text-sm"
            >
                <span class="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase"
                    >Deploy</span
                >
                <div class="flex h-full w-full justify-between gap-2">
                    {#each deploy as product}
                        <a
                            href={product.href}
                            class="bg-greyscale-800 hover:bg-greyscale-750/50 flex h-full w-fit items-center justify-center gap-2 rounded-full px-3 backdrop-blur-lg transition-opacity"
                        >
                            <span
                                class="text-primary text-caption flex items-center justify-center gap-1 font-medium"
                            >
                                <img
                                    loading="lazy"
                                    src={product.icon}
                                    alt={product.label}
                                    class="size-6"
                                />
                                {product.label}</span
                            >
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-8">
        <Auth />
        <Databases />
        <Storage />
        <Functions />
        <Messaging />
        <Realtime />
        <Sites />
    </div>
</div>
