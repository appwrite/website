<script lang="ts" context="module">
    export type TicketProps = {
        name?: string;
        user?: string;
        id: string;
        showGithub?: boolean;
        tribe?: string | null;
    };
</script>

<script lang="ts">
    import BG from './(assets)/ticket-bg.svg';
    import Logo from './(assets)/logo.svg';

    type $$Props = TicketProps;
    $: ({ name, user, id, showGithub, tribe } = $$props as $$Props);

    function randomRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
</script>

<div class="ticket">
    <img src={BG} alt="" class="bg" />
    <p class="aw-title aw-u-color-text-primary">{name || 'Wade Wilson'}</p>
    {#if user}
        <p class="aw-label" style:margin-block-start="0.25rem">@{user}</p>
    {/if}
    <div class="bottom-left">
        <img src={Logo} alt="init_" />
        <span>JAN 15 - 20</span>
    </div>

    <span class="id">#{id}</span>
    {#if tribe}
        <img class="tribe" src={`/images/tribes/${tribe.toLowerCase()}.svg`} alt={tribe} />
    {/if}

    <div class="github">
        {#each { length: 100 } as _, i}
            <div class="row">
                {#each { length: 7 } as _, j}
                    <div style:--index={7 - j} style:opacity={randomRange(0, 1)} />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .ticket {
        width: 28.75rem;
        aspect-ratio: 460 / 644;

        padding: 2rem;
        padding-block-start: 3.5rem;
        position: relative;
        border-radius: 1rem;
        overflow: hidden;
    }

    .bg {
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    .bottom-left {
        position: absolute;
        inset-block-end: 2rem;
        inset-inline-start: 2rem;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        img {
            width: 5.6875rem;
        }

        span {
            font-family: var(--aw-font-family-aeonik-fono);
            color: hsl(var(--aw-color-primary));
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1rem; /* 114.286% */
        }
    }

    .id {
        position: absolute;
        inset-block-end: 2rem;
        inset-inline-end: 2rem;

        color: rgba(255, 255, 255, 0.5);
        font-family: var(--aw-font-family-aeonik-fono);
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem; /* 114.286% */
    }

    .tribe {
        position: absolute;
        inset-block-end: -6rem;
        inset-inline-start: -8rem;

        width: 28.75rem;
        /* Make it white */
        filter: brightness(0) invert(1);
        opacity: 0.04;
    }

    @keyframes fade-in {
        from {
            background-color: transparent;
        }
        to {
            background-color: hsl(var(--aw-color-accent));
        }
    }

    .github {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;

        mask-image: linear-gradient(to left, hsl(240, 3, 14), transparent);

        .row {
            display: flex;
            gap: 0.25rem;

            div {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 0.125rem;
                animation: fade-in 500ms ease calc(calc(75ms * var(--index)) + 700ms) forwards;
            }
        }
    }
</style>
