<script lang="ts">
    import { socials } from '$lib/constants';
    const year = new Date().getFullYear();
</script>

<footer
    class="border-smooth text-secondary relative container mt-12 flex items-center justify-between gap-4 border-t py-6"
>
    <ul class="flex items-center gap-2">
        {#each socials as social}
            <li>
                <a
                    href={social.link}
                    class="web-icon-button"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span class={social.icon} aria-hidden="true" />
                </a>
            </li>
        {/each}
    </ul>
    <div class="flex items-center gap-3">
        <div>Copyright © {year} Appwrite</div>

        <iframe
            class="status w-fit max-w-[230px]"
            title="Appwrite Status"
            src="https://status.appwrite.online/badge?theme=dark"
            height="35"
            frameborder="0"
            scrolling="no"
            style:color-scheme="none"
        />

        <ul class="flex gap-4">
            <li><a class="web-link" href="/terms">Terms</a></li>
            <li><a class="web-link" href="/privacy">Privacy</a></li>
            <li><a class="web-link" href="/cookies">Cookies</a></li>
        </ul>
    </div>
</footer>
