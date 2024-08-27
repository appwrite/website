<script lang="ts" context="module">
    const ctxKey = Symbol('dropdown');

    export const DropdownCtx = {
        get() {
            return getContext<DropdownMenu>(ctxKey);
        },
        set(ctx: DropdownMenu) {
            setContext(ctxKey, ctx);
        }
    };
</script>

<script lang="ts">
    import { createDropdownMenu, type DropdownMenu } from '@melt-ui/svelte';
    import { getContext, setContext } from 'svelte';

    const dropdown = createDropdownMenu({
        forceVisible: true,
        positioning: {
            placement: 'bottom-start'
        }
    });

    DropdownCtx.set(dropdown);

    const {
        elements: { menu, trigger },
        states: { open }
    } = dropdown;
</script>

<slot menu={$menu} trigger={$trigger} open={$open} />
