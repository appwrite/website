<script lang="ts">
    import DottedMap, { type DottedMapLib } from 'dotted-map';
    import { fly } from 'svelte/transition';
    import MobileMap from './MobileMap.svelte';
    import Germany from '../(assets)/germany.png';

    let mapContainer: SVGSVGElement;

    let tooltip: {
        x: number;
        y: number;
        isActive: boolean;
        country: null | string;
        city: null | string;
        available: null | boolean;
    } = {
        x: 0,
        y: 0,
        isActive: false,
        country: null,
        city: null,
        available: null
    };

    let showTooltip: boolean = false;

    const handleTooltip = ({
        event,
        activeCity,
        activeCountry,
        isAvailable
    }: {
        event: MouseEvent;
        activeCity: string;
        activeCountry: string;
        isAvailable: boolean;
    }) => {
        tooltip.x = event.clientX;
        tooltip.y = event.clientY;
        showTooltip = true;
        tooltip.city = activeCity;
        tooltip.country = activeCountry;
        tooltip.available = isAvailable;
    };

    const map = new DottedMap({
        height: 50,
        grid: 'diagonal'
    });

    type Pin = DottedMapLib.Pin & {
        data: {
            city: string;
            country: string;
            available: boolean;
            flag: string;
        };
    };

    const pinsData: Pin[] = [
        {
            lat: 50.1109,
            lng: 8.6821,
            data: {
                city: 'Frankfurt',
                country: 'GER',
                available: true,
                flag: Germany
            }
        },
        {
            lat: 48.8575,
            lng: 2.3514,
            data: {
                city: 'Paris',
                country: 'FRA',
                available: false,
                flag: Germany
            }
        },
        {
            lat: 12.971599,
            lng: 77.5946,
            data: {
                city: 'Bangalore',
                country: 'IND',
                available: false,
                flag: Germany
            }
        },
        {
            lat: 1.3521,
            lng: 103.8198,
            data: {
                city: 'Singapore',
                country: 'SGP',
                available: false,
                flag: Germany
            }
        },
        {
            lat: 33.8688,
            lng: 151.2093,
            data: {
                city: 'Sydney',
                country: 'AUS',
                available: false,
                flag: Germany
            }
        },
        {
            lat: 40.7128,
            lng: -73.935242,
            data: {
                city: 'New York, NY',
                country: 'USA',
                available: false,
                flag: Germany
            }
        },
        {
            lat: 37.7749,
            lng: -122.4194,
            data: {
                city: 'San Francisco, CA',
                country: 'USA',
                available: false,
                flag: Germany
            }
        }
    ];

    pinsData.forEach((pin) => {
        map.addPin({
            lat: pin.lat,
            lng: pin.lng,
            data: pin.data
        });
    });

    const points = map.getPoints();
    const pins: DottedMapLib.Point[] = points.filter((point) => point.data);
</script>

<div class="light overflow-hidden bg-[#EDEDF0]">
    <div
        class="container relative mx-auto flex items-center justify-center perspective-distant transform-3d"
    >
        <MobileMap {pins} />
        {#if showTooltip}
            <div
                in:fly={{ y: 10, duration: 200 }}
                out:fly={{ y: -10, duration: 200 }}
                class="pointer-events-none absolute z-100 block flex w-[190px] flex-col gap-2 rounded-[10px] border border-white bg-gradient-to-br from-white/64 to-white/32 p-2 backdrop-blur-sm"
                style:left="{tooltip.x - 100}px"
                style:top="{tooltip.y - 100}px"
            >
                <span class="text-primary text-caption w-fit"
                    >{tooltip.city}
                    ({tooltip.country})</span
                >
                {#if tooltip.available}
                    <div
                        class="text-caption flex h-5 items-center justify-center place-self-start rounded-[6px] bg-[#10B981]/16 p-1 text-center text-[#0A714F]"
                    >
                        <span class="text-micro -tracking-tight">Available now</span>
                    </div>
                {:else}
                    <div
                        class="text-caption bg-greyscale-200/32 text-primary flex h-5 items-center justify-center place-self-start rounded-[6px] p-1 text-center"
                    >
                        <span class="text-micro -tracking-tight">Available soon</span>
                    </div>
                {/if}
            </div>
        {/if}
        <svg
            viewBox="0 0 105 50"
            class="relative z-10 h-full w-[250%] rotate-x-45 md:w-full"
            bind:this={mapContainer}
        >
            {#each points as point}
                <circle cx={point.x} cy={point.y} r="0.25" class="fill-black/[.08]" />
            {/each}
            {#each pins as pin}
                <defs>
                    <clipPath id="icon">
                        <circle cx={pin.x} cy={pin.y} r="0.25" fill="#000" role="presentation" />
                    </clipPath>
                </defs>

                <image
                    width="100"
                    height="100"
                    role="presentation"
                    xlink:href={pin.data.flag}
                    clip-path="url(#icon)"
                    cx={pin.x}
                    cy={pin.y}
                    on:mouseenter={(event) => {
                        handleTooltip({
                            event,
                            activeCity: pin.data.city,
                            activeCountry: pin.data.country,
                            isAvailable: pin.data.available
                        });
                    }}
                    on:mouseleave={() => (showTooltip = false)}
                />
            {/each}
        </svg>
    </div>
</div>
