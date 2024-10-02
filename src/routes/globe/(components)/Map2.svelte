<script lang="ts">
    import DottedMap, { type DottedMapLib } from 'dotted-map';
    import MobileMap from './MobileMap.svelte';
    import Germany from '../(assets)/germany.png';
    import Australia from '../(assets)/australia.png';
    import France from '../(assets)/france.png';
    import India from '../(assets)/india.png';
    import Singapore from '../(assets)/singapore.png';
    import USA from '../(assets)/usa.png';
    import { fly } from 'svelte/transition';

    let tooltip: {
        x: number;
        y: number;
        country: null | string;
        city: null | string;
        available: null | boolean;
    } = {
        x: 0,
        y: 0,
        country: null,
        city: null,
        available: null
    };

    let showTooltip: boolean = false;
    let tooltipElement: HTMLElement;
    let mapContainer: HTMLElement;

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
            lat: 48.8575,
            lng: 2.3514,
            data: {
                city: 'Paris',
                country: 'FRA',
                available: false,
                flag: France
            }
        },
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
            lat: 12.971599,
            lng: 77.594566,
            data: {
                city: 'Bangalore',
                country: 'IND',
                available: false,
                flag: India
            }
        },
        {
            lat: 1.352083,
            lng: 103.819839,
            data: {
                city: 'Singapore',
                country: 'SGP',
                available: false,
                flag: Singapore
            }
        },
        {
            lat: -33.86882,
            lng: 151.20929,
            data: {
                city: 'Sydney',
                country: 'AUS',
                available: true,
                flag: Australia
            }
        },
        {
            lat: 40.712776,
            lng: -74.005974,
            data: {
                city: 'New York, NY',
                country: 'USA',
                available: true,
                flag: USA
            }
        },
        {
            lat: 37.774929,
            lng: -122.419418,
            data: {
                city: 'San Francisco, CA',
                country: 'USA',
                available: false,
                flag: USA
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
    let pins: DottedMapLib.Point[] = points.filter((point) => point.data);

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
        const group = event.currentTarget as SVGSVGElement;
        if (group && group.parentNode) {
            group.parentNode.appendChild(group);
        }
        const mapRect = mapContainer.getBoundingClientRect();
        const mouseX = event.clientX - mapRect.left;
        const mouseY = event.clientY - mapRect.top;

        showTooltip = true;
        tooltip = {
            x: mouseX,
            y: mouseY,
            city: activeCity,
            country: activeCountry,
            available: isAvailable
        };
    };
</script>

<div class="light bg-[#EDEDF0] !py-10">
    <div
        class="container relative mx-auto flex items-center justify-center perspective-distant transform-3d"
        bind:this={mapContainer}
    >
        <MobileMap {pins} />
        {#if showTooltip}
            <div
                bind:this={tooltipElement}
                in:fly={{ y: 10, duration: 200 }}
                out:fly={{ y: -10, duration: 200 }}
                class="pointer-events-none absolute z-100 block flex w-[190px] flex-col gap-2 rounded-[10px] border border-white bg-gradient-to-br from-white/64 to-white/32 p-2 backdrop-blur-sm"
                style:left="{tooltip.x}px"
                style:top="{tooltip.y - (tooltipElement?.offsetHeight || 0) - 10}px"
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
                    <div class="flex items-center gap-1">
                        <div
                            class="text-caption flex h-5 items-center justify-center place-self-start rounded-[6px] bg-[#FE7C43]/16 p-1 text-center text-[#61250A]"
                        >
                            <span class="text-micro -tracking-tight">In work</span>
                        </div>
                        <div
                            class="text-caption flex h-5 items-center justify-center place-self-start rounded-[6px] bg-black/6 p-1 text-center text-[#56565C]"
                        >
                            <span class="text-micro -tracking-tight">Q4 2024</span>
                        </div>
                    </div>
                {/if}
            </div>
        {/if}
        <svg viewBox="0 0 105 50" class="h-full w-full">
            {#each points as point}
                <circle cx={point.x} cy={point.y} r="0.25" class="fill-black/[.08]" />
            {/each}

            {#each pins as pin}
                {@const radius = 0.5}
                <g
                    cx={pin.x}
                    cy={pin.y}
                    class="relative flex"
                    role="presentation"
                    on:mouseenter={(event) => {
                        handleTooltip({
                            event,
                            activeCity: pin.data.city,
                            activeCountry: pin.data.country,
                            isAvailable: pin.data.available
                        });
                    }}
                    on:mouseleave={() => (showTooltip = false)}
                >
                    <circle cx={pin.x} cy={pin.y} r={radius} class="fill-pink-500">
                        <animate
                            attributeName="opacity"
                            values="0.75;0"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="r"
                            values="{radius};.75"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx={pin.x} cy={pin.y} r={radius} class="fill-pink-200" />
                </g>
            {/each}
        </svg>
    </div>
</div>
