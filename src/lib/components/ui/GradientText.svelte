<script lang="ts">
    import { cn } from '$lib/utils/classnames';

    let className = '';

    export { className as class };
</script>

<span
    class={cn(
        'block bg-[linear-gradient(6deg,_#f8a1ba,_#fff_35%)] bg-clip-text text-transparent',
        className
    )}
>
    <slot />
</span>
