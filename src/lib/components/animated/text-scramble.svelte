<script lang="ts">
    import { write } from '$lib/animations';
    import { classNames } from '$lib/utils/classnames';
    import { onDestroy, onMount } from 'svelte';

    export let text: string = '';
    export let delay: number = 0;
    export let duration: number = 2500;

    export let trigger: boolean = true;

    let className: string = '';
    export { className as class };

    let displayText: string = '';

    onMount(() => {
        if (!trigger) return;
        const delayTimeout = setTimeout(() => {
            write(text, (v) => (displayText = v), duration);
        }, delay);

        return () => clearTimeout(delayTimeout);
    });
</script>

<span class={classNames('inline-block w-full text-balance', className)}
    >{displayText}<slot name="suffix" /></span
>
