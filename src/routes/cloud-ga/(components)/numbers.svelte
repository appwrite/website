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
        <div class="grid grid-cols-2 place-content-between gap-4 pt-8 md:grid-cols-4">
            {#each numbers as { label, description }, i}
                <div
                    class={classNames(
                        'border-gradient relative h-full w-[calc(100%_-_16px)] rounded-2xl bg-[#232325]/90 p-4 before:rounded-2xl after:rounded-2xl'
                    )}
                    style:grid-column-start={i + 1}
                    style:grid-column-end={i + 2}
                    style:--border-gradient-before="linear-gradient(180deg,rgba(255,255,255,0.12),transparent)"
                    style:--border-gradient-after="linear-gradient(180deg,rgba(255,255,255,0),transparent)"
                >
                    <h3
                        class="md:tracking-squeezed font-aeonik-pro text-primary text-[1.25rem] text-pretty md:text-[2rem]"
                    >
                        {label}
                    </h3>
                    <p class="text-description text-secondary">{description}</p>
                </div>
            {/each}
        </div>
    </div>
</div>
