<script lang="ts">
    import ProductPreview from '../(assets)/product-preview.png';
    import { Button } from '$lib/components/ui';
</script>

<div class="relative bg-right-top bg-no-repeat pt-20 pb-12 md:py-40">
    <section
        class="relative container grid grid-cols-1 items-center justify-between gap-x-16 gap-y-12 md:grid-cols-2"
    >
        <div class="max-w-md">
            <h2 class="text-title font-aeonik-pro text-primary">
                Preview media files however you want
            </h2>
            <p class="text-main-body mt-4 font-medium">
                Appwrite Storage's preview endpoint lets you manipulate image previews while also
                managing different formats and compression algorithms.
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
