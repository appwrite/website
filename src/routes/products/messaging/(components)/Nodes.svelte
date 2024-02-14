<script lang="ts">
    import { withRaf } from '$lib/utils/withRaf';
    import { withPrevious } from '$lib/utils/withPrevious';
    import Accordion from './Accordion/Accordion.svelte';
    import AccordionItem from './Accordion/AccordionItem.svelte';

    /* Variables & Contstants */
    const width = 2000;
    const height = 1000;

    /* Entities */
    type Circle = {
        pos: [number, number];
    };
    const circles = [
        { pos: [100, 500] },
        { pos: [500, 100] },
        { pos: [1500, 100] },
        { pos: [1500, 900] },
        { pos: [500, 900] },
        { pos: [1900, 500] },
        { pos: [450, 450] },
        { pos: [1570, 700] },
        { pos: [1300, 450] }
    ] as const satisfies Circle[];

    type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
        ? Acc[number]
        : Enumerate<N, [...Acc, Acc['length']]>;

    type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

    type Line = {
        from: IntRange<0, typeof circles.length>;
        to: IntRange<0, typeof circles.length>;
    };

    const lines: Line[] = [
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 0, to: 4 },
        { from: 0, to: 7 },
        { from: 7, to: 6 },
        { from: 6, to: 8 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 1 },
        { from: 5, to: 3 },
        { from: 5, to: 2 }
    ];

    let selected = withPrevious(circles.map(() => false));
    let prevSelected = selected.previous;

    type AnimationProgress = {
        percent: number;
        reverse: boolean;
    };
    let animationProgress = lines.map(() => {
        return { percent: 0, reverse: false } as AnimationProgress;
    });

    withRaf(() => {
        animationProgress = animationProgress.map((curr, i) => {
            const isSelected = $selected[lines[i].from] && $selected[lines[i].to];
            const wasSelected = $prevSelected[lines[i].from] && $prevSelected[lines[i].to];
            let reverse = false;
            if (wasSelected !== isSelected) {
                if (isSelected) {
                    reverse = $prevSelected[lines[i].to];
                } else {
                    reverse = $selected[lines[i].to];
                }
            }

            // ease into new value
            const goal = isSelected ? 100 : 0;
            return {
                percent: Math.min(100, Math.max(0, curr.percent + (goal - curr.percent) * 0.1)),
                reverse
            };
        });
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function anyify<T>(x: T): any {
        return x;
    }
</script>

{#each circles as circle, i}
    <div>
        <label>
            <input
                type="checkbox"
                checked={$selected[i]}
                on:change={(e) => {
                    const target = anyify(e.target);
                    $selected = $selected.map((_, j) => (j === i ? target.checked : $selected[j]));
                }}
            />
            Circle {i} ({circle.pos[0]}, {circle.pos[1]})
        </label>
    </div>
{/each}

<div class="wrapper">
    <svg viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
        {#each lines as line, i}
            {@const x1 = animationProgress[i].reverse
                ? circles[line.to].pos[0]
                : circles[line.from].pos[0]}
            {@const y1 = animationProgress[i].reverse
                ? circles[line.to].pos[1]
                : circles[line.from].pos[1]}
            {@const x2 = animationProgress[i].reverse
                ? circles[line.from].pos[0]
                : circles[line.to].pos[0]}
            {@const y2 = animationProgress[i].reverse
                ? circles[line.from].pos[1]
                : circles[line.to].pos[1]}

            {@const selectionPercent = animationProgress[i].percent}
            <linearGradient id="gradient-{i}" gradientUnits="userSpaceOnUse" {x1} {y1} {x2} {y2}>
                <!-- Go from red to white, depending on selectionPercent -->
                <stop offset="0%" stop-color="hsla(178, 54%, 69%, 1)" />
                <stop offset="{selectionPercent}%" stop-color="hsla(178, 54%, 69%, 1)" />
                <stop offset="{selectionPercent}%" stop-color="hsla(0, 0%, 100%, 0.08)" />
                <stop offset="100%" stop-color="hsla(0, 0%, 100%, 0.08)" />
            </linearGradient>

            <line
                x1={circles[line.from].pos[0]}
                y1={circles[line.from].pos[1]}
                x2={circles[line.to].pos[0]}
                y2={circles[line.to].pos[1]}
                stroke="url(#gradient-{i})"
                stroke-width="2"
            />
        {/each}

        {#each circles as circle, i}
            <!-- Outer -->
            <circle
                cx={circle.pos[0]}
                cy={circle.pos[1]}
                r="12"
                fill={$selected[i] ? 'url(#selected-circle)' : 'transparent'}
                stroke="hsla(178, 54%, 69%, {$selected[i] ? 1 : 0})"
                stroke-width="2"
            />
            <!-- Inner -->
            <circle
                cx={circle.pos[0]}
                cy={circle.pos[1]}
                r="3"
                fill={$selected[i] ? 'hsla(178, 54%, 69%, 1)' : 'hsl(0, 0%, 100%, 0.5)'}
            />
        {/each}

        <defs>
            <linearGradient id="selected-circle" gradientTransform="rotate(90)">
                <stop offset="0%" stop-color="hsl(240, 5%, 10%)" />
                <stop offset="100%" stop-color="hsla(178, 54%, 69%, 1)" />
            </linearGradient>
        </defs>
    </svg>

    <div class="users-modal">
        <h3>Select subscribers</h3>
        <hr />
        <Accordion>
            <AccordionItem index={0}>
                <div slot="trigger">
                    <input type="checkbox" on:click|stopPropagation /><span>Eleanor Pena</span>
                    <span>(3/4 targets)</span>
                </div>

                <ul>
                    <li>
                        <input type="checkbox" />
                        <span class="type">Email</span>
                        <span class="value">eleanor.pena@gmail.com</span>
                    </li>
                </ul>
            </AccordionItem>
        </Accordion>
    </div>
</div>

<style lang="scss">
    svg {
        border: 1px dashed #fff;
        width: 100%;
        margin-block-start: 2rem;

        line,
        linearGradient,
        circle {
            transition: 200ms ease;
        }
    }
</style>
