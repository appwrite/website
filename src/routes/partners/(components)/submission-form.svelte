<script lang="ts">
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { socials } from '$lib/constants';
    import { classNames } from '$lib/utils/classnames';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';

    let personName = '';
    let personEmail = '';
    let companyName = '';
    let companyUrl = '';
    let message = '';

    let error: string | undefined;
    let submitted = false;
    let submitting = false;

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/conversations/partners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personName,
                personEmail,
                companyName,
                companyUrl,
                message,
                ...getReferrerAndUtmSource()
            })
        });
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        submitted = true;
        submitting = false;
    }
</script>

<div
    class={classNames(
        'relative -mb-[6rem] flex min-h-[75vh] flex-col items-center justify-center bg-black/8',
        'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_-15%_-30%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)]',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_125%,_hsla(177,_53%,_69%,_0.2)_0px,_transparent_40%)]'
    )}
>
    {#if !submitted}
        <div
            class="container mx-auto box-border flex w-full flex-col justify-between py-40 max-sm:space-y-8 md:flex-row"
        >
            <div class="flex max-w-sm flex-col gap-6">
                <h2 class="text-display text-primary">Become a Partner</h2>
                <p class="text-body text-secondary font-medium">
                    Our team will review your application and follow up to ensure we're a perfect
                    fit.
                </p>
            </div>

            <form method="post" on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="flex flex-col gap-1">
                        <div class="block">Full name</div>
                        <input
                            required
                            class="web-input-text"
                            type="text"
                            placeholder="Walter O'Brien"
                            aria-label="Full name"
                            bind:value={personName}
                        />
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="block">Email address</div>
                        <input
                            required
                            class="web-input-text"
                            type="email"
                            placeholder="walter@company.com"
                            aria-label="Email address"
                            bind:value={personEmail}
                        />
                    </div>

                    <div class="flex flex-col gap-1">
                        <div class="block">Company name</div>
                        <input
                            required
                            class="web-input-text"
                            type="text"
                            placeholder="Acme Inc."
                            aria-label="Company name"
                            bind:value={companyName}
                        />
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="block">Company URL</div>
                        <input
                            class="web-input-text"
                            type="url"
                            placeholder="https://"
                            aria-label="Company URL"
                            bind:value={companyUrl}
                        />
                    </div>

                    <div class="flex flex-col gap-1 md:col-span-2">
                        <div class="block">Any other details you'd like to share?</div>
                        <textarea
                            required
                            name="message"
                            class="web-input-text"
                            placeholder="Your message..."
                            aria-label="Message"
                            bind:value={message}
                        />
                    </div>
                </div>

                <div class="web-u-flex-vertical-reverse-mobile flex justify-between gap-4">
                    <p class="text-caption web-u-max-width-380">
                        {#if error}
                            {error}
                        {/if}
                    </p>
                    <button
                        type="submit"
                        class="web-button web-u-inline-width-100-percent-mobile-break1 cursor-pointer self-center"
                        disabled={submitting}
                    >
                        <span>Submit application</span>
                    </button>
                </div>
            </form>
        </div>
    {:else}
        <div class="container animate-fade-in mx-auto flex max-w-sm flex-col gap-4 text-center">
            <div class="border-smooth mb-6 flex flex-col gap-4 border-b pb-8">
                <h2 class="text-display text-primary">Thank you for applying</h2>
                <p class="text-body text-secondary font-medium">
                    Our team will review your application and follow up to ensure we're a perfect
                    fit.
                </p>
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
                <h3 class="text-label text-primary">Follow us</h3>
                <ul class="mx-auto flex gap-2">
                    {#each socials as social}
                        <li>
                            <a
                                href={social.link}
                                class="web-icon-button"
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span class={social.icon} aria-hidden="true" />
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    {/if}
</div>
