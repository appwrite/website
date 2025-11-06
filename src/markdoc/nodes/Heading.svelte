<script lang="ts">
    import { slugify } from '$lib/utils/slugify';
    import { getContext, hasContext, onMount, type Snippet } from 'svelte';
    import type { InlineCtaProps } from '$lib/utils/blog-mid-cta';
    import type { LayoutContext } from '../layouts/Article.svelte';
    import type CallToAction from '../tags/Call_To_Action.svelte';
    import { get, type Writable } from 'svelte/store';

    interface HeadingProps {
        level: number;
        id?: string | undefined;
        step?: number | undefined;
        children: Snippet;
    }

    const { level, id: elementId = undefined, step = undefined, children }: HeadingProps = $props();

    const tag = `h${level + 1}`;
    const ctx = hasContext('headings') ? getContext<LayoutContext>('headings') : undefined;

    interface BlogMidCtaContext {
        level: number;
        targetIndex: number;
        count: number;
        inserted: Writable<boolean>;
        component: typeof CallToAction | undefined;
        props: InlineCtaProps;
    }

    const midCta = hasContext('blog-mid-cta')
        ? getContext<BlogMidCtaContext>('blog-mid-cta')
        : undefined;
    const MidCtaComponent = midCta?.component;
    let renderMidCta = $state(false);

    if (midCta && MidCtaComponent && level === midCta.level) {
        const alreadyInserted = get(midCta.inserted);
        if (!alreadyInserted) {
            midCta.count += 1;
            if (midCta.count === midCta.targetIndex) {
                renderMidCta = true;
                midCta.inserted.set(true);
            }
        }
    }

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
            threshold: 0,
            rootMargin: '-100px 0px -80% 0px'
        });

        observer.observe(element);
    });

    let id = $derived(elementId ?? slugify(element?.innerText ?? ''));
</script>

{#if renderMidCta && MidCtaComponent && midCta}
    <MidCtaComponent {...midCta.props} />
{/if}

<svelte:element this={tag} {id} bind:this={element}>
    <a href={`#${id ?? slugify(element?.innerText ?? '')}`}>{@render children()}</a>
</svelte:element>
