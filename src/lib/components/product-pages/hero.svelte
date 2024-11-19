<script lang="ts">
    type $$Props = {
        icon: string;
        eyebrow: string;
        title: string;
        description: string;
        cta: {
            label: string;
            url: string;
        };
        secondaryCta?: {
            label: string;
            url: string;
        };
        image: {
            url: string;
            alt?: string;
        };
        mobileImage?: {
            url: string;
            alt?: string;
        };
    };

    export let icon: $$Props['icon'];
    export let eyebrow: $$Props['eyebrow'];
    export let title: $$Props['title'];
    export let description: $$Props['description'];
    export let cta: $$Props['cta'];
    export let secondaryCta: $$Props['secondaryCta'] = undefined;
    export let image: $$Props['image'];
    export let mobileImage: $$Props['mobileImage'] = undefined;
</script>

<div
    class="box-content flex items-center bg-[url(/images/bgs/mobile-auth-hero.png)] bg-cover bg-bottom pt-20 px-5 pb-20 md:bg-[url(/images/bgs/auth-hero.png)] md:bg-center md:pt-32 md:pb-40 lg:px-8 xl:px-16"
>
    <div class="mx-auto grid max-w-[75rem] items-center gap-16 md:grid-cols-2">
        <div class="space-y-4">
            <div class="flex items-center gap-2">
                <img src={icon} class="size-8" alt="" />
                <span class="text-micro text-primary uppercase">
                    {eyebrow}<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="text-display font-aeonik-pro text-primary max-sm:max-w-[300px] md:max-w-md">
                {title}
            </h1>
            <p class="text-description text-secondary font-medium">
                {description}
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <a href={cta.url} class="web-button !w-full md:!w-fit">
                    {cta.label}
                </a>
                {#if secondaryCta}
                    <a href={secondaryCta.url} class="web-button is-secondary !w-full md:!w-fit">
                        {secondaryCta.label}
                    </a>
                {/if}
            </div>
        </div>
        <img class="hidden md:block" src={image.url} alt={image.alt ?? ''} />
        {#if mobileImage}
            <img class="block md:hidden" src={mobileImage.url} alt={mobileImage.alt ?? ''} />
        {/if}
    </div>
</div>
