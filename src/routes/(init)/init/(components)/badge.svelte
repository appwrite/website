<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    let className: string = '';
    export { className as class };
</script>

<span
    class={classNames(
        'font-aeonik-fono text-micro text-primary rounded-full bg-black py-0.5 px-3 uppercase outline-2 [outline-offset:-1px] outline-[var(--color-offset)] outline-dashed',
        className
    )}
>
    <slot />
</span>
