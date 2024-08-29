<script>
    import { classNames } from '$lib/utils/classnames';
    import Logos from './Logos.svelte';
</script>

<section
    class={classNames(
        'grid md:grid-cols-3 h-screen relative place-items-center h-full w-full gridLine horizontal mt-12 min-h-[60vh]'
    )}
>
    <div class="pattern relative" />
    <div
        class="flex w-full flex-col items-center text-center gap-8 px-8 justify-center h-full relative gridLine vertical bg-gradient-to-t from-accent/5 to-transparent"
    >
        <Logos />
        <h1 class="text-white text-5xl font-aeonik-pro">Build your next project with Appwrite</h1>
        <p class="text-secondary font-medium">
            Appwrite is part of the GitHub student program. Students receive two years of Appwrite
            cloud for free.
        </p>
    </div>
    <div class="pattern relative" />
</section>

<style lang="scss">
    .gridLine {
        --height: 1px;
        --width: 30px;
        --fade-stop: 90%;
        --x-offset: -100px;
        --y-offset: 50px;

        &::before,
        &::after {
            content: '';
            position: absolute;
        }

        &.horizontal {
            &::before,
            &::after {
                width: calc(100% + var(--x-offset));
                height: var(--height);

                background: linear-gradient(
                    to right,
                    var(--color-accent),
                    var(--color-accent) 50%,
                    transparent 0,
                    transparent
                );
                background-size: var(--width) var(--height);

                mask-composite: intersect;
                mask: linear-gradient(to left, var(--color-black) var(--fade-stop), transparent),
                    linear-gradient(to right, var(--color-black) var(--fade-stop), transparent),
                    linear-gradient(black, black);
            }

            &::before {
                top: 0;
            }

            &::after {
                bottom: 0;
            }
        }

        &.vertical {
            &::before,
            &::after {
                height: calc(100% + var(--y-offset));
                width: var(--height);
                top: calc(var(--y-offset) / 2 * -1);

                background: linear-gradient(
                    to bottom,
                    var(--color-accent),
                    var(--color-accent) 50%,
                    transparent 0,
                    transparent
                );
                background-size: var(--height) var(--width);

                mask-composite: intersect;
                mask: linear-gradient(to top, var(--color-black) var(--fade-stop), transparent),
                    linear-gradient(to bottom, var(--color-black) var(--fade-stop), transparent),
                    linear-gradient(black, black);
            }

            &::before {
                left: 0;
            }

            &::after {
                right: 0;
            }
        }
    }

    .pattern {
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            45deg,
            var(--color-primary) 0,
            var(--color-primary) 1px,
            transparent 1px,
            transparent 24px
        );

        mask-image: repeating-linear-gradient(
            -45deg,
            transparent,
            var(--color-primary) 1px 10px,
            transparent 8px 20px
        );

        &:first-of-type {
            &::before {
                content: '';
                inset: 0;
                position: absolute;
                z-index: -1;
                mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 1) 0%,
                    transparent 40%,
                    transparent
                );
                background-color: var(--color-greyscale-900);
            }
        }

        &:last-of-type {
            &::after {
                content: '';
                inset: 0;
                position: absolute;
                z-index: -1;
                mask-image: linear-gradient(
                    to left,
                    rgba(0, 0, 0, 1) 0%,
                    transparent 40%,
                    transparent
                );
                background-color: var(--color-greyscale-900);
            }
        }
    }
</style>
