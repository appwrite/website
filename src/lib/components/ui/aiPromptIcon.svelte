<script lang="ts">
    import type { SVGAttributes } from 'svelte/elements';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    type Props = SVGAttributes<SVGElement> & {
        width?: number | string;
        height?: number | string;
        class?: string;
    };

    const { width = 36, height = 36, class: className = '', ...rest }: Props = $props();

    // Generate unique IDs for gradients to avoid conflicts when multiple instances exist
    const uniqueId = `ai-prompt-icon-${Math.random().toString(36).substring(2, 9)}`;
    const gradient0 = `paint0_linear_${uniqueId}`;
    const gradient1 = `paint1_linear_${uniqueId}`;
    const gradient2 = `paint2_linear_${uniqueId}`;
    const gradient1Light = `paint1_linear_light_${uniqueId}`;
    const gradient2Light = `paint2_linear_light_${uniqueId}`;

    let star1: SVGPathElement;
    let star2: SVGPathElement;

    function updateGradients() {
        if (!browser) return;
        const isLight = document.body.classList.contains('light');

        if (star1) {
            const gradientId = isLight
                ? star1.getAttribute('data-gradient-light')
                : star1.getAttribute('data-gradient-dark');
            if (gradientId) {
                star1.setAttribute('fill', `url(#${gradientId})`);
            }
        }

        if (star2) {
            const gradientId = isLight
                ? star2.getAttribute('data-gradient-light')
                : star2.getAttribute('data-gradient-dark');
            if (gradientId) {
                star2.setAttribute('fill', `url(#${gradientId})`);
            }
        }
    }

    onMount(() => {
        if (!browser) return;

        updateGradients();

        const observer = new MutationObserver(() => {
            updateGradients();
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    });
</script>

<svg
    {width}
    {height}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={className}
    {...rest}
>
    <rect width="36" height="36" rx="8" fill="#FD366E" fill-opacity="0.04" />
    <rect
        x="0.625"
        y="0.625"
        width="34.75"
        height="34.75"
        rx="7.375"
        stroke="#FD366E"
        stroke-opacity="0.12"
        stroke-width="1.25"
    />
    <path
        d="M14.0156 9.20801C14.3539 8.29392 15.6461 8.29392 15.9844 9.20801L17.5801 13.5186C17.7776 14.052 18.198 14.4724 18.7314 14.6699L23.042 16.2656C23.9561 16.6039 23.9561 17.8961 23.042 18.2344L18.7314 19.8301C18.198 20.0276 17.7776 20.448 17.5801 20.9814L15.9844 25.292C15.6461 26.2061 14.3539 26.2061 14.0156 25.292L12.4199 20.9814C12.2224 20.448 11.802 20.0276 11.2686 19.8301L6.95801 18.2344C6.04392 17.8961 6.04392 16.6039 6.95801 16.2656L11.2686 14.6699C11.802 14.4724 12.2224 14.052 12.4199 13.5186L14.0156 9.20801Z"
        fill={`url(#${gradient0})`}
        stroke="#FD366E"
        stroke-width="0.9"
    />
    <path
        bind:this={star1}
        d="M25.3828 22.6611C25.552 22.2042 26.198 22.2042 26.3672 22.6611L26.8994 24.0977C27.0286 24.4466 27.3034 24.7214 27.6523 24.8506L29.0889 25.3828C29.5458 25.552 29.5458 26.198 29.0889 26.3672L27.6523 26.8994C27.3034 27.0286 27.0286 27.3034 26.8994 27.6523L26.3672 29.0889C26.198 29.5458 25.552 29.5458 25.3828 29.0889L24.8506 27.6523C24.7214 27.3034 24.4466 27.0286 24.0977 26.8994L22.6611 26.3672C22.2042 26.198 22.2042 25.552 22.6611 25.3828L24.0977 24.8506C24.4466 24.7214 24.7214 24.4466 24.8506 24.0977L25.3828 22.6611Z"
        fill={`url(#${gradient1})`}
        class="small-star star-1"
        data-gradient-dark={gradient1}
        data-gradient-light={gradient1Light}
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        bind:this={star2}
        d="M25.3828 6.91113C25.552 6.45421 26.198 6.45421 26.3672 6.91113L26.8994 8.34766C27.0286 8.6966 27.3034 8.97145 27.6523 9.10059L29.0889 9.63281C29.5458 9.802 29.5458 10.448 29.0889 10.6172L27.6523 11.1494C27.3034 11.2786 27.0286 11.5534 26.8994 11.9023L26.3672 13.3389C26.198 13.7958 25.552 13.7958 25.3828 13.3389L24.8506 11.9023C24.7214 11.5534 24.4466 11.2786 24.0977 11.1494L22.6611 10.6172C22.2042 10.448 22.2042 9.802 22.6611 9.63281L24.0977 9.10059C24.4466 8.97145 24.7214 8.6966 24.8506 8.34766L25.3828 6.91113Z"
        fill={`url(#${gradient2})`}
        class="small-star star-2"
        data-gradient-dark={gradient2}
        data-gradient-light={gradient2Light}
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <defs>
        <linearGradient
            id={gradient0}
            x1="15"
            y1="5.25"
            x2="15"
            y2="29.25"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#FD366E" stop-opacity="0" />
            <stop offset="1" stop-color="#FD366E" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
            id={gradient1}
            x1="25.875"
            y1="31.5"
            x2="25.875"
            y2="20.25"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="white" stop-opacity="0.4" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
            id={gradient2}
            x1="25.875"
            y1="15.75"
            x2="25.875"
            y2="4.5"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="white" stop-opacity="0.4" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <!-- Light mode gradients for small stars -->
        <linearGradient
            id={gradient1Light}
            x1="25.875"
            y1="20.25"
            x2="25.875"
            y2="31.5"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#FD366E" stop-opacity="0" />
            <stop offset="1" stop-color="#FD366E" stop-opacity="0.4" />
        </linearGradient>
        <linearGradient
            id={gradient2Light}
            x1="25.875"
            y1="4.5"
            x2="25.875"
            y2="15.75"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#FD366E" stop-opacity="0" />
            <stop offset="1" stop-color="#FD366E" stop-opacity="0.4" />
        </linearGradient>
    </defs>
</svg>

<style>
    :global(.small-star) {
        stroke: white;
    }

    :global(body.light .small-star) {
        stroke: #fd366e;
    }
</style>
