<script lang="ts">
    import { createCountdown } from '$routes/playground/helpers';
    import Counter from './Counter.svelte';
    import Logo from '../(assets)/logo.svg';

    type $$Props = {
        illustration: string;
        release: Date;
        index: number;
        title: string;
    };

    export let illustration: $$Props['illustration'] = Logo;
    export let release: $$Props['release'];
    export let index: $$Props['index'];
    export let title: $$Props['title'];

    const { days, hours, minutes, seconds, hasReleased } = createCountdown(release);
</script>

<a href="#day-{index}">
    <span class="text-caption font-aeonik-fono text-secondary mb-2 block uppercase"
        >Day {index}</span
    >
    <div
        class="light relative flex aspect-square flex-col items-center justify-center justify-center gap-4 bg-white"
    >
        <img src={hasReleased ? illustration : Logo} alt="Logo" class="size-24" />
        <div class="font-aeonik-fono text-primary text-base uppercase">
            {#if hasReleased}
                <span>{title}</span><span class="text-accent">_</span>
            {:else if $hours > 24}
                <p>
                    {$days}
                    {$days > 1 ? 'days' : 'day'}
                </p>
            {:else}
                <div class="flex items-center gap-0.5 text-center">
                    <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                        value={$seconds}
                    />
                </div>
            {/if}
        </div>
    </div>
</a>
