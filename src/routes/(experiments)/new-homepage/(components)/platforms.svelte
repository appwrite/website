<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
</script>

<div class="border-smooth relative z-10 border-y border-dashed">
    <div class="container flex items-center px-0!">
        <span class="flex items-center px-4">Supporting the tools<br /> you work with</span>
        <div class="divide-smooth flex w-full flex-1 grow flex-nowrap divide-x divide-dashed">
            {#each Array.from({ length: 15 }) as _}
                <div
                    class={classNames(
                        'first-of-type:border-smooth last-of-type:border-smooth relative flex h-16 w-full items-center justify-center first-of-type:border-l first-of-type:border-dashed last-of-type:border-r last-of-type:border-dashed',
                        'bg-gradient-to-tl from-transparent to-transparent',
                        'hover:from-white/4 hover:to-white/0.2'
                    )}
                />
            {/each}
        </div>
    </div>
</div>
