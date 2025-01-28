<script lang="ts">
    import ProductsSubmenu from '$lib/components/layout/products-submenu.svelte';
    import ProductsMobileSubmenu from '$lib/components/layout/products-mobile-submenu.svelte';
    import MainNav from '$lib/components/layout/main-nav.svelte';

    import { classNames } from '$lib/utils/classnames';

    let className: string = '';

    export { className as class };
    export let theme: string = '';
    export let transparent: boolean = true;

    $: links = [
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

<header
    class={classNames(
        'bg-primary-bg border-smooth sticky top-0 z-999 flex min-h-[4.5rem] items-center justify-between border-b px-[4vw]',
        className,
        theme,
        { 'bg-transparent backdrop-blur-md': transparent }
    )}
>
    <div class="flex items-center gap-8">
        <a href="/">
            <img
                class="hidden dark:block"
                src="/images/logos/appwrite.svg"
                alt="appwrite"
                height="24"
                width="130"
            />
            <img
                class="block dark:hidden"
                src="/images/logos/appwrite-light.svg"
                alt="appwrite"
                height="24"
                width="130"
            />
        </a>

        <MainNav {links} />
    </div>
</header>
