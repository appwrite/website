<script context="module" lang="ts">
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { Button } from '$lib/components/ui';

    export const subscribeToNewsletter = async (email: string) => {
        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/newsletter/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        });
        return response;
    };
</script>

<script lang="ts">
    let email = '';
    let submitted = false;
    let error: string | undefined;
    let submitting = false;

    const handleSubmit = async () => {
        submitting = true;
        error = undefined;
        const response = await subscribeToNewsletter(email);
        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        submitted = true;
    };
</script>

<div class="relative max-h-[35vh]">
    <div class="relative z-10 py-10">
        <div class="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
            <section class="flex flex-col gap-5">
                <h3 class="text-display font-aeonik-pro text-primary tracking-compressed">
                    Subscribe to our newsletter
                </h3>
                <p class="text-description text-primary">
                    Sign up to our company blog and get the latest insights from Appwrite. Learn
                    more about engineering, product design, building community, and tips & tricks
                    for using Appwrite.
                </p>
            </section>

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
                <form method="post" class="contents" on:submit|preventDefault={handleSubmit}>
                    <div
                        class="border-primary/12 focus-within:border-primary/48 flex w-full max-w-sm justify-between gap-1 rounded-xl border bg-white/4 py-1 pr-1 pl-4 backdrop-blur-2xl transition-colors"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            class="text-primary flex-1 appearance-none border-none outline-none"
                            required
                            id="email"
                            name="email"
                            bind:value={email}
                        />
                        <Button type="submit" disabled={submitting}>Sign up</Button>
                    </div>

                    {#if error}
                        <span class="text"> Something went wrong. Please try again later. </span>
                    {/if}
                </form>
            {/if}
        </div>
    </div>

    <div class="gradient-container relative z-0">
        <div class="gradient gradient-1"></div>
        <div class="gradient gradient-2"></div>
        <div class="gradient gradient-3"></div>
        <div class="gradient gradient-4"></div>
        <div class="gradient gradient-5"></div>
        <div class="gradient gradient-6"></div>
        <div class="gradient gradient-7"></div>
        <div class="gradient gradient-8"></div>
        <div class="gradient gradient-9"></div>
        <div class="gradient gradient-10"></div>
        <div class="gradient gradient-11"></div>
    </div>
</div>

<style lang="scss">
    .gradient-container {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100vh;

        background-color: transparent;
    }

    .gradient {
        position: absolute;
        border-radius: 50%;
        transform-origin: center;
        filter: blur(100px);
        mix-blend-mode: normal;
    }

    .gradient-1 {
        width: 120%;
        height: 60%;
        top: 70%;
        left: -30%;
        background: radial-gradient(
            ellipse at center,
            rgba(253, 54, 110, 0.55) 0%,
            rgba(253, 54, 110, 0) 70%
        );
        filter: blur(180px);
        transform: rotate(-15deg);
    }

    .gradient-2 {
        width: 100%;
        height: 80%;
        top: 40%;
        left: 20%;
        background: radial-gradient(
            ellipse at center,
            rgba(254, 149, 103, 0.55) 0%,
            rgba(254, 149, 103, 0) 70%
        );
        filter: blur(130px);
        transform: rotate(25deg);
    }

    .gradient-3 {
        width: 120%;
        height: 30%;
        top: 30%;
        left: -30%;
        background: linear-gradient(
            135deg,
            rgba(254, 149, 103, 0.55) 0%,
            rgba(240, 46, 101, 0.55) 100%
        );
        filter: blur(130px);
        transform: rotate(-10deg);
    }

    .gradient-4 {
        width: 80%;
        height: 40%;
        top: 15%;
        left: 30%;
        background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0) 70%
        );
        filter: blur(108px);
    }

    .gradient-5 {
        width: 140%;
        height: 80%;
        top: 20%;
        left: -5%;
        background: radial-gradient(
            ellipse at center,
            rgba(253, 54, 110, 0.6) 0%,
            rgba(253, 54, 110, 0) 70%
        );
        filter: blur(250px);
        transform: rotate(15deg);
    }

    .gradient-6 {
        width: 150%;
        height: 100%;
        top: -40%;
        left: 20%;
        background: radial-gradient(
            ellipse at center,
            rgba(253, 54, 110, 0.6) 0%,
            rgba(253, 54, 110, 0) 70%
        );
        filter: blur(250px);
        transform: rotate(-25deg);
    }

    .gradient-7 {
        width: 70%;
        height: 10%;
        top: 10%;
        left: 15%;
        background: radial-gradient(
            ellipse at center,
            rgba(237, 237, 240, 0.45) 0%,
            rgba(237, 237, 240, 0) 70%
        );
        filter: blur(63px);
        mix-blend-mode: soft-light;
        transform: rotate(-15deg);
    }

    .gradient-8 {
        width: 60%;
        height: 10%;
        top: 20%;
        left: 0%;
        background: radial-gradient(
            ellipse at center,
            rgba(237, 237, 240, 0.35) 0%,
            rgba(237, 237, 240, 0) 70%
        );
        filter: blur(50px);
        mix-blend-mode: overlay;
        transform: rotate(-15deg);
    }

    .gradient-9 {
        width: 60%;
        height: 8%;
        top: 20%;
        left: 30%;
        background: radial-gradient(
            ellipse at center,
            rgba(237, 237, 240, 0.45) 0%,
            rgba(237, 237, 240, 0) 70%
        );
        filter: blur(63px);
        mix-blend-mode: soft-light;
        transform: rotate(-15deg);
    }

    .gradient-10 {
        width: 55%;
        height: 8%;
        top: 35%;
        left: 25%;
        background: radial-gradient(
            ellipse at center,
            rgba(237, 237, 240, 0.45) 0%,
            rgba(237, 237, 240, 0) 70%
        );
        filter: blur(63px);
        mix-blend-mode: soft-light;
        transform: rotate(-15deg);
    }

    .gradient-11 {
        width: 120%;
        height: 40%;
        top: 0%;
        left: -10%;
        background: radial-gradient(
            ellipse at center,
            rgba(254, 149, 103, 0.5) 0%,
            rgba(254, 149, 103, 0) 70%
        );
        filter: blur(108px);
        transform: rotate(-5deg);
        opacity: 0.65;
    }
</style>
