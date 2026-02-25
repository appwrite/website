<script lang="ts">
    import GridPaper from '../grid-paper.svelte';
</script>

<div class="relative flex h-72 items-center justify-center overflow-hidden">
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
            <linearGradient id="skillsGradient" x1="270" y1="336.5" x2="270" y2="56.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FD366E" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
        </defs>

        <!-- Bottom layer (neutral) -->
        <path d="M175.018 117.024L365.926 117.024L417.989 218.563L123 218.563Z" fill="#19191C" />
        <path d="M365.62 117.524L417.17 218.063L123.818 218.063L175.323 117.524Z" stroke="#2A2A2D" />

        <!-- Accent / middle layer -->
        <path d="M175.018 85.5122L365.926 85.5122L417.989 187.051L123 187.051Z" fill="#19191C" />
        <path d="M175.018 85.5122L365.926 85.5122L417.989 187.051L123 187.051Z" fill="#FD366E" fill-opacity="0.12" />
        <path d="M365.62 86.0122L417.17 186.551L123.818 186.551L175.323 86.0122Z" stroke="url(#skillsGradient)" stroke-opacity="0.48" />

        <!-- Top layer (neutral) -->
        <path d="M175.018 54L365.926 54L417.989 155.539L123 155.539Z" fill="#19191C" />
        <path d="M365.62 54.5L417.17 155.039L123.818 155.039L175.323 54.5Z" stroke="#2A2A2D" />
    </svg>
</div>
