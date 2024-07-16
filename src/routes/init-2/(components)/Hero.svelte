<script lang="ts">
    import Lockup from './Lockup.svelte';

    const getRandomNumber = (min: number, max: number) => {
        return (Math.random() * (max - min) + min).toFixed();
    };
</script>

<div class="hero">
    <div class="lockup">
        <h1 class="sr-only">Init</h1>
        <Lockup />
        <div class="lines">
            <div>
                {#each Array.from({ length: 1 }) as _, i}
                    <div
                        class="line"
                        style:left={`${i * 175}px`}
                        style={`--delay:${getRandomNumber(100, 500)}ms`}
                    />
                {/each}
            </div>

            <div style:left="320px" style:position="relative">
                {#each Array.from({ length: 2 }) as _, i}
                    <div
                        class="line"
                        style:left={`${i * 25}px`}
                        style={`--delay:${getRandomNumber(100, 1200)}ms`}
                    />
                {/each}
            </div>

            <div style:left="625px" style:position="relative">
                {#each Array.from({ length: 3 }) as _, i}
                    <div
                        class="line"
                        style:left={`${i * 35}px`}
                        style={`--delay:${getRandomNumber(100, 2000)}ms`}
                    />
                {/each}
            </div>

            <div style:left="800px" style:position="relative">
                {#each Array.from({ length: 1 }) as _, i}
                    <div
                        class="line"
                        style:left={`${i * 35}px`}
                        style={`--delay:${getRandomNumber(100, 2000)}ms`}
                    />
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    :root {
        --background: hsl(240 5.7% 10.4%);
        --gradient: linear-gradient(
            to bottom,
            hsl(240 5.7% 10.4%),
            rgba(51, 52, 52, 1),
            rgba(122, 122, 122, 1),
            hsl(240 5.7% 10.4%)
        );
        --width: 2px;
        --height: 20vh;
        --starting-position: -50vh;
        --duration: 2s;
        --initial-delay: 0s;
    }

    @keyframes -global-line {
        0% {
            bottom: var(--starting-position);
        }
        100% {
            bottom: 200%;
        }
    }

    .hero {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .lockup {
            position: relative;
            overflow: hidden;
            .lines {
                position: absolute;
                inset: 0;
                z-index: -10;

                .line {
                    position: absolute;
                    height: var(--height);
                    width: var(--width);

                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: var(--starting-position);
                        width: calc(var(--width) / 2);
                        height: var(--height);
                        background: var(--gradient);
                        animation: line var(--duration) calc(var(--initial-delay) + var(--delay))
                            infinite forwards cubic-bezier(0.1, -0.6, 0.2, 0);
                    }
                }
            }
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
    }
</style>
