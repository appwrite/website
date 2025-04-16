<script lang="ts" module>
    export { NavItem, Trigger };
</script>

<script lang="ts">
    import { NavigationMenu } from 'bits-ui';
    import { classNames } from '$lib/utils/classnames';
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
    <ul class="grid gap-3 p-3 sm:w-[400px] sm:p-6 md:w-[600px] md:grid-cols-2 lg:w-[800px]">
        {@render children()}
    </ul>
</NavigationMenu.Content>

{#snippet NavItem({ class: className, label, content, href, ...rest }: ListItemProps)}
    <li>
        <NavigationMenu.Link
            class={classNames(
                'hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none',
                className
            )}
            {href}
            {...rest}
        >
            <div class="text-sm leading-none font-medium">{name}</div>
            <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {content}
            </p>
        </NavigationMenu.Link>
    </li>
{/snippet}

{#snippet Trigger({ class: className, children, ...rest }: TriggerProps)}
    <NavigationMenu.Trigger class={classNames('group flex items-center gap-3', className)} {...rest}
        >{@render children?.()}</NavigationMenu.Trigger
    >
{/snippet}
