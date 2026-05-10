<script>
    import { Button } from '$lib/components/ui';
</script>

<section class="container grid grid-cols-1 place-items-center gap-16 pt-12 md:grid-cols-2 md:pt-20">
    <div class="hidden md:block">
        <img src="/images/pages/storage/product-shot-3.avif" width="687" alt="" />
    </div>
    <div class="mx-auto max-w-md">
        <h2 class="text-title font-aeonik-pro text-primary">Fast uploads, lighter transfers</h2>
        <p class="text-main-body mt-4 font-medium">
            Chunked uploads handle large video and design files, while compression and preview
            parameters keep everyday images efficient on browsers and mobile networks.
        </p>
        <div class="mt-8 flex gap-2">
            <Button
                variant="secondary"
                href="/docs/products/storage/images"
                class="!w-full md:!w-fit"
            >
                <span class="text">Learn more</span>
            </Button>
        </div>
    </div>
    <div class="block md:hidden">
        <img
            src="/images/pages/storage/product-shot-3.avif"
            width="100%"
            alt=""
            class="mx-auto block max-w-[580px]"
        />
    </div>
</section>
