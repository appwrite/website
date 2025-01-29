<script lang="ts">
    import Window from '../ui/window.svelte';
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
        <div slot="title" class="text-micro flex items-center gap-1 text-white">
            Day {index} <span class="text-accent">/</span>
            {format(release, 'EEEE, MMM d')}
        </div>

        <div class="relative mt-2 flex flex-1 items-center justify-between overflow-hidden px-8">
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

            <img src={illustration} alt="key illustration" />
        </div>
    </Window>
</div>
