<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { Tabs } from 'bits-ui';

    import type { IconType } from '../ui';
    import Icon from '../ui/icon';

    type Props = {
        onValueChange: (value: string) => void;
    };

    const { onValueChange }: Props = $props();

    const navItems: Array<{ label: string; value: string; icon: IconType }> = [
        {
            label: 'PoP Locations',
            value: 'pop-locations',
            icon: 'pop-locations'
        },
        {
            label: 'Edges',
            value: 'edges',
            icon: 'edge'
        },
        {
            label: 'Regions',
            value: 'regions',
            icon: 'regions'
        }
    ];
</script>

<Tabs.Root
    value={navItems[0].value}
    {onValueChange}
    class="flex flex-col items-center justify-center gap-12"
>
    <Tabs.List
        class="border-smooth animate-fade-in bg-card relative grid w-full max-w-xl grid-cols-1 place-content-center gap-3 p-1 px-8 drop-shadow-md md:grid-cols-3 md:rounded-full md:border md:px-1"
    >
        {#each navItems as { label, icon, value }, index}
            <Tabs.Trigger
                {value}
                class={classNames(
                    'text-caption animate-enter text-primary bg-smooth border-smooth flex h-8 cursor-pointer items-center justify-center gap-2 rounded-full border font-medium outline-0 transition-colors hover:border-white/12',
                    'group data-[state="active"]:bg-accent/4 data-[state="active"]:border-accent/36 data-[state="active"]:text-white'
                )}
                style="animation-delay:{index * 75}ms;"
            >
                <Icon name={icon} class="group-data-[state='active']:text-accent -ml-2" />
                {label}</Tabs.Trigger
            >
        {/each}
    </Tabs.List>
</Tabs.Root>
