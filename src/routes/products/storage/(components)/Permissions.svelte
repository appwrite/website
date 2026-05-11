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
                Encrypt files at rest and enforce per-user and team permissions—so private uploads
                stay private, not just hidden behind a public URL pattern.
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
