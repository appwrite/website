<script lang="ts">
    import { getContext, hasContext, type Snippet } from 'svelte';
    import { type Writable } from 'svelte/store';
    import Heading from '../nodes/heading.svelte';

    interface Props {
        id: string;
        step: number;
        title: string;
        children: Snippet;
    }

    let { id, step, title, children }: Props = $props();

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
        {@render children()}
    </section>
</section>
