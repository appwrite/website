<script lang="ts">
    import { page } from '$app/stores';

    export let date: string | undefined = undefined;
    let showFeedback = false;
    let feedbackType = '';
    let email = '';
    let comment = '';
    let error: string | undefined;
    let submitted = false;
    let submitting = false;

    async function handleSubmit() {
        submitting = true;
        error = undefined;
        const response = await fetch('https://growth.appwrite.io/v1/feedback/docs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                type: feedbackType,
                route: $page.route.id,
                comment
            })
        });
        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        comment = email = '';
        submitted = true;
    }

    function reset() {
        comment = email = '';
        feedbackType = '';
        submitted = false;
        error = undefined;
    }

    $: if (!showFeedback) {
        reset();
    }
</script>

<section class="aw-content-footer">
    <header class="aw-content-footer-header u-width-full-line">
        <div
            class="u-flex u-gap-32 u-main-space-between u-cross-center u-width-full-line"
            style="flex-wrap: wrap-reverse;"
        >
            <div class="u-flex u-gap-16 u-cross-center">
                <h5 class="aw-main-body-600 aw-u-color-text-primary">Was this page helpful?</h5>
                <div class="u-flex u-gap-8">
                    <button
                        class="aw-radio-button"
                        aria-label="helpful"
                        on:click={() => {
                            showFeedback = feedbackType === 'positive' ? false : true;
                            feedbackType = 'positive';
                        }}
                    >
                        <span class="icon-thumb-up" />
                    </button>
                    <button
                        class="aw-radio-button"
                        aria-label="unhelpful"
                        on:click={() => {
                            showFeedback = feedbackType === 'negative' ? false : true;
                            feedbackType = 'negative';
                        }}
                    >
                        <!-- TODO: fix the icon name on pink -->
                        <span class="icon-thumb-dowm" />
                    </button>
                </div>
            </div>
            <div class="aw-content-footer-header-end">
                <ul class="aw-metadata aw-caption-400">
                    {#if date}
                        <li>Last updated on {new Date(date)?.toLocaleDateString()}</li>
                    {/if}
                    <li>
                        <a
                            href="https://github.com/appwrite/website"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="aw-link u-flex u-gap-4 u-cross-baseline"
                        >
                            <span class="icon-pencil-alt u-contents" aria-hidden="true" />
                            <span>Update on GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    {#if showFeedback}
        <form
            on:submit|preventDefault={handleSubmit}
            class="aw-card is-normal"
            style="--card-padding:1rem"
        >
            <div class="u-flex-vertical u-gap-8">
                <label for="message">
                    <span class="aw-u-color-text-primary">
                        What did you {feedbackType === 'negative' ? 'dislike' : 'like'}? (optional)
                    </span>
                </label>
                <textarea
                    class="aw-input-text"
                    id="message"
                    placeholder="Write your message"
                    bind:value={comment}
                />
                <label for="message" class="u-margin-block-start-8">
                    <span class="aw-u-color-text-primary">Email</span>
                </label>
                <input
                    class="aw-input-text"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    required
                    bind:value={email}
                />
            </div>
            {#if submitted}
                <p class="aw-u-color-text-primary u-margin-block-start-16">
                    Your message has been sent successfully. We appreciate your feedback.
                </p>
            {/if}
            {#if error}
                <p class="aw-u-color-text-primary u-margin-block-start-16">
                    There was an error submitting your feedback. Please try again later.
                </p>
            {/if}

            <div class="u-flex u-main-end u-margin-block-start-16 u-gap-8">
                <button class="aw-button is-text" on:click={() => (showFeedback = false)}>
                    <span>Cancel</span>
                </button>
                <button type="submit" class="aw-button" disabled={submitting || !email}>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    {/if}
</section>
