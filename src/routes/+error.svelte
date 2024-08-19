<script lang="ts">
  import { page } from "$app/stores";
  import { FooterNav, MainFooter } from "$lib/components";
  import Button from "$lib/components/ui/Button.svelte";
  import { Main } from "$lib/layouts";
  import DocsError from "./docs/+error.svelte";

  const isDocs = $page.url.pathname.startsWith("/docs");
</script>

{#if isDocs}
  <DocsError />
{:else}
  <Main>
    <div class="web-big-padding-section">
      <div class="web-big-padding-section-level-2">
        <div class="container">
          <div class="web-hero" style="--hero-gap:1.25rem;">
            <span class="web-badges web-eyebrow !text-white"
              >{$page.status}</span
            >
            <h1 class="web-headline web-u-color-text-primary">
              {$page.error?.message ?? "An error has occured"}
            </h1>
            {#if $page.status === 404}
              <p class="web-description">
                Sorry, it seems that the page you are looking for does not
                exist. Feel free to use our navigation menu or the button below
                to explore more of Appwrite's documentation.
              </p>
            {/if}
            <Button href="/" variant="secondary" class="self-center"
              >Back to homepage</Button
            >
          </div>
        </div>
      </div>
      <div class="web-big-padding-section-level-2 relative">
        <div class="container">
          <FooterNav />
          <MainFooter />
        </div>
      </div>
    </div>
  </Main>
{/if}
