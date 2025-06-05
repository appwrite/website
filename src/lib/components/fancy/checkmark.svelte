<script lang="ts">
    import type { SvelteHTMLElements } from 'svelte/elements';
    import { animate, type AnimationSequence } from 'motion';

    interface CheckmarkProps extends Omit<SvelteHTMLElements['svg'], 'viewBox' | 'xmlns'> {
        play?: boolean;
        duration?: number;
    }

    const { class: classNames, duration, play, ...restProps }: CheckmarkProps = $props();

    const sequence: AnimationSequence = [
        [
            '.circle',
            {
                strokeDashoffset: [-360, 0]
            }
        ],
        [
            '.check',
            {
                strokeDashoffset: [48, 0]
            }
        ],
        ['.checkmark', { scale: [1, 0.98, 1] }, { at: 0.75 }]
    ];

    $effect(() => {
        const controls = animate(sequence, {
            defaultTransition: { duration: duration ?? 0.5, ease: 'circInOut' }
        });

        if (play) {
            controls.play();
        } else {
            controls.pause();
        }
    });
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    class={classNames}
    {...restProps}
>
    <path
        class="circle origin-center translate-0 -rotate-180"
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-dasharray="360"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        class="check"
        d="M11 17L14 20L21 13"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-dasharray="48"
        stroke-dashoffset="48"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
