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

<ul class="web-secondary-tabs {className}" use:melt={$list} {style}>
    {#each tabs as tab}
        <li class="web-secondary-tabs-item" class:u-stretch={stretch}>
            <button
                class="web-secondary-tabs-button u-width-full-line"
                class:is-selected={$value === tab}
                use:melt={$trigger(tab)}
            >
                <slot {tab}>
                    <span class="web-main-body-500">{tab}</span>
                </slot>
            </button>
        </li>
    {/each}
</ul>
