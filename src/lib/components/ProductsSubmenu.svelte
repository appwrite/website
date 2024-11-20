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
        elements: { trigger, menu, item, overlay },
        states: { open }
    } = createDropdownMenu({
        loop: true
    });

    export let label: string;

    let products: Array<SubmenuItem> = [
        {
            name: 'Auth',
            href: '/',
            description: 'Secure login with multi-factor auth.',
            icon: '/images/icons/illustrated/dark/auth.png'
        },
        {
            name: 'Database',
            href: '/',
            description: 'Scalable and robust databases.',
            icon: '/images/icons/illustrated/dark/databases.png'
        },
        {
            name: 'Storage',
            href: '/',
            description: 'Advanced compression and encryption.',
            icon: '/images/icons/illustrated/dark/storage.png'
        },
        {
            name: 'Functions',
            href: '/',
            description: 'Deploy & scale serverless functions.',
            icon: '/images/icons/illustrated/dark/functions.png'
        },
        {
            name: 'Messaging',
            href: '/',
            description: 'Set up a full-functioning messaging service.',
            icon: '/images/icons/illustrated/dark/messaging.png'
        },
        {
            name: 'Realtime',
            href: '/',
            description: 'Subscribe and react to any event.',
            icon: '/images/icons/illustrated/dark/realtime.png'
        },
        {
            name: 'Sites',
            href: '/',
            beta: true,
            description: 'Subscribe and react to any event.',
            icon: '/images/icons/illustrated/dark/sites.png'
        }
    ];
</script>

<li
    class={classNames(
        'text-primary focus:text-accent hover:text-accent inline-flex cursor-pointer items-center justify-between outline-none',
        {
            'text-accent': $open
        }
    )}
    use:melt={$trigger}
>
    {label}

    <span
        class={classNames('web-icon-chevron-down block transition-transform', {
            'rotate-180': $open
        })}
    />
</li>

<div
    use:melt={$menu}
    class={classNames(
        'data-[state=closed]:animate-fade-out container data-[state=open]:animate-fade-in relative z-10 mt-6 mx-auto hidden w-full flex-col rounded-2xl border border-white/8 bg-[#232325] p-0 outline-none md:flex'
    )}
>
    <div class="p-6">
        <div class="grid w-full grid-cols-1 place-content-between gap-16 lg:grid-cols-12">
            <div class="col-span-8">
                <span
                    class="font-aeonik-fono text-secondary tracking-loose mb-4 block text-xs uppercase"
                    >{label}<span class="text-accent">_</span></span
                >
                <div
                    class="grid grid-flow-col-dense grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-4"
                >
                    {#each products as product}
                        <a
                            href={product.href}
                            use:melt={$item}
                            class="group flex gap-3 rounded-xl p-1 text-white outline-none transition-colors focus:bg-white/8"
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
            <div
                class="col-span-4 rounded-2xl border border-white/12 bg-white/6 p-4"
                use:melt={$item}
            >
                <header class="flex items-center justify-between">
                    <span
                        class="font-aeonik-fono tracking-loose text-secondary block text-xs uppercase"
                        >Case studies<span class="text-accent">_</span></span
                    >
                    <a href="/" class="text-primary text-caption flex items-center gap-2"
                        >See more <span class="web-icon-chevron-right" /></a
                    >
                </header>
            </div>
        </div>
    </div>
    <div
        use:melt={$overlay}
        class="data-[state=closed]:animate-fade-out fixed inset-0 bg-black/60"
    />
</div>
