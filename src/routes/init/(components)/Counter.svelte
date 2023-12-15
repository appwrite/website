<script lang="ts">
    import { fade } from 'svelte/transition';
    import { pad } from '../helpers';

    export let value = 0;

    function getTransform(value: number) {
        return `translateY(-${value * 100}%)`;
    }
</script>

<div class="wrapper">
    {#each pad(value) as char, index (index)}
        <div transition:fade={{ duration: 200 }}>
            {#if Number.isNaN(Number(char))}
                <span>{char}</span>
            {:else}
                <ul>
                    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
                    {#each { length: 10 } as _, i}
                        <li style:transform={getTransform(Number(char))}>{i}</li>
                    {/each}
                </ul>
            {/if}
        </div>
    {/each}
</div>

<style>
    .wrapper {
        display: inline-flex;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 3rem;
        line-height: 3rem;
        overflow: hidden;
    }

    li {
        transition: 0.5s ease;
    }
</style>
