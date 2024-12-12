<script lang="ts">
    import { type Writable } from 'svelte/store';
    import Heading from '../nodes/Heading.svelte';
    import { getContext, hasContext } from 'svelte';

    export let id: string;
    export let step: number;
    export let title: string;

    if (hasContext('articleHasNumericBadge')) {
        getContext<Writable<boolean>>('articleHasNumericBadge').set(true);
    }
</script>

<section class="web-article-content-section is-with-line">
    <section class="web-article-content-sub-section">
        <header class="web-article-content-header">
            <span class="web-numeric-badge mb-4">{step}</span>
            <Heading level={2} {id} {step}>
                {title}
            </Heading>
        </header>
        <slot />
    </section>
</section>
