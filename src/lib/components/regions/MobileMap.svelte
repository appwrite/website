<script lang="ts">
    import { type DottedMapLib } from 'dotted-map';

    export let pins: DottedMapLib.Point[];
</script>

<div class="absolute inset-0 md:hidden">
    {#each pins as pin}
        <div>
            {pin.data.city}
        </div>
    {/each}
</div>
