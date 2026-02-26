<script lang="ts">
    import { hover, inView } from 'motion';
    import { isMobile } from '$lib/utils/is-mobile';
    import GridPaper from '../grid-paper.svelte';

    let container: HTMLElement;
    let piece: SVGGElement;

    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let fromX = 0;
    let fromY = 0;
    let animStart = 0;

    const DOCK_X = -3.5;
    const DOCK_Y = 7;
    const DURATION = 400;

    function easeOut(t: number) {
        return 1 - (1 - t) ** 3;
    }

    function tick(now: number) {
        const t = Math.min((now - animStart) / DURATION, 1);
        const eased = easeOut(t);
        currentX = fromX + (targetX - fromX) * eased;
        currentY = fromY + (targetY - fromY) * eased;
        piece.setAttribute('transform', `translate(${currentX}, ${currentY})`);
        if (t < 1) {
            rafId = requestAnimationFrame(tick);
        }
    }

    function animateTo(x: number, y: number) {
        cancelAnimationFrame(rafId);
        fromX = currentX;
        fromY = currentY;
        targetX = x;
        targetY = y;
        animStart = performance.now();
        rafId = requestAnimationFrame(tick);
    }

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;
            animateTo(DOCK_X, DOCK_Y);
            return () => animateTo(0, 0);
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                animateTo(DOCK_X, DOCK_Y);
                return () => animateTo(0, 0);
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
        <defs>
            <linearGradient
                id="skillsAccentGradient"
                x1="269.5"
                y1="176"
                x2="269.5"
                y2="86"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FD366E" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
            <linearGradient
                id="skillsPieceGradient"
                x1="346"
                y1="98"
                x2="346"
                y2="79"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FD366E" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
        </defs>

        <!-- Bottom layer: depth body (single combined shape) -->
        <path
            d="M175.018 93.024 L123 194.563 L123 206.563 L417.989 206.563 L417.989 194.563 L365.926 93.024 Z"
            fill="#151517"
        />
        <!-- Bottom layer: depth front edges -->
        <line x1="123" y1="194.563" x2="123" y2="206.563" stroke="#2A2A2D" />
        <line x1="123" y1="206.563" x2="417.989" y2="206.563" stroke="#2A2A2D" />
        <line x1="417.989" y1="194.563" x2="417.989" y2="206.563" stroke="#2A2A2D" />
        <!-- Bottom layer: top face -->
        <path d="M175.018 93.0239L365.926 93.0239L417.989 194.563L123 194.563Z" fill="#19191C" />
        <path
            d="M365.62 93.5239L417.17 194.063L123.818 194.063L175.323 93.5239Z"
            stroke="#2A2A2D"
        />

        <!-- Main accent layer -->
        <path d="M319.346 86L325.5 104H363.148L400 176H139L185.024 86H319.346Z" fill="#19191C" />
        <path
            d="M319.346 86L325.5 104H363.148L400 176H139L185.024 86H319.346Z"
            fill="#FD366E"
            fill-opacity="0.12"
        />
        <path
            d="M319.346 86L325.5 104H363.148L400 176H139L185.024 86H319.346Z"
            fill="none"
            stroke="url(#skillsAccentGradient)"
            stroke-opacity="0.48"
        />

        <!-- Labels -->
        <text
            x="270"
            y="140"
            text-anchor="middle"
            font-family="'Aeonik Pro', sans-serif"
            font-size="10"
            letter-spacing="2"
            fill="#ADADB0">AGENT</text
        >
        <text
            x="123"
            y="226"
            font-family="'Aeonik Pro', sans-serif"
            font-size="10"
            letter-spacing="2"
            fill="#ADADB0">RULES</text
        >
        <!-- Floating skill piece (docks into slot on hover) -->
        <g bind:this={piece}>
            <path d="M323 79H359.816L369 98L329 98.3693L323 79Z" fill="#19191C" />
            <path
                d="M323 79H359.816L369 98L329 98.3693L323 79Z"
                fill="#FD366E"
                fill-opacity="0.12"
            />
            <text
                x="375"
                y="88"
                font-family="'Aeonik Pro', sans-serif"
                font-size="10"
                letter-spacing="2"
                fill="#ADADB0">SKILLS</text
            >
        </g>
    </svg>
</div>
