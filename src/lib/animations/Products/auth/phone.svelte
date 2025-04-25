<script lang="ts">
    import { fade } from 'svelte/transition';
    import { authController } from '.';
    import { objectKeys } from '$lib/utils/object';
    import { flip } from '$lib/utils/flip';

    const { state } = authController;

    $: controlsEnabled = $state.showControls && Object.values($state.controls).some(Boolean);
</script>

<div data-theme-ignore class="inner-phone light">
    <p class="title">Create an Account</p>
    <p class="subtitle">Please enter your details</p>
    <div class="inputs">
        <fieldset>
            <label for="name">Your Name</label>
            <input type="name" id="name" placeholder="Enter your name" bind:value={$state.name} />
        </fieldset>
        <fieldset>
            <label for="email">Your Email</label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                bind:value={$state.email}
            />
        </fieldset>
        <fieldset>
            <label for="password">Create Password</label>
            <input
                type="password"
                id="password"
                placeholder="Enter Password"
                bind:value={$state.password}
            />
        </fieldset>
    </div>
    <button class="sign-up">Sign Up</button>
    {#if controlsEnabled}
        <span class="with-sep" transition:fade={{ duration: 100 }}>or sign up with</span>
        <div class="oauth-btns" transition:fade={{ duration: 100 }}>
            {#each objectKeys($state.controls).filter((p) => $state.controls[p]) as provider (provider)}
                <button
                    class="oauth"
                    transition:fade={{ duration: 100 }}
                    animate:flip={{ duration: 250 }}
                >
                    <div class="inner">
                        <span class="web-icon-{provider.toLowerCase()}"></span>
                        <span>{provider}</span>
                    </div>
                </button>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .inner-phone {
        padding-block: 3rem;
        padding-inline: 1rem;

        color: rgba(67, 67, 71, 1);
        text-align: left;

        .title {
            color: #434347;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px; /* 137.5% */
            letter-spacing: -0.224px;
        }

        .subtitle {
            color: var(--greyscale-700, var(--color-greyscale-700, #56565c));
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
            letter-spacing: -0.196px;
        }

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-block-start: 1.5rem;

            fieldset {
                display: flex;
                flex-direction: column;
                gap: 0.3125rem;
                width: 100%;

                label {
                    color: var(--color-greyscale-700, #56565c);
                    font-family: Inter;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px; /* 133.333% */
                    letter-spacing: -0.168px;
                }

                input {
                    all: unset;
                    display: flex;
                    padding: 8px 12px;
                    align-items: flex-start;
                    align-self: stretch;
                    border-radius: 8px;
                    border: 1px solid #d8d8db;

                    color: #434347;
                    font-family: Inter;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px; /* 133.333% */
                    letter-spacing: -0.168px;
                }
            }
        }

        .sign-up {
            padding: 0.375rem 0.75rem;
            text-align: center;
            width: 100%;
            margin-block-start: 1.25rem;

            border-radius: 0.5rem;
            background: var(--appwrite-purple, #7c67fe);
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);

            color: var(--color-bw-white, #fff);
            text-align: center;

            /* Responsive/SubBody-500 */
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 157.143% */
            letter-spacing: -0.07px;
        }

        .with-sep {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;

            font-family: Inter;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25rem; /* 166.667% */
            letter-spacing: -0.0105rem;
            color: hsl(var(--web-color-greyscale-500));

            margin-block-start: 0.75rem;

            &::before,
            &::after {
                content: '';
                height: 1px;
                flex-grow: 1;
                background-color: hsl(var(--web-color-greyscale-200));
            }
        }

        .oauth-btns {
            --gap: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: var(--gap);
            margin-block-start: 0.75rem;
        }

        .oauth {
            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 0.5rem;
            border: 1px solid #d9d9d9;
            color: hsl(var(--web-color-greyscale-750));
            text-align: center;

            /* Responsive/Caption-500 */
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.375rem; /* 157.143% */
            letter-spacing: -0.01575rem;

            flex: 1 1 calc(50% - var(--gap));
            padding-block: 0.375rem;
            position: relative;
            height: 2.125rem;

            .inner {
                position: absolute;
                left: 50%;
                top: 50%;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                transform: translate(-50%, -50%) scale(var(--inverse-sx, 1), var(--inverse-sy, 1));
            }
        }
    }
</style>
