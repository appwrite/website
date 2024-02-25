<script lang="ts">
    import { parse } from '$lib/utils/markdown';
    import type { SDKMethod } from '$lib/utils/specs';

    export let method: SDKMethod;
</script>

<div class="aw-card is-transparent u-padding-16">
    <ul class="u-flex-vertical">
        {#each method.parameters as parameter, i}
            {@const first = i === 0}
            <li class:u-padding-block-start-16={!first}>
                <article>
                    <header class="u-flex u-cross-baseline u-gap-8">
                        <span class="aw-code aw-u-color-text-primary">
                            {parameter.name}
                        </span>
                        <span class="aw-caption-400">{parameter.type}</span>
                        {#if parameter.required}
                            <div class="aw-tag">required</div>
                        {/if}
                    </header>
                    <p class="aw-sub-body-400 u-margin-block-start-16">
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        {@html parse(parameter.description)}
                    </p>
                </article>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        gap: 1rem;
    }

    li:not(:first-child) {
        border-block-start: solid 0.0625rem hsl(var(--aw-color-offset));
    }

    article :last-child {
        margin-block-end: 0;
    }
</style>
