<script lang="ts">
    import { cn } from '$lib/utils/cn';
</script>

<div
    class={cn(
        'border-smooth relative -mb-24 border-t py-32',
        'bg-[url("/images/bgs/building-blocks.webp")] [background-size:50%] bg-right-bottom bg-no-repeat',
        'before:absolute before:top-0 before:left-0 before:z-0 before:block before:h-80 before:w-full before:bg-[radial-gradient(at_25%_0%,_hsla(343,_98%,_60%,_0.05)_0px,_transparent_73%,_transparent_100%)] md:before:w-1/2',
        'after:absolute after:top-0 after:right-0 after:z-0 after:hidden after:h-80 after:w-1/2 after:bg-[radial-gradient(at_100%_0%,_hsla(177,_53%,_69%,_0.1)_0px,_transparent_73%,_transparent_100%)] after:md:block md:after:block'
    )}
>
    <div class="relative container grid grid-cols-1 place-items-center md:grid-cols-2">
        <section class="flex max-w-[540px] flex-col gap-4">
            <h2 class="text-display font-aeonik-pro text-primary">Become an Appwrite Partner</h2>
            <p class="text-main-body font-medium">
                Find the perfect partner to bring your project to life. Whether you're building an
                application, from scratch or seeking ongoing maintenance and support.
            </p>
            <a href="/partners#become-a-partner" class="web-button mt-4">
                <span class="text">Become a Partner</span>
            </a>
        </section>
    </div>
</div>
