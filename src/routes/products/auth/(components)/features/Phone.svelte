<script>
    import { fade } from 'svelte/transition';
</script>

<div
    class="phone absolute left-1/2 h-[600px] w-[320px] shrink-0 -translate-x-1/2 rounded-[2.75rem] !bg-white/8 p-2"
>
    <div class="inner relative h-full w-full rounded-[2.25rem] bg-white p-5">
        <div class="inner-phone light">
            <div class="mx-auto max-w-3xs space-y-2 text-center">
                <p class="text-label font-aeonik-pro">Sign up</p>
                <p class="text-sub-body text-secondary">
                    Please enter your details to create an account
                </p>
            </div>

            <div class="mt-8 mb-5 flex items-center gap-2">
                <button
                    class="text-eyebrow flex flex-1 items-center justify-center gap-1 rounded-md border border-[#E2E8F0] py-1 font-medium tracking-tight text-[#0F172A]"
                >
                    <span class="web-icon-google !text-sm"></span>
                    Google</button
                >
                <button
                    class="text-eyebrow flex flex-1 items-center justify-center gap-1 rounded-md border border-[#E2E8F0] py-1 font-medium tracking-tight text-[#0F172A]"
                >
                    <span class="web-icon-github !text-sm"></span>
                    GitHub</button
                >
            </div>

            <span class="with-sep" transition:fade={{ duration: 100 }}>or</span>
            <div class="oauth-btns" transition:fade={{ duration: 100 }}></div>

            <div class="inputs mt-2 flex flex-col gap-3">
                <input
                    disabled
                    type="email"
                    id="email"
                    placeholder="Email address"
                    autocomplete="off"
                    class="text-eyebrow flex h-7 rounded-lg border border-[#d8d8db] px-3 py-2 -tracking-tight"
                />

                <input
                    disabled
                    type="password"
                    id="password"
                    placeholder="Password"
                    autocomplete="off"
                    class="text-eyebrow flex h-7 rounded-lg border border-[#d8d8db] px-3 py-2 -tracking-tight"
                />
            </div>
            <button
                class="text-eyebrow mt-3 flex h-7 w-full items-center justify-center rounded-lg bg-[#0F172A] font-medium -tracking-tight text-white"
                >Sign up</button
            >
        </div>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .phone {
        @include gradients.border-gradient;

        --m-border-radius: 2.75rem;
        --m-border-gradient-before: linear-gradient(
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
