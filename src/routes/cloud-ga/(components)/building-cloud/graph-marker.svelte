<script lang="ts">
    import { cn } from '$lib/utils/classnames';

    export let delay: number = 0;
    let classNames: string = '';
    export let align: 'left' | 'right' = 'left';
    export let animate: boolean = false;

    export { classNames as class };
</script>

<div
    class={cn(
        'text-caption text-primary relative z-10 flex items-start gap-x-4 px-4 font-medium opacity-0 [animation-delay:var(--delay)]',
        classNames,
        {
            'animate-text': animate
        }
    )}
    style:--delay="{delay}ms"
>
    <div
        class={cn(
            'relative flex h-full w-px items-end justify-center bg-white/10',
            'before:bg-accent before:absolute before:top-0 before:h-3 before:w-px',
            {
                'order-2': align === 'right'
            }
        )}
    >
        <div
            class={cn(
                'animate-fade-in group absolute z-10 flex size-5 cursor-pointer items-center justify-center opacity-0'
            )}
        >
            <span
                class="bg-accent absolute inline-flex h-full w-full rounded-full opacity-75 group-hover:animate-ping"
            />
            <span class="bg-accent absolute inline-flex h-full w-full rounded-full" />
            <span
                class="absolute size-1/2 rounded-full bg-white transition-transform group-hover:scale-110"
            />
        </div>
    </div>
    <span class="text-caption -mt-1 font-medium">
        <slot />
    </span>
</div>
