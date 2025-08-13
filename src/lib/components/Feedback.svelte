<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { loggedIn, user } from '$lib/utils/console';
    import { PUBLIC_GROWTH_ENDPOINT } from '$env/static/public';
    import { Button } from '$lib/components/ui';
    import Icon from './ui/icon';
    import { createForm } from '@tanstack/svelte-form';
    import { z } from 'zod';
    import { useHotkeys } from '$lib/utils/use-hotkeys.svelte';

    interface FeedbackProps {
        date?: string;
    }

    const { date }: FeedbackProps = $props();

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
                    email: value.email,
                    type: feedbackType,
                    route: page.route.id,
                    comment: value.comment,
                    metaFields: {
                        userId
                    }
                })
            });
        }
    }));

    let showFeedback = $state<boolean>(false);
    let feedbackType = $state<'negative' | 'positive'>('positive');

    $effect(() => {
        useHotkeys(['Escape'], () => {
            showFeedback = false;
        });
    });

    onMount(() => {
        if (loggedIn && $user?.email) {
            form.setFieldValue('email', $user?.email);
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
                        {@render HappyFace()}
                    </button>
                    <button
                        class="web-radio-button"
                        aria-label="unhelpful"
                        onclick={() => {
                            showFeedback = feedbackType !== 'negative';
                            feedbackType = 'negative';
                        }}
                    >
                        {@render SadFace()}
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
                <form.Field
                    name="comment"
                    validators={{
                        onChange: z.string().min(10, 'Please provide more details.')
                    }}
                >
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
                <form.Field
                    name="email"
                    validators={{
                        onChange: z.string().email()
                    }}
                >
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
            {#if form.state.isSubmitted}
                <p class="text-primary mt-4">
                    Your message has been sent successfully. We appreciate your feedback.
                </p>
            {/if}
            {#if form.state.errors.length}
                <p class="text-primary mt-4">
                    There was an error submitting your feedback. Please try again later.
                </p>
            {/if}

            <div class="mt-4 flex justify-end gap-2">
                <Button variant="text" onclick={() => (showFeedback = false)}>Cancel</Button>
                <Button type="submit" disabled={form.state.isSubmitting || !form.state.isDirty}
                    >Submit</Button
                >
            </div>
        </form>
    {/if}
</section>

{#snippet HappyFace()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="var(--color-primary)"
        viewBox="0 0 256 256"
        class="p-2"
        ><path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"
        ></path></svg
    >
{/snippet}

{#snippet SadFace()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="var(--color-primary)"
        viewBox="0 0 256 256"
        class="p-2"
        ><path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm80,86.92A8,8,0,0,1,161.08,180c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28s36.63,10.2,46.92,28A8,8,0,0,1,172,182.92ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"
        ></path></svg
    >
{/snippet}
