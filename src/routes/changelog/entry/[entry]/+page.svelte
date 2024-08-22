<script lang="ts">
  import { FooterNav, MainFooter, Tooltip } from "$lib/components";
  import PreFooter from "$lib/components/PreFooter.svelte";
  import { Main } from "$lib/layouts";
  import { formatDate } from "$lib/utils/date";
  import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from "$lib/utils/metadata";
  import { CHANGELOG_TITLE_SUFFIX } from "$routes/titles";
  import { type SocialShareOption, socialSharingOptions } from "$lib/constants";
  import { page } from "$app/stores";
  import { copy } from "$lib/utils/copy";

  export let data;

  const seo = {
    title: data.title,
    description: data.description ?? DEFAULT_DESCRIPTION,
    ogImage: data.cover
      ? DEFAULT_HOST + data.cover
      : `${DEFAULT_HOST}/images/open-graph/website.png`,
  };

  const sharingOptions = socialSharingOptions.filter(
    (option) => option.label !== "YCombinator",
  );

  enum CopyStatus {
    Copy = "Copy URL",
    Copied = "Copied",
  }

  let copyText = CopyStatus.Copy;
  async function handleCopy() {
    const blogPostUrl = encodeURI(`https://appwrite.io${$page.url.pathname}`);

    await copy(blogPostUrl);

    copyText = CopyStatus.Copied;
    setTimeout(() => {
      copyText = CopyStatus.Copy;
    }, 1000);
  }

  function getShareLink(shareOption: SocialShareOption): string {
    const blogPostUrl = encodeURI(`https://appwrite.io${$page.url.pathname}`);
    const shareableLink = shareOption.link
      .replace("{TITLE}", seo.title + ".")
      .replace("{URL}", blogPostUrl);

    return shareableLink;
  }
</script>

<svelte:head>
  <!-- Titles -->
  <title>{seo.title + CHANGELOG_TITLE_SUFFIX}</title>
  <meta property="og:title" content={seo.title} />
  <meta name="twitter:title" content={seo.title} />
  <!-- Description -->
  <meta name="description" content={seo.description} />
  <meta property="og:description" content={seo.description} />
  <meta name="twitter:description" content={seo.description} />
  <!-- Image -->

  <meta property="og:image" content={seo.ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:image" content={seo.ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
  <div class="web-big-padding-section">
    <div class="web-big-padding-section-level-1">
      <div class="web-big-padding-section-level-2">
        <div class="container wrapper" style="--container-size:42.5rem">
          <article class="web-main-article">
            <header class="web-main-article-header">
              <a
                class="web-link web-u-color-text-secondary items-baseline"
                href="/changelog"
              >
                <span class="web-icon-chevron-left" aria-hidden="true" />
                <span>Back to Changelog</span>
              </a>
              <ul class="web-metadata web-caption-400">
                <li>
                  <time datetime={data.date}>{formatDate(data.date)}</time>
                </li>
              </ul>
              <h1 class="web-title web-u-color-text-primary">{data.title}</h1>
              <div
                class="share-post-section u-margin-block-start-16 flex items-center gap-4"
              >
                <span
                  class="web-eyebrow u-padding-inline-end-8"
                  style:color="#adadb0"
                >
                  SHARE
                </span>

                <ul class="flex gap-2">
                  {#each sharingOptions as sharingOption}
                    <li class="share-list-item">
                      <Tooltip
                        placement="bottom"
                        disableHoverableContent={true}
                      >
                        {#if sharingOption.type === "link"}
                          <a
                            class="web-icon-button"
                            aria-label={sharingOption.label}
                            href={getShareLink(sharingOption)}
                            target="_blank"
                            rel="noopener, noreferrer"
                          >
                            <span
                              class={sharingOption.icon}
                              aria-hidden="true"
                            />
                          </a>
                        {:else}
                          <button
                            class="web-icon-button"
                            aria-label={sharingOption.label}
                            on:click={() => handleCopy()}
                          >
                            <span
                              class={sharingOption.icon}
                              aria-hidden="true"
                            />
                          </button>
                        {/if}

                        <svelte:fragment slot="tooltip">
                          {sharingOption.type === "copy"
                            ? copyText
                            : `Share on ${sharingOption.label}`}
                        </svelte:fragment>
                      </Tooltip>
                    </li>
                  {/each}
                </ul>
              </div>
            </header>
            {#if data.cover}
              <div class="web-media-container">
                <img class="block" src={data.cover} alt="" />
              </div>
            {/if}

            <div class="web-article-content u-margin-block-start-32">
              <svelte:component this={data.component} />
            </div>
          </article>
        </div>
      </div>
      <div class="web-big-padding-section-level-1 relative overflow-hidden">
        <div class="web-big-padding-section-level-2">
          <div class="container">
            <PreFooter />
            <FooterNav />
            <MainFooter />
          </div>
        </div>
      </div>
    </div>
  </div>
</Main>

<style lang="scss">
  @media (min-width: 1024px) {
    .web-main-article-header {
      padding-block-end: 0;
      border-block-end: unset;
    }
  }

  .share-post-section {
    padding: 16px 0;
    border-block-end: solid 0.0625rem hsl(var(--web-color-border));
    border-block-start: solid 0.0625rem hsl(var(--web-color-border));
  }

  .web-icon-button {
    .web-icon-x {
      font-size: 16px;
    }

    .web-icon-copy {
      font-size: 24px;
    }
  }
</style>
