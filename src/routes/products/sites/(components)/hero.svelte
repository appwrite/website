<script>
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import Platforms from '$lib/components/marketing/platforms.svelte';
    import { cn } from '$lib/utils/cn';

    import Illustration from '../(assets)/images/illustration.png';
    import ProductHuntBadge from '../(assets)/images/producthunt-badge.svelte';
</script>

<div
    class={cn(
        'sites-hero-gradient relative flex flex-col items-center'
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
        <img src={Illustration} alt="Illustration" class="no-brand-filter col-span-full lg:col-span-7" />
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

<style>
    .sites-hero-gradient::before,
    .sites-hero-gradient::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -10;
        height: 100%;
        pointer-events: none;
    }

    .sites-hero-gradient::before {
        left: 0;
        background: radial-gradient(
            circle at -15% -10%,
            rgb(var(--brand-accent-rgb) / 0.2) 0px,
            transparent 40%
        );
    }

    .sites-hero-gradient::after {
        right: 0;
        margin-block: auto 0;
        background: radial-gradient(circle at 120% 125%, hsl(248 99% 70% / 0.2) 0px, transparent 40%);
    }
</style>
