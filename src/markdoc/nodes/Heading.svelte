<script lang="ts">
    import { getContext, hasContext, onMount } from 'svelte';
    import type { LayoutContext } from '../layouts/Article.svelte';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';

    export let level: number;
    export let id: string | undefined = undefined;
    export let step: number | undefined = undefined;
    export let inReferences = false;

    const tag = `h${level + 1}`;
    const ctx = hasContext('headings') ? getContext<LayoutContext>('headings') : undefined;
    const classList: Record<typeof level, string> = {
        1: 'text-description mb-4',
        2: 'text-description text-primary mb-4',
        3: 'text-body font-medium mb-4',
        4: 'text-sub-body font-medium'
    };

    let element: HTMLElement | undefined;

    onMount(() => {
        if (!element || !$ctx || !id) {
            return;
        }

        $ctx = {
            ...$ctx,
            [id]: {
                step,
                title: element?.textContent ?? '',
                visible: false
            }
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (id && $ctx && id in $ctx) {
                    $ctx[id].visible = entry.isIntersecting;
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            threshold: 1
        });

        observer.observe(element);
    });

    const inPolicy = isInPolicy();
    $: headingClass =
        inPolicy && level === 1 ? 'text-title font-aeonik-pro mb-4 mt-8' : classList[level];
</script>

{#if id}
    <svelte:element
        this={tag}
        {id}
        bind:this={element}
        class:web-snap-location={id && !inReferences}
        class:web-snap-location-references={id && inReferences}
        class="{headingClass} text-primary font-medium"
    >
        <a href={`#${id}`} class=""><slot /></a>
    </svelte:element>
{:else}
    <svelte:element
        this={tag}
        bind:this={element}
        class="{headingClass} text-primary font-medium"
        class:in-policy={inPolicy}
    >
        <slot />
    </svelte:element>
{/if}
