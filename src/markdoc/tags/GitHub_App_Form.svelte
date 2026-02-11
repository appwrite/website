<script lang="ts">
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import Button from '$lib/components/ui/button.svelte';
    import Switch from '$lib/components/ui/switch.svelte';
    import Fence from '$markdoc/nodes/Fence.svelte';

    const STATE_KEY = 'appwrite-github-app-manifest-state';

    let hostname = $state('');
    let isOrganization = $state(false);
    let organizationHandle = $state('');

    let appConfig: {
        name: string;
        id: number;
        client_id: string;
        client_secret: string;
        webhook_secret: string;
        pem: string;
    } | null = $state(null);
    let error: string | null = $state(null);
    let loading = $state(false);

    function setIsOrganization(value: boolean) {
        isOrganization = value;
    }

    function isValidHostname(hostname: string) {
        if (!hostname || hostname.startsWith('.') || hostname.endsWith('.')) return false;

        const parts = hostname.split('.');
        if (parts.length < 2) return false;

        for (const part of parts) {
            if (!part || part.startsWith('-') || part.endsWith('-')) return false;
            if (!/^[a-zA-Z0-9-]+$/.test(part)) return false;
        }

        return true;
    }

    function generateState() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
    }

    function generateAppName() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let suffix = '';
        for (let i = 0; i < 6; i++) {
            suffix += chars[Math.floor(Math.random() * chars.length)];
        }
        return `appwrite-self-hosted-${suffix}`;
    }

    function submit() {
        const state = generateState();
        sessionStorage.setItem(STATE_KEY, state);

        const name = generateAppName();
        const manifest = JSON.stringify({
            name,
            url: `https://${hostname}`,
            hook_attributes: {
                url: `https://${hostname}/v1/vcs/github/events`
            },
            redirect_url: window.location.href,
            callback_urls: [
                `https://${hostname}/v1/vcs/github/callback`,
                `https://${hostname}/v1/account/sessions/oauth2/callback/github/console`
            ],
            request_oauth_on_install: true,
            setup_on_update: true,
            public: true,
            default_permissions: {
                administration: 'write',
                checks: 'write',
                statuses: 'write',
                contents: 'write',
                issues: 'write',
                metadata: 'read',
                pull_requests: 'write',
                repository_hooks: 'write',
                emails: 'read'
            },
            default_events: ['pull_request', 'push']
        });

        const baseUrl =
            isOrganization && organizationHandle
                ? `https://github.com/organizations/${organizationHandle}/settings/apps/new`
                : 'https://github.com/settings/apps/new';

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `${baseUrl}?state=${state}`;

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'manifest';
        input.value = manifest;

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    }

    async function completeSetup(code: string, state: string) {
        loading = true;
        error = null;

        const savedState = sessionStorage.getItem(STATE_KEY);
        if (!savedState || savedState !== state) {
            error = 'State mismatch. This may be a CSRF attack. Please try again.';
            loading = false;
            return;
        }
        sessionStorage.removeItem(STATE_KEY);

        try {
            const response = await fetch(
                `https://api.github.com/app-manifests/${code}/conversions`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/vnd.github+json'
                    }
                }
            );

            if (!response.ok) {
                const body = await response.json().catch(() => null);
                error = body?.message || `GitHub API returned ${response.status}`;
                loading = false;
                return;
            }

            const data = await response.json();
            appConfig = {
                name: data.slug ?? data.name,
                id: data.id,
                client_id: data.client_id,
                client_secret: data.client_secret,
                webhook_secret: data.webhook_secret,
                pem: data.pem
            };

            // Remove code/state from URL
            goto(page.url.pathname, { replaceState: true });
        } catch {
            error = 'Failed to complete GitHub App setup. Please try again.';
        } finally {
            loading = false;
        }
    }

    function envContent(config: NonNullable<typeof appConfig>) {
        let privateKey = config.pem;

        // Remove last \n to be valid dotenv syntax
        privateKey = privateKey.replace(/\n$/, '');

        return `_APP_VCS_GITHUB_APP_NAME="${config.name}"
_APP_VCS_GITHUB_PRIVATE_KEY="${privateKey}"
_APP_VCS_GITHUB_APP_ID="${config.id}"
_APP_VCS_GITHUB_CLIENT_ID="${config.client_id}"
_APP_VCS_GITHUB_CLIENT_SECRET="${config.client_secret}"
_APP_VCS_GITHUB_WEBHOOK_SECRET="${config.webhook_secret}"`;
    }

    function reset() {
        appConfig = null;
        error = null;
        loading = false;
        isOrganization = false;
        hostname = '';
        organizationHandle = '';
        sessionStorage.removeItem(STATE_KEY);
    }

    // Check for code parameter on mount
    $effect(() => {
        const code = page.url.searchParams.get('code');
        const state = page.url.searchParams.get('state');
        if (code && state && !appConfig && !loading) {
            completeSetup(code, state);
        }
    });
</script>

<div class="border-smooth not-prose my-8 rounded-2xl border p-6">
    {#if loading}
        <h4 class="text-primary text-sub-body font-medium">Setting up GitHub App...</h4>
        <p class="text-secondary text-sub-body mt-2">Completing registration with GitHub.</p>
    {:else if error}
        <h4 class="text-primary text-sub-body mb-4 font-medium">Setup failed</h4>
        <p class="text-secondary text-sub-body mb-6">{error}</p>
        <Button variant="secondary" onclick={reset}>Try again</Button>
    {:else if appConfig}
        <h4 class="text-primary text-sub-body mb-2 font-medium">GitHub App created</h4>
        <p class="text-secondary text-sub-body mb-6">
            Set these environment variables in <code>.env</code> file of your Appwrite instance:
        </p>
        <Fence
            content={envContent(appConfig)}
            language="env"
            process={true}
            withLineNumbers={false}
        />
        <div class="mt-6">
            <Button variant="secondary" onclick={reset}>Create another GitHub app</Button>
        </div>
    {:else}
        <h4 class="text-primary text-sub-body mb-6 font-medium">Create GitHub App</h4>
        <form
            onsubmit={(e) => {
                e.preventDefault();
                submit();
            }}
            class="flex flex-col gap-5"
        >
            <div class="flex flex-col gap-2">
                <label for="hostname" class="text-sub-body text-secondary">Hostname</label>
                <input
                    id="hostname"
                    type="text"
                    bind:value={hostname}
                    placeholder="appwrite.example.com"
                    required
                    class="bg-greyscale-800 border-greyscale-700 focus:border-greyscale-100 w-full rounded-lg border px-3 py-2 text-sm font-light transition-colors"
                />
                <p class="text-caption text-secondary">
                    Domain of your Appwrite instance, without https://
                </p>
            </div>

            <div class="flex items-center justify-between gap-4">
                <label for="org-switch" class="text-sub-body text-secondary"
                    >Create on organization?</label
                >
                <Switch
                    id="org-switch"
                    checked={isOrganization}
                    onCheckedChange={(value) => setIsOrganization(value)}
                />
            </div>

            {#if isOrganization}
                <div class="flex flex-col gap-2">
                    <label for="org-handle" class="text-sub-body text-secondary"
                        >Organization handle</label
                    >
                    <input
                        id="org-handle"
                        type="text"
                        bind:value={organizationHandle}
                        placeholder="appwrite"
                        required
                        class="bg-greyscale-800 border-greyscale-700 focus:border-greyscale-100 w-full rounded-lg border px-3 py-2 text-sm font-light transition-colors"
                    />
                    <p class="text-caption text-secondary">
                        The organization handle: https://github.com/<strong>[THIS_PART]</strong>
                    </p>
                </div>
            {/if}

            <Button
                disabled={!hostname ||
                    !isValidHostname(hostname) ||
                    (isOrganization && !organizationHandle)}
                type="submit"
                variant="secondary">Create GitHub app</Button
            >
        </form>
    {/if}
</div>
