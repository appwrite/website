<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { createTabs, melt } from '@melt-ui/svelte';
    import { cubicInOut } from 'svelte/easing';
    import { crossfade } from 'svelte/transition';

    const {
        elements: { root, list, content, trigger },
        states: { value }
    } = createTabs({
        defaultValue: 'tab-1'
    });

    let className = '';
    export { className as class };

    const triggers = [
        { id: 'tab-1', title: 'Account' },
        { id: 'tab-2', title: 'Password' },
        { id: 'tab-3', title: 'Settings' }
    ];

    const [send, receive] = crossfade({
        duration: 250,
        easing: cubicInOut
    });
</script>

<div
    use:melt={$root}
    class={classNames(
        'flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-lg  data-[orientation=vertical]:flex-row',
        className
    )}
>
    <div use:melt={$content('tab-1')} class="grow bg-white p-5">
        <svg
            width="107"
            height="107"
            viewBox="0 0 107 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_373_42163)">
                <rect x="46.667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="46.667" y="93.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="46.667" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="46.667" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="53.333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="53.333" y="93.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="53.333" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="53.333" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="53.333" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="33.333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="33.333" y="93.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="33.333" y="13.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="13.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="13.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="20" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="20" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="6.66699" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="33.333" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="33.333" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="33.333" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="6.66699" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="33.333" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="6.66699" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="33.333" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="20" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="80" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="80" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="73.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="73.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="20" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="66.667" y="13.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="66.667" y="80" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="13.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="73.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="20" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="80" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="13.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="73.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="80" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="60" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="86.667" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="60" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="86.667" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="20" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="80" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="26.667" y="80" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="73.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="80" y="73.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="80" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="80" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="80" y="20" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="13.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="73.333" y="80" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="86.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="13.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="73.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="46.667" y="6.66675" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="60" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="60" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="60" y="66.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="86.667" y="40" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="80" y="46.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="13.333" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="40" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="53.333" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="80" y="53.3333" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="20" y="26.6667" width="6.66667" height="6.66667" fill="#EDEDF0" />
                <rect x="33.333" y="80" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="33.333" y="20" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="20" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="33.333" y="73.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="73.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="33.333" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="33.333" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="20" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="66.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="26.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="40" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="46.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="53.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="93.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="60" y="13.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="80" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="20" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="20" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="73.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="73.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="73.333" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="66.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="26.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="40" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="46.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="53.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="73.333" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="73.333" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="13.333" y="13.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="13.333" y="80" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="13.333" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="13.333" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="6.66699" y="20" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="6.66699" y="73.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="6.66699" y="66.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="6.66699" y="26.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="6.66699" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="6.66699" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect y="40" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect y="46.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect y="53.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="80" y="13.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="80" y="80" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="80" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="80" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="86.667" y="20" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="86.667" y="73.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="86.667" y="66.6667" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="86.667" y="26.6667" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="86.667" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="86.667" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="93.333" y="33.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="93.333" y="40" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="93.333" y="46.6667" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="93.333" y="53.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="93.333" y="60" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="20" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="20" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="40" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="40" y="93.3333" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="40" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="33.333" y="6.66675" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="40" y="33.3333" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="40" y="60" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="53.333" y="86.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="60" y="86.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="26.667" y="86.6667" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="33.333" y="86.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="20" y="86.6667" width="6.66667" height="6.66667" fill="#FD366E" />
                <rect x="66.667" y="86.6667" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="73.333" y="86.6667" width="6.66667" height="6.66667" fill="#CA2B58" />
                <rect x="40" y="86.6667" width="6.66667" height="6.66667" fill="#FD366E" />
            </g>
            <defs>
                <filter
                    id="filter0_d_373_42163"
                    x="0"
                    y="0"
                    width="106.667"
                    height="106.667"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="6.66667" dy="6.66667" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_373_42163"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_373_42163"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    </div>
    <div
        use:melt={$list}
        class="flex shrink-0 overflow-x-auto bg-neutral-100
data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r"
        aria-label="Manage your account"
    >
        {#each triggers as triggerItem}
            <button use:melt={$trigger(triggerItem.id)} class="trigger relative">
                {triggerItem.title}
                {#if $value === triggerItem.id}
                    <div
                        in:send={{ key: 'trigger' }}
                        out:receive={{ key: 'trigger' }}
                        class="bg-magnum-400 absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full"
                    />
                {/if}
            </button>
        {/each}
    </div>
</div>
