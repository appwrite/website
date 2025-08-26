<script lang="ts">
    import { page } from '$app/state';
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';
    import { preferredPlatform, preferredVersion } from '$lib/utils/references';
    import type { Snippet } from 'svelte';

    const { children }: { children: Snippet } = $props();

    const expandable = $derived(
        !!page.url.pathname.match(/\/docs\/references\/.*?\/(client|server).*?\/.*?\/?/)
    );

    const platform = $derived($preferredPlatform ?? page.params?.platform ?? 'client-web');

    const resolvedPlatformPrefix = $derived(
        /^server-|^client-/.test(platform) ? platform : `server-${platform}`
    );

    const prefix = $derived(
        `/docs/references/${$preferredVersion ?? page.params?.version ?? 'cloud'}/${resolvedPlatformPrefix}`
    );

    const navigation: NavTree = $derived([
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/references',
                    icon: 'icon-view-grid'
                },
                {
                    label: 'Quick start',
                    href: '/docs/references/quick-start',
                    icon: 'icon-play'
                }
            ]
        },
        {
            label: 'APIs',
            items: [
                {
                    label: 'Account',
                    icon: 'icon-user',
                    href: `${prefix}/account`
                },
                {
                    label: 'Users',
                    icon: 'icon-user-group',
                    href: `${prefix}/users`
                },
                {
                    label: 'Teams',
                    icon: 'icon-users',
                    href: `${prefix}/teams`
                },
                {
                    label: 'Databases',
                    icon: 'icon-database',
                    href: `${prefix}/databases`
                },
                {
                    label: 'TablesDB',
                    icon: 'icon-database',
                    href: `${prefix}/tablesdb`
                },
                {
                    label: 'Sites',
                    icon: 'icon-globe-alt',
                    href: `${prefix}/sites`
                },
                {
                    label: 'Storage',
                    icon: 'icon-folder',
                    href: `${prefix}/storage`
                },
                {
                    label: 'Functions',
                    icon: 'icon-lightning-bolt',
                    href: `${prefix}/functions`
                },
                {
                    label: 'Messaging',
                    icon: 'icon-send',
                    href: `${prefix}/messaging`
                },
                {
                    label: 'Tokens',
                    icon: 'icon-key',
                    href: `${prefix}/tokens`
                },
                {
                    label: 'Localization',
                    icon: 'icon-location-marker',
                    href: `${prefix}/locale`
                },
                {
                    label: 'Avatars',
                    icon: 'icon-user-circle',
                    href: `${prefix}/avatars`
                }
            ]
        }
    ]);

    const parent: NavParent = {
        href: '/docs',
        label: 'API reference'
    };
</script>

<Docs variant={expandable ? 'expanded' : 'two-side-navs'} isReferences={expandable}>
    <Sidebar {navigation} {expandable} {parent} />
    {@render children()}
</Docs>
