<script lang="ts">
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

    const parent: NavParent = {
        href: '/docs',
        label: 'Auth'
    };

    const navigation: NavTree = [
        {
            label: 'Getting started',
            items: [
                {
                    label: 'Overview',
                    href: '/docs/products/auth'
                },
                {
                    label: 'Quick start',
                    href: '/docs/products/auth/quick-start'
                }
            ]
        },
        {
            label: 'Concepts',
            items: [
                {
                    label: 'Accounts',
                    href: '/docs/products/auth/accounts'
                },
                {
                    label: 'Users',
                    href: '/docs/products/auth/users'
                },
                {
                    label: 'Teams',
                    href: '/docs/products/auth/teams'
                },
                {
                    label: 'Labels',
                    href: '/docs/products/auth/labels'
                },
                {
                    label: 'Security',
                    href: '/docs/products/auth/security'
                },
                {
                    label: 'Tokens',
                    href: '/docs/products/auth/tokens'
                },
                {
                    label: 'Identities',
                    href: '/docs/products/auth/identities'
                }
            ]
        },
        {
            label: 'Journeys',
            items: [
                {
                    label: 'Email and password login',
                    href: '/docs/products/auth/email-password'
                },
                {
                    label: 'Phone (SMS) login',
                    href: '/docs/products/auth/phone-sms'
                },
                {
                    label: 'Magic URL login',
                    href: '/docs/products/auth/magic-url'
                },
                {
                    label: 'Email OTP login',
                    href: '/docs/products/auth/email-otp'
                },
                {
                    label: 'OAuth2 login',
                    href: '/docs/products/auth/oauth2'
                },
                {
                    label: 'Anonymous login',
                    href: '/docs/products/auth/anonymous'
                },
                {
                    label: 'JWT login',
                    href: '/docs/products/auth/jwt'
                },
                {
                    label: 'SSR login',
                    href: '/docs/products/auth/server-side-rendering'
                },
                {
                    label: 'Custom token login',
                    href: '/docs/products/auth/custom-token'
                },
                {
                    label: 'Multi-factor authentication',
                    href: '/docs/products/auth/mfa'
                },
                {
                    label: 'User verification',
                    href: '/docs/products/auth/verify-user'
                },
                {
                    label: 'Team invites',
                    href: '/docs/products/auth/team-invites'
                },
                {
                    label: 'Multi-tenancy',
                    href: '/docs/products/auth/multi-tenancy'
                }
            ]
        },
        {
            label: 'References',
            items: [
                {
                    label: 'Account API',
                    href: '/docs/references/cloud/client-web/account'
                },
                {
                    label: 'Users API',
                    href: '/docs/references/cloud/server-nodejs/users'
                },
                {
                    label: 'Teams API',
                    href: '/docs/references/cloud/client-web/teams'
                }
            ]
        }
    ];
</script>

<Docs variant="two-side-navs">
    <Sidebar {navigation} {parent} />
    <slot />
</Docs>
