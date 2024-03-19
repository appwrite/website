<script lang="ts">
    import { melt } from '@melt-ui/svelte';
    import { getTabsContext } from './index.svelte';

    const {
        tabs,
        elements: { list, trigger },
        states: { value }
    } = getTabsContext();

    export let stretch = false;
    export let style = '';
    let className = '';
    export { className as class };
</script>

<ul class="aw-secondary-tabs {className}" use:melt={$list} {style}>
    {#each tabs as tab}
        <li class="aw-secondary-tabs-item" class:u-stretch={stretch}>
            <button
                class="aw-secondary-tabs-button u-width-full-line"
                class:is-selected={$value === tab}
                use:melt={$trigger(tab)}
            >
                <slot {tab}>
                    <span class="aw-main-body-500">{tab}</span>
                </slot>
            </button>
        </li>
    {/each}
</ul>
