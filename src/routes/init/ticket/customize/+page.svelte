<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import { quadOut } from 'svelte/easing';
    import { fly, type TransitionConfig } from 'svelte/transition';
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
</Main>

<style lang="scss">
    .desktop {
        display: contents;
    }

    @media screen and (max-width: 1024px) {
        .desktop {
            display: none;
        }
    }
</style>
