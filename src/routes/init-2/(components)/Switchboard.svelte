<script lang="ts">
    import { getRandomNumber } from '$lib/utils/numbers';
    import { onMount } from 'svelte';

    const rows = 5;
    const columns = 18;
    const transitionDuration = 250;
    // Cherry-pick a few lights to animate
    const indices = [7, 15, 19, 29, 26, 34, 46, 55, 60, 67, 70, 74, 83];
    // Randomly animate between three states
    const states = ['off', 'medium', 'high'];

    let ref: HTMLElement;

    onMount(() => {
        const timeoutIds: Array<ReturnType<typeof setTimeout>> = [];

        const interval = setInterval(() => {
            indices.forEach((index) => {
                const light = ref.querySelector(`[data-index="${index}"]`) as HTMLElement;

                if (!light) {
                    return;
                }

                // Pick a random next state
                const nextState = states[Math.floor(Math.random() * states.length)];
                const currentState = light.dataset.state;

                const pulse =
                    Math.random() > 0.2 &&
                    // Make sure we only pulsate going from "off" → "medium" → "high"
                    ((currentState === 'off' && nextState === 'high') ||
                        (currentState === 'off' && nextState === 'medium') ||
                        (currentState === 'medium' && nextState === 'high'));

                if (pulse) {
                    const delay = getRandomNumber(100, 500);

                    timeoutIds.push(
                        setTimeout(() => {
                            light.style.transform = 'scale(2)';
                        }, delay)
                    );

                    timeoutIds.push(
                        setTimeout(() => {
                            light.style.transform = 'scale(1)';
                        }, transitionDuration + delay)
                    );
                }

                // After a pulse, don't transition from "high" → "medium"
                if (currentState === 'high' && nextState === 'medium' && pulse) {
                    light.dataset.state = 'off';
                } else {
                    light.dataset.state = nextState;
                }
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            timeoutIds.forEach(clearTimeout);
        };
    });
</script>

<div class="switchboard-box">
    <div
        bind:this={ref}
        class="switchboard"
        style:display="grid"
        style:gap={`${columns}px`}
        style:grid-template-columns={`repeat(${columns}, 1fr)`}
    >
        {#each Array.from({ length: columns * rows }) as _, i}
            <div
                class="light"
                data-state="off"
                data-index={i}
                style={`--transition-duration: ${transitionDuration}ms`}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    .switchboard-box {
        width: 400px;
        height: 250px;
        display: flex;
        position: relative;

        .switchboard {
            .light {
                width: 1px;
                height: 1px;
                border-radius: 9999px;
                position: relative;
                transition: transform var(--transition-duration) ease;

                &:after,
                &:before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    width: inherit;
                    height: inherit;
                    border-radius: inherit;
                    transition: opacity var(--transition-duration) ease;
                }

                &:before {
                    /* Medium */
                    background: #3291ff;
                    box-shadow: 0px 0px 2px 1px rgba(50, 145, 255, 0.25);
                }

                &:after {
                    background: #ffffff;
                    box-shadow:
                        0px 0px 1px 1px rgba(50, 145, 255, 0.8),
                        0px 0px 2px 1px rgba(50, 145, 255, 0.25);
                }

                &[data-state='off'] {
                    background: #707070;
                }

                &[data-state='medium']:before {
                    opacity: 1;
                }

                &[data-state='high']:after {
                    opacity: 1;
                }
            }
        }
    }
</style>
