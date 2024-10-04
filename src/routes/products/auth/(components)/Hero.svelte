<script lang="ts">
    import Phone from '../(assets)/phone.png';
    import PhoneMobile from '../(assets)/phone-mobile.png';
</script>

<div
    class="flex min-h-[85vh] items-center bg-[url(/images/bgs/mobile-auth-hero.png)] bg-cover bg-bottom py-20 px-4 md:bg-[url(/images/bgs/auth-hero.png)] md:bg-center md:py-0 lg:px-8 xl:px-16"
>
    <div class="grid items-center gap-16 md:grid-cols-2">
        <div class="space-y-6">
            <div class="flex items-center gap-2">
                <img src="/images/icons/illustrated/dark/auth.png" class="size-8" alt="" />
                <span class="text-micro text-primary uppercase">
                    Auth<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="text-display font-aeonik-pro text-primary max-sm:max-w-[300px] md:max-w-md">
                Secure login for all users
            </h1>
            <p class="text-description text-secondary">
                Authenticate users securely with multiple login methods like Email/Password, SMS,
                OAuth, Anonymous, Magic URLs, and more.
            </p>

            <div class="flex flex-col items-center gap-4 md:flex-row">
                <a href="/docs/products/auth" class="web-button !w-full md:!w-fit"> Get started </a>
                <a href="/docs/products/auth" class="web-button is-secondary !w-full md:!w-fit">
                    Documentation
                </a>
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
