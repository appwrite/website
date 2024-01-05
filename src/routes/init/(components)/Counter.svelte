<script lang="ts">
    import { fade } from 'svelte/transition';
    import { pad } from '../helpers';

    export let value = 0;

    const getTransform = (value: number) => `translateY(-${value * 100}%)`;

    function transform(node: HTMLElement, value: number) {
        function update(value: number) {
            const childNode = [...node.children].find((child) => child.innerHTML === String(value));
            if (!childNode) return;

            const charWidth = childNode.getBoundingClientRect().width;
            node.style.transform = `translateY(-${value * 100}%)`;
            node.style.width = `${charWidth}px`;
        }

        update(value);

        return { update };
    }
</script>

<div class="wrapper">
    {#each pad(value) as char, index (index)}
        <div transition:fade={{ duration: 200 }}>
            {#if Number.isNaN(Number(char))}
                <span>{char}</span>
            {:else}
                <ul style:transform={getTransform(Number(char))} use:transform={Number(char)}>
                    <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
                    {#each { length: 10 } as _, i}
                        <li>{i}</li>
                    {/each}
                </ul>
            {/if}
        </div>
    {/each}
</div>

<style>
    .wrapper {
        display: inline-flex;
        overflow: hidden;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 3rem;
        line-height: 3rem;
        transition: 0.5s ease;
    }
</style>
