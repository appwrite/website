<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
</script>

<div
    class="absolute bottom-0 flex max-w-xs flex-col items-center justify-center gap-4 rounded-2xl border border-white/[0.02] bg-gradient-to-br from-white/[0.02] to-white/[0.005] p-8 text-center"
>
    <div class="space-y-1">
        <h3 class="text-description text-primary">Verify your identity</h3>
        <p class="text-micro text-secondary -tracking-tight">
            Enter the verification code<br /> sent to your inbox.
        </p>
    </div>
    <div class="flex gap-1">
        {#each Array.from({ length: 6 }).map(() => Math.floor(Math.random() * 10)) as number, i}
            <!-- svelte-ignore a11y-autofocus -->
            <div
                class={classNames(
                    'text-primary bg-greyscale-850 pointer-events-none relative flex size-10 items-center justify-center space-x-4 rounded-lg border border-white/10 text-center text-lg shadow-lg shadow-black/5 outline-none transition-all duration-500',
                    {
                        'border-accent shadow-accent/10 shadow-md': i === 3
                    }
                )}
            >
                <span>{number} </span>
            </div>{/each}
    </div>
</div>
