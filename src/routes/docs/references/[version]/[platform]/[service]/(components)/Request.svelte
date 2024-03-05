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

<div class="aw-card is-normal u-padding-16">
    <div class="u-flex-vertical u-gap-24">
        <div class="u-flex-vertical u-gap-16">
            <p class="aw-sub-body-400">
                This endpoint is rate limited. You can only make a limited number of request to his endpoint within a specific time frame.
            </p>
            <p class="aw-sub-body-400">
                The limit is applied for each unique limit key.
            </p>
        </div>
        <div class="aw-table-wrapper">
            <div class="aw-table-scroll is-remove-outer-styles">
                <table class="aw-table">
                    <thead class="aw-table-header">
                        <tr class="aw-table-row">
                            <th class="aw-table-head-col">
                                <div class="aw-eyebrow aw-u-color-text-primary">column 1</div>
                            </th>
                            <th class="aw-table-head-col">
                                <div class="aw-eyebrow aw-u-color-text-primary">column 2</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="aw-table-body">
                        <tr class="aw-table-row">
                            <td class="aw-table-col">a</td>
                            <td class="aw-table-col">b</td>
                        </tr>
                        <tr class="aw-table-row">
                            <td class="aw-table-col">a</td>
                            <td class="aw-table-col">b</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="">
            <a href="/" class="u-link aw-u-color-text-primary">
                <span>Learn more about rate limits</span>
                <span class="aw-icon-arrow-right" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</div>



<style>
    .aw-card {
        margin-block-end: 2rem;
    }

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
