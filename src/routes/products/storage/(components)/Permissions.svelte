<script lang="ts">
    import { Button } from '$lib/components/ui';
    import ProductShot from './ProductShot.svelte';
</script>

<div class="py-30 md:py-40">
    <div class="container">
        <div
            class="mx-auto flex max-w-[500px] flex-col items-center justify-center gap-4 text-center"
        >
            <h2 class="text-title font-aeonik-pro text-primary">
                Protect your files and set permissions
            </h2>
            <p class="text-main-body max-width-[380px] mx-auto font-medium">
                Set up file encryption and granular user permissions in your storage infrastructure
            </p>
            <Button
                href="/docs/products/storage/permissions"
                variant="secondary"
                class="mx-auto mt-4 !w-full md:!w-fit">Learn more</Button
            >
        </div>
    </div>
    <div class="container mt-20 flex">
        <ProductShot />
    </div>
</div>
