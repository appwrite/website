<script lang="ts">
    import Button from '$lib/components/ui/button.svelte';
    import Switch from '$lib/components/ui/switch.svelte';

    let hostname = $state('');
    let isOrganization = $state(false);
    let organizationHandle = $state('');
    
    function setIsOrganization(value: boolean) {
        isOrganization = value;
    }
    
    function isValidHostname(hostname: string) {
        if (!hostname || hostname.startsWith('.') || hostname.endsWith('.')) return false;

        const parts = hostname.split('.');
        if (parts.length < 2) return false;

        for (const part of parts) {
            if (!part || part.startsWith('-') || part.endsWith('-')) return false;
            if (!(/^[a-zA-Z0-9-]+$/).test(part)) return false;
        }

        return true;
    }

    function generateAppName() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let suffix = '';
        for (let i = 0; i < 6; i++) {
            suffix += chars[Math.floor(Math.random() * chars.length)];
        }
        return `appwrite-${suffix}`;
    }

    function submit() {
      alert("OK");
        const name = generateAppName();
        const manifest = JSON.stringify({
            name,
            url: `https://${hostname}`,
            hook_attributes: {
                url: `https://${hostname}/v1/vcs/github/events`
            },
            redirect_url: `https://${hostname}/v1/vcs/github/callback`,
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

        const baseUrl = isOrganization && organizationHandle
            ? `https://github.com/organizations/${organizationHandle}/settings/apps/new`
            : 'https://github.com/settings/apps/new';

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = baseUrl;

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'manifest';
        input.value = manifest;

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    }
</script>

<div class="border-smooth not-prose my-8 rounded-2xl border p-6">
    <h4 class="text-primary text-sub-body mb-6 font-medium">Create GitHub App</h4>
    <form onsubmit={(e) => { e.preventDefault(); submit(); }} class="flex flex-col gap-5">
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
            <p class="text-caption text-secondary">Domain of your Appwrite instance, without https://</p>
        </div>

        <div class="flex items-center justify-between gap-4">
            <label for="org-switch" class="text-sub-body text-secondary">Create on organization?</label>
            <Switch id="org-switch" checked={isOrganization} onCheckedChange={(value) => setIsOrganization(value)} />
        </div>

        {#if isOrganization}
            <div class="flex flex-col gap-2">
                <label for="org-handle" class="text-sub-body text-secondary">Organization handle</label>
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

        <Button disabled={!hostname || !isValidHostname(hostname) || (isOrganization && !organizationHandle)} type="submit" variant="secondary">Create GitHub app</Button>
    </form>
</div>
