<ul class="web-chat-list">
    <li class="web-chat-item is-user-a">
        <div class="web-chat-message">
            <div class="web-user-box">
                <img
                    class="web-user-box-image"
                    src="/images/community/avatars/walter.avif"
                    height="40"
                    width="40"
                    alt="Avatar of Walter"
                    style="width: 40px !important; height: 40px !important; min-width: 40px; min-height: 40px;"
                />
                <div class="web-user-box-name flex gap-2">
                    <span class="text-sub-body font-medium">Walter O'Brien</span>
                    <time class="text-caption web-u-color-text-tertiary">8:32 AM</time>
                </div>
                <div class="web-user-box-content text-caption text-primary">
                    Hello devs! I am getting a CORS error when sending a request to the backend. Can
                    you help me?
                </div>
            </div>
        </div>
    </li>
    <li class="web-chat-item is-user-b">
        <div class="web-chat-message reply">
            <div class="web-user-box">
                <img
                    class="web-user-box-image"
                    src="/images/avatars/steven.avif"
                    width="40"
                    height="40"
                    alt="Avatar of Steven"
                    style="width: 40px !important; height: 40px !important; min-width: 40px; min-height: 40px;"
                />
                <div class="web-user-box-name flex gap-2">
                    <span class="text-sub-body font-medium">Steven</span>
                    <time class="text-caption web-u-color-text-tertiary">8:38 AM</time>
                </div>
                <div class="web-user-box-content text-caption text-primary">
                    Hey Walter! Is this the message you get
                    <a class="web-link is-pink" href="/blog/post/cors-error" target="_blank"
                        >"Access blocked by CORS policy"</a
                    >?
                </div>
            </div>
        </div>
    </li>
    <li class="web-chat-item is-user-a">
        <div class="web-chat-message">
            <div class="web-user-box">
                <img
                    class="web-user-box-image"
                    src="/images/community/avatars/walter.avif"
                    height="40"
                    width="40"
                    alt="Avatar of Walter"
                    style="width: 40px !important; height: 40px !important; min-width: 40px; min-height: 40px;"
                />
                <div class="web-user-box-name flex gap-2">
                    <span class="text-sub-body font-medium">Walter O'Brien</span>
                    <time class="text-caption web-u-color-text-tertiary">9:05 AM</time>
                </div>
                <div class="web-user-box-content text-caption text-primary">Yes!</div>
            </div>
        </div>
    </li>
    <li class="web-chat-item is-user-b">
        <div class="web-chat-message reply">
            <div class="web-user-box">
                <img
                    class="web-user-box-image"
                    src="/images/avatars/steven.avif"
                    width="40"
                    height="40"
                    alt="Avatar of Steven"
                    style="width: 40px !important; height: 40px !important; min-width: 40px; min-height: 40px;"
                />
                <div class="web-user-box-name flex gap-2">
                    <span class="text-sub-body font-medium">Steven</span>
                    <time class="text-caption web-u-color-text-tertiary">9:08 AM</time>
                </div>
                <div class="web-user-box-content text-caption text-primary">
                    You should be able to debug this with a few steps. Just follow this blog:
                    <a class="web-link is-pink" href="/blog/post/cors-error" target="_blank"
                        >https://appwrite.io/blog/post/cors-error</a
                    >. Let me know if this helps 🙂
                </div>
            </div>
        </div>
    </li>
</ul>

<style>
    .web-user-box-image {
        object-fit: cover !important;
        object-position: center !important;
        image-rendering: auto;
        image-rendering: -webkit-optimize-contrast;
        flex-shrink: 0 !important;
        display: block !important;
        max-width: 40px !important;
        width: 40px !important;
        height: 40px !important;
        min-width: 40px !important;
        min-height: 40px !important;
        aspect-ratio: 1 !important;
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
        box-sizing: border-box !important;
    }
    @media screen and (-webkit-min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
        .web-user-box-image {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: optimize-contrast;
            image-rendering: crisp-edges;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
    }
    @supports (-webkit-touch-callout: none) {
        .web-user-box-image {
            image-rendering: auto;
            -webkit-font-smoothing: antialiased;
        }
    }

    @media (max-width: 768px) {
        .web-chat-list {
            gap: 2rem;
        }

        .web-user-box-image {
            image-rendering: auto;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            will-change: transform;
        }
    }
</style>
