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

<div class="md:container relative py-32">
    <div
        class={classNames(
            'relative mx-auto max-h-[50vh] lg:max-w-[85vw] xl:max-w-[75vw]',
            'before:to-greyscale-900 before:absolute before:right-0 before:bottom-0 before:left-0 before:z-0 before:h-[350px] before:bg-gradient-to-b before:from-transparent',
            'after:to-greyscale-900 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-0 after:h-[350px] after:bg-gradient-to-b after:from-transparent'
        )}
    >
        <div class="max-h-[40vh] scale-90 overflow-hidden md:max-h-[50vh] md:scale-100">
            <Phone />
        </div>
        <div class="absolute -top-14 -left-4 scale-75 md:left-10 md:scale-100 lg:left-40">
            <VerificationCode />
        </div>
        <div class="absolute -right-52 bottom-12 md:top-10 md:-right-36 lg:right-0">
            <Email />
        </div>
        <div class="absolute -bottom-20 -left-16 z-10 scale-90 md:-bottom-6 md:left-4 md:scale-100">
            <MultiFactor />
        </div>
        <div
            class="absolute -right-8 bottom-48 scale-75 md:right-36 md:bottom-0 md:bottom-14 md:scale-100 lg:right-[19rem]"
        >
            <Identity />
        </div>
    </div>

    <div class="mt-32 flex flex-col gap-y-4 p-4 md:mt-16 md:p-0 md:text-center">
        <div class="mx-auto max-w-xl space-y-4">
            <h2 class="md:text-display text-title text-primary font-aeonik-pro">
                Customer identity
            </h2>
            <p class="text-body md:text-description font-medium md:font-normal">
                Create a seamless experience for your users by providing various authentication
                methods for them to identify and login.
            </p>
        </div>
        <div class="mt-8 mx-auto max-w-md md:max-w-2xl">
            <div class="flex flex-wrap items-center gap-3 md:justify-center">
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
