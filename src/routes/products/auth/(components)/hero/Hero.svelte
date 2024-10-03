<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
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
    <div
        class={classNames(
            'relative mx-auto max-h-[50vh] max-w-[75vw] overflow-hidden py-10',
            'before:to-greyscale-900 before:absolute before:right-0 before:bottom-0 before:left-0 before:z-0 before:h-[350px] before:bg-gradient-to-b before:from-transparent',
            'after:to-greyscale-900 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-0 after:h-[350px] after:bg-gradient-to-b after:from-transparent'
        )}
    >
        <Phone />
        <Identity />
        <MultiFactor />
        <VerificationCode />
        <Email />
    </div>

    <div class="mt-16 flex flex-col gap-y-4 text-center">
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
