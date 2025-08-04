<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    type Props = {
        class?: string;
        numbers: Array<{ label: string; description: string }>;
    };

    const { numbers, class: className }: Props = $props();
</script>

<div class={classNames('relative h-full', className)}>
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <div class="flex flex-wrap justify-between gap-8 pt-8">
            {#each numbers as { label, description }, i}
                <div
                    class={classNames(
                        'border-gradient relative flex h-full flex-1 flex-col gap-1 rounded-2xl bg-[#232325]/90 p-5 before:rounded-2xl after:rounded-2xl'
                    )}
                    style:--border-gradient-before="linear-gradient(180deg,rgba(255,255,255,0.12),transparent)"
                    style:--border-gradient-after="linear-gradient(180deg,rgba(255,255,255,0),transparent)"
                >
                    <h3
                        class="md:tracking-squeeze font-aeonik-pro text-primary -mt-2 text-[1.25rem] text-pretty md:text-[2rem]"
                    >
                        {label}
                    </h3>
                    <p class="text-description text-secondary">{description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
