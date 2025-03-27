<script lang="ts">
    import { cn } from '$lib/utils/classnames';

    let className: string = '';

    export { className as class };
</script>

<span
    class={cn('text-micro tracking-loose text-primary font-aeonik-fono ps-6 uppercase', className)}
    ><slot /></span
>
