<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';

    interface Props {
        title?: string;
        description?: string;
        point1?: string;
        point2?: string;
        point3?: string;
        point4?: string;
        cta?: string;
        url?: string;
        event?: string;
    }

    const {
        title = 'Start building with Appwrite today',
        description = 'Build with the frameworks and languages you want.',
        point1 = 'Built in security',
        point2 = 'Scalable infrastructure',
        point3 = 'No vendor lock in',
        point4 = 'Highly customizable backend',
        cta = 'Get started',
        url = PUBLIC_APPWRITE_DASHBOARD,
        event = undefined
    }: Props = $props();

    const benefits: Array<string> = $derived([point1, point2, point3, point4]);
</script>

<div
    class={cn(
        'blog-inline-promo not-prose border-smooth relative mt-10 mb-8 flex flex-col justify-start gap-8 overflow-hidden rounded-xl border p-5 outline-3 [outline-offset:-3px] outline-white/5 md:p-12',
        'before:absolute before:inset-0 before:h-[170%] before:scale-x-125 before:bg-[radial-gradient(ellipse_at_center,_rgba(253,_54,_110,_0.2),_transparent_65%)] before:blur-lg'
    )}
>
    <div class="flex flex-col gap-2">
        <h2 class="text-label text-primary font-aeonik-pro text-pretty">{title}</h2>
        <p class="text-main-body text-secondary text-pretty">{description}</p>
    </div>

    <ul class="m-0 grid max-w-none list-none grid-cols-1 items-start gap-3 p-0 md:grid-cols-2">
        {#each benefits as benefit}
            <li
                class="text-sub-body text-primary m-0 [margin-block:0] flex list-none items-start gap-2 ps-0 font-medium"
            >
                <img
                    class="block shrink-0 self-start leading-none"
                    src="/images/icons/colored/check.svg"
                    width={20}
                    height={20}
                    alt=""
                />
                <span class="min-w-0 flex-1 leading-snug">{benefit}</span>
            </li>
        {/each}
    </ul>
    <div class="z-[1] flex flex-col gap-2 md:flex-row">
        <Button href={url} {event} class="blog-inline-promo__btn max-sm:w-full!">{cta}</Button>
    </div>
</div>

<style lang="scss">
    /* Promo sits on a dark pink wash: Pink default :hover / :focus can fail contrast; reinforce both. */
    .blog-inline-promo :global(a.web-button.blog-inline-promo__btn:focus-visible) {
        outline: 2px solid rgb(255 255 255);
        outline-offset: 3px;
    }

    .blog-inline-promo :global(a.web-button.blog-inline-promo__btn:hover) {
        filter: brightness(1.12);
        box-shadow: 0 0 0 1px rgb(255 255 255 / 0.45);
    }

    .blog-inline-promo :global(a.web-button.blog-inline-promo__btn:active) {
        filter: brightness(0.96);
    }
</style>
