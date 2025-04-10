<script>
    import { classNames } from '$lib/utils/classnames';
    import { Tabs } from 'bits-ui';

    import { createTabs, melt } from '@melt-ui/svelte';

    const navItems = [
        {
            label: 'PoP Locations',
            value: 'pop-locations',
            icon: `<svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.82222 5C6.69333 5 5.91111 7.49542 5.91111 8.92137C5.55556 8.92137 2 8.92137 2 12.1298C2 14.6965 4.60741 15.1005 5.91111 14.9817H14.0889C15.3926 15.1005 18 14.6965 18 12.1298C18 9.56305 15.3926 8.92137 14.0889 8.92137C13.9704 7.61425 12.9511 5 9.82222 5Z"
                        stroke="currentColor"
                        stroke-width="1.2"
                    />
                </svg>`
        },
        {
            label: 'Edges',
            value: 'edges',
            icon: `<svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5 14.8C13.151 14.8 15.3 12.651 15.3 10C15.3 7.34903 13.151 5.2 10.5 5.2C7.84903 5.2 5.7 7.34903 5.7 10C5.7 12.651 7.84903 14.8 10.5 14.8ZM10.5 16C13.8137 16 16.5 13.3137 16.5 10C16.5 6.68629 13.8137 4 10.5 4C7.18629 4 4.5 6.68629 4.5 10C4.5 13.3137 7.18629 16 10.5 16Z"
                        fill="currentColor"
                    />
                </svg>`
        },
        {
            label: 'Regions',
            value: 'regions',
            icon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 8.72727C16.5 13.1818 10.5 17 10.5 17C10.5 17 4.5 13.1818 4.5 8.72727C4.5 7.20831 5.13214 5.75155 6.25736 4.67748C7.38258 3.60341 8.9087 3 10.5 3C12.0913 3 13.6174 3.60341 14.7426 4.67748C15.8679 5.75155 16.5 7.20831 16.5 8.72727Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 11C11.6046 11 12.5 10.1046 12.5 9C12.5 7.89543 11.6046 7 10.5 7C9.39543 7 8.5 7.89543 8.5 9C8.5 10.1046 9.39543 11 10.5 11Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
        }
    ];
</script>

<Tabs.Root value={navItems[0].value} class="flex flex-col items-center justify-center gap-12">
    <Tabs.List
        class="grid w-full max-w-xl grid-cols-3 place-content-center gap-3 rounded-full p-1 drop-shadow-md"
    >
        {#each navItems as { label, icon, value }}
            <Tabs.Trigger
                {value}
                class={classNames(
                    'text-caption text-primary bg-smooth flex h-8 items-center justify-center gap-1 rounded-full border border-[#EBEBEB] font-medium transition-colors',
                    'data-[state="active"]:bg-accent/4 data-[state="active"]:border-accent/36'
                )}
            >
                {@html icon}
                {label}</Tabs.Trigger
            >
        {/each}
    </Tabs.List>
</Tabs.Root>
