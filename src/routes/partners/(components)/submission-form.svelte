<script lang="ts">
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { socials } from '$lib/constants';
    import { classNames } from '$lib/utils/classnames';
    import { getReferrerAndUtmSource } from '$lib/utils/utm';

    let name = '';
    let email = '';
    let companyName = '';
    let companyUrl = '';
    let message = '';

    let submitted = false;
    let submitting = false;
    let error: string | undefined;

    async function handleSubmit() {
        error = undefined;
        submitting = true;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/conversations/partner`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
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

    const list = [
        'Grow your business',
        'Work with the latest technology',
        'Deliver your clients a great experience'
    ];
</script>

<div
    id="become-a-partner"
    class={classNames(
        'relative -mb-[6rem] flex min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-black/8',
        'before:absolute before:inset-0 before:top-0 before:left-0 before:-z-10 before:block before:h-full before:bg-[radial-gradient(circle_at_-15%_-30%,_hsla(343,_98%,_60%,_0.2)_0px,_transparent_40%)] before:blur-2xl',
        'after:absolute after:inset-0 after:top-0 after:right-0 after:-z-10 after:mt-auto after:mb-0 after:block after:h-full after:bg-[radial-gradient(circle_at_120%_125%,_hsla(177,_53%,_69%,_0.2)_0px,_transparent_40%)] after:blur-2xl'
    )}
>
    {#if !submitted}
        <div
            class="container mx-auto box-border flex w-full flex-col justify-between gap-8 py-20 md:flex-row"
        >
            <div class="flex max-w-sm flex-col gap-6">
                <h2 class="text-display font-aeonik-pro text-primary">Become a Partner</h2>
                <p class="text-body text-secondary font-medium">
                    Our team will review your application and follow up to ensure we're a perfect
                    fit.
                </p>

                <ul class="space-y-4">
                    {#each list as item}
                        <li class="text-body flex items-center gap-2 font-medium">
                            <img src="/images/icons/colored/check.svg" alt="checkmark icon" />
                            {item}
                        </li>
                    {/each}
                </ul>
            </div>

            <form
                method="post"
                on:submit|preventDefault={handleSubmit}
                class="flex flex-col gap-4 md:min-w-md lg:min-w-[580px]"
            >
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div class="flex flex-col gap-1">
                        <div class="block">Full name</div>
                        <input
                            required
                            class="web-input-text"
                            type="text"
                            placeholder="Walter O'Brien"
                            aria-label="Full name"
                            bind:value={name}
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
                            bind:value={email}
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

                    <div class="flex flex-col gap-1 sm:col-span-2">
                        <div class="block">Any other details you'd like to share?</div>
                        <textarea
                            required
                            name="message"
                            class="web-input-text"
                            placeholder="Your message..."
                            aria-label="Message"
                            bind:value={message}
                        ></textarea>
                    </div>
                </div>

                <div class="web-u-flex-vertical-reverse-mobile flex justify-between gap-4">
                    <p class="text-caption web-u-max-width-380">
                        {#if error}
                            {error}
                        {/if}
                        <!--This form is protected by reCAPTCHA, and the Google
                        <a href="/privacy" class="web-link">Privacy Policy</a> and
                        <a href="/terms" class="web-link">Terms of Service</a> apply.-->
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
        <div class="animate-fade-in container mx-auto flex max-w-sm flex-col gap-4 text-center">
            <div class="border-smooth mb-6 flex flex-col gap-4 border-b pb-8">
                <h2 class="text-display text-primary font-aeonik-pro">Thank you for applying</h2>
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
                                <span class={social.icon} aria-hidden="true"></span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    {/if}
</div>
