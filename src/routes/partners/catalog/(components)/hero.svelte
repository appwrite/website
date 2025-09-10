<script lang="ts">
    import { cn } from '$lib/utils/cn';
</script>

<div
    class={cn(
        'grid-bg border-smooth relative flex items-center border-b px-5 py-28 lg:px-8 xl:px-16',
        'before:from-accent/20 before:absolute before:inset-0 before:-z-1 before:bg-linear-to-tr before:via-transparent before:via-40% before:to-transparent'
    )}
>
    <div class="relative container pb-0">
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center justify-center gap-5 text-center">
                <div class="text-eyebrow text-white uppercase">
                    Appwrite Partner Catalog<span class="web-u-color-text-accent">_</span>
                </div>
                <h1 class="text-headline font-aeonik-pro text-primary">Find a Partner</h1>
                <p class="text-description max-w-xl">
                    Find the perfect partner to bring your project to life. Whether you're building
                    an application, from scratch or seeking ongoing maintenance and support.
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .grid-bg {
        --line-color: rgba(255, 255, 255, 0.02);
        --size: calc(100vw / 16);

        position: relative;
        z-index: 1;
        overflow: hidden;
        background-image:
            repeating-linear-gradient(
                0deg,
                var(--line-color),
                var(--line-color) 1px,
                transparent 1px,
                transparent var(--size)
            ),
            repeating-linear-gradient(
                90deg,
                var(--line-color),
                var(--line-color) 1px,
                transparent 1px,
                transparent var(--size)
            );

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(
                circle at bottom right,
                rgba(25, 25, 28, 0.5) 19%,
                transparent 100%
            );
            z-index: -2;
        }
    }
</style>
