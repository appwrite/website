<script>
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import Dashboard from './dashboard.svelte';
</script>

<div class="relative flex min-h-[75vh] items-center">
    <svg
        width="921"
        height="818"
        viewBox="0 0 921 818"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style:--speed="1.25s"
        class="animate-lighting absolute top-0 left-0 z-0 max-h-[75vh]"
    >
        <g opacity="0.4" filter="url(#filter0_f_752_105943)">
            <ellipse
                cx="53.0526"
                cy="177.79"
                rx="195.229"
                ry="24.8951"
                transform="rotate(22.991 53.0526 177.79)"
                fill="#FE9567"
            />
        </g>
        <g opacity="0.16" filter="url(#filter1_f_752_105943)">
            <ellipse
                cx="77.6157"
                cy="251.35"
                rx="549.877"
                ry="86.6798"
                transform="rotate(33.4403 77.6157 251.35)"
                fill="#FD366E"
            />
        </g>
        <g opacity="0.16" filter="url(#filter2_f_752_105943)">
            <ellipse
                cx="211.101"
                cy="196.655"
                rx="613.195"
                ry="89.6512"
                transform="rotate(16.3234 211.101 196.655)"
                fill="#FD366E"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_752_105943"
                x="-276.938"
                y="-51.854"
                width="659.977"
                height="459.289"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_752_105943" />
            </filter>
            <filter
                id="filter1_f_752_105943"
                x="-638.772"
                y="-315.276"
                width="1432.78"
                height="1133.25"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="127.511" result="effect1_foregroundBlur_752_105943" />
            </filter>
            <filter
                id="filter2_f_752_105943"
                x="-497.93"
                y="-116.013"
                width="1418.05"
                height="625.336"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_752_105943" />
            </filter>
        </defs>
    </svg>

    <div class="container relative grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
        <div
            class="animate-fade-in flex flex-col gap-4 [animation-delay:1200ms] [animation-duration:2000ms]"
        >
            <GradientText
                ><h1 class="text-hero font-aeonik-pro text-pretty">
                    Backend APIs, Frontend hosting<span class="text-accent">_</span>
                </h1></GradientText
            >
            <p class="text-description text-secondary font-medium">
                Appwrite’s open-source platform empowers you to build applications faster with ready
                to use backend APIs and host your frontend on one platform.
            </p>
        </div>
    </div>
    <Dashboard />
</div>
