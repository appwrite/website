<script lang="ts">
    import { slugify } from '$lib/utils/slugify';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';
    import { getContext, hasContext, onMount, type Snippet } from 'svelte';
    import type { LayoutContext } from '../layouts/Article.svelte';

    interface Props {
        level: number;
        id?: string | undefined;
        step?: number | undefined;
        inReferences?: boolean;
        children: Snippet;
    }

    const {
        level,
        id = undefined,
        step = undefined,
        inReferences = false,
        children
    }: Props = $props();

    let href: string = $state('');
    const tag = `h${level + 1}`;
    const ctx = hasContext('headings') ? getContext<LayoutContext>('headings') : undefined;

    const classList: Record<typeof level, string> = {
        1: 'text-description mb-4',
        2: 'text-description text-primary mb-4',
        3: 'text-body font-medium mb-4',
        4: 'text-sub-body font-medium'
    };

    let element: HTMLElement | undefined = $state();

    onMount(() => {
        if (!element || !$ctx) {
            return;
        }

        const slug = id ?? slugify(element.innerText);
        href = slug;

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

    const inPolicy = isInPolicy();
    let headingClass = $derived(
        inPolicy && level === 1 ? 'text-title font-aeonik-pro mb-4 mt-8' : classList[level]
    );
</script>

<svelte:element
    this={tag}
    id={id ?? slugify(element?.innerText ?? '')}
    bind:this={element}
    class:web-snap-location={id && !inReferences}
    class:web-snap-location-references={id && inReferences}
    class="{headingClass} text-primary scroll-m-32 font-medium"
>
    <a href={`#${id ?? slugify(element?.innerText ?? '')}`} class="">{@render children()}</a>
</svelte:element>
