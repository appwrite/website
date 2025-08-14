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
            src: '/images/logos/trusted-by/apple.svg',
            alt: 'Apple',
            width: 42,
            height: 48
        },
        {
            src: '/images/logos/trusted-by/oracle.svg',
            alt: 'ORACLE',
            width: 136,
            height: 17
        },
        {
            src: '/images/logos/trusted-by/tiktok.svg',
            alt: 'TikTok',
            width: 133,
            height: 32
        },
        {
            src: '/images/logos/trusted-by/intel.svg',
            alt: 'intel',
            width: 76,
            height: 30
        },
        {
            src: '/images/logos/trusted-by/ibm.svg',
            alt: 'IBM',
            width: 74,
            height: 30
        },
        {
            src: '/images/logos/trusted-by/american-airlines.svg',
            alt: 'American Airlines',
            width: 147,
            height: 24
        },
        {
            src: '/images/logos/trusted-by/deloitte.svg',
            alt: 'Deloitte.',
            width: 103,
            height: 20
        },
        {
            src: '/images/logos/trusted-by/gm.svg',
            alt: 'GM',
            width: 48,
            height: 48
        },
        {
            src: '/images/logos/trusted-by/ey.svg',
            alt: 'EY',
            width: 46,
            height: 48
        },
        {
            src: '/images/logos/trusted-by/nestle.svg',
            alt: 'Nestle',
            width: 119,
            height: 34
        },
        {
            src: '/images/logos/trusted-by/bosch.svg',
            alt: 'BOSCH',
            width: 110,
            height: 37
        },
        {
            src: '/images/logos/trusted-by/decathlon.svg',
            alt: 'DECATHLON',
            width: 127,
            height: 32
        }
    ];
</script>

<div class={cn('py-32', className)}>
    <div class="container">
        <h2 class="font-aeonik-pro text-greyscale-100 text-label mx-auto max-w-md text-center">
            {title}
        </h2>
        <ul class="grid grid-cols-3 gap-10 pt-10 text-center md:grid-cols-6">
            {#each logos as { src, alt, width, height }}
                <li class="grid place-content-center">
                    <img {src} {alt} {width} {height} />
                </li>
            {/each}
        </ul>
    </div>
</div>
