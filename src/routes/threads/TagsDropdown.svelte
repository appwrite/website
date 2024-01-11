<script lang="ts">
    import DropdownCheckboxItem from '$lib/components/DropdownMenu/DropdownCheckboxItem.svelte';
    import DropdownMenu from '$lib/components/DropdownMenu/DropdownMenu.svelte';
    import { melt } from '@melt-ui/svelte';
    import { fly } from 'svelte/transition';

    export let tags: string[];
    export let selectedTags: string[];
    export let toggleTag: (tag: string) => void;
</script>

<DropdownMenu let:open let:menu let:trigger>
    <button class="aw-btn-tag" use:melt={trigger}>
        <span class="text">More</span>
        <span class="aw-icon-chevron-down" style="font-size: 1rem" />
    </button>

    {#if open}
        <ul
            class="aw-card is-normal has-border-gradient menu"
            use:melt={menu}
            transition:fly={{ y: 8, duration: 250 }}
            style:z-index="1"
        >
            {#each tags as tag}
                {@const checked = selectedTags?.includes(tag)}
                <DropdownCheckboxItem let:checkboxItem {checked}>
                    <li
                        use:melt={checkboxItem}
                        on:m-click={(e) => {
                            e.preventDefault();
                            toggleTag(tag);
                        }}
                    >
                        <div class="checkbox">
                            {#if checked}
                                <span class="aw-icon-check" />
                            {/if}
                        </div>
                        {tag}
                    </li>
                </DropdownCheckboxItem>
            {/each}
        </ul>
    {/if}
</DropdownMenu>

<style lang="scss">
    ul {
        --p-card-border-radius: 0.5rem;
        padding: 0.75rem;
        min-width: 14.375rem;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: 14rem;
        overflow-y: auto;
        backdrop-filter: blur(2px);
        --webkit-backdrop-filter: blur(2px);

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    li {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        border-radius: 0.5rem;
        padding: 0.5rem 0.75rem;

        &:hover {
            cursor: pointer;
            background-color: hsl(var(--aw-color-offset));
        }
    }

    .checkbox {
        --p-checkbox-size: 1rem;
        width: var(--p-checkbox-size);
        height: var(--p-checkbox-size);

        background-color: #19191c;
        border: 1px solid #56565c;
        border-radius: 0.25rem;

        position: relative;

        [class*='icon'] {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: black;
        }

        :global([data-state='checked']) & {
            background-color: hsl(var(--aw-color-primary));
            border-color: hsl(var(--aw-color-primary));
        }
    }
</style>
