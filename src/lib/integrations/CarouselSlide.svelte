<script lang="ts">
    export let isActive: boolean = false;
</script>

<li class="web-carousel-item" class:is-main={isActive}>
    <slot />
</li>
