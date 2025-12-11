<script lang="ts">
    import { VideoCard } from '$lib/components';

    interface Props {
        href: string;
        title: string;
        duration?: string;
    }

    const { href, title, duration }: Props = $props();
</script>

<VideoCard {href} {title} {duration} />
