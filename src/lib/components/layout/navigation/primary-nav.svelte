<script lang="ts">
    import { NavigationMenu } from 'bits-ui';

    import { classNames } from '$lib/utils/classnames';
    import type { Component, SvelteComponent } from 'svelte';
    import ProductMenu from './menus/product-menu.svelte';
    import { Icon } from '$lib/components/ui';

    type NavItem =
        | ({ label: string; href: string } & { menu?: never })
        | {
              label: string;
              menu: Component;
              href?: never;
          };

    export const navItems: Array<NavItem> = [
        { label: 'Products', menu: ProductMenu },
        {
            label: 'Docs',
            menu: ProductMenu
        },
        {
            label: 'Pricing',
            href: '/pricing'
        },
        {
            label: 'Enterprise',
            href: '/enterprise'
        }
    ];
    type Props = NavigationMenu.RootProps;

    const { class: className, ...rest }: Props = $props();
</script>

<NavigationMenu.Root class={className} {...rest}>
    <NavigationMenu.List class="flex items-center">
        {#each navItems as item}
            <NavigationMenu.Item
                class="rounded-md px-4 py-2 transition-colors  hover:bg-white/6 hover:text-white"
            >
                {#if item.menu}
                    {@const Submenu = item.menu}
                    <NavigationMenu.Trigger>{item.label}</NavigationMenu.Trigger>
                    <Submenu />
                {:else}
                    <NavigationMenu.Link href={item.href}>{item.label}</NavigationMenu.Link>
                {/if}
            </NavigationMenu.Item>
        {/each}
    </NavigationMenu.List>
    <div class="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport
            class={classNames(
                'bg-greyscale-850 border-smooth relative w-full origin-[top_center] overflow-hidden rounded-b-md border-x border-b opacity-100 shadow-lg backdrop-blur-2xl transition-[width,_height] duration-200 before:rounded-md after:rounded-md',
                'data-[state=open]:animate-scale-in data-[state=closed]:hidden',
                'h-(--bits-navigation-menu-viewport-height) sm:w-(--bits-navigation-menu-viewport-width)'
            )}
        />
    </div>
</NavigationMenu.Root>
