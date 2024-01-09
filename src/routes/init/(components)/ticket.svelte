<script lang="ts" context="module">
    export type ContributionsMatrix = number[][];

    export type TicketProps = {
        name?: string;
        user?: string;
        id: string;
        tribe?: string | null;
        contributions?: ContributionsMatrix;
    };
</script>

<script lang="ts">
    import BG from '../(assets)/ticket-bg.svg';
    import Logo from '../(assets)/logo.svg';

    type $$Props = TicketProps;
    $: ({ name, user, id, tribe, contributions } = $$props as $$Props);
</script>

<div class="ticket">
    <img src={BG} alt="" class="bg" />
    <p class="aw-title aw-u-color-text-primary">{name?.trim() || '-'}</p>
    {#if user}
        <p class="aw-label">@{user}</p>
    {/if}
    <div class="bottom-left">
        <img src={Logo} alt="init_" />
        <span>JAN 22 - 27</span>
    </div>

    <div class="id">
        <span>#{id}</span>
    </div>
    {#if tribe}
        <img class="tribe" src={`/images/tribes/${tribe.toLowerCase()}.svg`} alt={tribe} />
    {/if}

    {#if contributions}
        <div class="github">
            {#each contributions as row}
                <div class="row">
                    {#each row as opacity, j}
                        <div
                            style:--index={row.length - j}
                            data-empty={opacity ? undefined : ''}
                            style:--opacity={opacity}
                        />
                    {/each}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    @use 'sass:math';

    $base-width: 28.75;

    @function adjusted($value) {
        @return #{math.div($value, $base-width)}em;
    }

    .ticket {
        --base-width-default: clamp(12rem, 40vw, #{$base-width}rem);
        font-size: var(--base-width, var(--base-width-default));
        width: var(--base-width, var(--base-width-default));
        aspect-ratio: 460 / 644;

        padding: adjusted(2);
        padding-block-start: adjusted(3.5);
        position: relative;
        border-radius: adjusted(1);
        overflow: hidden;
    }

    .bg {
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    .aw-title {
        font-size: adjusted(2.5);
        line-height: #{math.div(44, 40)}em;
    }

    .aw-label {
        font-size: adjusted(1.5);
        line-height: #{math.div(28, 24)}em;
        margin-block-start: adjusted(0.25);
    }

    .bottom-left {
        position: absolute;
        inset-block-end: adjusted(2);
        inset-inline-start: adjusted(2);

        display: flex;
        flex-direction: column;
        gap: adjusted(0.5);

        img {
            width: adjusted(5.6875);
        }

        span {
            font-family: var(--aw-font-family-aeonik-fono);
            color: hsl(var(--aw-color-primary));
            font-size: adjusted(0.875);
            font-style: normal;
            font-weight: 400;
            line-height: 114.286%;
        }
    }

    .id {
        position: absolute;
        inset-block-end: adjusted(2);
        inset-inline-end: adjusted(2);
        display: grid;
        place-items: center;

        span {
            color: rgba(255, 255, 255, 0.5);
            font-family: var(--aw-font-family-aeonik-fono);
            font-size: adjusted(0.875);
            font-style: normal;
            font-weight: 400;
            line-height: 114.286%;
        }
    }

    .tribe {
        position: absolute;
        inset-block-end: adjusted(-6);
        inset-inline-start: adjusted(-8);

        width: adjusted(28.75);
        /* Make it white */
        filter: brightness(0) invert(1);
        opacity: 0.04;
    }

    @keyframes fade-in {
        from {
            background-color: hsl(var(--bg-color) / 0);
            border: 1px solid hsl(var(--border-color, transparent) / 0);
        }
        to {
            background-color: hsl(var(--bg-color) / 1);
            border: 1px solid hsl(var(--border-color, transparent) / 1);
        }
    }

    .github {
        display: flex;
        flex-direction: column;
        gap: adjusted(0.25);

        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;

        mask-image: linear-gradient(to left, hsl(240, 3, 14), transparent);

        .row {
            display: flex;
            gap: adjusted(0.25);

            div {
                --size: #{adjusted(0.5275)};
                width: var(--size);
                height: var(--size);

                border-radius: calc(var(--size) / 4);
                animation: fade-in 500ms ease calc(calc(75ms * var(--index)) + 700ms) forwards;

                &[data-empty] {
                    --bg-color: transparent;
                    --border-color: var(--aw-color-accent);
                    opacity: 0.2;
                }

                &:not([data-empty]) {
                    --bg-color: var(--aw-color-accent);
                    opacity: var(--opacity);
                }
            }
        }
    }
</style>
