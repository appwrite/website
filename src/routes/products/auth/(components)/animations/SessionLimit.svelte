<script lang="ts">
    import Input from '$lib/components/ui/input.svelte';
    import { classNames } from '$lib/utils/classnames';
</script>

<div class={classNames('bg-greyscale-850/90 flex flex-col gap-4 rounded-2xl p-2 lg:row-span-5')}>
    <div class="text-sub-body p-3 font-medium">
        <span class="text-primary">Session limit</span>
        <p class="text-secondary">
            Restrict the number of active sessions per user to avoid unused active sessions.
        </p>
    </div>
    <div
        class="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white/[0.02]"
    >
        <div
            class="bg-greyscale-800 -mt-[40%] mr-0 ml-auto flex flex-col rounded-l-2xl border-y border-l border-white/[0.06] to-transparent px-6 py-4"
        >
            <div class="gradient inset-0 z-10 flex items-center justify-center">
                <div class="text-xs">
                    <span class="text-primary">Sessions limit</span>
                    <p>Maximum number of active sessions allowed per user.</p>
                    <div class="mt-4">
                        <Input type="text" label="Limit" disabled value="10" />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="bg-greyscale-800 mr-0 ml-auto flex flex-col rounded-l-2xl border-y border-l border-white/[0.06] to-transparent px-6 py-4"
        >
            <div class="gradient inset-0 z-10 flex items-center justify-center">
                <div class="text-xs">
                    <span class="text-primary">Sessions limit</span>
                    <p>Maximum number of active sessions allowed per user.</p>
                    <div class="mt-4">
                        <Input type="text" label="Limit" disabled value="10" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
