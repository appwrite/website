<script lang="ts">
    interface Props {
        src: string;
        alt: string;
        size?: string;
    }

    const { src, alt, size = 's' }: Props = $props();

    const sizes: Record<string, string> = {
        s: '16px',
        m: '20px',
        l: '32px',
        xl: '40px'
    };
</script>

<img
    {src}
    {alt}
    loading="lazy"
    width={sizes[size]}
    height={sizes[size]}
    style:width={sizes[size]}
    style:vertical-align="middle"
    style:min-width={sizes[size]}
/>
