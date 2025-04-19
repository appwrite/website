<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import AnimatedText from './animated-text.svelte';

    const className = '';

    export { className as class };
</script>

<span
    class={classNames(
        '-mb-1 block bg-[linear-gradient(6deg,_#f8a1ba,_#fff_35%)] bg-clip-text pb-1 text-transparent',
        className
    )}
>
    <slot />
</span>
