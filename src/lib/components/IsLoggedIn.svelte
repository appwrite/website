<div class="logged-in">
    <slot name="isLoggedIn" />
</div>
<div class="not-logged-in">
    <slot name="isNotLoggedIn" />
</div>

<style lang="scss">
    :global(body[data-logged-in]) {
        .logged-in {
            display: none;
            display: block;
        }
    }
    :global(body[data-logged-in]) {
        .not-logged-in {
            display: block;
            display: none;
        }
    }
</style>
