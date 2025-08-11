<script>
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import Puzzle from './puzzle.svelte';
</script>

<div
    class={classNames(
        'grid-bg border-smooth relative box-content flex items-center border-b px-5 py-12 lg:px-8 xl:px-16',
        'before:absolute before:inset-0 before:-z-1 before:bg-linear-to-r before:from-black/32 before:to-transparent'
    )}
>
    <div class="container mx-auto grid grid-cols-1 place-items-center gap-16 md:grid-cols-2">
        <div class="flex max-w-lg flex-col gap-8">
            <div class="flex items-center gap-2">
                <span class="font-aeonik-fono tracking-loose text-eyebrow text-primary uppercase">
                    Partners Program<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="font-aeonik-pro text-display text-primary text-pretty">
                Boost businesses with Appwrite<span class="text-accent">_</span>
            </h1>
            <p class="text-description text-secondary font-medium text-pretty">
                Join the Appwrite Partners program and grow your business. Deliver powerful
                solutions to clients, increase revenue, and expand your reach.
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <Button
                    variant="secondary"
                    href="#become-a-partner"
                    class="!w-full md:!w-fit"
                    event="partners-become_a_partner_hero-click">Become a Partner</Button
                >
            </div>
        </div>
        <Puzzle />
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
