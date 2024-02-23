<script lang="ts">
    import Step from './Step.svelte';
    import AppwritePng from '../(assets)/appwrite.png?enhanced';
    import MessagePng from '../(assets)/message.png?enhanced';
    import GmailPng from '../(assets)/gmail.png?enhanced';
    import AndroidSvg from '../(assets)/android.svg';
    import { onMount } from 'svelte';
    import { inView } from 'motion';
    import { sleep } from '$lib/animations';
    import { fly } from 'svelte/transition';

    type Notification = {
        icon: string;
        title: string;
        description: string;
        time: string;
        noRadius?: boolean;
    };

    const _notifications: Notification[] = [
        {
            icon: AppwritePng,
            title: 'Appwrite Messaging is out 🚀',
            description:
                'Discover enhanced features to elevate your apps. Join now for an exclusive launch offer!',
            time: 'now'
        },
        {
            icon: MessagePng,
            title: 'Albert Flores',
            description: 'Hey, I just wanted to check in and see how you are doing.',
            time: 'now',
            noRadius: true
        },
        {
            icon: GmailPng,
            title: 'New email from Appwrite',
            description: 'Discover the latest features and updates from Appwrite.',
            time: '1 hour ago'
        }
    ];

    let notifications: Notification[] = [_notifications[2]];

    let wrapper: HTMLElement;
    onMount(() => {
        inView(
            wrapper,
            () => {
                (async () => {
                    await sleep(1000);
                    notifications = [_notifications[1], ...notifications];
                    await sleep(500);
                    notifications = [_notifications[0], ...notifications];
                })();
            },
            { amount: 1 }
        );
    });
</script>

<Step title="Step 4 - Send">
    <div class="wrapper" bind:this={wrapper}>
        <div class="phone">
            <div class="inner">
                <div class="notch" />
                <span class="date">Sunday, October 1</span>
                <span class="time">9:41</span>

                <div class="notifications">
                    {#each notifications as notification (notification.title)}
                        <div
                            class="notification"
                            data-no-radius={notification.noRadius ? '' : undefined}
                            transition:fly={{ x: -4 }}
                        >
                            <enhanced:img src={notification.icon} alt="" class="icon" />
                            <div>
                                <span class="title">{notification.title}</span>
                                <p class="description">
                                    {notification.description}
                                </p>
                            </div>
                            <span class="time">{notification.time}</span>
                        </div>
                    {/each}
                </div>

                <enhanced:img src="../(assets)/blur-left.png" alt="" class="blur-left" />
                <enhanced:img src="../(assets)/blur-right.png" alt="" class="blur-right" />
            </div>
        </div>
        <div class="android">
            <img src={AndroidSvg} alt="" class="android" />
            <h3 class="aw-title aw-u-color-text-primary">Communicate across multiple channels</h3>
            <p class="aw-description">
                Pick one or more channels for you to deliver your message to your user.
            </p>
        </div>
        <div class="overlay" />
    </div>
</Step>

<style lang="scss">
    .wrapper {
        display: flex;
        align-items: flex-end;

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                hsl(240, 6%, 10%, 0),
                hsl(240, 6%, 10%, 0) 60%,
                hsl(240, 6%, 10%, 1)
            );
            pointer-events: none;
            z-index: 100;
        }
    }

    .phone {
        @include border-gradient;
        --m-border-radius: 3.75rem;
        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.12),
            hsl(0, 0%, 100%, 0)
        );
        width: 24.375rem;
        height: 49rem;
        margin-inline-start: 15rem;
        flex-shrink: 0;
        position: relative;
        z-index: 10;

        // position: absolute;
        // inset-inline-end: 10%;
        // inset-block-end: 0;

        // background-color: hsl(0, 0%, 100%, 0.02);
        backdrop-filter: blur(42px);

        .inner {
            border: 0.5rem solid hsl(0, 0%, 100%, 0.08);
            width: 100%;
            height: 100%;
            border-radius: var(--m-border-radius);
            overflow: hidden;
            position: relative;

            > .notch {
                z-index: 10;
                position: absolute;
                inset-inline-start: 50%;
                inset-block-start: 1.5rem;
                transform: translateX(-50%);
                block-size: 1.5rem;
                inline-size: 7.5rem;
                background-color: hsl(0, 0%, 0%, 0.25);
                border-radius: 1000px;
            }

            > .date {
                z-index: 10;
                position: absolute;
                inset-inline-start: 50%;
                inset-block-start: 5rem;
                transform: translateX(-50%);
                color: hsl(0, 0%, 100%, 0.5);
                font-size: 0.75rem;
            }

            > .time {
                z-index: 10;
                position: absolute;
                inset-inline-start: 50%;
                inset-block-start: 5rem;
                transform: translateX(-50%);
                color: hsl(0, 0%, 100%, 0.5);
                font-size: 5.25rem;
                font-weight: 600;
            }

            > .notifications {
                position: absolute;
                inset-block-end: 2rem;
                padding-inline: 1rem;

                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                .notification {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    background: hsl(0, 0%, 100%, 0.48);
                    backdrop-filter: blur(30px);
                    border-radius: 1rem;
                    padding: 0.5rem;

                    :global(picture) {
                        flex-shrink: 0;
                    }

                    .icon {
                        width: 38px;
                        height: auto;
                    }

                    .title {
                        color: #222222;
                        font-size: 0.875rem;
                        font-weight: 600;
                    }

                    .description {
                        color: #3f3f3f;
                        font-weight: 500;
                        font-size: 0.75rem;
                    }

                    &:not([data-no-radius]) .icon {
                        border-radius: 0.625rem;
                    }

                    .time {
                        position: absolute;
                        inset-block-start: 0.75rem;
                        inset-inline-end: 1rem;
                        color: #3f3f3f;

                        font-size: 0.75rem;
                    }
                }
            }

            .blur-left {
                pointer-events: none;
                position: absolute;
                max-block-size: unset;
                max-inline-size: unset;
                block-size: 1200px;
                inline-size: auto;
                inset-inline-start: -600px;
                inset-block-start: -250px;
            }

            .blur-right {
                pointer-events: none;
                position: absolute;
                max-block-size: unset;
                max-inline-size: unset;
                block-size: 1200px;
                inline-size: auto;
                inset-inline-end: -500px;
                inset-block-end: -600px;
            }
        }
    }

    .android {
        height: 100%;
        position: relative;

        h3 {
            padding-inline-start: 2rem;
            position: relative;
            z-index: 1000;
            max-width: 31.25rem;
        }

        p {
            padding-inline-start: 2rem;
            position: relative;
            z-index: 1000;
            margin-block-start: 1rem;
            padding-block-end: 2rem;
        }

        img {
            display: block;
            max-inline-size: unset;
            max-block-size: unset;

            inline-size: 21.375rem;
            block-size: 44.9375rem;
            inset-block-end: 0;
            margin-inline-start: -1rem;
            position: absolute;
        }
        // margin-inline-start: -2rem;
    }
</style>
