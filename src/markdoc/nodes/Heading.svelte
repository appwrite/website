<script lang="ts">
    import { slugify } from '$lib/utils/slugify';
    import { getContext, hasContext, onMount, type Snippet } from 'svelte';
    import type { LayoutContext } from '../layouts/Article.svelte';

    interface HeadingProps {
        level: number;
        id?: string | undefined;
        step?: number | undefined;
        children: Snippet;
    }

    const { level, id: elementId = undefined, step = undefined, children }: HeadingProps = $props();

    const tag = `h${level + 1}`;
    const ctx = hasContext('headings') ? getContext<LayoutContext>('headings') : undefined;

    let element: HTMLElement | undefined = $state();

    onMount(() => {
        if (!element || !$ctx) {
            return;
        }

        const slug = id ?? slugify(element.innerText);

        $ctx = {
            ...$ctx,
            [slug]: {
                step,
                title: element?.textContent ?? '',
                visible: false,
                level
            }
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (slug && $ctx && slug in $ctx) {
                    $ctx[slug].visible = entry.isIntersecting;
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            threshold: 1
        });

        observer.observe(element);
    });

    let id = $derived(elementId ?? slugify(element?.innerText ?? ''));
</script>

<svelte:element this={tag} {id} bind:this={element}>
    <a href={`#${id ?? slugify(element?.innerText ?? '')}`}>{@render children()}</a>
</svelte:element>
