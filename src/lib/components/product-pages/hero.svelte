<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Button from '$lib/components/ui/button.svelte';

    type $$Props = {
        eyebrow: {
            label: string;
            icon: string;
        };
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

    export let eyebrow: $$Props['eyebrow'];
    export let title: $$Props['title'];
    export let description: $$Props['description'];
    export let cta: $$Props['cta'];
    export let secondaryCta: $$Props['secondaryCta'] = undefined;
    export let image: $$Props['image'];
    export let mobileImage: $$Props['mobileImage'] = undefined;
</script>

<div
    class="border-smooth box-content flex items-center border-b bg-[url(/images/bgs/mobile-hero.png)] bg-cover bg-bottom px-5 py-12 md:bg-[url(/images/bgs/hero.png)] md:bg-center md:pt-32 md:pb-40 lg:px-8 xl:px-16"
>
    <div class="mx-auto grid max-w-[75rem] items-center gap-16 md:grid-cols-2">
        <div class="space-y-8">
            <div class="flex items-center gap-2">
                <img src={eyebrow.icon} class="size-8" alt="" />
                <span class="text-micro font-aeonik-fono tracking-loose text-primary uppercase">
                    {eyebrow.label}<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1
                class="text-display font-aeonik-pro text-primary text-pretty max-sm:max-w-[300px] md:max-w-md"
            >
                {title}
            </h1>
            <p class="text-description text-secondary font-medium text-pretty">
                {description}
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <Button
                    href={cta.url}
                    class="!w-full md:!w-fit"
                    event={`product-hero-${eyebrow.label.toLocaleLowerCase().replace(' ', '_')}-click`}
                >
                    {cta.label}
                </Button>
                {#if secondaryCta}
                    <Button
                        variant="secondary"
                        href={secondaryCta.url}
                        class="!w-full md:!w-fit"
                        event={`product-hero-${secondaryCta.label.toLocaleLowerCase().replace(' ', '_')}-click`}
                    >
                        {secondaryCta.label}
                    </Button>
                {/if}
            </div>
        </div>
        <img
            class={classNames({ 'hidden md:block': mobileImage })}
            src={image.url}
            alt={image.alt ?? ''}
        />
        {#if mobileImage}
            <img class="block md:hidden" src={mobileImage.url} alt={mobileImage.alt ?? ''} />
        {/if}
    </div>
</div>
