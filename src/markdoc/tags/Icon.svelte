<script lang="ts">
    export let icon: string;
    export let size = 's';

    const sizes: Record<string, string> = {
        s: '16px',
        m: '20px',
        l: '32px',
        xl: '40px'
    };
</script>

<span class="icon-{icon}" style:font-size={sizes[size]}></span>
