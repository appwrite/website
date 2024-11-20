<script lang="ts">
    const allProducts = {
        messaging: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        }
    };

    export let products = [
        'messaging',
        'functions',
        'databases',
        'storage',
        'auth',
        'realtime',
        'sites'
    ];
</script>

<section class="border-smooth -mt-8 border-t py-40">
    <div class="container">
        <h4 class="text-label text-primary text-center">Keep exploring our products</h4>
        <div class="mt-8 flex gap-8">
            {#each products as product}
                {@const productInfo = allProducts[product]}
                <div>
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
                                <h4 class="text-body text-primary">{product.title}</h4>
                                <span class="web-icon-arrow-right ml-auto" aria-hidden="true" />
                            </div>
                            <p class="text-sub-body">
                                {product.description}
                            </p>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>
