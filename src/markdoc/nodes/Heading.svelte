<script lang="ts">
    import { slugify } from '$lib/utils/slugify';
    import { getContext, hasContext, onMount, type Snippet } from 'svelte';
    import type { LayoutContext } from '../layouts/Article.svelte';

    interface HeadingProps {
        level: number;
        step?: number | undefined;
        children: Snippet;
    }

    const { level, step = undefined, children }: HeadingProps = $props();

    const tag = `h${level + 1}`;
    const ctx = hasContext('headings') ? getContext<LayoutContext>('headings') : undefined;

    let element = $state<NonNullable<HTMLElement>>();
    let id = $state<string | undefined>(undefined);

    onMount(() => {
        if (!element || !$ctx) {
            return;
        }

        const slug = slugify(element.innerText);
        id = slug;

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
            threshold: 0,
            rootMargin: '-100px 0px -80% 0px'
        });

        observer.observe(element);
    });
</script>

<svelte:element this={tag} {id} bind:this={element}>
    <a href={`#${id}`}>{@render children()}</a>
</svelte:element>
