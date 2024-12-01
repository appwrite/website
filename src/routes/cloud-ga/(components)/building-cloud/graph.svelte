<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import { inView } from 'motion';

    export let animate: boolean = false;

    let classNames = '';

    export { classNames as class };
</script>

<svg
    width="1166"
    height="400"
    viewBox="0 0 1166 400"
    fill="none"
    class={cn('graph', classNames)}
    xmlns="http://www.w3.org/2000/svg"
    style:animation-play-state={animate ? 'running' : 'paused'}
>
    <path
        d="M1189 -40C949.932 376.543 168.486 380 1 380V410H1189V-40Z"
        fill="url(#paint0_linear_51_5501)"
        stroke="url(#paint1_linear_51_5501)"
    />
    <defs>
        <linearGradient
            id="paint0_linear_51_5501"
            x1="595"
            y1="-40"
            x2="595"
            y2="410"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#FD366E" stop-opacity="0.16" />
            <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
        </linearGradient>
        <linearGradient
            id="paint1_linear_51_5501"
            x1="1189"
            y1="-17.0002"
            x2="-2.8493"
            y2="363.957"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#FD366E" />
            <stop offset="0.214023" stop-color="#FD366E" stop-opacity="0.48" />
            <stop offset="0.977666" stop-color="#FD366E" stop-opacity="0.2" />
            <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
        </linearGradient>
    </defs>
</svg>

<style lang="scss">
    .graph {
        animation: clip-path 2000ms ease-in-out forwards;
    }

    @keyframes clip-path {
        0% {
            clip-path: inset(0px 100% 0px 0px);
        }
        100% {
            clip-path: inset(0px 0% 0px 0px);
        }
    }
</style>
