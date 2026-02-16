<script lang="ts">
    const build = [
        {
            label: 'Auth',
            icon: '/images/icons/illustrated/light/auth.png',
            href: '/products/auth'
        },
        {
            label: 'Databases',
            icon: '/images/icons/illustrated/light/databases.png',
            href: '/docs/products/databases'
        },
        {
            label: 'Storage',
            icon: '/images/icons/illustrated/light/storage.png',
            href: '/products/storage'
        },
        {
            label: 'Functions',
            icon: '/images/icons/illustrated/light/functions.png',
            href: '/products/functions'
        },
        {
            label: 'Messaging',
            icon: '/images/icons/illustrated/light/messaging.png',
            href: '/products/messaging'
        },
        {
            label: 'Realtime',
            icon: '/images/icons/illustrated/light/realtime.png',
            href: '/docs/apis/realtime'
        }
    ];

    const deploy = [
        {
            label: 'Sites',
            icon: '/images/icons/illustrated/light/sites.png',
            href: '/products/sites'
        }
    ];
</script>

<section class="container">
    <div class="mx-auto max-w-[720px] text-center">
        <h3 class="text-title font-aeonik-pro text-primary">
            Your startups<br />developer toolkit
        </h3>
        <p class="text-body mt-2 font-medium">
            Appwrite offers an all-in-one hosting platform for you to build <br />
            and deploy your product from a single place.
        </p>
    </div>

    <div
        class="mt-6 flex flex-col items-center justify-center gap-2 lg:flex-row lg:flex-wrap lg:gap-0"
    >
        <!-- Build group -->
        <div
            class="text-primary flex h-10 w-full items-center gap-4 rounded-full border border-dashed border-black/8 bg-white p-1 text-sm lg:w-auto"
        >
            <span class="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase">Build</span>
            <div class="flex h-full w-full justify-between gap-2">
                {#each build as product}
                    <a
                        href={product.href}
                        class="bg-smooth hover:bg-smooth/50 flex h-full w-fit items-center justify-center gap-2 rounded-full px-0.5 backdrop-blur-lg transition-opacity sm:px-1 md:px-2 lg:px-3"
                    >
                        <span
                            class="text-primary text-caption flex items-center justify-center gap-1 font-medium"
                        >
                            <img
                                loading="lazy"
                                src={product.icon}
                                alt={product.label}
                                class="size-6"
                            />
                            <span class="hidden lg:inline">{product.label}</span>
                        </span>
                    </a>
                {/each}
            </div>
        </div>
        <div
            aria-hidden="true"
            class="mx-0 hidden h-px w-6 self-center border-t border-dashed border-black/8 lg:block"
        ></div>
        <!-- Deploy group -->
        <div
            class="text-primary flex h-10 items-center gap-4 rounded-full border border-dashed border-black/8 bg-white p-1 text-sm"
        >
            <span class="text-eyebrow text-secondary font-aeonik-fono ml-3 uppercase">Deploy</span>
            <div class="flex h-full w-full justify-between gap-2">
                {#each deploy as product}
                    <a
                        href={product.href}
                        class="bg-smooth hover:bg-smooth/50 flex h-full w-fit items-center justify-center gap-2 rounded-full px-0.5 backdrop-blur-lg transition-opacity sm:px-1 md:px-2 lg:px-3"
                    >
                        <span
                            class="text-primary text-caption flex items-center justify-center gap-1 font-medium"
                        >
                            <img
                                loading="lazy"
                                src={product.icon}
                                alt={product.label}
                                class="size-6"
                            />
                            <span class="hidden lg:inline">{product.label}</span>
                        </span>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>
