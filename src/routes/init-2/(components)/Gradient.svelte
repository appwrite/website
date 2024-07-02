<script lang="ts">
    const width = 317;
    const height = 80;
    const path = 'M316 0 L1 80';
</script>

<svg {width} {height} viewBox={`0 0 ${width} ${height}`} fill="none">
    <path d={path} stroke="black" stroke-opacity="0.2" />
    <path d={path} stroke="url(#pulse-1)" stroke-linecap="round" stroke-width="2" />
    <defs>
        <linearGradient id="pulse-1" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2EB9DF" stop-opacity="0" />
            <stop stop-color="#2EB9DF" />
            <stop offset="1" stop-color="#9E00FF" stop-opacity="0" />
            <animate
                attributeName="x1"
                values="0; {width * 2}; 0"
                dur="2s"
                repeatCount="indefinite"
                keyTimes="0; 1; 1"
            />
            <animate
                attributeName="x2"
                values="0; {width}; 0"
                dur="2s"
                repeatCount="indefinite"
                keyTimes="0; 1; 1"
            />
            <animate
                attributeName="y1"
                values="{height}; {height / 2}; {height}"
                dur="2s"
                repeatCount="indefinite"
                keyTimes="0; 1; 1"
            />
            <animate
                attributeName="y2"
                values="{height * 2}; {height}; {height * 2}"
                dur="2s"
                repeatCount="indefinite"
                keyTimes="0; 1; 1"
            />
        </linearGradient>
    </defs>
</svg>

<style lang="scss">
    svg {
        display: block;
        margin: 0 auto;
        width: 100vw;
    }
</style>
