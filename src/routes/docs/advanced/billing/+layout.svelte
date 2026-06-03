<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Billing'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/advanced/billing'
                }
            ]
        },
        {
            label: 'Plans',
            items: [
                {
                    label: 'Billing',
                    href: '/docs/advanced/billing/payments'
                },
                {
                    label: 'Free',
                    href: '/docs/advanced/billing/free'
                },
                {
                    label: 'Pro',
                    href: '/docs/advanced/billing/pro'
                },
                {
                    label: 'Scale',
                    href: '/docs/advanced/billing/scale'
                },
                {
                    label: 'Enterprise',
                    href: '/docs/advanced/billing/enterprise'
                },
                {
                    label: 'Open source',
                    href: '/docs/advanced/billing/oss'
                }
            ]
        },
        {
            label: 'Add ons',
            items: [
                {
                    label: 'Compute',
                    href: '/docs/advanced/billing/compute'
                },
                {
                    label: 'Phone OTP',
                    href: '/docs/advanced/billing/phone-otp'
                },
                {
                    label: 'Image Transformations',
                    href: '/docs/advanced/billing/image-transformations'
                },
                {
                    label: 'Database Reads and Writes',
                    href: '/docs/advanced/billing/database-reads-and-writes'
                }
            ]
        },
        {
            label: 'SLAs',
            items: [
                {
                    label: 'Support SLA',
                    href: '/docs/advanced/billing/support-sla'
                },
                {
                    label: 'Uptime SLA',
                    href: '/docs/advanced/billing/uptime-sla'
                }
            ]
        },
        {
            label: 'Policies',
            items: [
                {
                    label: 'Fair use',
                    href: '/docs/advanced/billing/fair-use-policy'
                },
                {
                    label: 'Abuse',
                    href: '/docs/advanced/billing/abuse'
                },
                {
                    label: 'Refund',
                    href: '/docs/advanced/billing/refund-policy'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
