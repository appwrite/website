<script lang="ts">
    import { Icon, Button } from '$lib/components/ui';

    type Props = {
        class?: string;
    };

    const { class: className }: Props = $props();
</script>

<Button variant="secondary" class={className} href="https://appwrite.io/discord">
    <Icon name="discord" />
    <span class="text">Join Discord</span>
</Button>
