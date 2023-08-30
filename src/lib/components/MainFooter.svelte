<script lang="ts">
    export let variant: "homepage" | "docs" = "homepage";
</script>

{#if variant==="homepage"}
<footer class="aw-main-footer u-margin-block-start-48">
    <ul class="u-flex u-gap-8">
        <li>
            <button class="aw-icon-button" aria-label="Appwrite on Discord">
                <span class="icon-discord" aria-hidden="true" />
            </button>
        </li>
        <li>
            <button class="aw-icon-button" aria-label="Appwrite GitHub">
                <span class="icon-github" aria-hidden="true" />
            </button>
        </li>
        <li>
            <button class="aw-icon-button" aria-label="Appwrite on Twitter">
                <span class="icon-twitter" aria-hidden="true" />
            </button>
        </li>
        <li>
            <button class="aw-icon-button" aria-label="Appwrite on LinkedIn">
                <span class="icon-linkedin" aria-hidden="true" />
            </button>
        </li>
        <li>
            <button class="aw-icon-button" aria-label="Appwrite YouTube">
                <span class="icon-youtube" aria-hidden="true" />
            </button>
        </li>
    </ul>
    <div>Copyright © 2023 Appwrite</div>
</footer>
{:else if variant === 'docs'}
    <footer class="aw-main-footer is-with-bg-color u-margin-block-start-48 u-small">
        <div class="aw-main-footer-grid-1">
            <ul class="aw-main-footer-grid-1-column-1 u-flex u-gap-8">
                <li>
                    <button class="aw-icon-button" aria-label="Appwrite on Discord">
                        <span class="icon-discord" aria-hidden="true" />
                    </button>
                </li>
                <li>
                    <button class="aw-icon-button" aria-label="Appwrite GitHub">
                        <span class="icon-github" aria-hidden="true" />
                    </button>
                </li>
                <li>
                    <button class="aw-icon-button" aria-label="Appwrite on Twitter">
                        <span class="icon-twitter" aria-hidden="true" />
                    </button>
                </li>
                <li>
                    <button class="aw-icon-button" aria-label="Appwrite on LinkedIn">
                        <span class="icon-linkedin" aria-hidden="true" />
                    </button>
                </li>
                <li>
                    <button class="aw-icon-button" aria-label="Appwrite YouTube">
                        <span class="icon-youtube" aria-hidden="true" />
                    </button>
                </li>
            </ul>
            <div class="aw-main-footer-grid-1-column-2">
                <div class="aw-select is-colored">
                    <button class="physical-select">
                        <span class="icon-moon" aria-hidden="true" />
                        <span>Dark</span>
                    </button>
                    <span class="icon-cheveron-down" aria-hidden="true" />
                </div>
            </div>
            <ul class="aw-main-footer-grid-1-column-3 aw-main-footer-links">
                <li>
                    <a href="">Supports</a>
                </li>
                <li>
                    <a href="">Status</a>
                </li>
                <li>
                    <a href="">Changelog</a>
                </li>
            </ul>
            <div class="aw-main-footer-grid-1-column-4 aw-main-footer-copyright">
                Copyright © 2023 Appwrite
            </div>
        </div>
    </footer>
{/if}