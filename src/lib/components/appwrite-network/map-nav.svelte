<script lang="ts">
    import { Tabs } from 'bits-ui';
    import type { IconType } from '../ui';
    import Icon from '../ui/icon/icon.svelte';
    import { classNames } from '$lib/utils/classnames';

    const {
        onValueChange,
        theme = 'dark'
    }: {
        onValueChange: (value: string) => void;
        theme?: 'light' | 'dark';
    } = $props();

    const navItems = [
        {
            label: 'PoP Locations',
            value: 'pop-locations',
            icon: 'pop-locations',
            href: '/',
            description: 'Points of presence ensure <50ms ping around the globe.'
        },
        {
            label: 'Edges',
            value: 'edges',
            icon: 'edge',
            href: '/',
            description: 'Edges bring compute closer to users for faster response times.'
        },
        {
            label: 'Regions',
            value: 'regions',
            icon: 'regions',
            href: '/',
            description: 'Regions offer data residency and redundancy across continents.'
        }
    ] satisfies Array<{
        label: string;
        value: string;
        icon: IconType;
        href: string;
        description: string;
    }>;
    let activeIndex = $state(0);
</script>

<div class="flex flex-col gap-4 text-center">
    <Tabs.Root
        onValueChange={(value) => {
            activeIndex = navItems.findIndex((item) => item.value === value);
            onValueChange(value);
        }}
        value={navItems[0]?.value}
        class="flex flex-col items-center justify-center gap-12 md:mt-9"
    >
        <Tabs.List
            class={classNames(
                'border-smooth animate-fade-in relative grid w-full max-w-xl grid-cols-1 place-content-center gap-3 overflow-hidden p-1 px-8 shadow-[0px_4px_8p_rgba(0,0,0,0.04)] md:grid-cols-3 md:rounded-full md:border md:px-1',
                theme === 'light' ? 'md:bg-white' : 'md:bg-card'
            )}
        >
            {#each navItems as { label, icon, value }, index}
                <Tabs.Trigger
                    {value}
                    class={classNames(
                        'text-caption animate-enter text-primary bg-smooth border-smooth flex h-8 cursor-pointer items-center justify-center gap-2 rounded-full border font-medium outline-0 transition-colors hover:border-white/12',
                        'group data-[state="active"]:bg-accent/4 data-[state="active"]:border-accent/36 data-[state="active"]:text-accent'
                    )}
                    style="animation-delay:{index * 75}ms;"
                >
                    <Icon
                        name={icon}
                        class={classNames(
                            '-ml-2',
                            "group-data-[state='active']:text-accent",
                            theme === 'light' ? 'text-[#19191C]' : 'text-inherit'
                        )}
                    />
                    {label}
                </Tabs.Trigger>
            {/each}
        </Tabs.List>
    </Tabs.Root>

    <p class="text-caption text-secondary px-4">
        {navItems[activeIndex].description}

        <a
            class="text-primary group mt-2 flex items-center justify-center gap-0.25 md:hidden"
            href={navItems[activeIndex].href}
            >View all {navItems[activeIndex].label}
            <Icon
                name="arrow-right"
                class="-rotate-45 transition-all group-hover:translate-x-0.25 group-hover:-translate-y-0.25 group-hover:opacity-100 group-focus:translate-x-0.25 group-focus:-translate-y-0.25 group-focus:opacity-100 xl:opacity-0"
            />
        </a>
    </p>
</div>
