<script lang="ts">
    import ProductShot from './ProductShot.svelte';
</script>

<div class="web-big-padding-section-level-2">
    <div class="container">
        <div
            class="mx-auto flex max-w-[380px] flex-col items-center justify-center gap-4 md:text-center"
        >
            <h1 class="text-title font-aeonik-pro text-primary">
                Protect your files and set permissions
            </h1>
            <p class="text-body max-width-[380px] mx-auto font-medium">
                Set up file encryption and granular user permissions in your storage infrastructure
            </p>
            <a href="/" class="web-button is-secondary is-full-width-mobile mt-8 mx-auto"
                >Learn more</a
            >
        </div>
    </div>
    <div class="container flex">
        <ProductShot />
    </div>
</div>
