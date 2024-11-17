<script lang="ts">
    import { createDropdownMenu, melt } from '@melt-ui/svelte';
    import { fly } from 'svelte/transition';
    const {
        elements: { trigger, menu, item, overlay },
        states: { open }
    } = createDropdownMenu({
        forceVisible: true,
        loop: true
    });

    export let label: string;

    const products = [
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
            description: 'Host your domain and take control over your page’s analytics.',
            icon: '/images/icons/illustrated/dark/sites.png'
        }
    ];
</script>

<li class="text-primary hover:text-accent" use:melt={$trigger}>{label}</li>

{#if open}
    <div
        use:melt={$menu}
        transition:fly={{ duration: 150, y: -10 }}
        class="fixed !right-0 !left-0 flex h-[600px] w-full flex-col items-center bg-[#232325]/90 px-12 pb-4 outline-none backdrop-blur-2xl"
    >
        <div class="flex w-full flex-1 flex-col justify-center">
            <span class="font-aeonik-fono text-primary text-xs uppercase"
                >{label}<span class="text-accent">_</span></span
            >
            <div
                class="mt-8 grid w-full grid-cols-1 place-content-between gap-16 md:grid-cols-2 lg:grid-cols-4"
            >
                {#each products as product}
                    <a
                        href={product.href}
                        use:melt={$item}
                        class="group flex flex-col gap-3 rounded-lg text-white outline-none transition-colors"
                    >
                        <img
                            src={product.icon}
                            alt={product.name}
                            class="mb-5 size-8 grayscale transition-all group-focus:grayscale-0"
                        />
                        <span class="text-sub-body text-primary font-medium">{product.name}</span>
                        <p class="text-caption text-secondary">{product.description}</p>
                    </a>
                {/each}
            </div>
        </div>
    </div>
{/if}
