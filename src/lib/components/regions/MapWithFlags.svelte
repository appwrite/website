<script lang="ts">
    import DottedMap, { type DottedMapLib } from 'dotted-map';
    import MobileMap from './MobileMap.svelte';
    import Germany from './(assets)/germany.png';
    import Australia from './(assets)/australia.png';
    import France from './(assets)/france.png';
    import India from './(assets)/india.png';
    import Singapore from './(assets)/singapore.png';
    import USA from './(assets)/usa.png';
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
        index: number;
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

            {#each pins as pin, index (index)}
                {@const circleRadius = 1.75}
                {@const imageSize = circleRadius * 2}
                <g
                    style:transform="translateX({pin.x - 1.75}px) translateY({pin.y - 4}px)"
                    role="presentation"
                    class="cursor-pointer"
                    on:mouseenter={(event) => {
                        handleTooltip({
                            index,
                            event,
                            activeCity: pin.data.city,
                            activeCountry: pin.data.country,
                            isAvailable: pin.data.available
                        });
                    }}
                    on:mouseleave={() => (showTooltip = false)}
                >
                    <circle
                        cx={imageSize / 2}
                        cy={imageSize / 2}
                        r={circleRadius}
                        fill="none"
                        class="stroke-white"
                        stroke-width="0.3"
                    />
                    <clipPath id="clip-circle">
                        <circle cx={imageSize / 2} cy={imageSize / 2} r={circleRadius} />
                    </clipPath>
                    <g style:transform="scale(0.1) translate(-2.2px, -3px)">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M33.9923 31C36.5012 27.8425 38 23.8463 38 19.5C38 9.28273 29.7173 1 19.5 1C9.28273 1 1 9.28273 1 19.5C1 23.8463 2.49878 27.8425 5.0077 31H5C7.66667 34.5 15.9 43.5 19.5 43.5C23.1 43.5 31.3333 34.5 34 31H33.9923Z"
                            fill="white"
                            fill-opacity="1"
                        />
                        <path
                            d="M33.9923 31L33.7966 30.8445L33.4743 31.25H33.9923V31ZM5.0077 31V31.25H5.52566L5.20343 30.8445L5.0077 31ZM5 31V30.75H4.49523L4.80114 31.1515L5 31ZM34 31L34.1989 31.1515L34.5048 30.75H34V31ZM37.75 19.5C37.75 23.7878 36.2716 27.7296 33.7966 30.8445L34.188 31.1555C36.7308 27.9554 38.25 23.9048 38.25 19.5H37.75ZM19.5 1.25C29.5792 1.25 37.75 9.4208 37.75 19.5H38.25C38.25 9.14466 29.8553 0.75 19.5 0.75V1.25ZM1.25 19.5C1.25 9.4208 9.4208 1.25 19.5 1.25V0.75C9.14466 0.75 0.75 9.14466 0.75 19.5H1.25ZM5.20343 30.8445C2.72839 27.7296 1.25 23.7878 1.25 19.5H0.75C0.75 23.9048 2.26918 27.9554 4.81197 31.1555L5.20343 30.8445ZM5 31.25H5.0077V30.75H5V31.25ZM19.5 43.25C19.0984 43.25 18.6122 43.1235 18.0534 42.8776C17.497 42.6328 16.8834 42.2763 16.2313 41.8324C14.927 40.9445 13.4879 39.7201 12.0718 38.3809C9.2397 35.7024 6.5238 32.5875 5.19886 30.8485L4.80114 31.1515C6.14287 32.9125 8.87696 36.0476 11.7282 38.7441C13.1538 40.0924 14.6147 41.3367 15.9499 42.2457C16.6176 42.7002 17.2587 43.0742 17.8521 43.3353C18.443 43.5953 19.0016 43.75 19.5 43.75V43.25ZM33.8011 30.8485C32.4762 32.5875 29.7603 35.7024 26.9282 38.3809C25.5121 39.7201 24.073 40.9445 22.7687 41.8324C22.1166 42.2763 21.503 42.6328 20.9466 42.8776C20.3878 43.1235 19.9016 43.25 19.5 43.25V43.75C19.9984 43.75 20.557 43.5953 21.1479 43.3353C21.7413 43.0742 22.3824 42.7002 23.0501 42.2457C24.3853 41.3367 25.8462 40.0924 27.2718 38.7441C30.123 36.0476 32.8571 32.9125 34.1989 31.1515L33.8011 30.8485ZM33.9923 31.25H34V30.75H33.9923V31.25Z"
                            fill="white"
                        />
                    </g>
                    <image
                        href={pin.data.flag}
                        width={imageSize}
                        height={imageSize}
                        clip-path="url(#clip-circle)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle
                        cx={imageSize / 2 + circleRadius - 0.25}
                        cy={imageSize / 2 - circleRadius + 0.8}
                        r="0.5"
                        class="stroke-white"
                        class:fill-greyscale-300={!pin.data.available}
                        class:fill-[#10B981]={pin.data.available}
                        stroke-width="0.15"
                    />
                </g>
            {/each}
        </svg>
    </div>
</div>
