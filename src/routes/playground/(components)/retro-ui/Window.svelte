<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Toolbar from './Toolbar.svelte';

    export let mode: 'dark' | 'light' = 'light';
    let className: string = '';

    export { className as class };
</script>

<div
    class={classNames('container relative z-10 border-2 p-2', className, {
        'border-t-white/76 border-r-[rgba(0,_0,_0_,24%)] border-b-[rgba(0,_0,_0_,24%)] border-l-white/76 bg-[#2D2D31] shadow-[8px_8px_0_0_rgba(0,_0,_0_,16%)]':
            mode === 'dark',
        'border-t-white border-r-[#87878A] border-b-[#87878A] border-l-white bg-[#FAFAFB] shadow-[10px_10px_0_0_#c7c7c9]':
            mode === 'light'
    })}
>
    <slot prop={mode} name="toolbar" />

    <div class="h-full w-full">
        <slot name="content" />
    </div>
</div>
