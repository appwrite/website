<script lang="ts">
    import MenuWrapper, { NavItem } from './menu-wrapper.svelte';

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
        }
    ];
</script>

<MenuWrapper>
    <ul class="grid gap-3 p-3 sm:w-[400px] sm:p-6 md:w-[600px] md:grid-cols-2 lg:w-[800px]">
        {#each products as product (product.name)}
            {@render NavItem({
                href: product.href,
                label: product.name,
                content: product.description
            })}
        {/each}
    </ul>
</MenuWrapper>
