<script lang="ts">
    import Heading from '$lib/components/animated/Heading.svelte';

    const lines = Array.from({ length: 50 });

    const randomNumber = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    const animationDirections = ['left', 'right'];
</script>

<div class="hero">
    <div class="lockup">
        <Heading text="Init" />
        <div class="glass" />
        {#each lines as _, i}
            <div
                class="line"
                data-direction={animationDirections[
                    Math.floor(Math.random() * animationDirections.length)
                ]}
                style={`--animation-delay: ${randomNumber(200, 8000)}ms;--direction:${
                    animationDirections[Math.floor(Math.random() * animationDirections.length)]
                };top: ${i * 80}px`}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    @keyframes -global-left {
        0% {
            left: var(--starting-position);
        }
        100% {
            left: 110%;
        }
    }

    @keyframes -global-right {
        0% {
            right: var(--starting-position);
        }
        100% {
            right: 110%;
        }
    }

    :root {
        --line-width: 70vw;
        --line-height: 2px;
        --animation-duration: 3s;
        --starting-position: -70vw;
        --timing: cubic-bezier(0.1, -0.6, 0.2, 0);
    }

    .hero {
        .glass {
            position: absolute;
            inset: 0;
            backdrop-filter: blur(6px);
            background: rgba(25, 25, 28, 0) url(https://grainy-gradients.vercel.app/noise.svg);
            mix-blend-mode: color;
            z-index: 99;
        }

        .lockup {
            position: relative;
            height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            margin: 0 auto;
            overflow: hidden;

            .line {
                position: absolute;
                height: var(--line-height);
                width: 120vw;
                transform: rotate(25deg);

                overflow: hidden;

                &[data-direction='left'] {
                    &::after {
                        left: var(--starting-position);
                        animation: left var(--animation-duration) var(--animation-delay) infinite
                            forwards var(--timing);
                    }
                }

                &[data-direction='right'] {
                    &::after {
                        right: var(--starting-position);
                        animation: right var(--animation-duration) var(--animation-delay) infinite
                            forwards var(--timing);
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: var(--line-width);
                    height: var(--line-height);
                    top: 0;
                    border-radius: 100px;
                    background: linear-gradient(
                        to left,
                        rgba(254, 83, 109, 0) 0%,
                        rgba(254, 83, 109, 0.6) 50%,
                        rgba(59, 36, 85, 0.5) 80%,
                        rgba(0, 0, 0, 0) 100%
                    );

                    animation-fill-mode: forwards;

                    animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
                }
            }
        }
    }
</style>
