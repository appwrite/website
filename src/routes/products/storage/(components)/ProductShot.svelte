<script lang="ts">
    import Switch from '$lib/components/Switch.svelte';
    import { classNames } from '$lib/utils/classnames';
    import { writable } from 'svelte/store';

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

    type Permission = {
        label: string;
        options: Array<boolean>;
    };

    const headings = ['Create', 'Read', 'Update', 'Delete'];

    const permissions = writable<Array<Permission>>([
        { label: 'Any', options: [false, true, false, false] },
        { label: 'Guest', options: [false, true, false, false] },
        { label: 'Users', options: [true, true, true, true] },
        { label: 'user:62f8b5b', options: [true, false, false, false] },
        { label: 'user:62e1544', options: [true, false, false, false] }
    ]);
</script>

<div
    class="web-media-container u-max-width-100-percent is-only-desktop hidden flex-col md:flex"
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
<div
    class="mt-[60px] -mb-8 flex flex-1 flex-col rounded-3xl border border-white/10 bg-white/0.04 backdrop-blur-xl md:ml-[-80px] md:basis-[602px]"
>
    <h4 class="text-label text-primary font-aeonik-pro border-b border-white/10 p-6">
        Permissions
    </h4>
    <table class="w-full table-fixed p-6">
        <thead>
            <tr class="border-b border-white/10 pb-4">
                <th class="web-eyebrow pl-6 text-left">Role</th>
                {#each headings as heading}
                    <th class="web-eyebrow py-4 text-left">{heading}</th>
                {/each}
            </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
            {#each $permissions as { label, options }, index}
                <tr>
                    <td class="text-primary text-caption py-4 px-6">{label}</td>
                    {#each options as option, i}
                        <td class="py-2">
                            <div class="relative inline-block">
                                <input
                                    type="checkbox"
                                    aria-label={`role ${label} ${headings[i].toLowerCase()}`}
                                    checked={option}
                                    class={classNames(
                                        'checkbox peer size-5 cursor-pointer appearance-none rounded border-0 bg-white/12 backdrop-blur-lg transition-all duration-100',
                                        'checked:bg-pink-500'
                                    )}
                                    on:change={() => {
                                        permissions.update((permissions) => {
                                            permissions[index].options[i] =
                                                !permissions[index].options[i];
                                            return permissions;
                                        });
                                    }}
                                />
                                <span
                                    class="web-icon-check pointer-events-none absolute top-0 left-0 block scale-0 leading-none text-white opacity-0 transition-all duration-100 peer-checked:scale-100 peer-checked:opacity-100"
                                />
                            </div>
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
        <tfoot>
            <tr>
                <td colspan={headings.length + 1} class="pt-4">
                    <button class="web-button is-small is-text">
                        <span class="icon-plus web-u-color-text-primary" aria-hidden="true"></span>
                        <span class="text">Add role</span>
                    </button>
                </td>
            </tr>
        </tfoot>
    </table>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;
    .checkbox {
        @include gradients.border-gradient;
        --m-border-radius: calc(1.125rem / 4);
        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.16),
            hsl(0, 0%, 100%, 0)
        );
    }
</style>
