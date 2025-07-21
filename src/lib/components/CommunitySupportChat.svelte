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
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
    }
    @media (max-width: 768px) {
        .web-chat-list {
            gap: 2rem;
        }
    }
</style>
