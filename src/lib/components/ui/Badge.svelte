<script>
    import { classNames } from '$lib/utils/classnames';
</script>

<div
    class={classNames(
        'self-start font-aeonik-fono text-xs tracking-[0.08em] uppercase leading-4 text-white backdrop-blur-2xl py-[6px] px-3 rounded-md',
        'bg-[radial-gradient(98.13%_199.7%_at_98.13%_100%,_#FE6947_0%,_#FD366E_41.6%,_#FD366E_100%)]',
        'shadow-[3px_3px_var(--color-badge-bg),4px_3px_var(--color-badge-border),2px_3px_var(--color-badge-border),3px_2px_var(--color-badge-border)]'
    )}
>
    <slot />_
</div>
