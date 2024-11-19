<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
</script>

<section class="pt-32 pb-40">
    <div
        class="container grid grid-cols-1 items-center justify-between gap-12 md:grid-cols-12 md:flex-row"
    >
        <div class="col-span-4 mb-10 flex flex-col">
            <h2 class="text-title text-primary font-aeonik-pro my-4 text-pretty">
                Deploy seamlessly with no effort
            </h2>
            <p class="text-body text-secondary text-pretty font-medium">
                Appwrite offers to deploy functions directly from Git repositories to track changes
                within your development workflow seamlessly.
            </p>

            <a href="/docs/sdks#server" class="web-button is-secondary mt-8">Learn more</a>
        </div>

        <div
            class="window bg-offset col-span-7 col-start-6 flex h-[420px] w-full flex-col pb-4 backdrop-blur-lg"
        >
            <header class="grid h-12 w-full grid-cols-12 items-center px-4">
                <div class="col-span-2 flex gap-1">
                    <button class="size-2 rounded-full bg-[#EC6A5E]" />
                    <button class="size-2 rounded-full bg-[#F5BF4F]" />
                    <button class="size-2 rounded-full bg-[#6d9e66]" />
                </div>
                <div
                    class="col-span-6 col-start-4 flex h-6 w-full items-center rounded-full bg-[#232325]/94 px-2 backdrop-blur-lg"
                >
                    <span
                        class="text-secondary flex items-center gap-2 text-[0.625rem] -tracking-[.045%]"
                        ><svg
                            width="11"
                            height="12"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.50038 1.07788C8.21908 1.07788 10.4229 3.33727 10.4229 6.12488C10.4229 8.35428 9.01406 10.2455 7.05934 10.9135C6.80977 10.9632 6.72116 10.8056 6.72116 10.6712C6.72116 10.5048 6.72707 9.96141 6.72707 9.28604C6.72707 8.81545 6.56955 8.50832 6.39283 8.35178C7.48907 8.22675 8.64093 7.79993 8.64093 5.86145C8.64093 5.31013 8.44994 4.86024 8.13392 4.5068C8.18511 4.37931 8.35395 3.86596 8.08568 3.1709C8.08568 3.1709 7.67317 3.03567 6.73347 3.68839C6.34016 3.57665 5.91879 3.52043 5.50038 3.51846C5.08197 3.52043 4.6611 3.57665 4.26828 3.68839C3.32759 3.03567 2.9141 3.1709 2.9141 3.1709C2.64681 3.86596 2.81565 4.37931 2.86635 4.5068C2.5518 4.86024 2.35934 5.31013 2.35934 5.86145C2.35934 7.79501 3.50874 8.22837 4.60203 8.35587C4.46124 8.48188 4.33375 8.70418 4.28945 9.03055C4.00886 9.15952 3.29608 9.38272 2.857 8.61136C2.857 8.61136 2.5966 8.12644 2.10238 8.09099C2.10238 8.09099 1.62244 8.08462 2.06891 8.39769C2.06891 8.39769 2.39133 8.55275 2.6153 9.13606C2.6153 9.13606 2.90426 10.0369 4.2737 9.73166C4.27616 10.1535 4.28059 10.5511 4.28059 10.6712C4.28059 10.8046 4.19001 10.9607 3.94438 10.914C1.98818 10.247 0.577881 8.35477 0.577881 6.12488C0.577881 3.33727 2.78218 1.07788 5.50038 1.07788Z"
                                fill="#ADADB0"
                            />
                        </svg>
                        <span>
                            Current repository:<span class="text-white">&nbsp;my-repo</span></span
                        ></span
                    >
                </div>
            </header>

            <div class="grid w-full flex-1 grid-cols-12 gap-2 overflow-hidden px-4">
                <div class="col-span-3 col-start-1 flex flex-col">
                    <span class="text-x-micro font-medium text-white">Changes</span>
                    <ul class="mt-2 space-y-1 pr-4 text-[9px]">
                        <li class="flex items-center justify-between">
                            <span>app/src/../<span class="text-white">main.js</span></span>
                            <svg
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_3913_35763)">
                                    <rect
                                        x="0.5"
                                        y="1"
                                        width="7"
                                        height="7"
                                        rx="1.5"
                                        stroke="#DBAB09"
                                        stroke-width="0.75"
                                    />
                                    <circle cx="4" cy="4.5" r="1" fill="#DBAB09" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3913_35763">
                                        <rect
                                            width="8"
                                            height="8"
                                            fill="white"
                                            transform="translate(0 0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li class="flex items-center justify-between">
                            <span>app/../<span class="text-white">server.js</span></span>
                            <svg
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_3913_35768)">
                                    <rect
                                        x="0.5"
                                        y="1"
                                        width="7"
                                        height="7"
                                        rx="1.5"
                                        stroke="#28A745"
                                        stroke-width="0.75"
                                    />
                                    <path
                                        d="M4 3V6"
                                        stroke="#28A745"
                                        stroke-width="0.75"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M5.5 4.5L2.5 4.5"
                                        stroke="#28A745"
                                        stroke-width="0.75"
                                        stroke-linecap="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3913_35768">
                                        <rect
                                            width="8"
                                            height="8"
                                            fill="white"
                                            transform="translate(0 0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li class="flex items-center justify-between">
                            <span>app/../<span class="text-white">app.js</span></span>
                            <svg
                                width="8"
                                height="9"
                                viewBox="0 0 8 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_3913_35763)">
                                    <rect
                                        x="0.5"
                                        y="1"
                                        width="7"
                                        height="7"
                                        rx="1.5"
                                        stroke="#DBAB09"
                                        stroke-width="0.75"
                                    />
                                    <circle cx="4" cy="4.5" r="1" fill="#DBAB09" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3913_35763">
                                        <rect
                                            width="8"
                                            height="8"
                                            fill="white"
                                            transform="translate(0 0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                    </ul>

                    <button
                        class="text-micro mt-auto mb-0 rounded-md border border-white/8 bg-[#19191C] py-2 font-medium text-white"
                        >Commit and push</button
                    >
                </div>
                <div class="col-span-9 col-start-4 overflow-hidden rounded-xl bg-[#232325] p-2">
                    <ul
                        class={classNames(
                            'text-greyscale-600 relative px-1 font-mono',
                            'after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#232325]'
                        )}
                    >
                        {#each Array.from({ length: 22 }) as _, i}
                            {@const lineNumber = i + 37}
                            {@const highlightedNumbers = [47, 48, 49, 50]}
                            <li
                                class={classNames('pointer-events-none pl-2 text-[10px]', {
                                    'rounded bg-[#FF453A]/8 text-white': lineNumber === 41,
                                    'bg-[#7ADF82]/8 text-white': [47, 48, 49, 50].includes(
                                        lineNumber
                                    ),
                                    'rounded-t': lineNumber === highlightedNumbers[0],
                                    'rounded-b':
                                        lineNumber ===
                                        highlightedNumbers[highlightedNumbers.length - 1]
                                })}
                            >
                                {lineNumber}
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .window {
        @include gradients.border-gradient;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        --m-border-radius: 1.5rem;
    }
</style>
