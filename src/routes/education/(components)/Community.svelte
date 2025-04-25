<script lang="ts">
    import CommunitySupportChat from '$lib/components/CommunitySupportChat.svelte';
    import DiscordLink from '$lib/components/shared/discord-link.svelte';
    import { Button } from '$lib/components/ui';
</script>

<div class="container grid items-center gap-8 md:grid-cols-2">
    <div class="space-y-4 md:pr-48">
        <h2 class="text-primary text-title font-aeonik-pro text-pretty">
            Get help from the open source community
        </h2>
        <p class="text-secondary text-pretty">
            Join a growing community of developers and students who use Appwrite to build their
            products. Gain access to a wealth of knowledge, support, and shared experiences needed
            to grow and advance your tech career.
        </p>
        <DiscordLink class="text-accent mt-10 !w-full py-1 !whitespace-normal md:!w-fit" />
    </div>

    <div class="px-4">
        <CommunitySupportChat />
    </div>
</div>
