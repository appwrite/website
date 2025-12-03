<script lang="ts">
    import { VideoCard } from '$lib/components';

    interface Props {
        href: string;
        title: string;
    }

    const { href, title }: Props = $props();
</script>

<VideoCard {href} {title} />
