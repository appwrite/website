<script>
    import Chat from '../(assets)/chat.svg';
    import Button from '$lib/components/ui/Button.svelte';
</script>

<div class="container grid md:grid-cols-2 items-center">
    <div class="space-y-4 md:pr-48">
        <h2 class="text-primary text-title text-pretty font-aeonik-pro">
            Get help from the open source community
        </h2>
        <p class="text-secondary text-pretty">
            Join a growing community of developers and founders who use Appwrite to build their
            products. Gain access to a wealth of knowledge, support, and shared experiences to help
            navigate the challenges of startup growth.
        </p>
        <Button variant="secondary" href="/discord" class="text-accent py-1 text-sm mt-10">
            <span slot="icon" class="web-icon-discord" />
            Join our Discord</Button
        >
    </div>
    <img src={Chat} alt="Chat" />
</div>
