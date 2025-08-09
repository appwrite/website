<script lang="ts">
    import { slide } from 'svelte/transition';
    import { classNames } from '$lib/utils/classnames';
    import { trackEvent } from '$lib/actions/analytics';
    import { melt, createCollapsible } from '@melt-ui/svelte';
    import { products, sublinks } from './ProductsSubmenu.svelte';

    export let label: string;

    const {
        elements: { root, content, trigger },
        states: { open }
    } = createCollapsible();
</script>

<div use:melt={$root} class="relative mx-auto block lg:hidden">
    <div class="flex items-center justify-between">
        <button
            use:melt={$trigger}
            class="text-caption web-side-nav-button flex items-center justify-between"
            >{label}
            <span
                class={classNames('web-icon-chevron-down transition-transform', {
                    'rotate-180': $open
                })}
            ></span></button
        >
    </div>

    <div>
        {#if $open}
            <div use:melt={$content} transition:slide class="px-2 py-3">
                <div class="flex flex-col gap-2">
                    {#each products as product}
                        <a
                            href={product.href}
                            onclick={() =>
                                trackEvent(
                                    `products-mobile_submenu-${product.name.toLowerCase()}-click`
                                )}
                            class="group flex gap-3 rounded-xl p-2 text-white transition-colors outline-none focus:bg-white/8"
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
                                            class="text-caption bg-accent/24 ml-1 rounded px-2 py-1 font-medium text-white"
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

                <div class="mt-8">
                    <span
                        class="font-aeonik-fono tracking-loose text-secondary block text-xs uppercase"
                        >Compare Appwrite<span class="text-accent">_</span></span
                    >
                    <div class="mt-3 space-y-3">
                        {#each sublinks as sublink}
                            <a
                                href={sublink.href}
                                class="text-caption text-primary flex items-center gap-2"
                            >
                                {sublink.label} <span class="web-icon-chevron-right"></span>
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
