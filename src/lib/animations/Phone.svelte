<script lang="ts">
    export let id: string | undefined = undefined;
</script>

<div class="phone" {id}>
    <div class="inner">
        <slot />
    </div>
</div>
