<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { HTMLTextareaAttributes } from 'svelte/elements';

    type $$Props = {
        label: string;
    } & HTMLTextareaAttributes;

    export let label: $$Props['label'] = '';
    export let value: $$Props['value'] = '';
    const { class: classes, name, ...props } = $$restProps;
</script>

<label for={name}>
    {label}
</label>
<textarea
    on:input
    on:change
    on:focus
    on:blur
    bind:value
    class={classNames(
        'focus:border-greyscale-100 bg-greyscale-800 border-greyscale-700 flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-light transition-colors focus-within:border-white active:shadow-sm active:shadow-black/30',
        classes
    )}
    {...props}
></textarea>
