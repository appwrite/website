<script lang="ts">
    import { NavigationMenu } from 'bits-ui';
    import { Icon } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';

    const products: { name: string; href: string; description: string }[] = [
        {
            name: 'Auth',
            href: '/products/auth',
            description: 'Secure login with multi-factor auth.'
        },
        {
            name: 'Databases',
            href: '/docs/products/databases',
            description: 'Scalable and robust databases.'
        },
        {
            name: 'Storage',
            href: '/products/storage',
            description: 'Advanced compression and encryption.'
        },
        {
            name: 'Functions',
            href: '/products/functions',
            description: 'Deploy & scale serverless functions.'
        },
        {
            name: 'Messaging',
            href: '/products/messaging',
            description: 'Set up a full-functioning messaging service.'
        },
        {
            name: 'Realtime',
            href: '/docs/apis/realtime',
            description: 'Subscribe and react to any event.'
        }
    ];

    type ListItemProps = {
        className?: string;
        name: string;
        href: string;
        content: string;
    };
</script>

{#snippet ListItem({ className, name, content, href }: ListItemProps)}
    <li>
        <NavigationMenu.Link
            class={classNames(
                'hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none',
                className
            )}
            {href}
        >
            <div class="text-sm leading-none font-medium">{name}</div>
            <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {content}
            </p>
        </NavigationMenu.Link>
    </li>
{/snippet}

<NavigationMenu.Root>
    <NavigationMenu.List class="flex items-center gap-8">
        <NavigationMenu.Item>
            <NavigationMenu.Trigger class="group flex items-center gap-3"
                >Products <Icon
                    name="chevron-down"
                    class="relative size-4 transition-transform duration-200 group-data-[state=open]:-rotate-180"
                    aria-hidden="true"
                /></NavigationMenu.Trigger
            >
            <NavigationMenu.Content
                class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left w-full sm:w-auto"
            >
                <ul
                    class="grid gap-3 p-3 sm:w-[400px] sm:p-6 md:w-[600px] md:grid-cols-2 lg:w-[800px]"
                >
                    {#each products as component (component.name)}
                        {@render ListItem({
                            href: component.href,
                            name: component.name,
                            content: component.description
                        })}
                    {/each}
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/docs">Docs</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/pricing">Pricing</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link href="/contact/enterprise">Enterprise</NavigationMenu.Link>
        </NavigationMenu.Item>
    </NavigationMenu.List>
    <div class="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport
            class={classNames(
                'bg-greyscale-850 border-smooth relative w-full origin-[top_center] rounded-md border opacity-100 shadow-lg backdrop-blur-2xl transition-[width,_height] duration-200 before:rounded-md after:rounded-md',
                'data-[state=open]:animate-scale-in data-[state=closed]:hidden',
                'h-(--bits-navigation-menu-viewport-height) sm:w-(--bits-navigation-menu-viewport-width)'
            )}
        />
    </div>
</NavigationMenu.Root>
