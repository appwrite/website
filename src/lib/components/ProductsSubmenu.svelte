<script lang="ts" context="module">
    export type SubmenuItem = {
        name: string;
        href: string;
        description: string;
        icon: string;
        beta?: boolean;
    };
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { createDropdownMenu, melt } from '@melt-ui/svelte';

    const {
        elements: { trigger, menu, item }
    } = createDropdownMenu({
        loop: true
    });

    export let label: string;

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

<li class="text-primary hover:text-accent cursor-pointer" use:melt={$trigger}>{label}</li>

<div
    use:melt={$menu}
    class={classNames(
        'data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in fixed !right-0 !left-0 flex h-[600px] w-full flex-col items-center bg-[#232325]/90 px-12 pb-4 outline-none backdrop-blur-2xl'
    )}
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
                    <span class="text-sub-body text-primary font-medium"
                        >{product.name}

                        {#if product.beta}
                            <span
                                class="text-caption ml-2 rounded bg-white/24 py-1 px-2 font-medium text-white"
                                >Coming soon</span
                            >
                        {/if}
                    </span>
                    <p class="text-caption text-secondary">{product.description}</p>
                </a>
            {/each}
        </div>
    </div>
</div>
