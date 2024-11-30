<script lang="ts">
    import MapMarker from './map-marker.svelte';

    const pins = [
        {
            city: 'Frankfurt',
            code: 'GER',
            available: true
        },
        {
            city: 'New York City',
            code: 'NYC',
            available: false
        },
        {
            city: 'Syndey',
            code: 'AUS',
            available: false
        },
        {
            city: 'San Francisco',
            code: 'SFO',
            available: false
        },
        {
            city: 'Amsterdam',
            code: 'AMS',
            available: false
        },
        {
            city: 'Bangalore',
            code: 'IND',
            available: false
        },
        {
            city: 'Signapore',
            code: 'SGP',
            available: false
        }
    ];
</script>

<div class="container relative mx-auto flex h-full items-center justify-center">
    <div class="relative z-10 block w-full space-y-4 md:hidden">
        {#each pins as pin}
            <div
                class="bg-card z-100 flex w-full flex-col gap-2 rounded-[10px] border border-white/6 py-4 px-2 backdrop-blur-sm"
            >
                <span class="text-primary text-caption w-fit"
                    >{pin.city}
                    ({pin.code})</span
                >
                {#if pin.available}
                    <div
                        class="text-caption flex h-5 items-center justify-center place-self-start rounded-[6px] bg-[#10B981]/16 p-1 text-center text-[#0A714F]"
                    >
                        <span class="text-micro -tracking-tight">Available now</span>
                    </div>
                {:else}
                    <div
                        class="text-caption flex h-5 items-center justify-center place-self-start rounded-[6px] bg-black/6 p-1 text-center text-[#56565C]"
                    >
                        <span class="text-micro -tracking-tight">Coming soon</span>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
    <div class="relative flex w-full">
        <img src="/images/regions/map.svg" class="map" alt="Map of the world" />
        <div class="absolute inset-0">
            {#each pins as pin, index}
                <MapMarker {...pin} {index} />
            {/each}
        </div>
    </div>
</div>
