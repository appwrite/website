<script lang="ts">
    import DottedMap, { type DottedMapLib } from 'dotted-map';
    import { mousePosition } from '../mouse-position';
    import { fly } from 'svelte/transition';

    let mapContainer: SVGSVGElement;

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

    const pinsData: DottedMapLib.Pin[] = [
        {
            lat: 50.1109,
            lng: 8.6821,
            data: {
                city: 'Frankfurt',
                country: 'Germany',
                available: true
            }
        },
        {
            lat: 48.8575,
            lng: 2.3514,
            data: {
                city: 'Paris',
                country: 'France',
                available: false
            }
        },
        {
            lat: 12.971599,
            lng: 77.5946,
            data: {
                city: 'Bangalore',
                country: 'India',
                available: false
            }
        },
        {
            lat: 1.3521,
            lng: 103.8198,
            data: {
                city: 'Singapore',
                country: 'Singapore',
                available: false
            }
        },
        {
            lat: 33.8688,
            lng: 151.2093,
            data: {
                city: 'Sydney',
                country: 'Australia',
                available: false
            }
        },
        {
            lat: 40.7128,
            lng: -73.935242,
            data: {
                city: 'New York, NY',
                country: 'USA',
                available: false
            }
        },
        {
            lat: 37.7749,
            lng: -122.4194,
            data: {
                city: 'San Francisco, CA',
                country: 'USA',
                available: false
            }
        }
    ];

    pinsData.forEach((pin) => {
        map.addPin({
            lat: pin.lat,
            lng: pin.lng,
            data: {
                city: pin.data.city,
                country: pin.data.country,
                available: pin.data.available
            }
        });
    });

    const points = map.getPoints();
    const pins: DottedMapLib.Point[] = points.filter((point) => point.data);
</script>

<div class="bg-white">
    <div
        class="container relative mx-auto flex items-center justify-center perspective-distant transform-3d"
    >
        <svg
            viewBox="0 0 105 50"
            class="relative z-10 h-full w-full rotate-x-45"
            bind:this={mapContainer}
        >
            {#each points as point}
                <circle cx={point.x} cy={point.y} r="0.25" class="fill-black/[.08]" />
            {/each}
            {#each pins as pin}
                <circle
                    cx={pin.x}
                    cy={pin.y}
                    r="0.35"
                    class="fill-black"
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
        </svg>

        {#if showTooltip}
            <div
                in:fly={{ y: 10, duration: 200 }}
                out:fly={{ y: -10, duration: 200 }}
                class="pointer-events-none absolute z-100 -translate-1/2 rounded-2xl bg-black p-3 text-white"
                style:left="{$mousePosition.x}px"
                style:top="{$mousePosition.y}px"
            >
                {tooltip.city}
                {tooltip.country}
            </div>
        {/if}
    </div>
</div>
