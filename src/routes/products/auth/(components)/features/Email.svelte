<script lang="ts">
    import Closed from '../../(assets)/envelope-closed.svg';
    import Open from '../../(assets)/envelope-open.svg';

    const emails = [
        {
            title: 'Thank you for registering.',
            copy: 'Before we get started, confirm your identity by clicking the link below...',
            open: false
        },
        {
            title: 'You have been invited',
            copy: 'Create a user in Acme corp. You can accept or decline this invitation...',
            open: true
        }
    ];
</script>

<div
    class="gradient z-10 flex max-w-sm scale-95 flex-col gap-4 rounded-lg backdrop-blur-[32px] md:rounded-2xl"
>
    <div class="flex flex-col gap-1 divide-y divide-white/5">
        {#each emails as email}
            <div class="flex items-center gap-3 p-3">
                {#if email.open}
                    <div
                        class="border-greyscale-500 flex size-6 shrink-0 items-center justify-center rounded-[6px] border"
                    >
                        <img src={Open} class="size-4" alt="Open envelope" />
                    </div>
                {:else}
                    <div
                        class="border-accent flex size-6 shrink-0 items-center justify-center rounded-[6px] border"
                    >
                        <img src={Closed} class="size-4" alt="Closed envelope" />
                    </div>
                {/if}
                <div class="text-eyebrow tracking-tight">
                    <span class="text-primary font-medium">{email.title} </span>
                    <span class="text-secondary font-normal">{email.copy}</span>
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .gradient {
        @include gradients.border-gradient;

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
    }
</style>
