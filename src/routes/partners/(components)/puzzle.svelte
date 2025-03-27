<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import { onMount } from 'svelte';

    let animate: boolean = false;

    onMount(() => {
        animate = true;
    });
</script>

<div class="w-full overflow-hidden">
    <svg fill="none" class="h-full w-full" viewBox="0 0 460 525" xmlns="http://www.w3.org/2000/svg">
        <g class={cn('gridLines', animate && 'active')}>
            <path
                d="m286.44 85.681-160.21 92.5"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="500"
            />
            <path
                d="m299.19 107.76-160.21 92.5"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="-500"
            />
            <path
                d="m285.62 374.25-98.727 57"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="500"
            />
            <path
                d="m260.12 360.1-85.736 49.5"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="-500"
            />
            <path
                d="m185.27 374.45-10.392 6"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="500"
            />
            <path
                d="m186.74 287-12.125 7"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="-500"
            />
            <path
                d="m261.91 215.2-12.124 7"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="500"
            />
            <path
                d="m286.07 143.05-12.125 7"
                stroke="#fff"
                stroke-dasharray="4 4"
                stroke-opacity=".06"
                style:--offset-to="500"
            />
        </g>
        <g class={cn('leftPiece', animate && 'active')}>
            <g class={cn('logo', animate && 'active')}>
                <path
                    d="m114.04 273.65-1.42 22.021-47.768 27.579c-13.917 8.035-25.497 6.194-31.149-3.218-0.822-1.368-1.519-2.898-2.079-4.582-1.098-3.297-1.672-7.185-1.637-11.608l0.384-5.953c0.122-1.052 0.276-2.114 0.457-3.18 0.37-2.187 0.858-4.401 1.455-6.623 5.655-21.062 21.038-42.984 38.25-52.922 17.212-9.937 30.846-4.768 34.117 11.142l-20.425 11.792c-2.965-4.09-8.512-4.723-15.112-0.912-6.6 3.81-12.661 11.145-16.403 19.107-1.14 2.422-2.063 4.9-2.722 7.354-0.585 2.176-0.961 4.332-1.095 6.414-0.407 6.312 1.492 10.693 4.867 12.609 3.126 1.782 7.519 1.442 12.512-1.441l47.768-27.579z"
                    fill="var(--color-left-fill)"
                />
                <path
                    d="m115.85 245.62-1.42 22.022-34.868 20.131c3.893-6.112 6.526-13.11 6.933-19.422 0.134-2.082 0.018-3.954-0.32-5.597l29.676-17.134z"
                    fill="var(--color-left-fill)"
                />
            </g>
            <path
                d="m199.59 423.72-24.925-14.388-174.41 100.7 24.914 14.386 174.42-100.7z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m25.165 523.94 173.6-100.22-24.098-13.911-173.59 100.22 24.087 13.908z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m25.165 523.94 173.6-100.22-24.098-13.911-173.59 100.22 24.087 13.908z"
                stroke="url(#i)"
                stroke-width=".82664"
            />
            <path
                d="m199.59 423.72-5e-3 -28.776-24.914-14.385-6e-3 28.773 24.925 14.388z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m175.08 409.1 24.099 13.911-5e-3 -27.822-24.088-13.908-6e-3 27.819z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m175.08 409.1 24.099 13.911-5e-3 -27.822-24.088-13.908-6e-3 27.819z"
                stroke="url(#h)"
                stroke-width=".82664"
            />
            <path
                d="m174.67 179.17 24.916-14.395-24.917-14.374 1e-3 28.769z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m175.08 151.12 1e-3 27.337 23.676-13.678-23.677-13.659z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m175.08 151.12 1e-3 27.337 23.676-13.678-23.677-13.659z"
                stroke="url(#g)"
                stroke-width=".82664"
            />
            <path
                d="m199.58 279.86 74.747-43.155-24.914-14.385-74.754 43.159 24.921 14.381z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m175.49 265.48 24.094 13.904 73.92-42.678-24.087-13.908-73.927 42.682z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m175.49 265.48 24.094 13.904 73.92-42.678-24.087-13.908-73.927 42.682z"
                stroke="url(#f)"
                stroke-width=".82664"
            />
            <path
                d="m249.42 222.32 24.914 14.385 4e-3 -86.311-24.918-14.392v86.318z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m249.83 136.72v85.363l24.088 13.908 4e-3 -85.356-24.092-13.915z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m249.83 136.72v85.363l24.088 13.908 4e-3 -85.356-24.092-13.915z"
                stroke="url(#e)"
                stroke-width=".82664"
            />
            <path
                d="m0.25195 510.03 174.41-100.7 6e-3 -28.773-74.754 43.159v-86.318l74.754-43.159-8e-3 -28.765 74.754-43.159v-86.318l-74.75 43.166-1e-3 -28.769-174.41 100.7-1e-3 258.94z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m174.25 409.1 6e-3 -27.818-74.133 42.801-0.6199 0.358v-87.273l0.206-0.119 74.548-43.04-8e-3 -28.526-1e-3 -0.238 0.207-0.12 74.547-43.04 1e-3 -85.363-74.13 42.808-0.62 0.358v-0.716l-1e-3 -28.053-173.59 100.22-0.001999 257.98 173.59-100.22z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m174.25 409.1 6e-3 -27.818-74.133 42.801-0.6199 0.358v-87.273l0.206-0.119 74.548-43.04-8e-3 -28.526-1e-3 -0.238 0.207-0.12 74.547-43.04 1e-3 -85.363-74.13 42.808-0.62 0.358v-0.716l-1e-3 -28.053-173.59 100.22-0.001999 257.98 173.59-100.22z"
                stroke="url(#d)"
                stroke-width=".82664"
            />
            <path
                d="m124.83 351.79 74.762-43.145-24.922-14.4-74.754 43.159 24.914 14.386z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m100.74 337.4 24.087 13.908 73.936-42.667-24.096-13.923-73.927 42.682z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m100.74 337.4 24.087 13.908 73.936-42.667-24.096-13.923-73.927 42.682z"
                stroke="url(#c)"
                stroke-width=".82664"
            />
            <path
                d="m99.92 423.72 24.92-14.387-6e-3 -57.545-24.914-14.386v86.318z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m124.42 352.03-24.088-13.908v84.886l24.094-13.91-6e-3 -57.068z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m124.42 352.03-24.088-13.908v84.886l24.094-13.91-6e-3 -57.068z"
                stroke="url(#b)"
                stroke-width=".82664"
            />
            <path
                d="m199.59 279.86 9e-3 28.783-24.923-14.399-8e-3 -28.765 24.922 14.381z"
                fill="var(--color-left-fill)"
                fill-opacity=".08"
            />
            <path
                d="m175.09 294.01 24.095 13.922-9e-3 -27.828-24.094-13.904 8e-3 27.81z"
                stroke="var(--color-left-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m175.09 294.01 24.095 13.922-9e-3 -27.828-24.094-13.904 8e-3 27.81z"
                stroke="url(#a)"
                stroke-width=".82664"
            />
        </g>
        <g class={cn('rightPiece', animate && 'active')}>
            <path
                d="m459.62 273.41 2e-3 -258.94-24.918-14.392 2e-3 258.94 24.914 14.385z"
                fill="var(--color-right-fill)"
                filter="url(#blur)"
            />
            <path
                d="m435.12 258.78 24.088 13.908 2e-3 -257.98-24.092-13.915 2e-3 257.99z"
                stroke="var(--color-right-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m260.29 359.72 7e-3 -28.773-74.754 43.159v-86.318l74.747-43.155 6e-3 -28.773 74.746-43.155 1e-3 -86.318-74.754 43.159-1e-3 -28.769 174.42-100.7 2e-3 258.94-174.42 100.7z"
                fill="var(--color-right-fill)"
                filter="url(#blur)"
            />
            <path
                d="m185.96 373.39 74.134-42.801 0.62-0.358v0.716l-6e-3 28.057 173.59-100.22-3e-3 -257.99-173.59 100.22 1e-3 27.814 74.134-42.801 0.62-0.3579v87.273l-0.207 0.119-74.54 43.036-6e-3 28.534v0.239l-0.207 0.119-74.54 43.036v85.363z"
                stroke="var(--color-right-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m185.54 374.11 24.914 14.385 49.834-28.771 6e-3 -28.774-74.754 43.16z"
                fill="var(--color-right-fill)"
                filter="url(#blur)"
            />
            <path
                d="m259.87 359.48 6e-3 -27.819-73.513 42.444 24.087 13.908 49.42-28.533z"
                stroke="var(--color-right-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m260.29 359.72 24.925 14.388 174.41-100.7-24.914-14.385-174.42 100.7z"
                fill="var(--color-right-fill)"
                filter="url(#blur)"
            />
            <path
                d="m434.71 259.5-173.59 100.22 24.098 13.911 173.58-100.23-24.087-13.908z"
                stroke="var(--color-right-stroke)"
                stroke-width=".82664"
            />
            <path
                d="m260.29 129.55 24.926 14.388 49.826-28.767 2e-3 -28.78-74.754 43.159z"
                fill="var(--color-right-fill)"
                filter="url(#blur)"
            />
            <path
                d="m334.62 114.93 2e-3 -27.825-73.514 42.443 24.098 13.911 49.414-28.529z"
                stroke="var(--color-right-stroke)"
                stroke-width=".82664"
            />
            <g id="circles" class={cn('circles', animate && 'active')}>
                <path
                    d="m338.9 291.95c24.536-14.166 45.904-48.569 47.728-76.842 1.823-28.273-16.589-39.709-41.125-25.543-24.536 14.165-45.904 48.569-47.727 76.842-1.824 28.272 16.588 39.708 41.124 25.543z"
                    fill="#fff"
                    fill-opacity=".04"
                    opacity=".2"
                    stroke="#fff"
                    stroke-dasharray="4 4"
                    style:--offset-to="500"
                />
                <path
                    d="m339.17 274.87c16.454-9.499 30.783-32.57 32.006-51.529 1.223-18.96-11.124-26.629-27.578-17.129-16.453 9.499-30.783 32.57-32.005 51.529-1.223 18.959 11.124 26.628 27.577 17.129z"
                    fill="#fff"
                    fill-opacity=".04"
                    opacity=".4"
                    stroke="#fff"
                    stroke-dasharray="4 4"
                    style:--offset-to="-500"
                />
                <path
                    d="m338.64 256.96c8.082-4.667 15.121-16 15.722-25.313 0.6-9.313-5.465-13.08-13.547-8.414s-15.121 15.999-15.722 25.312c-0.601 9.314 5.464 13.081 13.547 8.415z"
                    fill="#fff"
                    fill-opacity=".02"
                    stroke="#fff"
                    stroke-dasharray="4 4"
                    style:--offset-to="250"
                />
            </g>
        </g>
    </svg>
</div>

<style lang="scss">
    .rightPiece {
        opacity: 0;
        --color-right-fill: rgba(32, 32, 35, 1);
        --color-right-stroke: rgba(255, 255, 255, 0.06);

        @keyframes right-piece {
            0% {
                opacity: 0;
                filter: blur(4px);
                transform: translate(40px, -4vh);
            }

            100% {
                opacity: 1;
                filter: blur(0);
                transform: translate(0, 0);
            }
        }

        &.active {
            animation: var(--transition-timing-function-spring) right-piece 1.333s forwards;
        }
    }

    .leftPiece {
        opacity: 0;
        --color-left-fill: rgba(253, 54, 110, 0.8);
        --color-left-stroke: rgba(253, 54, 110, 1);

        @keyframes left-piece {
            0% {
                opacity: 0;
                filter: blur(4px);
                transform: translate(-40px, 4vh);
            }
            100% {
                opacity: 1;
                filter: blur(0);
                transform: translate(0, 0);
            }
        }

        &.active {
            animation: var(--transition-timing-function-spring) left-piece 1.333s forwards;
        }
    }

    .circles {
        opacity: 0;
        display: block;
        filter: blur(4px);
        transition: 0.5s ease-in-out;
        transition-property: opacity, filter, transform;

        &.active {
            opacity: 1;
            filter: blur(0);
            transform: scale(1) rotate(0);
        }

        @keyframes rotation {
            from {
                stroke-dashoffset: 0;
            }

            to {
                stroke-dashoffset: var(--offset-to);
            }
        }

        & > path {
            animation: rotation 60s linear infinite;
        }
    }

    .gridLines {
        & > path {
            opacity: 0;
            transition: 0.5s ease-in-out;
            transition-delay: 1.1s;
            transition-property: opacity, filter, transform;
        }

        @keyframes rotation {
            from {
                stroke-dashoffset: 0;
            }

            to {
                stroke-dashoffset: var(--offset-to);
            }
        }

        &.active > path {
            animation: rotation 60s linear infinite;
            opacity: 1;
        }
    }
</style>
