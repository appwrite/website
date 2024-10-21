<div class="absolute -top-14 -left-12 max-w-xs scale-75 md:left-40 md:scale-100">
    <span class="text-[0.6875rem]">Wed, May 1</span>
    <div
        class="gradient flex items-end justify-center gap-2 py-2 px-1.5 text-center backdrop-blur-[32px] md:py-4 md:px-4"
    >
        <span class="text-caption leading-normal -tracking-tight text-white"
            >Verification code for login is 003485</span
        >
        <span class="text-[0.6875rem] leading-normal">10:32</span>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .gradient {
        @include gradients.border-gradient;
        border-top-left-radius: 0;
        border-top-right-radius: var(--radius-2xl, 0.75rem);
        border-bottom-right-radius: var(--radius-2xl, 0.75rem);
        border-bottom-left-radius: var(--radius-2xl, 0.75rem);

        --m-border-radius: var(--radius-2xl, 0.75rem);
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );

        background: linear-gradient(
            138.4deg,
            rgba(255, 255, 255, 0.064) 9.61%,
            rgba(255, 255, 255, 0) 105.41%
        );

        &::before,
        &::after {
            border-top-left-radius: 0;
        }
    }
</style>
