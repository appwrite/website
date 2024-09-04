<script lang="ts">
    import Input from '$lib/components/ui/Input.svelte';
    import { classNames } from '$lib/utils/classnames';
</script>

<div class={classNames('row-span-5 gap-4 rounded-2xl flex flex-col p-2 bg-greyscale-850/90')}>
    <div class="p-4">
        <span class="text-primary">Session limit</span>
        <p class="text-secondary">
            Restrict the number of active sessions per user to avoid unused active sessions.
        </p>
    </div>
    <div
        class="bg-white/[0.02] rounded-lg flex-1 gap-4 overflow-hidden relative flex flex-col justify-center items-center"
    >
        <div
            class="-mt-[40%] flex flex-col px-6 py-4 border-l border-y border-white/[0.06] bg-greyscale-800 to-transparent rounded-l-2xl mr-0 ml-auto"
        >
            <div class="flex items-center justify-center inset-0 z-10 gradient">
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
            class="flex flex-col px-6 py-4 border-l border-y border-white/[0.06] bg-greyscale-800 to-transparent rounded-l-2xl mr-0 ml-auto"
        >
            <div class="flex items-center justify-center inset-0 z-10 gradient">
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
