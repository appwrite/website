<script lang="ts">
    export let name = '';
    export let title = '';
    export let customizing = false;
</script>

{#if customizing}
    <div class="u-flex u-gap-16 input-container">
        <div class="u-flex-vertical input">
            <label for="name">Name</label>
            <input
                class="web-input-text"
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                required
                bind:value={name}
                maxlength="42"
            />
        </div>
        <div class="u-flex-vertical input">
            <label for="name">Title</label>
            <input
                class="web-input-text"
                type="text"
                placeholder="Enter your title"
                id="title"
                name="title"
                required
                bind:value={title}
                maxlength="42"
            />
        </div>
    </div>
{/if}

<style lang="scss">
    .input-container {
        .input {
            flex: 1;
            margin-bottom: 8px;
            gap: 12px;

            & > label {
                font-size: 12px;
            }
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 32px;
        }
    }
</style>
