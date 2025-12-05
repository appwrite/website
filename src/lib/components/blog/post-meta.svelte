<script lang="ts">
    import { socialSharingOptions, type SocialShareOption } from '$lib/constants';
    import { handleCopy } from '$lib/utils/copy';
    import { formatDate } from '$lib/utils/date';
    import type { AuthorData } from '$routes/blog/content';
    import { Tooltip } from '$lib/components';
    import { melt } from '@melt-ui/svelte';

    interface Props {
        date?: string;
        timeToRead?: string;
        title?: string;
        description?: string;
        authorData?: Partial<AuthorData>;
        currentURL?: string;
    }

    const {
        date = new Date().toISOString(),
        timeToRead = '0',
        title = '',
        description = '',
        authorData = {},
        currentURL = ''
    }: Props = $props();

    const getShareLink = (shareOption: SocialShareOption) => {
        const blogPostUrl = encodeURI(currentURL);
        return shareOption.link.replace('{TITLE}', title + '.').replace('{URL}', blogPostUrl);
    };
    const { copied, copy } = handleCopy(currentURL);
</script>

<header>
    <div class="flex flex-col gap-4">
        <div class="text-caption flex gap-2">
            <time datetime={date}>{formatDate(date)}</time>
            <span>•</span>
            {#if timeToRead}
                <span>{timeToRead} min</span>
            {/if}
        </div>
        <h1 class="text-title font-aeonik-pro text-primary">
            {title}
        </h1>
        {#if description}
            <p class="text-description text-secondary font-medium">
                {description}
            </p>
        {/if}
    </div>

    <div class="border-smooth mb-8 flex flex-col justify-between border-b py-8 md:flex-row">
        {#if authorData}
            <a href={authorData.href} class="flex items-center gap-2">
                {#if authorData.avatar}
                    <img
                        class="size-11 rounded-full"
                        src={authorData.avatar}
                        alt={authorData.name}
                        loading="lazy"
                        width="44"
                        height="44"
                    />
                {/if}
                <div class="flex flex-col">
                    <h4 class="text-sub-body text-primary">
                        {authorData.name}
                    </h4>
                    <p class="text-caption">{authorData.role}</p>
                </div>
            </a>
        {/if}

        <div class="mt-4 flex items-center gap-4">
            <span class="text-eyebrow text-secondary uppercase">SHARE</span>

            <ul class="flex gap-2">
                {#each socialSharingOptions as sharingOption}
                    <li
                        class="bg-smooth flex size-7 items-center justify-center rounded-lg text-white"
                    >
                        {#if sharingOption.type === 'link'}
                            <a
                                aria-label={sharingOption.label}
                                href={getShareLink(sharingOption)}
                                target="_blank"
                                rel="noopener, noreferrer"
                            >
                                <span class={sharingOption.icon} aria-hidden="true"></span>
                            </a>
                        {:else}
                            <Tooltip>
                                {#snippet asChild({ trigger })}
                                    <button
                                        onclick={copy}
                                        use:melt={trigger}
                                        aria-label={sharingOption.label}
                                        class="cursor-pointer"
                                    >
                                        <span class={sharingOption.icon} aria-hidden="true"></span>
                                    </button>
                                {/snippet}
                                {#snippet tooltip()}
                                    {$copied ? 'Copied!' : 'Copy'}
                                {/snippet}
                            </Tooltip>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</header>
