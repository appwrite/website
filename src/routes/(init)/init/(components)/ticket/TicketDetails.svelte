<script lang="ts">
    export let name = '';
    export let title = '';
    export let customizing = false;
</script>

{#if customizing}
    <div class="flex gap-4">
        <div class="mb-2 flex flex-1 flex-col gap-3">
            <label for="name" class="text-micro">Name</label>
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
        <div class="mb-2 flex flex-1 flex-col gap-3">
            <label for="name" class="text-micro">Title</label>
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
