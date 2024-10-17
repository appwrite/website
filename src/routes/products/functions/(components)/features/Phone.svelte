<script>
    import { fade } from 'svelte/transition';
</script>

<div
    class="phone absolute left-1/2 h-[550px] w-[275px] shrink-0 -translate-x-1/2 bg-white/0.08 p-2"
>
    <div class="inner relative h-full w-full rounded-4xl bg-white">
        <div class="inner-phone light">
            <div class="text-center">
                <p class="text-label font-aeonik-pro">Sign up</p>
                <p class="text-sub-body text-secondary">
                    Please enter your details to create an account
                </p>
            </div>

            <span class="with-sep" transition:fade={{ duration: 100 }}>or</span>
            <div class="oauth-btns" transition:fade={{ duration: 100 }}></div>

            <div class="inputs mt-7 flex flex-col gap-3">
                <input
                    disabled
                    type="email"
                    id="email"
                    placeholder="Email address"
                    autocomplete="off"
                    class="text-micro flex h-7 rounded-lg border border-[#d8d8db] py-2 px-3 -tracking-tight"
                />

                <input
                    disabled
                    type="password"
                    id="password"
                    placeholder="Password"
                    autocomplete="off"
                    class="text-micro flex h-7 rounded-lg border border-[#d8d8db] py-2 px-3 -tracking-tight"
                />
            </div>
            <button
                class="text-micro mt-3 flex h-7 w-full items-center justify-center rounded-lg bg-[#0F172A] font-medium -tracking-tight text-white"
                >Sign up</button
            >
        </div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .phone {
        @include gradients.border-gradient;
        --m-border-size: 1px;
        --m-border-radius: 2.5rem;
        --m-border-gradient-after: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );

        .inner {
            &::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0.5rem;

                border-radius: 100rem;
                background: var(--label-color-light-primary, #000);

                width: 6.25rem;
                height: 0.25rem;
            }
        }
    }

    .inner-phone {
        padding-block: 3rem;
        padding-inline: 1rem;

        color: rgba(67, 67, 71, 1);
        text-align: left;

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
    }
</style>
