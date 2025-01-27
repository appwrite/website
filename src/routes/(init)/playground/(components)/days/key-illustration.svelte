<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Window from '../retro-ui/Window.svelte';
    import Globe from '../../(assets)/globe.svg';

    import { format } from 'date-fns';

    type $$Props = {
        illustration: string;
        release: Date;
        title: string;
        description: string;
        url: string;
        index: number;
    };

    export let illustration: $$Props['illustration'] = Globe;
    export let release: $$Props['release'];
    export let title: $$Props['title'];
    export let description: $$Props['description'];
    export let url: $$Props['url'];
    export let index: $$Props['index'];
</script>

<div class="relative h-fit">
    <Window class="aspect-[3/1]">
        <span slot="title" class="text-micro text-white"
            >Day {index} - {format(release, 'EEEE, MMM d')}<span class="text-accent">_</span></span
        >

        <div
            class={classNames(
                'light checkerboard relative mt-2 flex flex-1 items-center justify-between overflow-hidden bg-white px-12',
                'after:absolute after:inset-0 after:-z-0 after:bg-gradient-to-b after:from-transparent after:via-white after:to-white'
            )}
        >
            <div class="relative z-10 space-y-8">
                <h2 class="text-title font-aeonik-pro text-primary mb-2">{title}</h2>
                <p class="text-secondary text-body max-w-sm font-medium">
                    {description}
                </p>
                <a href={url} class="text-primary group text-sub-body flex- flex gap-1"
                    >Announcement
                    <span
                        class="web-icon-arrow-right transition-transform group-hover:translate-x-0.5"
                    />
                </a>
            </div>

            <img
                src={illustration}
                alt="key illustration"
                class="relative z-10 -mt-28 translate-y-28"
            />
        </div>
    </Window>
</div>
