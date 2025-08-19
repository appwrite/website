<script lang="ts">
    import Phone from '../(assets)/phone.png';
</script>

<div
    class="box-content flex items-center bg-[url(/images/bgs/mobile-auth-hero.png)] bg-cover bg-bottom px-5 pt-20 pb-20 md:bg-[url(/images/bgs/auth-hero.png)] md:bg-center md:pt-32 md:pb-40 lg:px-8 xl:px-16"
>
    <div class="grid items-center gap-16 md:grid-cols-2">
        <div class="space-y-6">
            <div class="flex items-center gap-2">
                <img src="/images/icons/illustrated/dark/functions.png" class="size-8" alt="" />
                <span class="text-eyebrow text-primary uppercase">
                    Functions<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="text-display font-aeonik-pro text-primary max-sm:max-w-[300px] md:max-w-md">
                Serverless functions done your way
            </h1>
            <p class="text-description text-secondary">
                Deploy and scale serverless functions with<br /> seamless integration,
                multi-language support,<br /> and zero server management.
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <a href="/docs/products/auth" class="web-button !w-full md:!w-fit"> Get started </a>
                <a href="/docs/products/auth" class="web-button is-secondary !w-full md:!w-fit">
                    Documentation
                </a>
            </div>
        </div>
        <img
            src={Phone}
            alt="Phone screen alongside of a users table and a code snippet that controls Appwrite's functions."
        />
    </div>
</div>
