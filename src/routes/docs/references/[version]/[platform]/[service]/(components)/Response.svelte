<script lang="ts">
    import { page } from '$app/state';
    import type { SDKMethod } from '$lib/utils/specs';

    export let method: SDKMethod;
</script>

<div class="web-card is-transparent p-4">
    <ul>
        {#each method.responses as response}
            {#if response.models}
                <li>
                    <article>
                        <header class="flex items-baseline gap-2">
                            <span class="text-eyebrow font-aeonik-fono text-primary uppercase">
                                {response.code}
                            </span>
                            <span class="text-caption">{response.contentType ?? 'no content'}</span>
                        </header>
                        {#if response.models.length > 0}
                            <ul class="text-sub-body mt-4">
                                {#each response.models as model}
                                    <li>
                                        <a
                                            class="web-link"
                                            href={`/docs/references/${page.params.version}/models/${model.id}`}
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
