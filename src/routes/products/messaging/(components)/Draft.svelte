<script lang="ts">
    import Step from './Step.svelte';
    import Marker from '../(assets)/marker.svg';
    import MarkerActive from '../(assets)/marker-active.svg';

    let title = 'Edit me';
    let message = 'Edit me';
</script>

<Step title="Step 1: Draft">
    <div
        class="console"
        style:--marker-active="url('{MarkerActive}')"
        style:--marker="url('{Marker}')"
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
                    <input class="aw-input-text" type="text" id="title" name="title" />
                    <label class="aw-u-color-text-primary" for="message">Message</label>
                    <textarea class="aw-input-text" id="message" name="message" />
                </div>
            </div>
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

        aspect-ratio: 16 / 9;

        position: relative;

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, hsl(240, 6%, 10%, 0), hsl(240, 6%, 10%, 1));
            border-radius: var(--m-border-radius);
            pointer-events: none;
        }

        .inner {
            border: 8px solid #2d2d2f;
            border-radius: 18px;
            overflow: hidden;
            height: 100%;
        }

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

    .text {
        position: absolute;
        max-inline-size: 33.5rem;
        inset-block-end: var(--padding-block-end);
        inset-inline-start: 5rem;
    }
</style>
