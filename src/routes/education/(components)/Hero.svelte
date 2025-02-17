<script>
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { classNames } from '$lib/utils/classnames';
    import Logos from './Logos.svelte';
    import ChatIcon from '../(assets)/chat-icon.svg';
    import Beaker from '../(assets)/beaker.svg';
    import Checkmark from '../(assets)/checkmark.svg';

    const items = [
        {
            label: 'Develop your skills',
            description:
                'Get access to Appwrite Cloud and build your entire backend with Appwrite.',
            icon: Checkmark
        },
        {
            label: 'Build with any framework',
            description:
                'Get free access to build with Appwrite’s Education plan, valid throughout your student career.',
            icon: Beaker
        },
        {
            label: 'Join a vibrant community',
            description: 'Get community support in the Appwrite Discord server.',
            icon: ChatIcon
        }
    ];

    const educationSignUp = `${PUBLIC_APPWRITE_DASHBOARD}/console/education`;
</script>

<section
    class={classNames(
        'gridLine horizontal relative mt-8 grid h-full min-h-[50vh] w-full place-items-center md:mt-32 md:grid-cols-[10%_1fr_10%] lg:grid-cols-[20%_1fr_20%] xl:grid-cols-3'
    )}
>
    <div class="pattern relative hidden h-full w-full md:block" />
    <div
        class="gridLine vertical from-accent/5 relative flex h-full w-full flex-1 basis-[calc(100vw_/_3)] flex-col items-center justify-center gap-8 to-transparent py-10 px-8 text-center md:bg-gradient-to-t"
    >
        <Logos />
        <h1 class="font-aeonik-pro text-5xl text-white">Build your next project with Appwrite</h1>
        <p class="text-secondary font-medium">
            Join the Appwrite Education program in collaboration with the GitHub Student Developer
            Pack. Students access Appwrite Cloud for free throughout their studies.
        </p>

        <div class="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <a class="web-button !w-full md:!w-fit" href={educationSignUp}>Sign up now</a>
            <a
                class="web-button is-secondary !w-full !whitespace-normal md:!w-fit"
                href="https://github.com/education"
            >
                <span class="web-icon-github !text-white" />
                GitHub Education</a
            >
        </div>
    </div>
    <div class="pattern relative hidden h-full w-full md:block" />
</section>

<div
    class="container grid min-h-40 place-content-center items-start gap-16 py-24 text-center md:grid-cols-3"
>
    {#each items as { label, description, icon }}
        <div class="flex flex-col justify-center">
            <img src={icon} alt={label} class="mx-auto mb-3 size-12" />
            <h3 class="text-primary font-aeonik-pro text-lg">{label}</h3>
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
