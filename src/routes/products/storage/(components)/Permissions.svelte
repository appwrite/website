<script lang="ts">
    import { writable } from 'svelte/store';

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
    class="mt-[60px] -mb-8 ml-[-80px] flex flex-1 basis-[602px] flex-col rounded-3xl border border-white/10 bg-white/0.04 backdrop-blur-xl"
>
    <h4 class="text-label text-primary font-aeonik-pro border-b border-white/10 p-6">
        Permissions
    </h4>
    <div class="flex w-full flex-1 flex-col p-6">
        <div class="flex border-b border-white/10 pb-4">
            <span class="web-eyebrow flex-[1.5]">Role</span>

            {#each headings as heading}
                <span class="web-eyebrow flex-1">{heading}</span>
            {/each}
        </div>

        <div class="flex flex-1 flex-col items-stretch divide-y divide-white/10">
            {#each $permissions as { label, options }, index}
                <div class="flex grow items-center justify-between">
                    <span class="text-primary text-caption flex-[1.5]">{label}</span>

                    {#each options as option, i}
                        <div class="flex-1">
                            <input
                                type="checkbox"
                                aria-label={`role ${label} ${headings[i].toLowerCase()}`}
                                checked={option}
                                class="checkbox size-5 appearance-none rounded border-0 bg-white/12 backdrop-blur-lg transition-all checked:bg-pink-500"
                                on:change={() => {
                                    permissions.update((permissions) => {
                                        permissions[index].options[i] =
                                            !permissions[index].options[i];
                                        return permissions;
                                    });
                                }}
                            />
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
        <button class="web-button is-small is-text">
            <span class="icon-plus web-u-color-text-primary" aria-hidden="true"></span>
            <span class="text">Add role</span>
        </button>
    </div>
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
