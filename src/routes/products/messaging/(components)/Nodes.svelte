<script lang="ts">
    import { clamp } from '$lib/utils/clamp';
    import { withPrevious } from '$lib/utils/withPrevious';
    import { withRaf } from '$lib/utils/withRaf';
    import Accordion from './Accordion/Accordion.svelte';
    import AccordionItem from './Accordion/AccordionItem.svelte';
    import Checkbox from './Checkbox.svelte';

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

    type User = {
        name: string;
        devices: Array<{
            checked: boolean;
            type: string;
            value: string;
            circleIndex: IntRange<0, typeof circles.length>;
        }>;
    };

    let users: User[] = [
        {
            name: 'Eleanor Pena',
            devices: [
                { checked: false, type: 'Email', value: 'eleanor.pena@gmail.com', circleIndex: 0 },
                { checked: false, type: 'SMS', value: '+1 123 456 7890', circleIndex: 1 },
                { checked: false, type: 'Push', value: "Eleanor's iPhone", circleIndex: 2 }
            ]
        },
        {
            name: "Walter O'Brien",
            devices: [
                { checked: false, type: 'Email', value: 'walter@appwrite.io', circleIndex: 3 },
                { checked: false, type: 'SMS', value: '+1 123 456 7000', circleIndex: 4 }
            ]
        },
        {
            name: 'Toby Curtis',
            devices: [
                { checked: false, type: 'Push', value: "Toby's Pixel", circleIndex: 5 },
                { checked: false, type: 'Push', value: "Toby's Laptop", circleIndex: 6 }
            ]
        },
        {
            name: 'Paige Dineen',
            devices: [
                { checked: false, type: 'Email', value: 'paige@appwrite.io', circleIndex: 7 },
                { checked: false, type: 'SMS', value: '+1 123 456 7000', circleIndex: 8 }
            ]
        }
    ];

    let selected = withPrevious(circles.map(() => false));
    let prevSelected = selected.previous;

    $: {
        users.forEach((user) => {
            user.devices.forEach((device) => {
                selected.update((p) => {
                    return [
                        ...p.slice(0, device.circleIndex),
                        device.checked,
                        ...p.slice(device.circleIndex + 1)
                    ];
                });
            });
        });
    }

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
                percent: clamp(0, curr.percent + (goal - curr.percent) * 0.15, 100),
                reverse
            };
        });
    });
</script>

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
                fill="url(#selected-circle)"
                stroke="hsla(178, 54%, 69%, 1)"
                stroke-width="2"
                opacity={$selected[i] ? 1 : 0}
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
        <h3 class="aw-label aw-u-color-text-primary">Select subscribers</h3>
        <Accordion>
            <ul class="accordion-items">
                {#each users as user, i}
                    {@const selectedDevices = user.devices.filter((d) => d.checked).length}
                    {@const allSelected = selectedDevices === user.devices.length}
                    <li>
                        <AccordionItem index={i}>
                            <div class="trigger" slot="trigger">
                                <Checkbox
                                    checked={allSelected
                                        ? true
                                        : selectedDevices > 0
                                        ? 'indeterminate'
                                        : false}
                                    onCheckedChange={({ next }) => {
                                        if (next === true) {
                                            user.devices.forEach((d) => (d.checked = true));
                                        } else if (!next) {
                                            user.devices.forEach((d) => (d.checked = false));
                                        }
                                        users = users;

                                        return next;
                                    }}
                                />
                                <span class="aw-sub-body-500 aw-u-color-text-primary">
                                    {user.name}
                                </span>
                                <span class="aw-caption-400">
                                    &nbsp;({selectedDevices}/{user.devices.length} targets)
                                </span>
                            </div>

                            <ul>
                                {#each user.devices as device, j}
                                    <li>
                                        <Checkbox
                                            bind:checked={user.devices[j].checked}
                                            --size="1rem"
                                        />
                                        <span class="type">{device.type}</span>
                                        <span class="aw-caption-400">{device.value}</span>
                                    </li>
                                {/each}
                            </ul>
                        </AccordionItem>
                    </li>
                {/each}
            </ul>
        </Accordion>
    </div>
</div>

<style lang="scss">
    .wrapper {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                hsl(240, 5.7%, 10.4%, 0),
                hsl(240, 5.7%, 10.4%, 0) 80%,
                hsl(240, 5.7%, 10.4%, 1)
            );
            pointer-events: none;
        }
    }

    svg {
        /* border: 1px dashed #fff; */
        width: 100%;
        margin-block-start: 2rem;

        line,
        linearGradient,
        circle {
            transition: 200ms ease;
        }
    }

    .users-modal {
        @include border-gradient;

        position: absolute;
        inset-block-end: 0;
        inset-inline-start: 50%;
        transform: translateX(-50%);

        inline-size: 35rem;

        padding: 2rem;
        background-color: hsl(0, 0%, 100%, 0.02);
        backdrop-filter: blur(35px);

        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.07),
            hsl(0, 0%, 100%, 0)
        );
        --m-border-radius: 1.5rem;

        .accordion-items {
            display: flex;
            flex-direction: column;
            margin-block-start: 2rem;

            > li {
                border-block-start: 1px solid hsl(var(--aw-color-offset));

                &:last-child {
                    border-block-end: 1px solid hsl(var(--aw-color-offset));
                }

                .trigger {
                    display: flex;
                    align-items: center;
                    padding-block: 1rem;

                    > span:nth-child(2) {
                        padding-inline-start: 1rem;
                    }
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    /* padding-block-start: 1rem; */
                    padding-inline-start: 2.25rem;
                    padding-block-end: 1rem;

                    li {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;

                        .type {
                            background: hsl(var(--aw-color-smooth));
                            border-radius: 0.25rem;
                            font-size: 0.75rem;
                            padding-inline: 0.375rem;
                        }
                    }
                }
            }
        }
    }
</style>
