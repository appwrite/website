<div class="wrapper">
    <slot />
</div>

<style lang="scss">
    .wrapper {
        display: contents;
        --p-padding-inline: clamp(1.25rem, 4vw, 120rem);

        :global(.hero) {
            display: grid;
            grid-template-columns: 1fr min(57%, 770px);
            gap: clamp(3rem, 6vw, 7.5rem);
            justify-content: space-between;

            padding-inline: var(--p-padding-inline);
            padding-block-start: 4rem;
            max-width: 1440px;
            margin-inline: auto;
        }

        @media screen and (max-width: 1023px) {
            :global(.hero) {
                display: grid;
                grid-template-columns: var(--p-padding-inline) 1fr var(--p-padding-inline);
                row-gap: 3rem;
                column-gap: 0;
                padding-block-start: 3rem;
                padding-inline: 0;

                max-width: 512px;
                margin-inline: auto;

                > :global(*) {
                    grid-column: 2;
                }
            }

            :global(.desktop-left) {
                /* To put the children in the flex container */
                display: contents;

                > :global(*) {
                    grid-column: 2;
                }
            }
        }
    }
</style>
