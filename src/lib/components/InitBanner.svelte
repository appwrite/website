<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    let groups = [1, 2, 1, 3, 1, 2, 1, 3, 3, 2];

    const getRandomXValue = () => {
        return Math.floor(Math.random() * 120);
    };

    const getRandomWidth = (index: number) => {
        const minWidth = 80;
        const maxRandomWidth = 125 - minWidth;

        const seed = index;
        const random = Math.sin(seed) * 10000;
        const randomNumber = random - Math.floor(random);

        return Math.floor(randomNumber * maxRandomWidth) + minWidth;
    };

    const randomDelay = () => Math.floor(Math.random() * 750);
</script>

<div class="banner" class:hidden={$page.url.pathname.includes('init')}>
    <div class="content text-primary">
        <div class="headings">
            <span style:font-weight="500"
                ><span
                    style:font-size="20px"
                    style:font-family="var(--web-font-family-aeonik-pro)"
                    style:font-weight="600">init</span
                > has started
            </span>
            <span class="web-u-color-text-secondary">The start of something new</span>
            <div class="shadow" />
        </div>
        <a href="/init" rel="noopener noreferrer" class="action">
            <span class="text-caption font-medium">Join now</span>
            <span class="web-icon-arrow-right" aria-hidden="true" />
            <div class="shadow" />
        </a>
    </div>
    <div class="shine" />
    <div class="border" />
    <div class="lines">
        {#if mounted}
            {#each Array.from({ length: groups.length }) as _, i}
                <div style:position="relative" class="group">
                    {#each Array.from({ length: groups[i] }) as _, index}
                        <div
                            class="line"
                            style={`--width:${getRandomWidth(index)}px;--initial-delay:${randomDelay()}ms;left:${getRandomXValue()}px;`}
                        />
                    {/each}
                </div>
            {/each}
        {/if}
    </div>
</div>

<style lang="scss">
    .banner {
        --shine: rgba(255, 255, 255, 0.04);
        position: relative;
        min-height: 76px;
        display: flex;
        align-items: center;
        max-width: 100vw;
        overflow: hidden;
        border-bottom: 1px solid hsl(var(--web-color-border));

        &.hidden {
            display: none;
        }

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            position: relative;
            z-index: 10;
            padding-inline: clamp(1.25rem, 4vw, 120rem);

            .headings {
                z-index: 10;
                position: relative;
                display: flex;
                flex-direction: column;

                span {
                    position: relative;
                    z-index: 10;
                }

                .shadow {
                    width: 250px;
                    height: 76px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    z-index: 0;
                    backdrop-filter: blur(6px);
                    background-color: hsl(var(--web-color-background) / 50%);
                    mask-composite: intersect;
                    mask-image:
                        linear-gradient(
                            to top,
                            transparent,
                            rgba(0, 0, 0, 1) 25%,
                            rgba(0, 0, 0, 1) 75%,
                            transparent
                        ),
                        linear-gradient(
                            to right,
                            transparent,
                            rgba(0, 0, 0, 1) 25%,
                            rgba(0, 0, 0, 1) 75%,
                            transparent
                        );
                }
            }

            .action {
                position: relative;
                z-index: 10;

                span {
                    position: relative;
                    z-index: 10;
                }

                .shadow {
                    width: 200px;
                    height: 76px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    z-index: 0;
                    backdrop-filter: blur(6px);
                    background-color: hsl(var(--web-color-background) / 50%);
                    mask-composite: intersect;
                    mask-image:
                        linear-gradient(
                            to top,
                            transparent,
                            rgba(0, 0, 0, 1) 25%,
                            rgba(0, 0, 0, 1) 75%,
                            transparent
                        ),
                        linear-gradient(
                            to right,
                            transparent,
                            rgba(0, 0, 0, 1) 25%,
                            rgba(0, 0, 0, 1) 75%,
                            transparent
                        );
                }
            }
        }

        .shine {
            position: absolute;
            inset: 0;
            background: hsl(var(--web-color-background))
                linear-gradient(
                    -24deg,
                    rgba(255, 255, 255, 0) 0,
                    var(--shine) 20%,
                    rgba(255, 255, 255, 0) 40%,
                    var(--shine) 50%,
                    rgba(255, 255, 255, 0) 60%,
                    var(--shine) 80%,
                    rgba(255, 255, 255, 0) 100%
                );
        }
        .border {
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            background-color: hsl(var(--web-color-border));
            bottom: 0;
        }

        .lines {
            position: absolute;
            inset: 0;
            z-index: 0;
            margin: 0 auto;
            opacity: 0.6;
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 16px 0;

            .group {
                display: flex;
                flex-direction: column;
                gap: 16px;
                position: relative;
                justify-content: center;
            }

            --gradient: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 1) 50%,
                rgba(255, 255, 255, 1) 100%
            );
            --height: 1px;
            --starting-position: -80vw;
            --duration: 1s;

            .line {
                position: relative;
                height: var(--height);
                width: var(--width);
                z-index: 20;

                @keyframes line {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    transform-origin: left;
                    width: var(--width);
                    height: var(--height);
                    background: var(--gradient);
                    border-radius: 8px;
                    transform: scaleX(0);
                    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
                    animation: line var(--duration) ease forwards;
                    animation-delay: var(--initial-delay);
                }
            }
        }
    }
</style>
