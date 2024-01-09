<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import { quadOut } from 'svelte/easing';
    import { fly, slide, type TransitionConfig } from 'svelte/transition';
    import ShineSVG from '../../(assets)/shine.svg';
    import Ticket from '../../(components)/Ticket.svelte';
    import Form from './form.svelte';

    export let data;

    let name = data.user?.name ?? '';
    let tribe: string | null = null;

    function toScale(value: number, from: [number, number], to: [number, number]) {
        const [fromMin, fromMax] = from;
        const [toMin, toMax] = to;

        const fromRange = fromMax - fromMin;
        const toRange = toMax - toMin;
        const scale = toRange / fromRange;

        return (value - fromMin) * scale + toMin;
    }

    function ticketOut(_node: HTMLElement, enabled = false): TransitionConfig {
        // Scale from 1 to 0.75, from opacity 1 to 0.5
        return {
            duration: enabled ? 500 : 0,
            css: (t) => `
                transform: scale(${toScale(t, [0, 1], [0.9, 1])});
                opacity: ${toScale(t, [0, 1], [0.25, 1])};
            `,
            easing: quadOut
        };
    }

    let drawerOpen = false;
</script>

<svelte:head>
    <title>Appwrite init_ - Customize Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        <div style:margin-block-start="0.625rem">
            <a
                class="aw-link aw-u-color-text-secondary u-cross-baseline"
                href="/init/ticket/thank-you"
            >
                <span class="aw-icon-chevron-left" aria-hidden="true" />
                <span>Back</span>
            </a>
            <h1 class="aw-title aw-u-color-text-primary" style:margin-block-start="1.5rem">
                Customize ticket<span class="aw-u-color-text-accent">_</span>
            </h1>

            <div class="desktop">
                <Form bind:name bind:tribe />
            </div>
        </div>
        <TicketPreview>
            {#key tribe}
                <div
                    class="ticket-holder"
                    in:fly={{ y: -100, delay: 400, duration: 500, easing: quadOut }}
                    out:ticketOut
                >
                    <Ticket
                        {name}
                        user={data.user?.login}
                        id="0013371"
                        {tribe}
                        contributions={data.contributions}
                    />
                </div>
            {/key}
            <img class="shine" src={ShineSVG} alt="" />
        </TicketPreview>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>

    <div class="drawer" data-state={drawerOpen ? 'open' : 'closed'}>
        <button on:click={() => (drawerOpen = !drawerOpen)}>
            <div class="inner">
                <span class="aw-label aw-u-color-text-primary">Ticket Editor</span>
                <span class="aw-icon-chevron-down" />
            </div>
        </button>
        {#if drawerOpen}
            <hr />
            <div class="form-wrapper" transition:slide>
                <Form bind:name bind:tribe />
            </div>
        {/if}
    </div>
</Main>

<style lang="scss">
    .desktop {
        display: contents;
    }

    .drawer {
        display: none;
    }

    @media screen and (max-width: 1024px) {
        .desktop {
            display: none;
        }

        .drawer {
            display: flex;
            flex-direction: column;

            position: sticky;
            bottom: 0;
            padding-block: 0;
            background-color: hsl(var(--aw-color-subtle));
            backdrop-filter: blur(40px);
            z-index: 9999999;

            max-height: 100vh;
            overflow-y: auto;

            [class^='aw-icon-'] {
                transition: var(--transition);
                transform: rotate(180deg);
            }

            &[data-state='open'] {
                [class^='aw-icon-'] {
                    transform: rotate(0deg);
                }
            }

            > button {
                background: linear-gradient(
                        93deg,
                        rgba(253, 54, 110, 0.2) 0.29%,
                        rgba(35, 35, 37, 0.2) 52.57%,
                        rgba(35, 35, 37, 0.2) 100%
                    ),
                    #232325;
                padding-block: 1.8125rem;
                width: 100%;

                .inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 512px;
                    margin-inline: auto;
                    padding-inline: var(--p-padding-inline);
                }
            }

            hr {
                border-block-start: 1px solid hsl(var(--aw-color-smooth));
            }

            > .form-wrapper {
                max-width: 512px;
                height: 100%;
                overflow-y: auto;

                margin-inline: auto;
                padding-block-end: 1rem;
                padding-inline: 1.25rem;
            }
        }

        .aw-container {
            padding-block-start: 0;

            :global(nav) {
                /* padding-block-start: 0; */
                margin-block-start: 0;
            }
        }
    }
</style>
