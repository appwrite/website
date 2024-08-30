<script>
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import Button from '$lib/components/ui/Button.svelte';
    import { classNames } from '$lib/utils/classnames';
    import Logos from './Logos.svelte';
    import ChatIcon from '../(assets)/chat-icon.svg';
    import Beaker from '../(assets)/beaker.svg';
    import Checkmark from '../(assets)/checkmark.svg';

    const items = [
        {
            label: 'Develop your skills',
            description:
                'Get access to Appwrite’s Pro plan and build your entire backend with Appwrite.',
            icon: Checkmark
        },
        {
            label: 'Build with any framework',
            description:
                'Get $250 cloud credits to build with Appwrite Pro, valid throughout your student career and reduce risk at an early stage.',
            icon: Beaker
        },
        {
            label: 'Join a vibrant community',
            description:
                'Get community support and dedicated email support from the Appwrite team.',
            icon: ChatIcon
        }
    ];
</script>

<section
    class={classNames(
        'grid md:grid-cols-3 h-screen relative place-items-center h-full w-full gridLine horizontal mt-12 min-h-[50vh]'
    )}
>
    <div class="pattern relative" />
    <div
        class="py-10 flex w-full flex-col items-center text-center gap-8 px-8 justify-center h-full relative gridLine vertical bg-gradient-to-t from-accent/5 to-transparent"
    >
        <Logos />
        <h1 class="text-white text-5xl font-aeonik-pro">Build your next project with Appwrite</h1>
        <p class="text-secondary font-medium">
            Appwrite is part of the GitHub student program. Students receive two years of Appwrite
            cloud for free.
        </p>

        <div class="flex gap-4 items-center">
            <Button href={PUBLIC_APPWRITE_DASHBOARD}>Sign up now</Button>
            <Button href={PUBLIC_APPWRITE_DASHBOARD} variant="secondary">
                <span class="web-icon-github" slot="icon" />
                GitHub Education</Button
            >
        </div>
    </div>
    <div class="pattern relative" />
</section>

<div
    class="container grid md:grid-cols-3 py-20 gap-16 text-center min-h-40 items-start place-content-center"
>
    {#each items as { label, description, icon }}
        <div class="flex flex-col justify-center">
            <img src={icon} alt={label} class="size-12 mb-3 mx-auto" />
            <h3 class="text-primary text-lg font-aeonik-pro">{label}</h3>
            <p class="text-secondary">
                {description}
            </p>
        </div>
    {/each}
</div>

<style lang="scss">
    .gridLine {
        --height: 1px;
        --width: 30px;
        --fade-stop: 90%;
        --x-offset: 0px;
        --y-offset: 50px;

        &::before,
        &::after {
            content: '';
            position: absolute;
            display: none;

            @media screen and (width >= 48rem) {
                display: block;
            }
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
        display: none;

        @media screen and (width >= 48rem) {
            display: block;
        }

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
            }
        }

        &:last-of-type {
            &::after {
                content: '';
                inset: 0;
                position: absolute;
                z-index: -1;
            }
        }
    }
</style>
