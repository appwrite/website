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
        <g transform="translate(270.5 136.5) scale(0.88) translate(-270.5 -136.5)">
            <!-- Neutral panels (backend) -->
            <path d="M147.75 202.923L32.75 239.317L32.75 32.6826L147.75 69.0449L147.75 202.923Z" fill="#19191C" stroke="#2A2A2D" />
            <path d="M168.5 202.923L53.5 239.317L53.5 32.6826L168.5 69.0449L168.5 202.923Z" fill="#19191C" stroke="#2A2A2D" />
            <path d="M188.5 202.923L73.5 239.317L73.5 32.6826L188.5 69.0449L188.5 202.923Z" fill="#19191C" stroke="#2A2A2D" />
            <path d="M208.5 202.923L93.5 239.317L93.5 32.6826L208.5 69.0449L208.5 202.923Z" fill="#19191C" stroke="#2A2A2D" />
            <path d="M228.5 202.923L113.5 239.317L113.5 32.6826L228.5 69.0449L228.5 202.923Z" fill="#19191C" stroke="#2A2A2D" />

            <!-- Agent panel (right) -->
            <path d="M393.75 202.923L508.75 239.317L508.75 32.6826L393.75 69.0449L393.75 202.923Z" fill="#19191C" stroke="#2A2A2D" />

            <!-- Accent panel -->
            <g>
                <!-- Solid base blocks the panels beneath -->
                <path d="M249 68.6787L249 203.29L133 240L133 32L249 68.6787Z" fill="#19191C" />
                <!-- Pink tint on top -->
                <path d="M249 68.6787L249 203.29L133 240L133 32L249 68.6787Z" fill="#FD366E" fill-opacity="0.12" />
                <path d="M248.5 202.923L133.5 239.317L133.5 32.6826L248.5 69.0449L248.5 202.923Z" stroke="url(#mcpGradient)" stroke-opacity="0.48" />
            </g>

            <!-- Static dim connector -->
            <path d="M249 137H394" stroke="#454547" stroke-opacity="0.6" />

            <!-- MCP label -->
            <path d="M310.908 129H309.96V120.6H311.184L313.248 125.424L315.288 120.6H316.476V129H315.528V122.268L313.644 126.672H312.804L310.908 122.268V129ZM322.574 129.072C320.33 129.072 319.034 127.488 319.034 124.8C319.034 122.1 320.342 120.528 322.622 120.528C324.29 120.528 325.466 121.56 325.79 123.348H324.686C324.398 122.112 323.69 121.488 322.61 121.488C321.002 121.488 320.102 122.7 320.102 124.8C320.102 126.924 320.966 128.112 322.574 128.112C323.666 128.112 324.374 127.5 324.674 126.252H325.778C325.454 128.052 324.29 129.072 322.574 129.072ZM329.342 129H328.298V120.6H331.37C333.074 120.6 334.202 121.608 334.202 123.18C334.202 124.752 333.074 125.772 331.37 125.772H329.342V129ZM329.342 121.56V124.812H331.274C332.402 124.812 333.134 124.176 333.134 123.18C333.134 122.184 332.414 121.56 331.286 121.56H329.342Z" fill="#ADADB0" />
        </g>

        <defs>
            <linearGradient id="mcpGradient" x1="13" y1="174.5" x2="225.526" y2="237.142" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FD366E" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
</div>
