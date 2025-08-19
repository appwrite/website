<script>
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import Platforms from '$lib/components/marketing/platforms.svelte';
    import { cn } from '$lib/utils/cn';

    import Illustration from '../(assets)/images/illustration.png';
    import ProductHuntBadge from '../(assets)/images/producthunt-badge.svelte';
</script>

<div
    class={cn(
        'relative flex flex-col items-center',
        'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_-15%_-10%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_125%,_hsla(248,_99%,_70%,_0.2)_0px,_transparent_40%)]'
    )}
>
    <div
        class="container mx-auto grid w-full grid-cols-1 place-items-center gap-x-16 gap-y-8 py-12 max-lg:px-5! lg:grid-cols-12 lg:py-20"
    >
        <div class="cols-span-full flex flex-col gap-6 lg:col-span-5">
            <div class="flex items-center gap-2">
                <img
                    src="/images/icons/illustrated/dark/sites.png"
                    class="size-8"
                    alt="Sites icon"
                />
                <span class="font-aeonik-fono tracking-loose text-eyebrow text-primary uppercase">
                    Sites<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="font-aeonik-pro text-display text-primary text-pretty">
                The open-source Vercel alternative
            </h1>
            <p class="text-description text-secondary font-medium text-pretty">
                Develop, deploy, and scale your web applications directly from Appwrite, alongside
                your backend.
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button !w-full md:!w-fit">
                    Start for free
                </a>

                <a href="/docs/products/sites" class="web-button is-secondary !w-full md:!w-fit">
                    Read the docs
                </a>
            </div>
        </div>
        <img src={Illustration} alt="Illustration" class="col-span-full lg:col-span-7" />
        <a
            href="https://www.producthunt.com/posts/appwrite-sites"
            target="_blank"
            title="Check Appwrite Sites on ProductHunt"
            class="col-span-full flex w-full justify-center lg:col-span-7 lg:col-start-6"
            ><div><ProductHuntBadge /></div></a
        >
    </div>
    <Platforms class="mt-auto mb-0 w-full" headline="Host your favorite web frameworks" />
</div>
