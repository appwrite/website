<script lang="ts">
    import { hover, inView } from 'motion';
    import { isMobile } from '$lib/utils/is-mobile';
    import GridPaper from '../grid-paper.svelte';

    let container: HTMLElement;
    let leftBlock: SVGGElement;
    let rightCluster: SVGGElement;

    let rafId: number;
    let slideCurrent = 0;
    let slideFrom = 0;
    let slideTarget = 0;
    let slideStart = 0;

    const SLIDE_PX = 8;
    const SLIDE_DURATION = 400;

    function easeOut(t: number) {
        return 1 - (1 - t) ** 3;
    }

    function tick(now: number) {
        const st = Math.min((now - slideStart) / SLIDE_DURATION, 1);
        slideCurrent = slideFrom + (slideTarget - slideFrom) * easeOut(st);
        leftBlock.setAttribute('transform', `translate(${slideCurrent * SLIDE_PX}, 0)`);
        rightCluster.setAttribute('transform', `translate(${-slideCurrent * SLIDE_PX}, 0)`);
        if (st < 1) {
            rafId = requestAnimationFrame(tick);
        }
    }

    function slideTo(val: number) {
        cancelAnimationFrame(rafId);
        slideFrom = slideCurrent;
        slideTarget = val;
        slideStart = performance.now();
        rafId = requestAnimationFrame(tick);
    }

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;
            slideTo(1);
            return () => slideTo(0);
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                slideTo(1);
                return () => slideTo(0);
            },
            { amount: 'all' }
        );
    });
</script>

<div
    bind:this={container}
    class="relative flex h-56 items-center justify-center overflow-hidden sm:h-72"
>
    <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 541 273"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
    >
        <g transform="translate(270.5 136.5) scale(0.88) translate(-270.5 -136.5)">
            <!-- Left: Backend standing block -->
            <g bind:this={leftBlock}>
                <!-- Left side face (depth) -->
                <path d="M35 50L21 57L21 216L35 223Z" fill="#151517" stroke="#2A2A2D" />
                <!-- Front face -->
                <path d="M135 191L35 223L35 50L135 82Z" fill="#19191C" stroke="#2A2A2D" />
            </g>

            <!-- Right: AI Agents (3 mirrored panels, lean left) -->
            <g bind:this={rightCluster}>
                <path d="M431 82L513 52L513 221L431 191Z" fill="#19191C" stroke="#2A2A2D" />
                <path d="M415 82L497 52L497 221L415 191Z" fill="#19191C" stroke="#2A2A2D" />
                <g>
                    <path d="M399 82L481 52L481 221L399 191Z" fill="#19191C" />
                    <path d="M399 82L481 52L481 221L399 191Z" fill="#FD366E" fill-opacity="0.12" />
                    <path
                        d="M399.5 82.3L480.5 52.7L480.5 220.3L399.5 190.7Z"
                        stroke="url(#mcpAccentGradient)"
                        stroke-opacity="0.32"
                    />
                </g>
            </g>

            <!-- Labels -->
            <text
                x="35"
                y="248"
                font-family="'Aeonik Pro', sans-serif"
                font-size="10"
                letter-spacing="2"
                fill="#ADADB0">BACKEND</text
            >
            <text
                x="513"
                y="248"
                text-anchor="end"
                font-family="'Aeonik Pro', sans-serif"
                font-size="10"
                letter-spacing="2"
                fill="#ADADB0">AGENTS</text
            >

            <!-- MCP connector (accent gradient line) -->
            <path d="M149 136.5L399 136.5" stroke="url(#mcpConnectorGradient)" />

            <!-- MCP label (centered between block and cluster) -->
            <g transform="translate(-48, 0)">
                <path
                    d="M310.908 129H309.96V120.6H311.184L313.248 125.424L315.288 120.6H316.476V129H315.528V122.268L313.644 126.672H312.804L310.908 122.268V129ZM322.574 129.072C320.33 129.072 319.034 127.488 319.034 124.8C319.034 122.1 320.342 120.528 322.622 120.528C324.29 120.528 325.466 121.56 325.79 123.348H324.686C324.398 122.112 323.69 121.488 322.61 121.488C321.002 121.488 320.102 122.7 320.102 124.8C320.102 126.924 320.966 128.112 322.574 128.112C323.666 128.112 324.374 127.5 324.674 126.252H325.778C325.454 128.052 324.29 129.072 322.574 129.072ZM329.342 129H328.298V120.6H331.37C333.074 120.6 334.202 121.608 334.202 123.18C334.202 124.752 333.074 125.772 331.37 125.772H329.342V129ZM329.342 121.56V124.812H331.274C332.402 124.812 333.134 124.176 333.134 123.18C333.134 122.184 332.414 121.56 331.286 121.56H329.342Z"
                    fill="#ADADB0"
                />
            </g>
        </g>

        <defs>
            <linearGradient
                id="mcpAccentGradient"
                x1="481"
                y1="136.5"
                x2="399"
                y2="136.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FD366E" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
            <linearGradient
                id="mcpConnectorGradient"
                x1="149"
                y1="136.5"
                x2="399"
                y2="136.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FD366E" stop-opacity="0" />
                <stop offset="0.3" stop-color="#FD366E" stop-opacity="0.5" />
                <stop offset="0.5" stop-color="#FD366E" stop-opacity="0.8" />
                <stop offset="0.7" stop-color="#FD366E" stop-opacity="0.5" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
</div>
