<script lang="ts">
    export let title: string;
</script>

<div class="web-inline-info">
    <span class="icon-info" aria-hidden="true"></span>
    <h5 class="text-sub-body text-primary font-medium">{title}</h5>
    <slot />
</div>
