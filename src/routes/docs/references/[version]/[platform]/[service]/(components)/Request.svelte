<script lang="ts">
    import { parse } from '$lib/utils/markdown';
    import type { SDKMethod } from '$lib/utils/specs';

    export let method: SDKMethod;
</script>

<div class="web-card is-transparent p-4">
    <ul class="flex flex-col">
        {#each method.parameters as parameter, i}
            {@const first = i === 0}
            <li class:pt-4={!first}>
                <article>
                    <header class="flex items-baseline gap-2.5">
                        <span class="web-code text-primary">
                            {parameter.name}
                        </span>
                        <span class="text-caption">{parameter.type}</span>
                        {#if parameter.required}
                            <div class="web-tag text-caption">required</div>
                        {/if}
                    </header>
                    <p class="text-paragraph-md mt-4">
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        {@html parse(parameter.description)}
                    </p>
                </article>
            </li>
        {/each}
    </ul>
</div>

<style>
    .web-card {
        margin-block-end: 2rem;
    }

    ul {
        gap: 1rem;
    }

    li:not(:first-child) {
        border-block-start: solid 0.0625rem hsl(var(--web-color-offset));
    }

    article :last-child {
        margin-block-end: 0;
    }
</style>
