<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { fade } from 'svelte/transition';
    import { loggedIn, user } from '$lib/utils/console';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { Button } from '$lib/components/ui';
    import Icon from './ui/icon';
    import { createForm } from '@tanstack/svelte-form';

    const form = createForm(() => ({
        defaultValues: {
            email: '',
            comment: ''
        },
        onSubmit: async ({ value }) => {
            const userId = loggedIn && $user?.$id ? $user.$id : undefined;

            const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback/docs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    type: feedbackType,
                    route: page.route.id,
                    comment,
                    metaFields: {
                        userId
                    }
                })
            });
        }
    }));

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

        const userId = loggedIn && $user?.$id ? $user.$id : undefined;

        const response = await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback/docs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                type: feedbackType,
                route: page.route.id,
                comment,
                metaFields: {
                    userId
                }
            })
        });
        submitting = false;
        if (response.status >= 400) {
            error = response.status >= 500 ? 'Server Error.' : 'Error submitting form.';
            return;
        }
        comment = email = '';
        submitted = true;
        setTimeout(() => (showFeedback = false), 500);
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

    onMount(() => {
        if (loggedIn && $user?.email) {
            email = $user?.email;
        }
    });
</script>

<section class="web-content-footer">
    <header class="web-content-footer-header w-full">
        <div
            class="flex w-full items-center justify-between gap-8"
            style="flex-wrap: wrap-reverse;"
        >
            <div class="flex items-center gap-4">
                <h5 class="text-main-body text-primary font-semibold">Was this page helpful?</h5>
                <div class="flex gap-2">
                    <button
                        class="web-radio-button"
                        aria-label="helpful"
                        onclick={() => {
                            showFeedback = feedbackType !== 'positive';
                            feedbackType = 'positive';
                        }}
                    >
                        <Icon class="icon-thumb-up"></Icon>
                    </button>
                    <button
                        class="web-radio-button"
                        aria-label="unhelpful"
                        onclick={() => {
                            showFeedback = feedbackType !== 'negative';
                            feedbackType = 'negative';
                        }}
                    >
                        <!-- TODO: fix the icon name on pink -->
                        <span class="icon-thumb-dowm"></span>
                    </button>
                </div>
            </div>
            <div class="web-content-footer-header-end">
                <ul class="web-metadata text-caption">
                    {#if date}
                        <li>Last updated on {new Date(date)?.toLocaleDateString()}</li>
                    {/if}
                    <li>
                        <a
                            href={`https://github.com/appwrite/website/tree/main/src/routes${page.route.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="web-link flex items-baseline gap-1"
                        >
                            <span class="icon-pencil-alt contents" aria-hidden="true"></span>
                            <span>Update on GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    {#if showFeedback}
        <form
            onsubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            class="web-card is-normal"
            style="--card-padding:1rem"
        >
            <div class="flex flex-col gap-2">
                <label for="message">
                    <span class="text-primary">
                        What did you {feedbackType === 'negative' ? 'dislike' : 'like'}?
                    </span>
                </label>
                <form.Field name="comment">
                    {#snippet children(field)}
                        <textarea
                            class="web-input-text"
                            id="message"
                            placeholder="Write your message"
                            required
                            value={field.state.value}
                            onblur={field.handleBlur}
                            oninput={(e) => field.handleChange(e.currentTarget.value)}
                        ></textarea>
                    {/snippet}
                </form.Field>
                <label for="message" class="mt-2">
                    <span class="text-primary">Email</span>
                </label>
                <form.Field name="email">
                    {#snippet children(field)}
                        <input
                            name={field.name}
                            value={field.state.value}
                            onblur={field.handleBlur}
                            oninput={(e) => field.handleChange(e.currentTarget.value)}
                            class="web-input-text"
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                    {/snippet}
                </form.Field>
            </div>
            {#if submitted}
                <p class="text-primary mt-4">
                    Your message has been sent successfully. We appreciate your feedback.
                </p>
            {/if}
            {#if error}
                <p class="text-primary mt-4">
                    There was an error submitting your feedback. Please try again later.
                </p>
            {/if}

            <div class="mt-4 flex justify-end gap-2">
                <Button variant="text" onclick={() => (showFeedback = false)}>Cancel</Button>
                <Button type="submit" disabled={submitting || !email}>Submit</Button>
            </div>
        </form>
    {/if}
</section>
