<script lang="ts">
    import { slugify } from '$lib/utils/slugify';
    import { classNames } from '$lib/utils/classnames';
    import MapNav from './map-nav.svelte';
    import { useMousePosition } from '$lib/actions/mouse-position.svelte';
    import { useAnimateInView } from '$lib/actions/animate-in-view';
    import { pins, type PinSegment } from './data/pins';
    import MapTooltip, {
        handleSetActiveTooltip,
        handleResetActiveTooltip
    } from './map-tooltip.svelte';
    import { createMap } from '$lib/map';

    let activeRegion = $state<string | null>(null);
    let activeMarker: HTMLElement | null = null;
    let activeSegment = $state<string>('pop-locations');
    let activeMarkers = $derived(pins[activeSegment as PinSegment]);

    const { action: mousePosition, position } = useMousePosition();
    const { action: inView, animate } = useAnimateInView({});

    const scrollMarkerIntoView = (marker: HTMLElement) => {
        return new Promise<void>((resolve) => {
            marker.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].intersectionRatio > 0.5) {
                        observer.disconnect();
                        resolve();
                    }
                },
                { threshold: [0, 0.25, 0.5, 0.75, 1] }
            );

            observer.observe(marker);
        });
    };

    const handleSetActiveMarker = async (city: string) => {
        const citySlug = slugify(city);

        if (activeRegion === citySlug) {
            activeMarker = null;
            activeRegion = null;
            return;
        }

        activeMarker = document.querySelector(`[data-region="${citySlug}"]`);

        if (activeMarker) {
            await scrollMarkerIntoView(activeMarker);
            activeRegion = citySlug;
        }
    };

    const height = 75;
    let map: ReturnType<typeof createMap> = $state({
        points: [],
        markers: [],
        base: ''
    });

    const getMarkers = () => {
        return activeMarkers;
    };

    $effect(() => {
        map = createMap({
            width: height * 2,
            height,
            markers: getMarkers(),
            skew: 1,
            baseColor: 'rgba(255,255,255,.1)',
            markerColor: 'var(--color-accent)'
        });
    });
</script>

<div class="relative -mt-8 w-full overflow-x-scroll [scrollbar-width:none]">
    <div
        class="sticky left-0 mx-auto block max-w-[calc(100vw_-_calc(var(--spacing)_*-2))] md:hidden"
    >
        <select
            class="web-input-text mx-auto appearance-none"
            onchange={(e) => handleSetActiveMarker(e.currentTarget.value)}
        >
            {#each pins[activeSegment as PinSegment] as pin}
                <option value={pin.city}>{pin.city}-({pin.code})</option>
            {/each}
        </select>
    </div>

    <div class="relative mx-auto h-full w-[250vw] [scrollbar-width:none] md:w-full" use:inView>
        <div
            class="relative mx-auto h-fit w-full max-w-5xl origin-bottom transform-[perspective(25px)_rotateX(1deg)_scale3d(1.4,_1.4,_1)] transition-all [scrollbar-width:none]"
        >
            <svg viewBox={`0 0 ${height * 2} ${height}`} use:mousePosition>
                {#each map.points as point}
                    <circle cx={point.x} cy={point.y} r={point.size} fill={point.color} />
                {/each}
                {#each map.markers as marker}
                    <g
                        role="tooltip"
                        class="animate-fade-in outline-none"
                        onmouseover={() =>
                            handleSetActiveTooltip(marker.city, marker.code, marker.available)}
                        onfocus={() =>
                            handleSetActiveTooltip(marker.city, marker.code, marker.available)}
                        onblur={() => handleResetActiveTooltip(250)}
                        onmouseout={() => handleResetActiveTooltip(250)}
                        data-region={slugify(marker.city)}
                    >
                        <circle
                            cx={marker.x}
                            cy={marker.y}
                            r={marker.size * 1.5}
                            fill={marker.color}
                        />
                        <circle cx={marker.x} cy={marker.y} r={marker.size * 0.5} fill="white" />
                        <circle
                            cx={marker.x}
                            cy={marker.y}
                            r={marker.size * 4}
                            fill="transparent"
                        />
                    </g>
                {/each}
            </svg>
        </div>
    </div>
    <MapTooltip {...position()} />
</div>

<MapNav onValueChange={(value) => (activeSegment = value)} />
