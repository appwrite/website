<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { slugify } from '$lib/utils/slugify';
    import { latLongToSvgPosition } from './utils/projections';
    import { tooltipData } from './map-tooltip.svelte';

    interface Props {
        city: string;
        code: string;
        index: number;
        lat: number;
        lng: number;
        bounds: {
            north: number;
            south: number;
            west: number;
            east: number;
        };
        available: boolean;
        class?: string;
        animate?: boolean;
    }

    const { city, code, index = 0, lat, lng, available, animate = false }: Props = $props();

    const position = $derived(latLongToSvgPosition({ latitude: lat, longitude: lng }));

    const handleSetActiveMarker = () => {
        tooltipData.set({
            city,
            code,
            available
        });
    };

    const handleResetActiveMarker = () => {
        tooltipData.set({
            city: null,
            code: null,
            available: null
        });
    };
</script>

<button
    class={classNames(
        'group absolute z-10 flex size-2 cursor-pointer items-center justify-center opacity-0 [animation-delay:var(--delay)]',
        { 'animate-fade-in': animate }
    )}
    style="left: {position.x}px; top: {position.y}px;--delay: {index * 10}ms;"
    data-region={slugify(city)}
    onmouseenter={handleSetActiveMarker}
    onfocus={handleSetActiveMarker}
    onmouseleave={handleResetActiveMarker}
    onblur={handleResetActiveMarker}
    aria-label={city}
>
    <span
        class="from-accent/20 to-accent/10 border-gradient ease-spring pointer-events-none absolute inline-flex h-5 w-5 rounded-full bg-gradient-to-b opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-75 before:rounded-full"
        style:animation-duration="1.5s"
    ></span>
    <span class="bg-accent absolute inline-flex h-full w-full rounded-full"></span>
    <span class="absolute size-1/2 rounded-full bg-white/80 transition-all"></span>
</button>
