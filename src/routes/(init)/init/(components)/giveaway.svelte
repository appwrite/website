<script lang="ts">
    import TicketCard from '../tickets/(components)/ticket-card.svelte';
    import Avatar from '../(assets)/avatar.png';
    import { classNames } from '$lib/utils/classnames';
    import { Button } from '$lib/components/ui';
</script>

<div class="container grid min-h-[65vh] w-full grid-cols-1 place-items-center py-20 md:grid-cols-2">
    <div>
        <h2 class="text-title text-primary font-aeonik-pro mb-4">
            Get a ticket and enter<br /> our Init giveaway
        </h2>
        <p class="text-secondary text-body mb-8">
            Create, customize and share your ticket to get the chance to win exclusive Init swag.
        </p>
        <Button href="/init/tickets/customize" variant="secondary">Claim your ticket</Button>
    </div>
    <div class="relative flex w-full items-center">
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
