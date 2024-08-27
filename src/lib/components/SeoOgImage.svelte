<script lang="ts">
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    export let title: string;
    export let description: string;
    const ogImage = buildOpenGraphImage(title, description);
</script>

<meta property="og:image" content={ogImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content={ogImage} />
<meta name="twitter:card" content="summary_large_image" />
