<script module lang="ts">
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
    import { preventDefault } from 'svelte/legacy';

    let email = $state('');
    let submitted = $state(false);
    let error: string | undefined = $state();
    let submitting = $state(false);

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
                <form method="post" class="contents" onsubmit={preventDefault(handleSubmit)}>
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
                        <Button
                            type="submit"
                            disabled={submitting}
                            event="newsletter-subscribe-submit">Sign up</Button
                        >
                    </div>

                    {#if error}
                        <span class="text"> Something went wrong. Please try again later. </span>
                    {/if}
                </form>
            {/if}
        </div>
    </div>
</div>
