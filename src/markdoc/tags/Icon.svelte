<script lang="ts">
    interface Props {
        icon: string;
        size?: string;
    }

    const { icon, size = 's' }: Props = $props();

    const sizes: Record<string, string> = {
        s: '16px',
        m: '20px',
        l: '32px',
        xl: '40px'
    };
</script>

<span class="icon-{icon}" style:font-size={sizes[size]}></span>
