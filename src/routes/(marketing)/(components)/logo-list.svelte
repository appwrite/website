<script lang="ts">
    import { browser } from '$app/environment';
    import { cn } from '$lib/utils/cn';

    type Props = {
        title?: string;
        class?: string;
    };

    const { title = 'Loved by hackers, startups and enterprises alike', class: className }: Props =
        $props();

    const logos = [
        {
            src: '/images/logos/trusted-by/times-of-india.svg',
            alt: 'The Times of India',
            width: 123,
            height: 45
        },
        {
            src: '/images/logos/trusted-by/devkind.svg',
            alt: 'DevKind',
            width: 91,
            height: 27
        },
        {
            src: '/images/logos/trusted-by/first-media.svg',
            alt: 'First Media',
            width: 139,
            height: 37
        },
        {
            src: '/images/logos/trusted-by/acer.svg',
            alt: 'Acer',
            width: 90,
            height: 22
        },
        {
            src: '/images/logos/trusted-by/ibm.svg',
            alt: 'IBM',
            width: 63,
            height: 26
        },
        {
            src: '/images/logos/trusted-by/american-airlines.svg',
            alt: 'American Airlines',
            width: 125,
            height: 20
        },
        {
            src: '/images/logos/trusted-by/langx.svg',
            alt: 'LangX',
            width: 114,
            height: 25
        },
        {
            src: '/images/logos/trusted-by/gm.svg',
            alt: 'GM',
            width: 41,
            height: 41
        },
        {
            src: '/images/logos/trusted-by/ey.svg',
            alt: 'EY',
            width: 39,
            height: 41
        },
        {
            src: '/images/logos/trusted-by/k-collect.svg',
            alt: 'K-collect',
            width: 108,
            height: 30
        },
        {
            src: '/images/logos/trusted-by/bosch.svg',
            alt: 'BOSCH',
            width: 94,
            height: 31
        },
        {
            src: '/images/logos/trusted-by/decathlon.svg',
            alt: 'DECATHLON',
            width: 108,
            height: 27
        }
    ];
</script>

<div class={cn('py-12', className)}>
    <div class="mx-auto max-w-6xl px-4 md:px-8">
        <h2
            class="font-aeonik-pro text-greyscale-100 text-description text-center text-pretty md:whitespace-nowrap"
        >
            {title}
        </h2>
        <div
            class="relative grid grid-cols-3 gap-8 py-10 md:grid-cols-4 md:gap-10 lg:grid-cols-6 lg:gap-12"
        >
            {#each logos as { src, alt, width, height } (src)}
                <div class="flex items-center justify-center">
                    <img
                        loading="lazy"
                        {src}
                        {alt}
                        {width}
                        {height}
                        class="max-w-[68px] md:max-w-none"
                    />
                </div>
            {/each}
        </div>
        <div class="text-center">
            <a
                href="/blog/category/customer-stories"
                class="text-primary text-sm font-medium hover:underline"
            >
                Read our case studies →
            </a>
        </div>
    </div>
</div>
