<script lang="ts">
    import { socials } from '$lib/constants';
    import FooterCloudStatusBadge from '../FooterCloudStatusBadge.svelte';

    const year = new Date().getFullYear();
</script>

<footer
    class="web-footer-legal-strip border-smooth text-secondary relative container mt-12 flex w-full flex-col items-center gap-y-4 border-t py-6 xl:flex-row xl:items-center xl:justify-between xl:gap-x-4 xl:gap-y-0"
>
    <div
        class="flex w-full min-w-0 flex-wrap items-center justify-center gap-2 sm:gap-3 xl:w-auto xl:justify-start"
    >
        <ul class="flex items-center gap-2">
            {#each socials as social, i (i)}
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
        <FooterCloudStatusBadge />
    </div>
    <div
        class="text-sub-body flex w-full max-w-full min-w-0 flex-col items-center gap-y-2 text-center md:w-auto md:flex-row md:flex-nowrap md:items-center md:justify-center md:gap-4 md:gap-y-0 md:overflow-x-auto md:[scrollbar-width:thin] xl:justify-end xl:text-end"
    >
        <span class="text-secondary w-full shrink-0 md:w-auto md:whitespace-nowrap">
            Copyright © {year} Appwrite
        </span>

        <ul class="flex w-full shrink-0 flex-nowrap items-center justify-center gap-4 md:w-auto">
            <li><a class="web-link" href="/terms">Terms</a></li>
            <li><a class="web-link" href="/privacy">Privacy</a></li>
            <li><a class="web-link" href="/cookies">Cookies</a></li>
        </ul>
    </div>
</footer>
