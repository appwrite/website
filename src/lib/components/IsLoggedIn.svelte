<div class="logged-in">
    <slot name="isLoggedIn" />
</div>
<div class="not-logged-in">
    <slot name="isNotLoggedIn" />
</div>

<style lang="scss">
    :global(body[data-logged-in]) {
        .logged-in {
            display: block;
        }
        .not-logged-in {
            display: none;
        }
    }
    .not-logged-in {
        display: block;
    }
    .logged-in {
        display: none;
    }
</style>
