<script lang="ts">
    import { toScale, type Scale } from '$lib/utils/toScale';
    import { spring, type AnimationListOptions, type SpringOptions } from 'motion';
    import { animation, createScrollHandler, scroll, type Animation } from '.';
    import { GITHUB_REPO_LINK, GITHUB_STARS } from '$lib/constants';

    const springOptions: SpringOptions = {
        stiffness: 58.78,
        mass: 1,
        damping: 17.14
    };
    const animationOptions: AnimationListOptions = {
        x: { easing: spring(springOptions) },
        y: { easing: spring(springOptions) }
    };
    const animations: {
        mobile: {
            main: Animation;
            reversed: Animation;
        };
        desktop: {
            main: Animation;
            reversed: Animation;
        };
    }[] = [
        {
            mobile: {
                main: animation(
                    '#oss-discord',
                    { x: 0, y: [1200, 0], rotate: 1 },
                    animationOptions
                ),
                reversed: animation('#oss-discord', { y: 1200, x: 0, rotate: 1 }, animationOptions)
            },
            desktop: {
                main: animation(
                    '#oss-discord',
                    { x: 20, y: '-75vh', rotate: 15 },
                    animationOptions
                ),
                reversed: animation(
                    '#oss-discord',
                    { x: -100, y: '0vh', rotate: 15 },
                    animationOptions
                )
            }
        },
        {
            mobile: {
                main: animation(
                    '#oss-github',
                    { x: 0, y: [1200, -10], rotate: -2 },
                    animationOptions
                ),
                reversed: animation('#oss-github', { y: 1200, x: 10, rotate: -2 }, animationOptions)
            },
            desktop: {
                main: animation(
                    '#oss-github',
                    { x: -100, y: '-50vh', rotate: 6.26 },
                    animationOptions
                ),
                reversed: animation(
                    '#oss-github',
                    { x: 0, y: '0vh', rotate: 6.26 },
                    animationOptions
                )
            }
        },
        {
            mobile: {
                main: animation(
                    '#oss-twitter',
                    { x: 0, y: [1200, 10], rotate: -3 },
                    animationOptions
                ),
                reversed: animation(
                    '#oss-twitter',
                    { y: 1200, x: -10, rotate: -3 },
                    animationOptions
                )
            },
            desktop: {
                main: animation(
                    '#oss-twitter',
                    { x: 100, y: '-65vh', rotate: -15 },
                    animationOptions
                ),
                reversed: animation(
                    '#oss-twitter',
                    { x: 0, y: '0vh', rotate: -15 },
                    animationOptions
                )
            }
        },
        {
            mobile: {
                main: animation(
                    '#oss-youtube',
                    { x: 0, y: [1200, 5], rotate: 2 },
                    animationOptions
                ),
                reversed: animation('#oss-youtube', { y: 1200, x: -5, rotate: 2 }, animationOptions)
            },
            desktop: {
                main: animation(
                    '#oss-youtube',
                    { x: -100, y: '-50vh', rotate: -3.77 },
                    animationOptions
                ),
                reversed: animation(
                    '#oss-youtube',
                    { x: 0, y: '0vh', rotate: -3.77 },
                    animationOptions
                )
            }
        },
        {
            mobile: {
                main: animation(
                    '#oss-commits',
                    { x: 0, y: [1200, -4], rotate: -1 },
                    animationOptions
                ),
                reversed: animation('#oss-commits', { y: 1200, x: 4, rotate: -1 }, animationOptions)
            },
            desktop: {
                main: animation(
                    '#oss-commits',
                    { x: 100, y: '-70vh', rotate: -10.2 },
                    animationOptions
                ),
                reversed: animation(
                    '#oss-commits',
                    { x: 0, y: '0vh', rotate: -10.2 },
                    animationOptions
                )
            }
        }
    ];

    function isMobile(): boolean {
        if (typeof window === 'undefined') return false;
        return window?.innerWidth < 1024;
    }

    const animScale: Scale = [0, animations.length - 1];
    const percentScale: Scale = [0.1, 0.8];
    const scrollHandler = createScrollHandler(
        animations.map(({ mobile, desktop }, i) => {
            return {
                percentage: isMobile() ? toScale(i, animScale, percentScale) : 0.1,
                whenAfter() {
                    const { main, reversed } = isMobile() ? mobile : desktop;

                    main.play();
                    return reversed.play;
                }
            };
        })
    );
</script>

<div
    id="open-source"
    use:scroll
    on:web-scroll={({ detail }) => {
        const { percentage } = detail;
        scrollHandler(percentage);
    }}
    on:web-resize={({ detail }) => {
        scrollHandler.reset();
        const { percentage } = detail;

        scrollHandler(percentage);
    }}
>
    <div class="sticky-wrapper">
        <h3 class="text-display font-aeonik-pro text-primary">Powered by Open Source</h3>

        <div class="cards-wrapper">
            <a
                href="/discord"
                target="_blank"
                rel="noopener noreferrer"
                class="web-card is-white web-u-min-block-size-320 oss-card flex flex-col"
                id="oss-discord"
            >
                <div class="flex flex-col justify-between gap-8">
                    <span
                        class="web-icon-discord web-u-font-size-40"
                        aria-hidden="true"
                        aria-label="Discord"
                   ></span>
                </div>
                <div class="text-title font-aeonik-pro mt-auto">17k+ Discord Members</div>
            </a>

            <a
                class="web-card is-white web-u-min-block-size-320 oss-card flex flex-col"
                id="oss-github"
                href={GITHUB_REPO_LINK}
            >
                <div class="flex flex-col justify-between gap-8">
                    <span
                        class="web-icon-github web-u-font-size-40"
                        aria-hidden="true"
                        aria-label="GitHub"
                   ></span>
                </div>
                <div class="text-title font-aeonik-pro mt-auto">
                    {GITHUB_STARS}+ GitHub Stars
                </div>
            </a>

            <a
                href="https://twitter.com/appwrite"
                class="web-card is-white web-u-min-block-size-320 oss-card flex flex-col"
                id="oss-twitter"
            >
                <div class="flex flex-col justify-between gap-8">
                    <span
                        class="web-icon-x web-u-font-size-40"
                        aria-hidden="true"
                        aria-label="Twitter"
                   ></span>
                </div>
                <div class="text-title font-aeonik-pro mt-auto">128k+ Twitter Followers</div>
            </a>

            <a
                href="https://www.youtube.com/@Appwrite"
                class="web-card is-white web-u-min-block-size-320 oss-card flex flex-col"
                id="oss-youtube"
            >
                <div class="flex flex-col justify-between gap-8">
                    <span
                        class="web-icon-youtube web-u-font-size-40"
                        aria-hidden="true"
                        aria-label="YouTube"
                   ></span>
                </div>
                <div class="text-title font-aeonik-pro mt-auto">7k+ Youtube Subscribers</div>
            </a>

            <a
                class="web-card is-white web-u-min-block-size-320 oss-card flex flex-col"
                id="oss-commits"
                href={GITHUB_REPO_LINK}
            >
                <div class="flex flex-col justify-between gap-8">
                    <span
                        class="web-icon-github web-u-font-size-40"
                        aria-hidden="true"
                        aria-label="GitHub"
                   ></span>
                </div>
                <div class="text-title font-aeonik-pro mt-auto">21k+ Code Commits</div>
            </a>
        </div>
    </div>
</div>

<style lang="scss">
    #open-source {
        min-height: 150vh;
        height: 3500px;
        position: relative;

        @media (min-width: 1024px) {
            height: 1500px;
        }
    }

    .sticky-wrapper {
        position: sticky;
        top: -15vh;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        padding-inline: 1.25rem;

        width: 100%;
        height: 130vh;

        text-align: center;

        &::after {
            background: linear-gradient(
                to top,
                hsl(var(--web-color-background)) 0%,
                hsl(var(--web-color-background) / 0) 5%
            );
            position: absolute;
            inset: 0;
        }

        .cards-wrapper {
            position: relative;
            height: 22.5rem;
            margin-top: 80px;
        }

        @media (min-width: 1024px) {
            h3 {
                max-width: 61.375rem;
            }

            .cards-wrapper {
                position: absolute;
                height: 100vh;
                width: clamp(1024px, 90vw, 1440px);
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                margin-top: 0;
            }
        }
    }

    .oss-card {
        background: linear-gradient(
            106deg,
            rgba(255, 255, 255, 0.72) 0%,
            rgba(255, 255, 255, 0.8) 41.9%,
            rgba(255, 255, 255, 0.6) 100%
        );
        backdrop-filter: blur(10px);

        --card-padding: 2rem;

        --w: clamp(306px, 50vw, 22.125rem);
        --h: 20.125rem;
        width: var(--w);
        height: var(--h);
        text-align: left;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: absolute;
        left: calc(50% - calc(var(--w) / 2));
        transform: translateX(-1200px);

        [class*='icon'] {
            opacity: 48%;
        }
    }

    @media (min-width: 1024px) {
        .oss-card {
            left: unset;
            transform: unset;
        }

        #oss-discord {
            bottom: -400px;
            left: 1%;
            transform: rotate(15deg);
        }

        #oss-github {
            bottom: -400px;
            left: 19%;
        }

        #oss-twitter {
            bottom: -400px;
            left: clamp(20%, 22vw, 29%);
        }

        #oss-youtube {
            bottom: -400px;
            left: clamp(64%, calc(1024px - 10vw), 70%);
        }

        #oss-commits {
            bottom: -400px;
            right: 10%;
        }
    }
</style>
