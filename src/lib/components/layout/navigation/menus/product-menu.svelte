<script lang="ts">
    import { NavigationMenu } from 'bits-ui';
    import MenuWrapper from './menu-wrapper.svelte';
    import { classNames } from '$lib/utils/classnames';

    const products: { name: string; href: string; description: string }[] = [
        {
            name: 'Auth',
            href: '/products/auth',
            description: 'Secure login with multi-factor auth.'
        },
        {
            name: 'Databases',
            href: '/docs/products/databases',
            description: 'Scalable and robust databases.'
        },
        {
            name: 'Storage',
            href: '/products/storage',
            description: 'Advanced compression and encryption.'
        },
        {
            name: 'Functions',
            href: '/products/functions',
            description: 'Deploy & scale serverless functions.'
        },
        {
            name: 'Messaging',
            href: '/products/messaging',
            description: 'Set up a full-functioning messaging service.'
        },
        {
            name: 'Realtime',
            href: '/docs/apis/realtime',
            description: 'Subscribe and react to any event.'
        },
        {
            name: 'Sites',
            href: '/products/sites',
            description: 'The open-source Vercel alternative.'
        }
    ];
</script>

<MenuWrapper>
    <div class="grid gap-3 sm:w-[400px] md:w-[600px] md:grid-cols-2 lg:w-[800px]">
        {#each products as product}
            <NavigationMenu.Link
                class="hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                href={product.href}
            >
                <div class="text-sm leading-none font-medium">{product.name}</div>
                <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    {product.description}
                </p>
            </NavigationMenu.Link>
        {/each}
    </div>
</MenuWrapper>
