<script lang="ts">
    import Step from './Step.svelte';
    import Marker from '../(assets)/marker.svg';
    import MarkerActive from '../(assets)/marker-active.svg';
    import { inView } from 'motion';
    import { onMount } from 'svelte';
    import { sleep, write } from '$lib/animations';

    let title = '';
    let message = '';
    let wrapper: HTMLElement;

    onMount(() => {
        inView(
            wrapper,
            () => {
                (async () => {
                    await write('Appwrite Messaging is out 🚀', (v) => (title = v), 500);
                    await sleep(500);
                    await write(
                        'Discover enhanced features to elevate your apps!',
                        (v) => (message = v),
                        500
                    );
                })();
            },
            { amount: 1 }
        );
    });
</script>

<Step title="Step 1: Draft">
    <div
        class="console"
        style:--marker-active="url('{MarkerActive}')"
        style:--marker="url('{Marker}')"
        bind:this={wrapper}
    >
        <div class="inner">
            <div class="header">
                <h3 class="aw-sub-body-500">Push notification</h3>
                <div class="aw-icon-close" />
            </div>
            <div class="griddy">
                <div class="sidebar">
                    <ul>
                        <li>Message</li>
                        <li>Target</li>
                        <li>Schedule</li>
                    </ul>
                </div>
                <div class="content">
                    <h4 class="aw-label aw-u-color-text-primary">Message</h4>
                    <hr />

                    <label class="aw-u-color-text-primary" for="title">Title</label>
                    <input
                        class="aw-input-text"
                        type="text"
                        id="title"
                        name="title"
                        bind:value={title}
                        maxlength="48"
                    />
                    <label class="aw-u-color-text-primary" for="message">Message</label>
                    <textarea
                        class="aw-input-text"
                        id="message"
                        name="message"
                        bind:value={message}
                    />
                </div>
            </div>
        </div>
        <div class="phone">
            <div class="notch" />
            <span class="date">Sunday, October 1</span>
            <span class="time">9:41</span>
        </div>

        <div class="notification">
            <div class="header">
                <div class="icon-bell" />
                <span>APPWRITE</span>
                <span>now</span>
            </div>
            <span class="title aw-caption-500">{title}</span>
            <span class="message">{message}</span>
        </div>

        <div class="overlay" />
    </div>
    <div class="text">
        <h3 class="aw-title aw-u-color-text-primary">
            Draft and preview your message before delivering it
        </h3>
        <p class="aw-description u-margin-block-start-24">
            See a preview of your crafted messages on the Console before sending them to your
            audience.
        </p>
    </div>
</Step>

<style lang="scss">
    .console {
        @include border-gradient;
        --m-border-radius: 18px;
        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.12),
            hsl(0, 0%, 100%, 0)
        );

        aspect-ratio: 16 / 11;
        position: relative;
        overflow: hidden;

        .inner {
            border: 8px solid #2d2d2f;
            border-radius: 18px;
            overflow: hidden;
            height: 100%;

            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-inline: 2.5rem;
                padding-block: 20px;
                background: hsl(240, 6%, 10%);
                border-block-end: 1px solid hsl(var(--aw-color-offset));
                color: white;
            }

            .griddy {
                display: grid;
                grid-template-columns: 260px 1fr;
                gap: 0;
                height: 100%;

                .sidebar {
                    background-color: #1c1c20;
                    padding: 2.5rem;

                    ul {
                        display: flex;
                        flex-direction: column;
                        gap: 3rem;

                        li {
                            position: relative;
                            display: flex;
                            align-items: center;
                            gap: 0.75rem;

                            &::before {
                                content: '';
                                background: var(--marker);
                                background-repeat: no-repeat;
                                background-position: center center;
                                background-size: cover;
                                display: block;

                                width: 1rem;
                                height: 1rem;
                            }

                            &:not(:last-child)::after {
                                content: '';
                                position: absolute;
                                inset-inline-start: 0.45rem;
                                inset-block-end: -40px;
                                height: 32px;
                                width: 1px;
                                border-inline-end: 1px solid hsl(var(--aw-color-offset));
                            }

                            &:first-child {
                                color: white;

                                &::before {
                                    background: var(--marker-active);
                                }
                            }
                        }
                    }
                }

                .content {
                    background-color: #242427;
                    padding: 2.5rem 2rem;

                    hr {
                        border-block-end: 1px solid hsl(var(--aw-color-offset));
                        margin-block: 2rem;
                    }

                    label {
                        display: block;
                        margin-block-start: 2rem;
                    }

                    input,
                    textarea {
                        --p-input-bg-color: 0 0 0 / 0.16;
                        margin-block-start: 0.25rem;
                    }
                }
            }
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, hsl(240, 6%, 10%, 0), hsl(240, 6%, 10%, 1));
            border-radius: var(--m-border-radius);
            pointer-events: none;
        }

        .phone {
            @include border-gradient;
            --m-border-radius: 60px 60px 0 0;
            --m-border-gradient-before: linear-gradient(
                to bottom,
                hsl(0, 0%, 100%, 0.12),
                hsl(0, 0%, 100%, 0)
            );
            width: 364px;
            height: 700px;

            position: absolute;
            inset-inline-end: 10%;
            inset-block-end: 0;

            background-color: hsl(0, 0%, 100%, 0.02);
            backdrop-filter: blur(42px);

            .notch {
                position: absolute;
                inset-inline-start: 50%;
                inset-block-start: 1.5rem;
                transform: translateX(-50%);
                block-size: 1.5rem;
                inline-size: 7.5rem;
                background-color: hsl(0, 0%, 0%, 0.25);
                border-radius: 1000px;
            }

            .date {
                position: absolute;
                inset-inline-start: 50%;
                inset-block-start: 5rem;
                transform: translateX(-50%);
                color: hsl(0, 0%, 100%, 0.24);
                font-size: 0.75rem;
            }

            .time {
                position: absolute;
                inset-inline-start: 50%;
                inset-block-start: 5rem;
                transform: translateX(-50%);
                color: hsl(0, 0%, 100%, 0.24);
                font-size: 5.25rem;
                font-weight: 600;
            }
        }

        .notification {
            @include border-gradient;
            --m-border-radius: 20px;
            --m-border-gradient-before: linear-gradient(
                to bottom,
                hsl(0, 0%, 100%, 0.12),
                hsl(0, 0%, 100%, 0)
            );
            background-color: hsl(0, 0%, 100%, 0.06);
            backdrop-filter: blur(42px);

            padding: 1.125rem;

            position: absolute;
            inset-inline-end: 2.5rem;
            inset-block-start: 20rem;

            width: 23.75rem;
            min-height: 8.75rem;

            .header {
                display: flex;
                align-items: center;
                gap: 0.375rem;

                [class*='icon'] {
                    color: hsl(var(--aw-color-accent));
                }

                span:not(:last-child) {
                    font-size: 0.75rem;
                }

                span:last-child {
                    margin-inline-start: auto;
                    font-size: 0.75rem;
                }
            }

            .title {
                display: block;
                margin-block-start: 0.5rem;
                color: hsl(var(--aw-color-primary));
                overflow-wrap: break-word;
            }

            .message {
                display: block;
                margin-block-start: 0.25rem;
                color: hsl(var(--aw-color-text-secondary));
                font-size: 0.875rem;
                overflow-wrap: break-word;
            }
        }
    }

    .text {
        position: absolute;
        max-inline-size: 33.5rem;
        inset-block-end: var(--padding-block-end);
        inset-inline-start: 5rem;
    }
</style>
