<script context="module" lang="ts">
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import Button from './ui/button.svelte';

    export async function newsletter(name: string, email: string) {
        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/newsletter/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        });
        return response;
    }
</script>

<script lang="ts">
    let email = '';
    let name = '';
    let submitted = false;
    let error: string | undefined;
    let submitting = false;

    async function submit() {
        submitting = true;
        error = undefined;
        const response = await newsletter(name, email);
        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        submitted = true;
    }
</script>

<div class="pre-footer-bg" style="pointer-events:none;">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="692"
        height="1171"
        viewBox="0 0 692 1171"
        fill="none"
        style="max-inline-size:100%;"
    >
        <g opacity="0.4" filter="url(#filter0_f_1577_37321)">
            <path
                d="M-96.9811 29.2126C-329.155 33.7322 -513.706 225.611 -509.186 457.785C-504.667 689.959 -312.788 874.51 -80.6141 869.99C33.1857 867.775 -132.237 523.592 -36.8339 437.579C62.4044 348.109 394.063 627.529 391.759 509.155C387.239 276.98 135.193 24.693 -96.9811 29.2126Z"
                fill="url(#paint0_radial_1577_37321)"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_1577_37321"
                x="-809.268"
                y="-270.847"
                width="1501.04"
                height="1440.92"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1577_37321" />
            </filter>
            <radialGradient
                id="paint0_radial_1577_37321"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-88.7975 449.601) rotate(178.885) scale(420.468 420.468)"
            >
                <stop offset="0.281696" stop-color="#FE9567" />
                <stop offset="0.59375" stop-color="#FD366E" />
            </radialGradient>
        </defs>
    </svg>
</div>

<div class="web-big-padding-section">
    <div class="py-10">
        <div class="web-big-padding-section-level-2">
            <div class="container">
                <div class="grid gap-8 md:grid-cols-2">
                    <div class="">
                        <div
                            class="web-u-max-inline-size-none-mobile"
                            class:max-w-[380px]={!submitted}
                        >
                            <section class="web-gap-5 flex flex-col">
                                <h2 class="text-title font-aeonik-pro text-primary">
                                    Subscribe to our newsletter
                                </h2>
                                <p class="text-description web-u-padding-block-end-40">
                                    Sign up to our company blog and get the latest insights from
                                    Appwrite. Learn more about engineering, product design, building
                                    community, and tips & tricks for using Appwrite.
                                </p>
                            </section>
                        </div>
                    </div>
                    {#if submitted}
                        <div class="flex items-center gap-2">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="9"
                                    cy="9"
                                    r="8"
                                    fill="#FD366E"
                                    fill-opacity="0.08"
                                    stroke="#FD366E"
                                    stroke-opacity="0.32"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5.25 10.5L7.75 12.5L12.75 6"
                                    stroke="#E4E4E7"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <span class="text">
                                Thank you for subscribing! An email has been sent to your inbox.
                            </span>
                        </div>
                    {:else}
                        <form
                            method="post"
                            on:submit|preventDefault={submit}
                            class="flex flex-col gap-4"
                        >
                            <div class="flex flex-col gap-1">
                                <label for="name">Your name</label>
                                <input
                                    class="web-input-text"
                                    type="text"
                                    placeholder="Enter your name"
                                    id="name"
                                    name="name"
                                    required
                                    bind:value={name}
                                />
                            </div>
                            <div class="flex flex-col gap-1">
                                <label for="email">Your email</label>
                                <input
                                    class="web-input-text"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    id="email"
                                    name="email"
                                    bind:value={email}
                                />
                            </div>
                            <Button type="submit" disabled={submitting}>Sign up</Button>
                            {#if error}
                                <span class="text">
                                    Something went wrong. Please try again later.
                                </span>
                            {/if}
                        </form>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .pre-footer-bg {
        position: absolute;
        top: clamp(300px, 50vw, 50%);
        left: clamp(300px, 50vw, 50%);
        transform: translate(-50%, -70%);
        width: clamp(1200px, 100vw, 3000px);
        height: auto;
        max-inline-size: unset;
        max-block-size: unset;
    }
</style>
