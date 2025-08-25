<script lang="ts">
    import { cn } from '$lib/utils/cn';

    type Props = {
        class?: string;
        numbers: Array<{ label: string; description: string }>;
    };

    const { numbers, class: className }: Props = $props();
</script>

<div class={cn('relative h-full', className)}>
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <div class="grid grid-cols-2 place-content-between gap-4 pt-8 md:grid-cols-4 md:gap-8">
            {#each numbers as { label, description }, i}
                <div
                    class={cn(
                        'border-gradient relative flex h-full flex-col rounded-2xl bg-[#232325]/90 p-5 before:rounded-2xl after:rounded-2xl'
                    )}
                    style:--border-gradient-before="linear-gradient(180deg,rgba(255,255,255,0.12),transparent)"
                    style:--border-gradient-after="linear-gradient(180deg,rgba(255,255,255,0),transparent)"
                >
                    <h3
                        class="md:tracking-squeeze font-aeonik-pro text-primary -mt-2 text-[1.25rem] text-pretty md:text-[2rem]"
                    >
                        {label}
                    </h3>
                    <p class="text-description text-secondary -mt-1">{description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
