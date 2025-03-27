<script lang="ts">
    import { cn } from '$lib/utils/classnames';
</script>

<div
    class="gradient flex flex-col items-center justify-center gap-4 rounded-2xl py-6 px-4 text-center backdrop-blur-[32px] md:max-w-xs md:rounded-2xl md:p-8"
>
    <div class="space-y-1">
        <h3 class="text-description text-primary">Verify your identity</h3>
        <p class="text-micro text-secondary -tracking-tight">
            Enter the verification code<br /> sent to your inbox.
        </p>
    </div>
    <div class="flex gap-1">
        {#each Array.from({ length: 6 }).map(() => Math.floor(Math.random() * 10)) as number, i}
            <div
                class={cn(
                    'text-primary bg-greyscale-850 pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-lg shadow-lg shadow-black/5 outline-none transition-all duration-500',
                    {
                        'border-accent shadow-accent/10 shadow-md': i === 3
                    }
                )}
            >
                <span>{number}</span>
            </div>{/each}
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
