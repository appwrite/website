<script lang="ts">
    import NumberFlow from '@number-flow/svelte';
    import { onMount } from 'svelte';

    let stats = [
        {
            number: 0,
            suffix: '+',
            description: 'Regions served'
        },
        {
            number: 0,
            suffix: 'TB',
            description: 'of data served'
        },
        {
            number: 0,
            suffix: 'million',
            description: 'end users'
        },
        {
            number: 0,
            suffix: '+',
            description: 'total compute time'
        }
    ];

    const updatedNumbers = [12, 900, 1, 999];

    onMount(() => {
        stats.forEach((stat, i) => {
            stat.number = updatedNumbers[i];
        });
    });
</script>

<div
    class="light relative flex min-h-[65vh] w-full flex-col gap-4 overflow-hidden bg-[#EDEDF0] py-20"
>
    <div class="container relative z-10 w-full">
        <div class="max-w-xl">
            <h2 class="text-primary font-aeonik-pro text-5xl tracking-tighter">
                Thousands of developers <span class="text-secondary">scale with Appwrite</span><span
                    class="text-accent">_</span
                >
            </h2>
            <p class="text-secondary border-accent border-l-2 pl-2 font-medium">
                <span class="text-accent">“</span>Appwrite has supported our recent growth in every
                step of the way,
                <span class="text-primary">without any failures or outages</span><span
                    class="text-accent">”</span
                >
            </p>
        </div>
    </div>

    <div class="wiper absolute inset-0 overflow-hidden">
        <div class="container relative h-full">
            <div class="absolute inset-0 grid grid-cols-4">
                {#each stats as stat, i}
                    <div
                        class="mask h-full border-l border-dashed border-black/10"
                        style:--mask-direction="bottom"
                        style:--mask-height={`${(4 - i) * 25}%`}
                    >
                        <div class="relative top-40">
                            <span class="text-description text-primary font-medium"
                                ><NumberFlow value={stat.number} suffix={stat.suffix} /></span
                            >
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div
            class="from-accent/15 absolute inset-0 bg-gradient-to-tr to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_100%,_0_100%)]"
        />
        <div
            class="from-accent absolute inset-0 bg-gradient-to-r to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_25.1%,_0_100.1%)]"
        />
    </div>
</div>

<style>
    /* .wiper {
        animation: wipe-in 5s ease-in-out;
    } */

    @keyframes mask-wipe {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @keyframes wipe-in {
        0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
        }
        100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
    }
</style>
