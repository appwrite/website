<script lang="ts">
    const allProducts = {
        messaging: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        },
        functions: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        },
        databases: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        },
        storage: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        },
        auth: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        },
        realtime: {
            title: 'Messaging',
            description: 'Use Appwrite messaging to send email, SMS, and push notifications.',
            icon: '/images/icons/illustrated/dark/messaging.png',
            url: '/products/messaging'
        }
    } as const;

    export let exclude:
        | 'messaging'
        | 'functions'
        | 'databases'
        | 'storage'
        | 'auth'
        | 'realtime'
        | undefined = undefined;
</script>

<section class="border-smooth -mt-8 border-t py-40">
    <div class="container">
        <h4 class="text-label text-primary text-center">Keep exploring our products</h4>
        <div class="mt-8 flex gap-8">
            <!--            
                <div>
                    <a
                        class="web-card is-normal"
                        href={productInfo.url}
                        style="background: rgba(255, 255, 255, 0.04);"
                    >
                        <div
                            class="web-u-padding-inline-8 web-u-padding-block-end-8 flex flex-col gap-2"
                        >
                            <div class="flex items-center gap-2">
                                <img src={productInfo.icon} alt="auth" width="32" height="32" />
                                <h4 class="text-body text-primary">{productInfo.title}</h4>
                                <span class="web-icon-arrow-right ml-auto" aria-hidden="true" />
                            </div>
                            <p class="text-sub-body">
                                {productInfo.description}
                            </p>
                        </div>
                    </a>
                </div> -->
        </div>
    </div>
</section>
