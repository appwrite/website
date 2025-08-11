<script lang="ts">
    import Phone from '../(assets)/phone.png';
    import PhoneMobile from '../(assets)/phone-mobile.png';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button } from '$lib/components/ui';
</script>

<div
    class="border-smooth box-content flex items-center border-b bg-[url(/images/bgs/mobile-auth-hero.png)] bg-cover bg-bottom px-5 pt-20 pb-20 md:bg-[url(/images/bgs/auth-hero.png)] md:bg-center md:pt-32 md:pb-40 lg:px-8 xl:px-16"
>
    <div class="mx-auto grid max-w-[75rem] items-center gap-16 md:grid-cols-2">
        <div class="space-y-4">
            <div class="flex items-center gap-2">
                <img src="/images/icons/illustrated/dark/auth.png" class="size-8" alt="" />
                <span class="text-micro text-primary uppercase">
                    Auth<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="text-display font-aeonik-pro text-primary max-sm:max-w-[300px] md:max-w-md">
                Secure login for all users
            </h1>
            <p class="text-description text-secondary font-medium">
                Authenticate users securely with multiple login methods like Email/Password, SMS,
                OAuth, Anonymous, Magic URLs, and more.
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <Button
                    href={getAppwriteDashboardUrl()}
                    class="!w-full md:!w-fit"
                    event="products-auth-get_started_btn_hero-click"
                >
                    Get started
                </Button>
                <Button
                    href="/docs/products/auth"
                    variant="secondary"
                    class="!w-full md:!w-fit"
                    event="products-auth-docs-click"
                >
                    Documentation
                </Button>
            </div>
        </div>
        <img
            class="hidden md:block"
            src={Phone}
            alt="Phone screen alongside of a users table and a code snippet that controls Appwrite's messaging."
        />
        <img
            class="block md:hidden"
            src={PhoneMobile}
            alt="Phone screen alongside of a users table and a code snippet that controls Appwrite's messaging."
        />
    </div>
</div>
