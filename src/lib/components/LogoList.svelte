<script lang="ts">
    import { cn } from '$lib/utils/cn';

    type Props = {
        title?: string;
        class?: string;
    };

    const {
        title = "Trusted by developers from the world's leading organizations",
        class: className
    }: Props = $props();

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

<div class={cn('py-32', className)}>
    <div class="container">
        <h2 class="font-aeonik-pro text-greyscale-100 text-label mx-auto max-w-md text-center">
            {title}
        </h2>
        <ul class="grid grid-cols-3 gap-12 pt-10 text-center md:grid-cols-6 md:gap-14 lg:gap-16">
            {#each logos as { src, alt, width, height }}
                <li class="grid place-content-center">
                    <img {src} {alt} {width} {height} />
                </li>
            {/each}
        </ul>
    </div>
</div>
