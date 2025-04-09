<script lang="ts">
    import { getMockContributions } from '../helpers';
    import { Ticket } from './ticket';

    const tickets = [
        {
            name: 'Eldad',
            title: 'Founder'
        },
        {
            name: 'Jesse',
            title: 'Design Engineer'
        },
        {
            name: 'Bradley',
            title: 'Platform Engineer'
        },
        {
            name: 'Caio',
            title: 'Visual Designer'
        },
        {
            name: 'Matej',
            title: 'Platform Engineer'
        },
        {
            name: 'Torsten',
            title: 'Product Architect'
        },
        {
            name: 'Jade',
            title: 'Visual Designer'
        },
        {
            name: 'Khushboo',
            title: 'Platform Engineer'
        }
    ];
</script>

<div class="col">
    {#each Array.from({ length: 2 }) as _}
        <div class="ticket-preview-wrapper">
            {#each tickets as { name, title }, i}
                {@const id = i + 1}
                <div class="ticket">
                    <Ticket
                        disableEffects
                        contributions={getMockContributions()}
                        {name}
                        {title}
                        {id}
                    />
                </div>
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    @use '$scss/abstract/functions' as f;

    .col {
        display: flex;
        flex-direction: column;
        gap: f.pxToRem(32);

        @keyframes scroll {
            0% {
                transform: translateX(var(--x-translate-start)) translateZ(0);
            }
            100% {
                transform: translateX(var(--x-translate-end)) translateZ(0);
            }
        }

        .ticket-preview-wrapper {
            display: flex;
            width: 400vw;
            animation: scroll 60s linear infinite;
            overflow: hidden;
            pointer-events: none;
            touch-action: none;

            --x-translate-start: -100vw;
            --x-translate-end: 100vw;

            .ticket {
                width: 50vw;
                margin-right: 32px;
            }

            &:nth-of-type(even) {
                animation-direction: reverse;
            }

            @media (prefers-reduced-motion: reduce) {
                animation-play-state: paused;
            }

            @media screen and (max-width: 768px) {
                width: 800vw;

                .ticket {
                    width: 100vw;
                }
            }
        }
    }
</style>
