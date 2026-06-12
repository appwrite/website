<script lang="ts">
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import ThreadCard from '../../ThreadCard.svelte';
    import PreFooter from '../../PreFooter.svelte';

    let { data } = $props();

    const title = $derived(data.author.display_name + ' - Threads' + TITLE_SUFFIX);
    const description = $derived(
        data.author.bio ??
            `${data.author.display_name} has posted ${data.author.thread_count} threads and ${data.author.reply_count} replies on the Appwrite Discord community.`
    );
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <link rel="canonical" href={data.canonicalUrl} />
</svelte:head>

<Main>
    <div class="web-u-padding-block-end-0 container">
        <div class="author-header">
            <a class="web-link is-secondary items-baseline" href="/threads">
                <span class="web-icon-chevron-left" aria-hidden="true"></span>
                <span>Back</span>
            </a>
            <div class="author-profile">
                {#if data.author.avatar}
                    <img
                        src={data.author.avatar}
                        alt={data.author.display_name}
                        class="author-avatar"
                    />
                {/if}
                <div class="author-info">
                    <h1 class="text-title font-aeonik-pro text-primary">
                        {data.author.display_name}
                    </h1>
                    <p class="text-sub-body">@{data.author.username}</p>
                    {#if data.author.roles?.length}
                        <ul class="roles">
                            {#each data.author.roles as role}
                                <li class="web-tag">{role}</li>
                            {/each}
                        </ul>
                    {/if}
                    <ul class="stats">
                        <li>
                            <span class="text-title font-aeonik-pro text-primary"
                                >{data.author.thread_count}</span
                            >
                            <span class="text-caption">Threads</span>
                        </li>
                        <li>
                            <span class="text-title font-aeonik-pro text-primary"
                                >{data.author.reply_count}</span
                            >
                            <span class="text-caption">Replies</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="threads-section">
            <div class="threads-header">
                <h2 class="text-eyebrow font-aeonik-fono text-primary uppercase">Threads</h2>
                {#if data.total > data.threads.length}
                    <span class="text-caption">Showing {data.threads.length} of {data.total}</span>
                {/if}
            </div>
            <div class="mt-4 flex flex-col gap-4">
                {#each data.threads as thread (thread.$id)}
                    <ThreadCard {thread} query="" />
                {:else}
                    <p class="text-sub-body">No threads yet.</p>
                {/each}
            </div>
        </div>
    </div>

    <PreFooter />
    <div class="container" style="margin-block-start: -7.75rem;">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .author-header {
        margin-block-start: 2.5rem;
    }

    .author-profile {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        margin-block-start: 2rem;
    }

    .author-avatar {
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        object-fit: cover;
        flex-shrink: 0;
    }

    .author-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .roles {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-block-start: 0.25rem;
    }

    .stats {
        display: flex;
        gap: 2rem;
        margin-block-start: 0.5rem;

        li {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
    }

    .threads-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .threads-section {
        margin-block-start: 3rem;
        padding-block-start: 2rem;
        border-block-start: 1px solid hsl(var(--web-color-border));
        padding-block-end: 5rem;
    }
</style>
