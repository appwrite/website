<script lang="ts">
    import { page } from '$app/stores';
    import type { SDKMethod } from '$lib/utils/specs';

    export let method: SDKMethod;
</script>

<div class="web-card is-transparent u-padding-16">
    <ul>
        {#each method.responses as response}
            {#if response.models}
                <li>
                    <article>
                        <header class="u-flex u-cross-baseline u-gap-8">
                            <span class="web-eyebrow web-u-color-text-primary">
                                {response.code}
                            </span>
                            <span class="web-caption-400">application/json</span>
                        </header>
                        {#if response.models.length > 0}
                            <ul class="web-sub-body-400 u-margin-block-start-16">
                                {#each response.models as model}
                                    <li>
                                        <a
                                            class="web-link"
                                            href={`/docs/references/${$page.params.version}/models/${model.id}`}
                                        >
                                            {model.name}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </article>
                </li>
            {/if}
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
