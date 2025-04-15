<script lang="ts">
    type Props = {
        coords: {
            x: number;
            y: number;
        };
    };

    const { coords } = $props();
</script>

<div style:left="{coords.x}px" style:top="{coords.y}px">Tooltip</div>
