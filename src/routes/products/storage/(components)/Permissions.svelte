<script lang="ts">
    import ProductShot from './ProductShot.svelte';
</script>

<div class="py-20 md:py-40">
    <div class="container">
        <div
            class="mx-auto flex max-w-[380px] flex-col items-center justify-center gap-4 text-center"
        >
            <h2 class="text-title font-aeonik-pro text-primary">
                Protect your files and set permissions
            </h2>
            <p class="text-body max-width-[380px] mx-auto font-medium">
                Set up file encryption and granular user permissions in your storage infrastructure
            </p>
            <a
                href="/docs/products/storage/permissions"
                class="web-button is-secondary mt-4 mx-auto !w-full md:!w-fit">Learn more</a
            >
        </div>
    </div>
    <div class="container mt-20 flex">
        <ProductShot />
    </div>
</div>
