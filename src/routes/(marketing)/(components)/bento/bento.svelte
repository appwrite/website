<script>
    import { classNames } from '$lib/utils/classnames';
    import Auth from './(animations)/auth.svelte';
    import Databases from './(animations)/databases.svelte';
    import Functions from './(animations)/functions.svelte';
    import Messaging from './(animations)/messaging.svelte';
    import Realtime from './(animations)/realtime.svelte';
    import Sites from './(animations)/sites.svelte';
    import Storage from './(animations)/storage.svelte';

    const products = {
        Build: [
            {
                label: 'Auth',
                icon: '/images/icons/illustrated/dark/auth.png'
            },
            {
                label: 'Databases',
                icon: '/images/icons/illustrated/dark/databases.png'
            },
            {
                label: 'Storage',
                icon: '/images/icons/illustrated/dark/storage.png'
            },
            {
                label: 'Functions',
                icon: '/images/icons/illustrated/dark/functions.png'
            },
            {
                label: 'Realtime',
                icon: '/images/icons/illustrated/dark/realtime.png'
            },
            {
                label: 'Messaging',
                icon: '/images/icons/illustrated/dark/messaging.png'
            }
        ],
        Deploy: [
            {
                label: 'Sites',
                icon: '/images/icons/illustrated/dark/sites.png'
            }
        ]
    };
</script>

<div class="container py-20">
    <div class="mx-auto mb-16 flex max-w-5xl flex-col gap-8">
        <h2 class="text-primary font-aeonik-pro mx-auto max-w-sm text-center text-5xl">
            Backend APIs, frontend hosting
        </h2>

        <div class="hidden grid-cols-12 gap-6 lg:grid">
            {#each Object.entries(products) as [key, group], i}
                <div
                    class={classNames(
                        'bg-card border-smooth text-primary flex h-10 items-center gap-4 rounded-full border border-dashed p-1 text-sm',
                        {
                            'col-span-10': i === 0,
                            'col-span-2': i === 1
                        }
                    )}
                >
                    <span class="text-micro text-secondary font-aeonik-fono ml-3 uppercase"
                        >{key}</span
                    >
                    <div class="flex h-full w-full gap-2">
                        {#each group as product}
                            <div
                                class="bg-greyscale-800 flex h-full w-full items-center justify-center gap-2 rounded-full px-3 backdrop-blur-lg"
                            >
                                <span
                                    class="text-primary text-caption flex items-center justify-center gap-1 font-medium"
                                >
                                    <img src={product.icon} alt={product.label} class="size-6" />
                                    {product.label}</span
                                >
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="grid grid-cols-12 gap-4">
        <Auth />
        <Databases />
        <Storage />
        <Functions />
        <Messaging />
        <Realtime />
        <Sites />
    </div>
</div>
