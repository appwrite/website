<script>
    import Chat from '../(assets)/chat.svg';
</script>

<div class="container grid items-center gap-8 md:grid-cols-2">
    <div class="space-y-4 md:pr-48">
        <h2 class="text-primary text-title font-aeonik-pro text-pretty">
            Get help from the open source community
        </h2>
        <p class="text-secondary text-pretty">
            Join a growing community of developers and founders who use Appwrite to build their
            products. Gain access to a wealth of knowledge, support, and shared experiences to help
            navigate the challenges of startup growth.
        </p>
        <a
            href="/discord"
            class="web-button is-secondary text-accent mt-10 !w-full !whitespace-normal py-1 md:!w-fit"
        >
            <span class="web-icon-discord" />
            Join our Discord</a
        >
    </div>
    <img src={Chat} alt="Chat" class="mx-auto" />
</div>
