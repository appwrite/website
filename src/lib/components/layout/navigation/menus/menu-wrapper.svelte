<script lang="ts">
    import { NavigationMenu } from 'bits-ui';
    import type { Snippet } from 'svelte';

    type TriggerProps = NavigationMenu.TriggerProps;

    type ListItemProps = {
        label: string;
        content: string;
    } & NavigationMenu.LinkProps;

    type Props = { children: Snippet } & NavigationMenu.RootProps;

    const { class: className, children, ...rest }: Props = $props();
</script>

<NavigationMenu.Content
    class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left w-full sm:w-auto"
>
    <div class="grid gap-3 p-3 sm:w-[400px] sm:p-6 md:w-[600px] md:grid-cols-2 lg:w-[800px]">
        {@render children()}
    </div>
</NavigationMenu.Content>
