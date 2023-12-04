<script lang="ts">
    import type { MockThread } from './types';

    export let thread: MockThread;
</script>

<div class="aw-card is-normal thread">
    <h3 class="aw-main-body-500">{thread.title}</h3>
    <p>{thread.text}</p>

    <h4 class="aw-eyebrow">Replies</h4>
    <div class="replies">
        {#each thread.replies as reply}
            <div class="aw-card is-normal reply">
                <p class="aw-caption-400">{reply.text}</p>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    h3 {
        margin-block-end: 0.25rem;
    }

    h4 {
        margin-block-start: 1rem;
    }

    .replies {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        margin-block-start: 0.5rem;
    }

    .reply {
        padding: 1rem;

        background-color: hsl(var(--aw-color-greyscale-900));
    }
</style>
