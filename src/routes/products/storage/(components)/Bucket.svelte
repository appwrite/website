<script>
    import Switch from '$lib/components/Switch.svelte';

    const buttons = [
        {
            label: 'Enable encryption',
            description: 'Files larger than 20MB will not be encrypted.',
            checked: true
        },
        {
            label: 'Strip metadata',
            description: 'Remove metadata for all files uploaded to the bucket.',
            checked: true
        },
        {
            label: 'Permissions',
            description: 'Choose who can access the files in the bucket.',
            checked: true
        },
        {
            label: 'File level permissions',
            description: 'Enable to set permissions at the File level.',
            checked: false
        }
    ];
</script>

<div
    class="web-media-container u-max-width-100-percent is-only-desktop flex flex-col"
    style="flex-basis:586px; border-radius:1.5rem"
>
    <section class="web-card e-console-card is-dark flex flex-1 flex-col p-0">
        <header class="e-header-console is-dark flex flex-col gap-4 !pb-0">
            <div class="flex gap-4 pt-6 px-6">
                <h4 class="text-label text-primary font-aeonik-pro">My Bucket</h4>
                <div class="tag u-cross-child-end web-u-color-text-secondary">
                    <code class="web-u-font-size-10">637a40ba7a703e3936e2</code>
                </div>
            </div>

            <ul class="mt-4 flex gap-4 px-6 pb-2">
                <li class="tabs-item">
                    <button class="tabs-button" tabindex="-1" role="tab">
                        <span class="text-micro">Files</span>
                    </button>
                </li>
                <li class="tabs-item">
                    <button class="tabs-button" tabindex="-1" role="tab">
                        <span class="text-micro">Usage</span>
                    </button>
                </li>
                <li class="tabs-item">
                    <button class="tabs-button" tabindex="-1" role="tab">
                        <span class="text-micro">Settings</span>
                    </button>
                </li>
                <li class="tabs-item">
                    <button class="tabs-button is-selected" tabindex="0" role="tab">
                        <span class="text-micro">Security</span>
                    </button>
                </li>
            </ul>
        </header>
        <div
            class="e-console-card-content flex flex-1 flex-col gap-4 p-6"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), var(--background, #19191C);"
        >
            {#each buttons as button}
                <div class="web-card is-normal">
                    <div class="flex items-center gap-5">
                        <Switch checked={button.checked} />
                        <div class="flex flex-col">
                            <h5 class="text-caption text-primary font-medium">{button.label}</h5>
                            <p class="text-caption font-medium">
                                {button.description}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</div>
