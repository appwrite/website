<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Platform'
    };

    const navigation: NavTree = [
        {
            label: 'Platform',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/advanced/platform'
                },
                {
                    label: 'Shortcuts',
                    href: '/docs/advanced/platform/shortcuts'
                },
                {
                    new: true,
                    label: 'Roles',
                    href: '/docs/advanced/platform/roles'
                }
            ]
        },
        {
            label: 'Integration',
            items: [
                {
                    label: 'Events',
                    href: '/docs/advanced/platform/events'
                },
                {
                    label: 'Webhooks',
                    href: '/docs/advanced/platform/webhooks'
                },
                {
                    label: 'Response codes',
                    href: '/docs/advanced/platform/response-codes'
                }
            ]
        },
        {
            label: 'Access control',
            items: [
                {
                    label: 'Permissions',
                    href: '/docs/advanced/platform/permissions'
                },
                {
                    label: 'Rate limits',
                    href: '/docs/advanced/platform/rate-limits'
                },
                {
                    label: 'API keys',
                    href: '/docs/advanced/platform/api-keys'
                }
            ]
        },
        {
            label: 'Plans',
            items: [
                {
                    label: 'Billing',
                    href: '/docs/advanced/platform/billing'
                },
                {
                    label: 'Free',
                    href: '/docs/advanced/platform/free'
                },
                {
                    label: 'Pro',
                    href: '/docs/advanced/platform/pro'
                },
                {
                    label: 'Scale',
                    href: '/docs/advanced/platform/scale'
                },
                {
                    label: 'Enterprise',
                    href: '/docs/advanced/platform/enterprise'
                },
                {
                    label: 'Open source',
                    href: '/docs/advanced/platform/oss'
                }
            ]
        },
        {
            label: 'Add ons',
            items: [
                {
                    new: true,
                    label: 'Compute',
                    href: '/docs/advanced/platform/compute'
                },
                {
                    new: true,
                    label: 'Phone OTP',
                    href: '/docs/advanced/platform/phone-otp'
                },
                {
                    new: true,
                    label: 'Image Transformations',
                    href: '/docs/advanced/platform/image-transformations'
                }
            ]
        },
        {
            label: 'Configuration',
            items: [
                {
                    label: 'Custom domains',
                    href: '/docs/advanced/platform/custom-domains'
                },
                {
                    label: 'Message templates',
                    href: '/docs/advanced/platform/message-templates'
                }
            ]
        },
        {
            label: 'Policies',
            items: [
                {
                    label: 'Release',
                    href: '/docs/advanced/platform/release-policy'
                },
                {
                    new: true,
                    label: 'Fair use',
                    href: '/docs/advanced/platform/fair-use-policy'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
