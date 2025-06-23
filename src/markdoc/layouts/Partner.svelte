<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';

    import { classNames } from '$lib/utils/classnames';
    import type { Partner } from '$routes/partners/catalog/+page';
    import ContactPartner from '$routes/partners/catalog/(components)/contact-partner.svelte';
    import Icon from '$lib/components/ui/icon';
    import type { Snippet } from 'svelte';
    import Button from '$lib/components/ui/button.svelte';

    interface Props extends Partner {
        children?: Snippet;
    }

    let {
        title,
        partnerLevel,
        category,
        description,
        cover,
        capabilities,
        frameworks,
        regions,
        languages,
        website,
        email,
        children
    }: Props = $props();

    const ogImage = DEFAULT_HOST + cover;
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div
        class={classNames(
            'grid-bg border-smooth relative flex items-center border-b px-5 py-28 lg:px-8 xl:px-16',
            'before:from-accent/20 before:absolute before:inset-0 before:-z-1 before:bg-linear-to-tr before:via-transparent before:via-40% before:to-transparent'
        )}
    >
        <div class="relative container w-full pb-0">
            <div class="flex flex-col gap-7">
                <a href="/partners/catalog" class="text-caption text-primary group flex gap-2">
                    <Icon name="arrow-left" class="transition group-hover:-translate-x-1" />
                    Back to Partners Catalog
                </a>
                <h1 class="text-headline font-aeonik-pro text-primary">{title}</h1>
            </div>
        </div>
    </div>

    <div class="py-10">
        <div class="container">
            <article class="flex flex-col gap-10 md:gap-14">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-14">
                    <div class="md:col-span-7">
                        <div class="web-article">
                            <div class="web-article-content">
                                {@render children?.()}
                            </div>
                            {#if email}
                                <Button href={email}>Contact {title}</Button>
                            {/if}
                        </div>
                    </div>
                    <div class="md:col-span-5">
                        <h2 class="text-label text-primary font-aeonik-pro">About {title}</h2>
                        <dl class="divide-smooth sticky top-32 mt-10 flex flex-col gap-7 divide-y">
                            <div class="flex flex-col justify-between gap-7 pb-7">
                                <dt class="text-micro font-aeonik-fono tracking-loose uppercase">
                                    Frameworks
                                </dt>
                                <dd class="flex flex-wrap gap-2">
                                    {#each frameworks as framework}
                                        <div
                                            class="text-primary text-caption bg-smooth rounded-full px-3 py-1"
                                        >
                                            {framework}
                                        </div>
                                    {/each}
                                </dd>
                            </div>

                            <div class="flex flex-col justify-between gap-7 pb-7">
                                <dt class="text-micro font-aeonik-fono tracking-loose uppercase">
                                    Capabilities
                                </dt>
                                <dd class="flex flex-wrap gap-2">
                                    {#each capabilities as capability}
                                        <div
                                            class="text-primary text-caption bg-smooth rounded-full px-3 py-1"
                                        >
                                            {capability}
                                        </div>
                                    {/each}
                                </dd>
                            </div>

                            <div class="flex items-center justify-between gap-7 pb-7">
                                <dt class="text-micro font-aeonik-fono tracking-loose uppercase">
                                    Category
                                </dt>
                                <dd class="text-primary text-caption">{category}</dd>
                            </div>

                            <div class="flex items-center justify-between gap-7 pb-7">
                                <dt class="text-micro font-aeonik-fono tracking-loose uppercase">
                                    Website
                                </dt>
                                <dd
                                    class="text-primary text-caption font-medium underline underline-offset-4"
                                >
                                    <a href={website} target="_blank">{website}</a>
                                </dd>
                            </div>

                            <div class="flex items-center justify-between gap-7 pb-7">
                                <dt class="text-micro font-aeonik-fono tracking-loose uppercase">
                                    Partner Level
                                </dt>
                                <dd>
                                    <div
                                        class="text-primary text-caption rounded bg-white/24 px-2 py-0.5"
                                    >
                                        {partnerLevel}
                                    </div>
                                </dd>
                            </div>

                            <div class="flex items-center justify-between gap-8 pb-7">
                                <dt class="text-micro font-aeonik-fono tracking-loose uppercase">
                                    Regions
                                </dt>
                                <dd class="text-primary text-caption">
                                    {regions.join(', ')}
                                </dd>
                            </div>

                            <div class="flex flex-col justify-between gap-7 pb-7">
                                <dt class="text-micro font-aeonik-fono tracking-loose uppercase">
                                    Languages
                                </dt>
                                <dd class="flex flex-wrap gap-2">
                                    {#each languages as language}
                                        <div
                                            class="text-primary text-caption bg-smooth rounded-full px-3 py-1"
                                        >
                                            {language}
                                        </div>
                                    {/each}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </article>
        </div>
    </div>

    <div class="mt-12 overflow-hidden py-10">
        <div class="container">
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>
