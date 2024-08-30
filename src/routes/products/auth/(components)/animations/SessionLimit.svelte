<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
</script>

<div class={classNames('row-span-5 rounded-2xl flex flex-col p-2 bg-greyscale-850/90')}>
    <div class="p-4">
        <span class="text-primary">Session limit</span>
        <p class="text-secondary">
            Restrict the number of active sessions per user to avoid unused active sessions.
        </p>
    </div>
    <div class="bg-white/[0.02] rounded-lg flex-1"></div>
</div>
