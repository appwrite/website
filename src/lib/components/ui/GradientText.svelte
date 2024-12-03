<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    let className = '';

    export { className as class };
</script>

<span
    class={classNames(
        'block bg-[linear-gradient(6deg,_#f8a1ba,_#fff_35%)] bg-clip-text text-transparent',
        className
    )}
>
    <slot />
</span>
