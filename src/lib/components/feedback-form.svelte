<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { loggedIn, user } from '$lib/utils/console';

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

    let width = $derived(!showFeedbackForm ? '250px' : '300px');
    let height = $derived(!showFeedbackForm ? '50px' : '220px');

    useHotkeys(['Escape'], () => {
        showFeedbackForm = false;
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
                class="border-smooth bg-card relative flex flex-col overflow-hidden rounded-xl border p-1 transition-all duration-250 ease-[cubic-bezier(0.165,_0.84,_0.44,_1)]"
                style:width
                style:height
            >
                <form
                    onsubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                    class="absolute bottom-0"
                >
                    <div class="flex px-3 py-3">
                        {`What did you ${feedbackType === 'negative' ? 'dislike' : 'like'}?`}
                    </div>

                    <div class="flex h-full flex-col">
                        <form.Field
                            name="comment"
                            validators={{
                                onChange: z.string()
                            }}
                        >
                            {#snippet children(field)}
                                <textarea
                                    class="bg-offset flex-1 resize-none rounded-md p-3 outline-0"
                                    placeholder="What's on your mind?"
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
                </form>
                <div
                    class="relative z-10 flex w-full items-center justify-center gap-3 self-center p-2"
                >
                    <h5 class="text-caption text-primary">Was this page helpful?</h5>
                    <div class="flex gap-2">
                        <button
                            aria-label="helpful"
                            onclick={() => {
                                feedbackType = 'positive';
                                showFeedbackForm = !showFeedbackForm;
                            }}
                        >
                            <Smile class="size-5" />
                        </button>
                        <button
                            aria-label="unhelpful"
                            onclick={() => {
                                feedbackType = 'negative';
                                showFeedbackForm = !showFeedbackForm;
                            }}
                        >
                            <Frown class="size-5" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="web-content-footer-header-end">
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
            </div>
        </div>
    </header>
</section>
