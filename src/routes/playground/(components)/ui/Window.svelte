<script>
    import Toolbar from './Toolbar.svelte';
</script>

<div
    class="container relative z-10 border-2 border-t-white/76 border-r-[rgba(0,_0,_0_,24%)] border-b-[rgba(0,_0,_0_,24%)] border-l-white/76 bg-[#2D2D31] p-2 shadow-[8px_8px_0_0_rgba(0,_0,_0_,16%)]"
>
    <Toolbar>
        <slot name="toolbar" />
    </Toolbar>
    <div class="h-full w-full">
        <slot name="window" />
    </div>
</div>
