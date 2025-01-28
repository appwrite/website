<script lang="ts">
    import ProductsSubmenu from '$lib/components/layout/products-submenu.svelte';
    import ProductsMobileSubmenu from '$lib/components/layout/products-mobile-submenu.svelte';
    import { classNames } from '$lib/utils/classnames';

    let className: string = '';

    export { className as class };
    export let theme: string = '';

    $: navLinks = [
        {
            label: 'Products',
            submenu: ProductsSubmenu,
            mobileSubmenu: ProductsMobileSubmenu
        },
        {
            label: 'Docs',
            href: '/docs'
        },
        {
            label: 'Pricing',
            href: '/pricing'
        }
    ];
</script>

<header class={classNames('bg-primary-bg sticky z-999', className, theme)}></header>
