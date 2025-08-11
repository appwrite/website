<script lang="ts">
    import TicketCard from '../tickets/(components)/ticket-card.svelte';
    import Avatar from '../(assets)/avatar.png';
    import InitGiveaway from '../(assets)/init-giveaway.png';
    import { classNames } from '$lib/utils/classnames';
    import { Button } from '$lib/components/ui';
    import { Media } from '$lib/UI';
</script>

<div
    class="container grid min-h-[65vh] w-full grid-cols-1 place-items-center py-5 md:grid-cols-2 md:py-20"
>
    <div class="flex flex-col gap-12">
        <Media
            src={InitGiveaway}
            alt="Init giveaway"
            class="web-media md:max-h-[304px] md:max-w-[467px]"
        />

        <div>
            <h2 class="text-title text-primary font-aeonik-pro mb-4">
                Get a ticket and<br />enter our giveaway
            </h2>
            <p class="text-secondary text-main-body mb-6">
                Create, customize and share your ticket to get the chance to win exclusive Init
                swag.
            </p>
            <Button href="/init/tickets/customize" variant="secondary">Claim your ticket</Button>
        </div>
    </div>

    <div
        class="relative me-8 hidden w-full items-center gap-4 md:me-0 md:flex md:scale-[1.073] md:gap-0"
    >
        <div style:transform="rotate(4deg)" class="absolute right-40 z-0">
            <TicketCard
                $id="1"
                disableEffects
                name="Walter"
                title="Software Developer"
                id={123456}
                avatar_url={Avatar}
            />
        </div>

        <div
            style:transform="rotate(-5deg) scale(.95)"
            class={classNames('absolute right-20 -z-1')}
        >
            <TicketCard
                $id="1"
                disableEffects
                name="Walter"
                title="Software Developer"
                id={123456}
                avatar_url={Avatar}
            />
        </div>
        <div style:transform="rotate(7deg) scale(.90)" class={classNames('absolute right-0 -z-2')}>
            <TicketCard
                $id="1"
                disableEffects
                name="Walter"
                title="Software Developer"
                id={123456}
                avatar_url={Avatar}
            />
        </div>
    </div>
</div>
