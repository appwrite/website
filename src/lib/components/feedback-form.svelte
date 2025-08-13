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
    import { Smile, Frown } from '@lucide/svelte';

    interface FeedbackFormProps {
        date?: string;
    }

    const { date }: FeedbackFormProps = $props();

    const form = createForm(() => ({
        defaultValues: {
            email: '',
            comment: ''
        },
        onSubmit: async ({ value }) => {
            const userId = loggedIn && $user?.$id ? $user.$id : undefined;

            alert(JSON.stringify({ ...value, userId }, null, 2));

            // await fetch(`${PUBLIC_GROWTH_ENDPOINT}/feedback/docs`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         email: value.email,
            //         type: feedbackType,
            //         route: page.route.id,
            //         comment: value.comment,
            //         metaFields: {
            //             userId
            //         }
            //     })
            // });
        }
    }));

    let showFeedbackForm = $state<boolean>(false);
    let feedbackType = $state<'negative' | 'positive'>('positive');

    const handleToggle = (type: typeof feedbackType) => {
        feedbackType = type;
        showFeedbackForm = !showFeedbackForm;
    };

    $effect(() => {
        useHotkeys(['Escape'], () => {
            showFeedbackForm = false;
        });
    });

    onMount(() => {
        if (loggedIn && $user?.email) {
            form.setFieldValue('email', $user?.email);
        }
    });
</script>

<section class="not-prose border-subtle border-t pt-8">
    <header class="flex w-full">
        <div class="flex w-full items-center justify-between gap-8">
            <div
                class="border-smooth bg-card relative mx-auto flex w-fit flex-col justify-center overflow-hidden rounded-xl border py-1.5 pr-2 pl-4 transition-all ease-[cubic-bezier(0.165,_0.84,_0.44,_1)]"
            >
                <form
                    onsubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                    style:width="350px"
                    style:height="225px"
                    class="absolute bottom-0"
                >
                    <div class="flex flex-col gap-2">
                        <form.Field
                            name="comment"
                            validators={{
                                onChange: z.string()
                            }}
                        >
                            {#snippet children(field)}
                                <textarea
                                    class="resize-none outline-0"
                                    placeholder={`What did you ${feedbackType === 'negative' ? 'dislike' : 'like'}?`}
                                    required
                                    value={field.state.value}
                                    onblur={field.handleBlur}
                                    oninput={(e) => field.handleChange(e.currentTarget.value)}
                                ></textarea>
                            {/snippet}
                        </form.Field>

                        <!-- <form.Field
                            name="email"
                            validators={{
                                onChange: z.string().email()
                            }}
                        >
                            {#snippet children(field)}
                                <input
                                    class="outline-0"
                                    name={field.name}
                                    value={field.state.value}
                                    onblur={field.handleBlur}
                                    oninput={(e) => field.handleChange(e.currentTarget.value)}
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                />
                            {/snippet}
                        </form.Field> -->
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
                        <Button type="submit" disabled={form.state.isSubmitting}>Submit</Button>
                    </div>
                </form>
                <div class="flex items-center gap-3">
                    <h5 class="text-caption text-primary">Was this page helpful?</h5>
                    <div class="flex gap-2">
                        <button
                            aria-label="helpful"
                            onclick={() => {
                                handleToggle('positive');
                            }}
                        >
                            <Smile class="size-5" />
                        </button>
                        <button
                            aria-label="unhelpful"
                            onclick={() => {
                                handleToggle('negative');
                            }}
                        >
                            <Frown class="size-5" />
                        </button>
                    </div>
                </div>
            </div>
            <!-- <div class="web-content-footer-header-end">
                <ul class="web-metadata text-caption">
                    {#if date}
                        <li>Last updated on {new Date()?.toLocaleDateString()}</li>
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
            </div> -->
        </div>
    </header>
</section>

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
