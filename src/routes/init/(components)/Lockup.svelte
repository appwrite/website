<script lang="ts">
    export let fill: boolean = true;
    export let fillColor: string = 'hsl(var(--web-color-background))';
    export let duration: number = 8;
    export let animate: boolean = true;

    const width = 880;
    const height = 450;

    const paths = [
        'M53.9539 435.628V436.128H54.4539H122.654H123.154V435.628V132.776V132.276H122.654H1.28125H0.78125V132.776V192.884V193.384H1.28125H53.9539V435.628ZM45.2844 43.1913C45.2844 67.7464 64.0076 86.4606 89.1317 86.4606C114.256 86.4606 132.979 67.7464 132.979 43.1913C132.979 19.2098 114.251 0.5 89.1317 0.5C64.0121 0.5 45.2844 19.2098 45.2844 43.1913Z',
        'M192.548 436.366V436.866H193.048H261.248H261.748V436.366V257.776C261.748 219.898 289.852 191.232 327.135 191.232C361.528 191.232 387.899 217.007 387.899 254.308V436.366V436.866H388.399H456.599H457.099V436.366V238.125C457.099 206.802 446.513 178.645 427.561 158.314C408.606 137.979 381.307 125.5 347.942 125.5C307.462 125.5 279.604 144.522 266.161 167.691H261.748V133.513V133.013H261.248H193.048H192.548V133.513V436.366Z',
        'M549.557 435.628V436.128H550.057H618.257H618.757V435.628V132.776V132.276H618.257H496.885H496.385V132.776V192.884V193.384H496.885H549.557V435.628ZM540.888 43.1913C540.888 67.7464 559.611 86.4606 584.735 86.4606C609.859 86.4606 628.582 67.7464 628.582 43.1913C628.582 19.2098 609.855 0.5 584.735 0.5C559.616 0.5 540.888 19.2098 540.888 43.1913Z',
        'M665.033 193.069V193.569H665.533H717.628V345.073C717.628 377.254 727.344 400.095 744.533 414.88C761.707 429.653 786.262 436.313 815.804 436.313H868.976H869.476V435.813V375.127V374.627H868.976H816.382C806.04 374.627 798.835 372.328 794.202 367.485C789.565 362.637 787.406 355.136 787.406 344.495V193.569H872.444H872.944V193.069V132.961V132.461H872.444H787.406V48V47.5H786.906H722.174H721.674V48V132.461H665.533H665.033V132.961V193.069Z'
    ];
</script>

<svg
    class="lockup"
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
    style="--duration:{duration}s;--fill:{fillColor}"
    class:animate
>
    {#each paths as path}
        <path d={path} class="base" class:fill />
        {#each Array.from({ length: 3 }) as _, index}
            {@const delay = duration / 3}
            <path
                d={path}
                class="stroke"
                stroke="url(#stroke)"
                pathLength="1000"
                style:animation-delay="{index * delay}s"
            />
        {/each}
    {/each}

    <defs>
        <linearGradient
            id="stroke"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
        >
            <stop offset="0%" style="stop-color:rgba(255,255,255,0);stop-opacity:1" />
            <stop offset="50%" style="stop-color:rgba(255,255,255,1);stop-opacity:1" />
            <stop offset="51%" style="stop-color:rgba(255,255,255,1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(255,255,255,0);stop-opacity:1" />
        </linearGradient>
    </defs>
</svg>

<style lang="scss">
    .lockup {
        --stroke-color: #333;
        --stroke-width: 2;

        fill: none;
        max-width: 40vw;
        margin: 0 auto;

        width: 100%;
        display: block;

        &.animate {
            animation: fade 1s ease-out;

            .stroke {
                animation: stroke var(--duration) linear infinite;
            }
        }

        @media screen and (max-width: 768px) {
            max-width: 100vw;
        }

        @keyframes fade {
            0% {
                mask: linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 150% 0 / 400%
                    no-repeat;
                opacity: 0.2;
                filter: blur(1px);
            }
            100% {
                mask: linear-gradient(90deg, #000 25%, #000000e6 50%, #00000000) 0 / 400% no-repeat;
                opacity: 1;
                filter: blur(0px);
            }
        }

        path {
            stroke-width: var(--stroke-width);
        }

        .base {
            stroke: var(--stroke-color);
            stroke-width: var(--stroke-width);

            &.fill {
                fill: var(--fill);
            }
        }

        .stroke {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 0;
            stroke-width: var(--stroke-width);
            filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.4));

            @keyframes stroke {
                0% {
                    stroke-dasharray: 0 1000;
                    stroke-dashoffset: 1000;
                }
                25% {
                    stroke-dasharray: 500 500;
                    stroke-dashoffset: 1000;
                }
                50% {
                    stroke-dasharray: 500 500;
                    stroke-dashoffset: 500;
                }
                75%,
                100% {
                    stroke-dasharray: 0 1000;
                    stroke-dashoffset: 0;
                }
            }
        }
    }
</style>
