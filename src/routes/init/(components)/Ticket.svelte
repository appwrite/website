<script lang="ts">
    import type { ContributionsMatrix, TicketData } from '../tickets/constants';
    import Lockup from './Lockup.svelte';
    import Lines from './Lines.svelte';
    import { fade } from 'svelte/transition';

    type $$Props = Omit<TicketData, '$id' | 'contributions'> & {
        contributions?: Promise<ContributionsMatrix> | ContributionsMatrix;
        disableEffects?: boolean;
    };
    $: ({
        name,
        title,
        id,
        aw_email,
        contributions,
        show_contributions = true,
        disableEffects = false
    } = $$props as $$Props);

    /* Animation details */
    let removeDelay = false;
    $: if (!show_contributions) {
        removeDelay = true;
    }
</script>

<div class="ticket">
    <div class="lockup">
        <p class="web-title web-u-color-text-primary">
            {name?.trim() || '-'}
        </p>

        <p class="web-label">{title}</p>

        <div class="logo" style:width="75%">
            <Lockup fill={false} animate={!disableEffects} />
        </div>
        <div class="shine" />
        <div class="noise" />
        <Lines lines={[2, 3, 1]} />
    </div>
    <div class="stub" class:pink={aw_email}>
        {#await contributions then c}
            {#if c && show_contributions}
                <div
                    class="github"
                    out:fade={{ duration: 100 }}
                    data-remove-delay={removeDelay ? '' : undefined}
                >
                    {#each c as row}
                        <div class="row">
                            {#each row as level, i}
                                <div style:--index={row.length - i} data-level={level} />
                            {/each}
                        </div>
                    {/each}
                </div>
            {/if}
        {/await}
        <div class="details">
            <span>Init 2.0</span>
            <span>{`Ticket Number: #${id?.toString().padStart(6, '0')}`}</span>
        </div>
        <div class="shine" />
        <div class="noise" />
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract' as *;
    $base-width: 22;

    @keyframes fade {
        0% {
            opacity: 0;
            filter: blur(4px);
            transform: rotateX(15deg) rotateY(-10deg);
        }
        100% {
            opacity: 1;
            filter: blur(0px);
            transform: rotateX(0deg) rotateY(0deg);
        }
    }

    .shine,
    .noise {
        background-repeat: no-repeat;
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        z-index: 2;
    }

    .shine {
        opacity: 0.8;
        background-image: url('/images/tickets/shine.svg');
        mix-blend-mode: hard-light;
    }

    .noise {
        background-size: cover;
        opacity: 0.7;
        background-image: url('/images/tickets/noise.png');
    }

    .ticket {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        gap: 4px;
        overflow: hidden;
        border-radius: pxToRem(16);
        min-width: 50vw;
        width: 100%;
        aspect-ratio: 2/1;
        animation: fade 1s ease-out;
        overflow: hidden;

        .stub {
            background: #000;
            grid-column: 10 / -1;

            border-radius: pxToRem(16);
            line-height: 1;
            position: relative;
            overflow: hidden;

            &.pink {
                color: white;
                background: linear-gradient(
                    135deg,
                    hsl(var(--web-color-pink-500)) 0%,
                    hsl(var(--web-color-pink-500)) 61%,
                    hsl(var(--web-color-secondary-100)) 100%
                );
            }

            .shine {
                background-position: 25% -120px;
                background-size: 500%;
                opacity: 0.5;
            }

            .noise {
                background-position: bottom right;
            }

            .details {
                transform-origin: center;
                position: absolute;
                inset: 0;
                display: grid;
                align-items: center;
                margin-left: 50px;
                gap: 4px;
                padding: pxToRem(20) 0;
                grid-template-columns: max-content;

                span {
                    font-family: var(--web-font-family-aeonik-fono);
                    font-size: pxToRem(12);
                    transform: rotate(90deg);
                    transform-origin: center;
                    width: 100%;
                    text-transform: uppercase;
                    display: inline-block;
                }
            }

            .github {
                --delay: 700ms;
                display: flex;
                flex-direction: column;
                gap: pxToRem(8);

                position: absolute;
                inset-block-start: 0;
                inset-inline-end: 50px;

                mask-image: linear-gradient(to left, hsl(240, 3%, 14%), transparent);

                &[data-remove-delay] {
                    --delay: 0ms;
                }

                .row {
                    display: flex;
                    gap: pxToRem(8);

                    div {
                        --size: 8px;
                        width: var(--size);
                        height: var(--size);

                        border-radius: calc(var(--size) / 4);
                        animation: fade-in 500ms ease calc(calc(75ms * var(--index)) + var(--delay))
                            forwards;

                        &[data-level] {
                            --bg-color: white;
                        }

                        &[data-level='0'] {
                            opacity: 0;
                        }

                        &[data-level='1'] {
                            opacity: 0.25;
                        }

                        &[data-level='2'] {
                            opacity: 0.5;
                        }

                        &[data-level='3'] {
                            opacity: 0.75;
                        }

                        &[data-level='4'] {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .lockup {
            grid-column: span 9 / span 9;
            height: 100%;
            background: #000;
            padding: pxToRem(24);
            position: relative;
            border-radius: pxToRem(16);
            overflow: hidden;

            .shine {
                background-size: 150%;
            }

            .logo {
                position: absolute;

                transform: translateY(30%);
                z-index: 10;
            }
        }
    }
    .web-title {
        font-size: pxToRem(24);
        line-height: 1;
    }

    .web-label {
        font-size: pxToRem(16);

        margin-block-start: pxToRem(0.25);
    }

    @keyframes -global-fade-in {
        from {
            background-color: rgba(255, 255, 255, 0);
        }
        to {
            background-color: rgba(255, 255, 255, 1);
        }
    }
</style>
