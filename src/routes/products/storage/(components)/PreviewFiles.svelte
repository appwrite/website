<script lang="ts">
    import ProductPreview from '../(assets)/product-preview.avif';
    import { Button } from '$lib/components/ui';
</script>

<div class="relative bg-right-top bg-no-repeat pt-20 pb-12 md:py-40">
    <section
        class="relative container grid grid-cols-1 items-center justify-between gap-x-16 gap-y-12 md:grid-cols-2"
    >
        <div class="max-w-md">
            <h2 class="text-title font-aeonik-pro text-primary">
                Serve the right image for every screen
            </h2>
            <p class="text-main-body mt-4 font-medium">
                Request resized, cropped, and format-optimized previews from one stored file—ideal
                for avatars, catalogs, and user-generated content—without running a separate image
                delivery service on the side.
            </p>
            <div class="mt-8 flex gap-2">
                <Button
                    variant="secondary"
                    href="/docs/products/storage/upload-download#get-file-preview"
                    class="!w-full md:!w-fit"
                >
                    <span class="text">Learn more</span>
                </Button>
            </div>
        </div>
        <div class="relative">
            <img src={ProductPreview} alt="Preview Files" />
        </div>
    </section>
</div>
