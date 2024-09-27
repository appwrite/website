<script lang="ts">
    import DottedMap, { type DottedMapLib } from 'dotted-map';
    import { mousePosition } from '../mouse-position';
    import { onMount } from 'svelte';

    let mapContainer: SVGSVGElement;

    let x: number;
    let y: number;

    let tooltip: {
        isActive: boolean;
        country: null | string;
        city: null | string;
        available: null | boolean;
    } = {
        isActive: false,
        country: null,
        city: null,
        available: null
    };

    let showTooltip: boolean = false;

    mousePosition.subscribe(({ x: newX, y: newY }) => {
        x = newX;
        y = newY;
    });

    const handleTooltip = ({
        activeCity,
        activeCountry,
        isAvailable
    }: {
        activeCity: string;
        activeCountry: string;
        isAvailable: boolean;
    }) => {
        showTooltip = true;
        tooltip.city = activeCity;
        tooltip.country = activeCountry;
        tooltip.available = isAvailable;
    };

    const map = new DottedMap({
        height: 50,
        grid: 'diagonal'
    });

    const pinsData = [
        {
            lat: 50.1109,
            lng: 8.6821,
            city: 'Frankfurt',
            country: 'Germany',
            available: true,
            color: 'red'
        },
        {
            lat: 48.8575,
            lng: 2.3514,
            city: 'Paris',
            country: 'France',
            available: false,
            color: 'red'
        },
        {
            lat: 12.971599,
            lng: 77.5946,
            city: 'Bangalore',
            country: 'India',
            available: false,
            color: 'red'
        },
        {
            lat: 1.3521,
            lng: 103.8198,
            city: 'Singapore',
            country: 'Singapore',
            available: false,
            color: 'red'
        },
        {
            lat: 33.8688,
            lng: 151.2093,
            city: 'Sydney',
            country: 'Australia',
            available: false,
            color: 'red'
        },
        {
            lat: 40.7128,
            lng: -73.935242,
            city: 'New York, NY',
            country: 'USA',
            available: false,
            color: 'blue'
        },
        {
            lat: 37.7749,
            lng: -122.4194,
            city: 'San Francisco, CA',
            country: 'USA',
            available: false,
            color: 'blue'
        }
    ];

    pinsData.forEach((pin, index) => {
        map.addPin({
            lat: pin.lat,
            lng: pin.lng,
            data: {
                city: pin.city,
                country: pin.country,
                available: pin.available
            },
            svgOptions: {
                color: pin.color
            }
        });
    });

    const points = map.getPoints();
    const pins: DottedMapLib.Point[] = points.filter((point) => point.data);

    const positionMarkers = () => {
        if (!mapContainer) return;

        const svgRect = mapContainer.getBoundingClientRect();
        const viewBox = mapContainer.viewBox.baseVal;

        // Calculate scaling factors
        const scaleX = svgRect.width / viewBox.width;
        const scaleY = svgRect.height / viewBox.height;

        pins.forEach((pin, index) => {
            const marker = document.querySelector(`#marker-${index}`) as HTMLElement;
            if (!marker) return;

            const x = pin.x * scaleX + svgRect.left;
            const y = pin.y * scaleY + svgRect.top;

            marker.style.left = `${x}px`;
            marker.style.top = `${y}px`;
        });
    };

    onMount(() => {
        positionMarkers();
        window.addEventListener('resize', positionMarkers);
        return () => window.removeEventListener('resize', positionMarkers);
    });
</script>

<div class="bg-white">
    <div
        class="container relative mx-auto flex items-center justify-center perspective-distant transform-3d"
    >
        <div class="absolute top-0 z-10 size-full">
            {#each pins as pin, i}
                <div
                    id="marker-{i}"
                    class="absolute z-50 h-4 w-4 -translate-1/2 rounded-full bg-black"
                    role="presentation"
                    on:mouseenter={() => {
                        handleTooltip({
                            activeCity: pin.data.city,
                            activeCountry: pin.data.country,
                            isAvailable: pin.data.available
                        });
                    }}
                    on:mouseleave={() => (showTooltip = false)}
                />
            {/each}
        </div>
        <svg viewBox="0 0 105 50" class="h-full w-full rotate-x-45" bind:this={mapContainer}>
            {#each points as point}
                <circle cx={point.x} cy={point.y} r="0.25" class="fill-black/[.08]" />
            {/each}
            {#each pins as pin}
                <circle cx={pin.x} cy={pin.y} r="0.25" class="origin-center fill-black" />
            {/each}
        </svg>

        {#if showTooltip}
            <div
                class="pointer-events-none absolute top-0 left-0 z-10 rounded-2xl bg-white p-3"
                style:transform={`translate(${x}px, ${y}px)`}
            >
                {tooltip.city}, {tooltip.country}
            </div>
        {/if}
    </div>
</div>
