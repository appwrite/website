<script context="module" lang="ts">
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';

    export const subscribeToNewsletter = async (email: string) => {
        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/partners/contact`, {
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
    let name = '';
    let email = '';
    let companyName = '';
    let companyUrl = '';
    let message = '';

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
                    on:submit|preventDefault={handleSubmit}
                    class="mt-4 flex w-full flex-col gap-4 lg:mt-0"
                >
                    <div class="flex w-full text-left">
                        <ul class="web-form-list grid w-full gap-4 md:grid-cols-2">
                            <li class="web-form-item">
                                <label class="text-caption block" for="name">Full name</label>
                                <input
                                    required
                                    class="web-input-text w-full"
                                    type="text"
                                    placeholder="Walter"
                                    id="name"
                                    bind:value={name}
                                />
                            </li>

                            <li class="web-form-item">
                                <label class="text-caption block" for="workEmail">Email</label>
                                <input
                                    required
                                    class="web-input-text w-full"
                                    type="email"
                                    placeholder="walter@appwrite.io"
                                    id="workEmail"
                                    bind:value={email}
                                />
                            </li>
                            <li class="web-form-item">
                                <label class="text-caption block" for="companyName"
                                    >Company name</label
                                >
                                <input
                                    required
                                    class="web-input-text w-full"
                                    type="text"
                                    placeholder="Acme Corp"
                                    id="companyName"
                                    bind:value={companyName}
                                />
                            </li>

                            <li class="web-form-item flex-col gap-1">
                                <label class="text-caption block" for="companyUrl"
                                    >Company url</label
                                >
                                <input
                                    required
                                    class="web-input-text w-full"
                                    type="url"
                                    placeholder="https://appwrite.io"
                                    id="companyUrl"
                                    bind:value={companyUrl}
                                />
                            </li>
                            <li class="web-form-item flex-col gap-1 sm:col-span-1 md:col-span-2">
                                <label class="text-caption block" for="message"
                                    >Any other details you’d like to share?</label
                                >
                                <textarea
                                    required
                                    class="web-input-text w-full"
                                    id="message"
                                    placeholder="Your message"
                                    bind:value={message}
                                />
                            </li>
                        </ul>
                    </div>
                    <div
                        class="flex flex-col items-center justify-between gap-4 sm:flex-col md:flex-col lg:flex-row"
                    >
                        <p class="text-caption max-w-sm self-start text-left lg:self-center">
                            {#if error}
                                {error}
                            {:else}
                                This form is protected by reCAPTCHA, and the Google Privacy Policy
                                and Terms of Service apply.
                            {/if}
                        </p>
                        <button
                            type="submit"
                            disabled={submitting}
                            class="web-button is-secondary cursor-pointer px-16!"
                        >
                            <span>Send</span>
                        </button>
                    </div>
                </form>
            {/if}
        </div>
    </div>
</div>
