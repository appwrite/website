<script lang="ts">
    import { Switch } from '$lib/components';
    import { objectKeys } from '$lib/utils/object';
    import { authController } from '.';

    const { state } = authController;

    const getIcon = (provider: string) => {
        return `web-icon-${provider.toLowerCase()}`;
    };
</script>

<div class="auth-controls">
    {#each objectKeys($state.controls) as provider, i}
        {@const isLast = i === objectKeys($state.controls).length - 1}
        <div>
            <span class={getIcon(provider)}></span>
            <span>{provider}</span>
            <Switch bind:checked={$state.controls[provider]} />
        </div>
        {#if !isLast}
            <div class="sep"></div>
        {/if}
    {/each}
</div>

<style lang="scss">
    .auth-controls {
        display: flex;
        flex-direction: column;

        padding: 0.75rem;

        width: 12.5rem;

        > div {
            display: flex;
            align-items: center;

            > :nth-child(2) {
                margin-left: 0.75rem;
                color: hsl(var(--web-color-white));

                font-family: Inter;
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 500;
                line-height: 1.375rem; /* 157.143% */
                letter-spacing: -0.00394rem;
            }

            > :global(:nth-child(3)) {
                margin-left: auto;
            }
        }

        .sep {
            width: 100%;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.12);
            margin-block: 0.5rem;
        }

        [class*='icon-'] {
            --size: 2rem;
            font-size: var(--size);
            width: var(--size);
            height: var(--size);
            color: hsl(var(--web-color-greayscale-50));

            position: relative;

            &::before {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>
