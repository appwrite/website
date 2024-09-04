<script lang="ts" context="module">
    const CTX_KEY = 'tabs';

    type Context = Tabs & {
        tabs: readonly string[];
    };

    const setTabsContext = (ctx: Context) => {
        setContext(CTX_KEY, ctx);
    };

    export const getTabsContext = () => {
        return getContext<Context>(CTX_KEY);
    };
</script>

<script lang="ts">
    import { createTabs, melt, type Tabs } from '@melt-ui/svelte';
    import { getContext, setContext } from 'svelte';
    import List from './List.svelte';
    import Content from './Content.svelte';

    export let tabs: Context['tabs'];
    export let tab = tabs[0];

    const ctx = createTabs({
        defaultValue: tab,
        onValueChange({ next }) {
            tab = next;
            return next;
        }
    });
    $: value.set(tab);

    setTabsContext({ ...ctx, tabs });

    const {
        elements: { root },
        states: { value }
    } = ctx;
</script>

<div use:melt={$root}>
    <slot TabsList={List} TabContent={Content} />
</div>
