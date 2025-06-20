<script>
  export let class: string = '';
</script>

<div
    class={`flex w-fit items-center gap-x-2 rounded-full border border-[var(--color-smooth)] bg-[var(--color-offset)] px-3 py-1.5 ${class}`}
>
    <slot />
</div>
