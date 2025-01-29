<script lang="ts">
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

    export let title: $$Props['title'];
    export let description: $$Props['description'];
    export let url: $$Props['url'];
</script>

<div
    class="bg-smooth relative grid min-h-[50vh] grid-cols-12 place-items-center justify-between px-4"
>
    <div
        class="border-offset relative z-10 col-span-5 flex h-full flex-col justify-center border-x-2 border-dashed px-8"
    >
        <h2 class="text-display font-aeonik-pro text-primary mb-2">
            {title}<span class="text-accent">_</span>
        </h2>
        <p class="text-secondary text-body max-w-sm font-medium">
            {description}
        </p>
        <a href={url} class="text-primary group text-sub-body flex- flex gap-1"
            >Announcement
            <span class="web-icon-arrow-right transition-transform group-hover:translate-x-0.5" />
        </a>
    </div>
    <div class="col-span-7 max-h-[50vh] overflow-hidden">
        <img src={illustration} alt="key illustration" class="mt-10 size-[600px]" />
    </div>
</div>
