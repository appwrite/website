<script lang="ts">
    import { page } from '$app/state';
    const allProducts = {
        auth: {
            title: 'Auth',
            description: 'Build secure authentication and manage your users.',
            icon: '/images/icons/illustrated/dark/auth.png',
            url: '/products/auth'
        },
        databases: {
            title: 'Databases',
            description: 'Store and query structured data, ensuring scalable storage.',
            icon: '/images/icons/illustrated/dark/databases.png',
            url: '/docs/products/databases'
        },
        storage: {
            title: 'Storage',
            description: 'Manage your files project, using convenient APIs and utilities.',
            icon: '/images/icons/illustrated/dark/storage.png',
            url: '/products/storage'
        },
        functions: {
            title: 'Functions',
            description: ' Scale big and unlock limitless potential with Appwrite functions.',
            icon: '/images/icons/illustrated/dark/functions.png',
            url: '/products/functions'
        },

        messaging: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        },
        realtime: {
            title: 'Realtime',
            description: 'Subscribe and react to any event using the Realtime API.',
            icon: '/images/icons/illustrated/dark/realtime.png',
            url: '/docs/realtime'
        },
        sites: {
            title: 'Sites',
            description: 'The open-source Vercel alternative.',
            icon: '/images/icons/illustrated/dark/sites.png',
            url: '/products/sites'
        }
    } as const;

    const products = Object.entries(allProducts)
        .filter(([key]) => key !== page.url.pathname.replace('/products/', ''))
        .map(([_, value]) => value);
</script>

<section class="border-smooth border-t py-20 md:py-40">
    <div class="container max-md:px-5!">
        <h4 class="text-label text-primary text-center">Keep exploring our products</h4>
        <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {#each products as product}
                <a
                    class="web-card is-normal"
                    href={product.url}
                    style="background: rgba(255, 255, 255, 0.04);"
                >
                    <div
                        class="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2"
                    >
                        <div class="flex items-center gap-2">
                            <img src={product.icon} alt="auth" width="32" height="32" />
                            <h4 class="text-main-body text-primary">{product.title}</h4>
                            <span class="web-icon-arrow-right ml-auto" aria-hidden="true"></span>
                        </div>
                        <p class="text-sub-body">
                            {product.description}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
