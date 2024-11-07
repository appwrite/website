<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Toolbar from './Toolbar.svelte';

    export let theme: 'dark' | 'light' = 'light';
    export let alignment: 'left' | 'center' = 'center';
    let className: string = '';

    export { className as class };
</script>

<div class={classNames('w-full', theme)}>
    <div
        class={classNames(
            'retro window relative z-10 flex flex-1 flex-col border-2 p-2',
            className
        )}
    >
        <Toolbar {alignment} {theme}><slot name="toolbar" /></Toolbar>

        <div class="flex flex-1 flex-col">
            <slot name="content" />
        </div>
    </div>
</div>
