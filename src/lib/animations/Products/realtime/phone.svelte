<script lang="ts">
    import { objectKeys } from '$lib/utils/object';
    import { scale } from 'svelte/transition';
    import { connectionsProg, realtimeController } from '.';
    import { elId } from '../Products.svelte';
    import { flip } from '$lib/utils/flip';
    import { toScale } from '$lib/utils/toScale';

    const { state } = realtimeController;

    const getInitial = (name: string) => name[0].toUpperCase();

    $: connections = toScale($connectionsProg, [0, 1], [0, 10 ** 5]);

    const lines = [9, 14, 44, 54, 50, 46, 52, 60, 66, 74, 86, 110];

    $: progressedLines = (function getPL(): number[] {
        const pl = lines.map(() => 0);
        const total = lines.reduce((acc, curr) => acc + curr, 0);

        const curr = total * $connectionsProg;
        // Fill the lines until the current progress

        let filled = 0;
        for (let i = 0; i < pl.length; i++) {
            const line = lines[i];
            if (filled + line < curr) {
                pl[i] = line;
                filled += line;
            } else {
                pl[i] = curr - filled;
                break;
            }
        }

        return pl;
    })();

    const formatNumber = (num: number) => {
        if (num < 1000) return Math.floor(num);
        return `${Math.floor(num / 1000)}k`;
    };
</script>

<div class="wrapper">
    <div data-theme-ignore class="inner-phone light">
        <div class="header">
            <div class="row">
                <p class="title">My Team's tasks</p>
                <div class="flow gap-8">
                    <div class="tgl-avatars">
                        {#each $state.users as user}
                            <div class="tgl-avatar" style:--color={user.color} in:scale>
                                {getInitial(user.name)}
                            </div>
                        {/each}
                    </div>
                    <div class="vertical-sep"></div>
                    <span class="icon-menu"></span>
                </div>
            </div>
            <div class="row">
                <div class="search">
                    <span class="web-icon-search"></span>
                    <span class="text"> Search </span>
                </div>
                <div class="flow gap-8">
                    <button class="btn">Filter</button>
                    <button class="btn">Sort</button>
                </div>
            </div>
        </div>

        <hr />

        <div class="content">
            {#each objectKeys($state.tasks) as col, i}
                {@const tasks = $state.tasks[col]}
                {@const isLast = i === objectKeys($state.tasks).length - 1}
                <div class="column">
                    <div class="title">
                        <span class="text capitalize">{col}</span>
                        <span class="tgl-inline-tag">{tasks.length}</span>
                        <span class="icon-dots-horizontal"></span>
                    </div>
                    <div class="flow-v mbs-8 gap-12">
                        <button class="dashed-btn" id="add-{col}-{$elId}">
                            <span class="icon-plus"></span>
                            <span class="text">New Task</span>
                        </button>
                        {#each tasks as task (task.title)}
                            <div
                                class="task"
                                animate:flip={{ duration: 250 }}
                                in:scale={{ delay: 150 }}
                            >
                                {#if task.images}
                                    <ul class="flow gap-8">
                                        {#each task.images as image}
                                            <img class="sq-32" src={image} alt="" />
                                        {/each}
                                    </ul>
                                {/if}
                                <p class="text">{task.title}</p>
                                <ul class="flow wrap gap-8">
                                    {#each task.tags as tag}
                                        <li class="tgl-tag">{tag}</li>
                                    {/each}
                                </ul>
                            </div>
                        {/each}
                    </div>
                </div>
                {#if !isLast}
                    <div class="vertical-sep"></div>
                {/if}
            {/each}
        </div>

        {#each $state.users as user}
            <div class="user" style:--color={user.color} id="user-{user.name}-{$elId}" in:scale>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path
                        d="M2.58814 0.558469C1.60242 0.224627 1.10955 0.0577053 0.782928 0.173472C0.498743 0.274197 0.275173 0.497766 0.174449 0.781951C0.0586818 1.10858 0.225603 1.60144 0.559445 2.58716L4.67494 14.7388C5.13698 16.1031 5.368 16.7852 5.71194 16.9722C6.00951 17.134 6.36873 17.1341 6.66644 16.9726C7.01055 16.7859 7.24216 16.104 7.70539 14.7402L9.23555 10.235C9.32861 9.96103 9.37513 9.82404 9.45345 9.7101C9.52283 9.60918 9.61015 9.52185 9.71108 9.45248C9.82502 9.37416 9.96201 9.32763 10.236 9.23457L14.7411 7.70441C16.105 7.24118 16.7869 7.00957 16.9736 6.66547C17.1351 6.36776 17.1349 6.00853 16.9732 5.71096C16.7862 5.36702 16.1041 5.136 14.7398 4.67396L2.58814 0.558469Z"
                    />
                </svg>
                <p class="text">{user.name}</p>
            </div>
        {/each}
    </div>

    <div class="graph-box" id="graph-box-{$elId}">
        <p class="title">{formatNumber(connections)}</p>
        <p class="subtitle">Realtime Connections</p>

        <svg
            width="324"
            height="133"
            viewBox="0 0 324 133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_3981_106717)">
                <path
                    d="M15.8661 4.27273V13H14.8093V5.38068H14.7582L12.6275 6.79545V5.72159L14.8093 4.27273H15.8661ZM21.2227 13.1193C20.5806 13.1193 20.0337 12.9446 19.582 12.5952C19.1303 12.2429 18.7852 11.733 18.5465 11.0653C18.3079 10.3949 18.1886 9.58523 18.1886 8.63636C18.1886 7.69318 18.3079 6.88778 18.5465 6.22017C18.788 5.54972 19.1346 5.03835 19.5863 4.68608C20.0408 4.33097 20.5863 4.15341 21.2227 4.15341C21.859 4.15341 22.4031 4.33097 22.8548 4.68608C23.3093 5.03835 23.6559 5.54972 23.8945 6.22017C24.136 6.88778 24.2567 7.69318 24.2567 8.63636C24.2567 9.58523 24.1374 10.3949 23.8988 11.0653C23.6602 11.733 23.315 12.2429 22.8633 12.5952C22.4116 12.9446 21.8647 13.1193 21.2227 13.1193ZM21.2227 12.1818C21.859 12.1818 22.3533 11.875 22.7056 11.2614C23.0579 10.6477 23.234 9.77273 23.234 8.63636C23.234 7.88068 23.1531 7.23722 22.9911 6.70597C22.832 6.17472 22.6019 5.76989 22.3008 5.49148C22.0025 5.21307 21.6431 5.07386 21.2227 5.07386C20.592 5.07386 20.0991 5.38494 19.744 6.0071C19.3888 6.62642 19.2113 7.50284 19.2113 8.63636C19.2113 9.39205 19.2908 10.0341 19.4499 10.5625C19.609 11.0909 19.8377 11.4929 20.136 11.7685C20.4371 12.044 20.7994 12.1818 21.2227 12.1818ZM28.7227 13.1193C28.0806 13.1193 27.5337 12.9446 27.082 12.5952C26.6303 12.2429 26.2852 11.733 26.0465 11.0653C25.8079 10.3949 25.6886 9.58523 25.6886 8.63636C25.6886 7.69318 25.8079 6.88778 26.0465 6.22017C26.288 5.54972 26.6346 5.03835 27.0863 4.68608C27.5408 4.33097 28.0863 4.15341 28.7227 4.15341C29.359 4.15341 29.9031 4.33097 30.3548 4.68608C30.8093 5.03835 31.1559 5.54972 31.3945 6.22017C31.636 6.88778 31.7567 7.69318 31.7567 8.63636C31.7567 9.58523 31.6374 10.3949 31.3988 11.0653C31.1602 11.733 30.815 12.2429 30.3633 12.5952C29.9116 12.9446 29.3647 13.1193 28.7227 13.1193ZM28.7227 12.1818C29.359 12.1818 29.8533 11.875 30.2056 11.2614C30.5579 10.6477 30.734 9.77273 30.734 8.63636C30.734 7.88068 30.6531 7.23722 30.4911 6.70597C30.332 6.17472 30.1019 5.76989 29.8008 5.49148C29.5025 5.21307 29.1431 5.07386 28.7227 5.07386C28.092 5.07386 27.5991 5.38494 27.244 6.0071C26.8888 6.62642 26.7113 7.50284 26.7113 8.63636C26.7113 9.39205 26.7908 10.0341 26.9499 10.5625C27.109 11.0909 27.3377 11.4929 27.636 11.7685C27.9371 12.044 28.2994 12.1818 28.7227 12.1818ZM34.3306 10.6136L34.3136 9.36932H34.5181L37.3817 6.45455H38.6261L35.5749 9.53977H35.4897L34.3306 10.6136ZM33.3931 13V4.27273H34.3988V13H33.3931ZM37.5522 13L34.9954 9.76136L35.7113 9.0625L38.8306 13H37.5522Z"
                    fill="#6C6C71"
                />
                <g filter="url(#filter0_b_3981_106717)">
                    <line
                        x1="55.1016"
                        y1="9.27344"
                        x2="324.001"
                        y2="9.27344"
                        stroke="white"
                        stroke-opacity="0.06"
                    />
                </g>
                <path
                    d="M19.4847 52L23.3881 44.2784V44.2102H18.8881V43.2727H24.479V44.2614L20.5927 52H19.4847ZM28.7266 52.1193C28.0845 52.1193 27.5376 51.9446 27.0859 51.5952C26.6342 51.2429 26.2891 50.733 26.0504 50.0653C25.8118 49.3949 25.6925 48.5852 25.6925 47.6364C25.6925 46.6932 25.8118 45.8878 26.0504 45.2202C26.2919 44.5497 26.6385 44.0384 27.0902 43.6861C27.5447 43.331 28.0902 43.1534 28.7266 43.1534C29.3629 43.1534 29.907 43.331 30.3587 43.6861C30.8132 44.0384 31.1598 44.5497 31.3984 45.2202C31.6399 45.8878 31.7607 46.6932 31.7607 47.6364C31.7607 48.5852 31.6413 49.3949 31.4027 50.0653C31.1641 50.733 30.8189 51.2429 30.3672 51.5952C29.9155 51.9446 29.3686 52.1193 28.7266 52.1193ZM28.7266 51.1818C29.3629 51.1818 29.8572 50.875 30.2095 50.2614C30.5618 49.6477 30.7379 48.7727 30.7379 47.6364C30.7379 46.8807 30.657 46.2372 30.495 45.706C30.3359 45.1747 30.1058 44.7699 29.8047 44.4915C29.5064 44.2131 29.147 44.0739 28.7266 44.0739C28.0959 44.0739 27.603 44.3849 27.2479 45.0071C26.8928 45.6264 26.7152 46.5028 26.7152 47.6364C26.7152 48.392 26.7947 49.0341 26.9538 49.5625C27.1129 50.0909 27.3416 50.4929 27.6399 50.7685C27.9411 51.044 28.3033 51.1818 28.7266 51.1818ZM34.3345 49.6136L34.3175 48.3693H34.522L37.3857 45.4545H38.63L35.5788 48.5398H35.4936L34.3345 49.6136ZM33.397 52V43.2727H34.4027V52H33.397ZM37.5561 52L34.9993 48.7614L35.7152 48.0625L38.8345 52H37.5561Z"
                    fill="#6C6C71"
                />
                <g filter="url(#filter1_b_3981_106717)">
                    <line
                        x1="55.1016"
                        y1="48.0391"
                        x2="324.001"
                        y2="48.0391"
                        stroke="white"
                        stroke-opacity="0.06"
                    />
                </g>
                <path
                    d="M21.3026 90.1193C20.8026 90.1193 20.3523 90.0199 19.9517 89.821C19.5511 89.6222 19.2301 89.3494 18.9886 89.0028C18.7472 88.6562 18.6151 88.2614 18.5923 87.8182H19.6151C19.6548 88.2131 19.8338 88.5398 20.152 88.7983C20.473 89.054 20.8565 89.1818 21.3026 89.1818C21.6605 89.1818 21.9787 89.098 22.2571 88.9304C22.5384 88.7628 22.7585 88.5327 22.9176 88.2401C23.0795 87.9446 23.1605 87.6108 23.1605 87.2386C23.1605 86.858 23.0767 86.5185 22.9091 86.2202C22.7443 85.919 22.517 85.6818 22.2273 85.5085C21.9375 85.3352 21.6065 85.2472 21.2344 85.2443C20.9673 85.2415 20.6932 85.2827 20.4119 85.3679C20.1307 85.4503 19.8991 85.5568 19.7173 85.6875L18.7287 85.5682L19.2571 81.2727H23.7912V82.2102H20.1435L19.8366 84.7841H19.8878C20.0668 84.642 20.2912 84.5241 20.5611 84.4304C20.831 84.3366 21.1122 84.2898 21.4048 84.2898C21.9389 84.2898 22.4148 84.4176 22.8324 84.6733C23.2528 84.9261 23.5824 85.2727 23.821 85.7131C24.0625 86.1534 24.1832 86.6562 24.1832 87.2216C24.1832 87.7784 24.0582 88.2756 23.8082 88.7131C23.5611 89.1477 23.2202 89.4915 22.7855 89.7443C22.3509 89.9943 21.8565 90.1193 21.3026 90.1193ZM28.7227 90.1193C28.0806 90.1193 27.5337 89.9446 27.082 89.5952C26.6303 89.2429 26.2852 88.733 26.0465 88.0653C25.8079 87.3949 25.6886 86.5852 25.6886 85.6364C25.6886 84.6932 25.8079 83.8878 26.0465 83.2202C26.288 82.5497 26.6346 82.0384 27.0863 81.6861C27.5408 81.331 28.0863 81.1534 28.7227 81.1534C29.359 81.1534 29.9031 81.331 30.3548 81.6861C30.8093 82.0384 31.1559 82.5497 31.3945 83.2202C31.636 83.8878 31.7567 84.6932 31.7567 85.6364C31.7567 86.5852 31.6374 87.3949 31.3988 88.0653C31.1602 88.733 30.815 89.2429 30.3633 89.5952C29.9116 89.9446 29.3647 90.1193 28.7227 90.1193ZM28.7227 89.1818C29.359 89.1818 29.8533 88.875 30.2056 88.2614C30.5579 87.6477 30.734 86.7727 30.734 85.6364C30.734 84.8807 30.6531 84.2372 30.4911 83.706C30.332 83.1747 30.1019 82.7699 29.8008 82.4915C29.5025 82.2131 29.1431 82.0739 28.7227 82.0739C28.092 82.0739 27.5991 82.3849 27.244 83.0071C26.8888 83.6264 26.7113 84.5028 26.7113 85.6364C26.7113 86.392 26.7908 87.0341 26.9499 87.5625C27.109 88.0909 27.3377 88.4929 27.636 88.7685C27.9371 89.044 28.2994 89.1818 28.7227 89.1818ZM34.3306 87.6136L34.3136 86.3693H34.5181L37.3817 83.4545H38.6261L35.5749 86.5398H35.4897L34.3306 87.6136ZM33.3931 90V81.2727H34.3988V90H33.3931ZM37.5522 90L34.9954 86.7614L35.7113 86.0625L38.8306 90H37.5522Z"
                    fill="#6C6C71"
                />
                <g filter="url(#filter2_b_3981_106717)">
                    <line
                        x1="55.1016"
                        y1="85.8125"
                        x2="324.001"
                        y2="85.8125"
                        stroke="white"
                        stroke-opacity="0.06"
                    />
                </g>
                <path
                    d="M35.2539 128.119C34.6119 128.119 34.065 127.945 33.6133 127.595C33.1616 127.243 32.8164 126.733 32.5778 126.065C32.3391 125.395 32.2198 124.585 32.2198 123.636C32.2198 122.693 32.3391 121.888 32.5778 121.22C32.8192 120.55 33.1658 120.038 33.6175 119.686C34.0721 119.331 34.6175 119.153 35.2539 119.153C35.8903 119.153 36.4343 119.331 36.886 119.686C37.3406 120.038 37.6871 120.55 37.9258 121.22C38.1673 121.888 38.288 122.693 38.288 123.636C38.288 124.585 38.1687 125.395 37.93 126.065C37.6914 126.733 37.3462 127.243 36.8945 127.595C36.4428 127.945 35.896 128.119 35.2539 128.119ZM35.2539 127.182C35.8903 127.182 36.3846 126.875 36.7369 126.261C37.0891 125.648 37.2653 124.773 37.2653 123.636C37.2653 122.881 37.1843 122.237 37.0224 121.706C36.8633 121.175 36.6332 120.77 36.332 120.491C36.0337 120.213 35.6744 120.074 35.2539 120.074C34.6232 120.074 34.1303 120.385 33.7752 121.007C33.4201 121.626 33.2425 122.503 33.2425 123.636C33.2425 124.392 33.3221 125.034 33.4812 125.562C33.6403 126.091 33.869 126.493 34.1673 126.768C34.4684 127.044 34.8306 127.182 35.2539 127.182Z"
                    fill="#6C6C71"
                />
                <g filter="url(#filter3_b_3981_106717)">
                    <line
                        x1="55.1016"
                        y1="123.586"
                        x2="324.001"
                        y2="123.586"
                        stroke="white"
                        stroke-opacity="0.06"
                    />
                </g>

                {#each progressedLines as line, i}
                    {@const x = 57 + i * 24}
                    {@const y = 124 - line}
                    {#if line > 3}
                        <circle cx={x} cy={y} r="3" fill="#FD366E" />
                        <line x1={x} y1={y} x2={x} y2="124" stroke="#FD366E" stroke-width="6" />
                    {/if}
                {/each}
            </g>
            <defs>
                <filter
                    id="filter0_b_3981_106717"
                    x="-144.898"
                    y="-191.227"
                    width="668.899"
                    height="401"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3981_106717"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3981_106717"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_b_3981_106717"
                    x="-144.898"
                    y="-152.461"
                    width="668.899"
                    height="401"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3981_106717"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3981_106717"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter2_b_3981_106717"
                    x="-144.898"
                    y="-114.688"
                    width="668.899"
                    height="401"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3981_106717"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3981_106717"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter3_b_3981_106717"
                    x="-144.898"
                    y="-76.9141"
                    width="668.899"
                    height="401"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_3981_106717"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_3981_106717"
                        result="shape"
                    />
                </filter>
                <clipPath id="clip0_3981_106717">
                    <rect width="324" height="133" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    // Utilities
    .flow {
        display: flex;
        align-items: center;
    }

    .flow-v {
        display: flex;
        flex-direction: column;
    }

    .gap-8 {
        gap: 0.5rem;
    }

    .gap-12 {
        gap: 0.75rem;
    }

    .sq-32 {
        width: 2rem;
        height: 2rem;
    }

    .wrap {
        flex-wrap: wrap;
    }

    .capitalize {
        text-transform: capitalize;
    }

    .mbs-8 {
        margin-block-start: 0.5rem;
    }

    // Components
    .tgl-avatars {
        display: flex;

        .tgl-avatar:not(:first-child) {
            margin-inline-start: -0.5rem;
        }
    }

    .tgl-avatar {
        --size: 1.25rem;
        width: var(--size);
        height: var(--size);

        display: grid;
        place-items: center;
        text-align: center;

        border-radius: 100%;
        color: white;
        font-size: 0.65rem;

        background-color: var(--color);
    }

    .tgl-tag {
        padding: 0.25rem 0.4375rem;

        border-radius: 0.21713rem;
        border: 0.869px solid #ededf0;
        box-shadow: 0px 1.73704px 3.47408px 0px rgba(0, 0, 0, 0.06);

        color: #818186;
        font-family: Inter;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 500;
        line-height: 0.75rem; /* 120% */
        letter-spacing: -0.00875rem;
        text-transform: capitalize;
    }

    .vertical-sep {
        width: 1px;
        height: 100%;
        background-color: rgba(237, 237, 240, 1);
    }

    hr {
        border-bottom: 1px solid hsl(var(--web-color-greyscale-50));
        margin-block: 1rem;
    }

    .dashed-btn {
        display: flex;
        padding: 0.5rem 0.875rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        align-self: stretch;

        border-radius: 0.625rem;
        border: 1px dashed hsl(var(--web-color-greyscale-50));
        color: #56565c;

        .text {
            font-family: Inter;
            font-size: 0.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.08563rem; /* 142.857% */
        }

        [class*='icon'] {
            font-size: 1rem;
        }
    }

    .task {
        display: flex;
        padding: 0.625rem 0.875rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5rem;

        border-radius: 0.625rem;
        border: 1px solid #ededf0;
        background: var(--color-bw-white, #fff);

        .text {
            color: #56565c;
            font-family: Inter;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1rem; /* 133.333% */
        }
    }

    .user {
        position: absolute;
        left: 50%;
        top: 50%;
        fill: var(--color);

        .text {
            position: absolute;
            left: 100%;
            bottom: 0;
            transform: translateX(-4px) translateY(50%);

            border-radius: 0rem 0.375rem 0.375rem 0.375rem;
            background: var(--color);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
            padding: 0.25rem 0.5rem;

            color: var(--color-bw-white, #fff);
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1rem; /* 114.286% */
            letter-spacing: -0.01225rem;
        }
    }

    // Specifics
    .wrapper {
        height: 100%;
        position: relative;
    }

    .inner-phone {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 1.25rem;
        overflow: hidden;

        .header {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .row {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .title {
                    color: var(--color-greyscale-800, #2d2d31);
                    font-family: Inter;
                    font-size: 0.875rem;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 1.25rem; /* 142.857% */
                    letter-spacing: -0.01225rem;
                }

                .search {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.25rem;
                    width: 12rem;

                    border-radius: 0.5rem;
                    border: 1.869px solid var(--greyscale-50, #ededf0);

                    [class*='icon'] {
                        font-size: 1rem;
                    }

                    .text {
                        color: var(--greyscale-300, #adadb0);
                        font-family: Inter;
                        font-size: 0.7rem;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 0.875rem; /* 140% */
                    }
                }

                .btn {
                    display: inline-flex;
                    padding: 0.125rem 0.25rem;
                    justify-content: center;
                    align-items: center;
                    gap: 0.125rem;

                    border-radius: 0.25rem;
                    border: 0.869px solid var(--greyscale-50, #ededf0);

                    color: var(--greyscale-600, #6c6c71);
                    font-family: Inter;
                    font-size: 0.625rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 0.875rem; /* 140% */
                }
            }
        }

        .content {
            display: grid;
            grid-template-columns: 1fr 1px 1fr 1px 1fr;
            gap: 1rem;
            height: 100%;

            .column {
                flex: 1 0 auto;

                .title {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    .text {
                        color: var(--greyscale-600, #6c6c71);
                        font-family: Inter;
                        font-size: 0.625rem;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 0.875rem; /* 140% */
                    }

                    .tgl-inline-tag {
                        display: grid;
                        place-items: center;
                        padding: 0rem 0.21713rem 0.1rem;

                        border-radius: 0.21713rem;
                        background: var(--greyscale-50, #ededf0);

                        color: var(--greyscale-600, #6c6c71);
                        font-family: Inter;
                        font-size: 0.625rem;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 0.875rem; /* 140% */
                    }

                    [class*='icon'] {
                        font-size: 1rem;
                        margin-inline-start: auto;
                    }
                }
            }
        }
    }

    .graph-box {
        @include gradients.border-gradient;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
        --m-border-radius: 1rem;

        position: absolute;
        right: 2rem;
        bottom: -10rem;

        background: var(--card, rgba(35, 35, 37, 0.9));
        box-shadow:
            0px 0px 0px 0px rgba(0, 0, 0, 0.06),
            -2px 4px 9px 0px rgba(0, 0, 0, 0.06),
            -8px 15px 17px 0px rgba(0, 0, 0, 0.05),
            -19px 34px 23px 0px rgba(0, 0, 0, 0.03),
            -33px 60px 27px 0px rgba(0, 0, 0, 0.01),
            -52px 94px 30px 0px rgba(0, 0, 0, 0);
        backdrop-filter: blur(8px);

        padding-block: 1.5rem;

        z-index: 9999;

        .title,
        .subtitle {
            padding-inline: 1.88rem;
        }

        .title {
            color: #e4e4e7;
            font-family: Aeonik Pro;
            font-size: 2rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2.25rem; /* 112.5% */
        }

        .subtitle {
            color: #adadb0;
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.125rem; /* 128.571% */
        }

        > svg {
            margin-block-start: 1.25rem;
            margin-inline: 0.5rem 1.5rem;
        }
    }
</style>
