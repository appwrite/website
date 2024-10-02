<script lang="ts">
    import Email from './Email.svelte';
    import Identity from './Identity.svelte';
    import MultiFactor from './MultiFactor.svelte';
    import Phone from './Phone.svelte';
    import VerificationCode from './VerificationCode.svelte';

    const platforms = [
        'Email and Password',
        'Phone (SMS)',
        'Magic URL',
        'Email OTP',
        'OAuth2',
        'JWT',
        'SSR',
        'Custom token',
        'Anonymous login',
        'Multi-factor authentication'
    ];
</script>

<div class="container py-10">
    <div class="relative mx-auto max-w-[75vw] py-10">
        <MultiFactor />
        <Phone />
        <VerificationCode />
        <Email />
        <Identity />
    </div>

    <div
        class="flex flex-col gap-y-4 text-center after:inset-0 after:bottom-0 after:bg-gradient-to-b after:from-transparent after:to-black"
    >
        <div class="mx-auto max-w-xl">
            <h2 class="text-display text-primary font-aeonik-pro">Customer identity</h2>
            <p class="text-description">
                Create a seamless experience for your users by providing various authentication
                methods for them to identify and login.
            </p>
        </div>
        <div class="mt-8 mx-auto max-w-2xl">
            <div class="flex flex-wrap items-center justify-center gap-3">
                {#each platforms as platform}
                    <span
                        class="text-caption text-primary flex h-[28px] items-center justify-center rounded-full bg-white/5 px-3"
                        >{platform}</span
                    >
                {/each}
            </div>
        </div>
    </div>
</div>
