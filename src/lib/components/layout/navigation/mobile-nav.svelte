<script lang="ts">
    import { Collapsible } from 'bits-ui';
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
        },
        {
            name: 'Sites',
            href: '/products',
            description: 'The open-source Vercel alternative.'
        }
    ];

    type CollapsibleItemProps = {
        className?: string;
        label: string;
        content: string;
    };
</script>

{#snippet ListItem({ className, label }: CollapsibleItemProps)}
    <Collapsible.Root>
        <Collapsible.Trigger>{label}</Collapsible.Trigger>
        <Collapsible.Content
            class={classNames(
                'hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none',
                className
            )}
        >
            <div class="text-sm leading-none font-medium">{name}</div>
        </Collapsible.Content>
    </Collapsible.Root>
{/snippet}
