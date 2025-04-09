<script lang="ts">
    import { clamp } from '$lib/utils/clamp';
    import { withPrevious } from '$lib/utils/withPrevious';
    import { withRaf } from '$lib/utils/withRaf';
    import Accordion from './Accordion/Accordion.svelte';
    import AccordionItem from './Accordion/AccordionItem.svelte';
    import Checkbox from './Checkbox.svelte';
    import { dequal } from 'dequal/lite';
    import Step from './Step.svelte';
    import { onMount } from 'svelte';
    import { inView } from 'motion';
    import { sleep } from '$lib/animations';
    import { Button } from '$lib/components/ui';

    /* Variables & Contstants */
    const width = 2000;
    const height = 1050;

    /* Entities */

    type Line = {
        from: number;
        to: number;
    };

    const lines: Line[] = [
        { from: 0, to: 1 },
        { from: 0, to: 7 },
        { from: 0, to: 4 },
        { from: 0, to: 2 },
        { from: 1, to: 2 },
        { from: 2, to: 6 },
        { from: 6, to: 8 },
        { from: 1, to: 7 },
        { from: 7, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 1 },
        { from: 5, to: 3 },
        { from: 5, to: 7 }
    ];

    type User = {
        name: string;
        devices: Array<{
            checked: boolean;
            type: string;
            value: string;
            circlePos: [number, number];
            textPos?: [number, number];
        }>;
    };

    let users: User[] = [
        {
            name: 'Eleanor Pena',
            devices: [
                {
                    checked: false,
                    type: 'Email',
                    value: 'eleanor.pena@appwrite.io',
                    circlePos: [100, 500]
                },
                {
                    checked: false,
                    type: 'Push',
                    value: "Eleanor's iPhone",

                    circlePos: [500, 100],
                    textPos: [250, 80]
                },
                {
                    checked: false,
                    type: 'SMS',
                    value: '+1 123 456 2890',
                    circlePos: [1520, 700]
                }
            ]
        },
        {
            name: "Walter O'Brien",
            devices: [
                {
                    checked: false,
                    type: 'Email',
                    value: 'walter@appwrite.io',
                    circlePos: [1500, 900]
                },
                {
                    checked: false,
                    type: 'SMS',
                    value: '+55 98142-4332',
                    circlePos: [500, 900],
                    textPos: [300, 924]
                }
            ]
        },
        {
            name: 'Toby Curtis',
            devices: [
                {
                    checked: false,
                    type: 'Push',
                    value: "Toby's Pixel",
                    circlePos: [1900, 500],
                    textPos: [1700, 480]
                },
                {
                    checked: false,
                    type: 'Push',
                    value: "Toby's Laptop",
                    circlePos: [450, 450],
                    textPos: [300, 390]
                }
            ]
        },
        {
            name: 'Paige Dineen',
            devices: [
                {
                    checked: false,
                    type: 'Email',
                    value: 'paige@appwrite.io',
                    circlePos: [1500, 100]
                },
                {
                    checked: false,
                    type: 'SMS',
                    value: '+351 999 888 124',
                    circlePos: [1300, 450],
                    textPos: [1100, 430]
                }
            ]
        }
    ];

    let selected = withPrevious(users.flatMap((u) => u.devices.map((d) => d.checked)));
    let prevSelected = selected.previous;

    $: devices = users.flatMap((u) => u.devices);

    $: {
        // Update selected devices
        selected.set(users.flatMap((u) => u.devices.map((d) => d.checked)));
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

    let wrapper: HTMLElement;
    onMount(() => {
        inView(
            wrapper,
            () => {
                (async () => {
                    users[0].devices[0].checked = true;
                    await sleep(1000);
                    users[0].devices[2].checked = true;
                    await sleep(500);
                    users[0].devices[1].checked = true;
                })();
            },
            { amount: 1 }
        );
    });
</script>

<Step title="Step 2: Target">
    <div class="wrapper" bind:this={wrapper}>
        <svg
            class="web-is-not-mobile"
            viewBox="0 0 {width} {height}"
            xmlns="http://www.w3.org/2000/svg"
        >
            {#each lines as line, i}
                <line
                    x1={devices[line.from].circlePos[0]}
                    y1={devices[line.from].circlePos[1]}
                    x2={devices[line.to].circlePos[0]}
                    y2={devices[line.to].circlePos[1]}
                    stroke="url(#gradient-{i})"
                    stroke-width="2"
                />
            {/each}

            {#each devices as device, i}
                {@const textPos = device.textPos ?? [
                    device.circlePos[0] - 12,
                    device.circlePos[1] + 24
                ]}

                <!-- Outer -->
                <circle
                    cx={device.circlePos[0]}
                    cy={device.circlePos[1]}
                    r="12"
                    fill="url(#selected-circle)"
                    stroke="hsla(178, 54%, 69%, 1)"
                    stroke-width="2"
                    opacity={$selected[i] ? 1 : 0}
                />
                <!-- Inner -->
                <circle
                    cx={device.circlePos[0]}
                    cy={device.circlePos[1]}
                    r="3"
                    fill={$selected[i] ? 'hsla(178, 54%, 69%, 1)' : 'hsl(0, 0%, 100%, 0.5)'}
                />

                <foreignObject x={textPos[0]} y={textPos[1]} width="360" height="64">
                    <span class="text-micro text-primary uppercase" data-active={$selected[i]}>
                        {device.value}
                    </span>
                </foreignObject>
            {/each}

            <defs>
                {#each lines as line, i}
                    {@const x1 = animationProgress[i].reverse
                        ? devices[line.to].circlePos[0]
                        : devices[line.from].circlePos[0]}
                    {@const y1 = animationProgress[i].reverse
                        ? devices[line.to].circlePos[1]
                        : devices[line.from].circlePos[1]}
                    {@const x2 = animationProgress[i].reverse
                        ? devices[line.from].circlePos[0]
                        : devices[line.to].circlePos[0]}
                    {@const y2 = animationProgress[i].reverse
                        ? devices[line.from].circlePos[1]
                        : devices[line.to].circlePos[1]}

                    {@const selectionPercent = animationProgress[i].percent}
                    <linearGradient
                        id="gradient-{i}"
                        gradientUnits="userSpaceOnUse"
                        {x1}
                        {y1}
                        {x2}
                        {y2}
                    >
                        <!-- Go from red to white, depending on selectionPercent -->
                        <stop offset="0%" stop-color="hsla(178, 54%, 69%, 1)" />
                        <stop offset="{selectionPercent}%" stop-color="hsla(178, 54%, 69%, 1)" />
                        <stop offset="{selectionPercent}%" stop-color="hsla(0, 0%, 100%, 0.08)" />
                        <stop offset="100%" stop-color="hsla(0, 0%, 100%, 0.08)" />
                    </linearGradient>
                {/each}

                <linearGradient id="selected-circle" gradientTransform="rotate(90)">
                    <stop offset="0%" stop-color="hsl(240, 5%, 10%)" />
                    <stop offset="100%" stop-color="hsla(178, 54%, 69%, 1)" />
                </linearGradient>
            </defs>
        </svg>

        <div class="users-modal">
            <h3 class="text-label text-primary">Select subscribers</h3>
            <Accordion>
                <ul class="accordion-items">
                    {#each users as user, i}
                        {@const selectedDevices = user.devices.filter((d) => d.checked).length}
                        {@const allSelected = selectedDevices === user.devices.length}
                        <li>
                            <AccordionItem index={i}>
                                <div class="trigger" slot="trigger">
                                    <Checkbox
                                        id={`user-${i}`}
                                        ariaLabel={user.name}
                                        checked={allSelected
                                            ? true
                                            : selectedDevices > 0
                                              ? 'indeterminate'
                                              : false}
                                        onCheckedChange={({ next }) => {
                                            const newUsers = structuredClone(users).map((u, j) => {
                                                if (i === j) {
                                                    if (next === true) {
                                                        u.devices.forEach(
                                                            (d) => (d.checked = true)
                                                        );
                                                    } else if (!next) {
                                                        u.devices.forEach(
                                                            (d) => (d.checked = false)
                                                        );
                                                    }
                                                }
                                                return u;
                                            });
                                            if (!dequal(newUsers, users)) {
                                                users = newUsers;
                                            }

                                            return next;
                                        }}
                                    />
                                    <span class="text-sub-body text-primary font-medium">
                                        {user.name}
                                    </span>
                                    <span class="text-caption">
                                        &nbsp;({selectedDevices}/{user.devices.length} targets)
                                    </span>
                                </div>

                                <ul>
                                    {#each user.devices as device, j}
                                        <li>
                                            <!-- svelte-ignore a11y-label-has-associated-control -->
                                            <Checkbox
                                                ariaLabel={device.value}
                                                id="device-{i}-{j}"
                                                bind:checked={user.devices[j].checked}
                                                --size="1rem"
                                            />
                                            <label for="device-{i}-{j}">
                                                <span class="type">{device.type}</span>
                                                <span class="text-caption">{device.value}</span>
                                            </label>
                                        </li>
                                    {/each}
                                </ul>
                            </AccordionItem>
                        </li>
                    {/each}
                </ul>
            </Accordion>
            <div class="mt-5 flex">
                <span class="web-u-color-text-tertiary" style:font-size="0.75rem">
                    Total results: {users.flatMap((u) => u.devices).length}
                </span>
            </div>

            <hr />

            <div class="flex items-center justify-end gap-4">
                <span style="font-size: 14px; color: #6C6C71;"
                    >{users.filter((u) => !!u.devices.some((d) => d.checked)).length} Users selected</span
                >
                <Button>Add</Button>
            </div>
        </div>
    </div>

    <div class="target-text mt-4 flex flex-col items-center gap-6">
        <h3 class="text-title font-aeonik-pro text-primary text-center">
            Target and group your subscribers
        </h3>
        <p class="text-description text-center" style:max-inline-size="580px">
            Segment your users based on topics using list subscriptions to send focused messages.
        </p>
    </div>
</Step>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .wrapper {
        position: relative;
        overflow: hidden;
        margin-block-start: 2rem;

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
        @media screen and (max-width: 769px) {
            overflow: visible;
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

        foreignObject span {
            @include gradients.border-gradient;
            --m-border-radius: 0.5rem;
            --m-border-gradient-before: linear-gradient(
                to bottom,
                hsl(0, 0%, 100%, 0.07),
                hsl(0, 0%, 100%, 0)
            );

            display: inline-block;
            background: linear-gradient(to bottom, hsl(240, 2%, 22%), hsl(240, 4%, 16%));
            padding: 0.5rem 0.75rem;
            opacity: 0;
            transition: 200ms ease;
            font-size: 1.175rem;
            translate: 0 4px;

            &[data-active='true'] {
                opacity: 1;
            }
        }
    }

    .users-modal {
        @include gradients.border-gradient;

        position: absolute;
        inset-block-start: 5rem;
        inset-inline-start: 50%;
        transform: translateX(-50%);

        inline-size: 30rem;

        padding: 2rem;
        background-color: hsl(0, 0%, 100%, 0.02);
        backdrop-filter: blur(20px);

        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.07),
            hsl(0, 0%, 100%, 0)
        );
        --m-border-radius: 1.5rem;

        @media screen and (max-width: 769px) {
            position: relative;
            transform: none;
            inset-block-start: unset;
            inset-inline-start: unset;
            display: block;
            margin-inline: auto;
            inline-size: 100%;
            max-inline-size: 30rem;
            z-index: -1;
            max-block-size: 28rem;
            overflow: hidden;
        }

        .accordion-items {
            display: flex;
            flex-direction: column;
            margin-block-start: 2rem;

            user-select: none;

            > li {
                border-block-start: 1px solid hsl(var(--web-color-offset));

                &:last-child {
                    border-block-end: 1px solid hsl(var(--web-color-offset));
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

                    li,
                    label {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;

                        .type {
                            background: hsl(var(--web-color-smooth));
                            border-radius: 0.25rem;
                            font-size: 0.75rem;
                            padding-inline: 0.375rem;
                        }
                    }
                }
            }
        }

        hr {
            margin-inline: -2rem;
            border-block-end: 1px solid hsl(var(--web-color-offset));
            margin-block: 2rem;
        }
    }

    .target-text {
        text-wrap: balance;
        @media screen and (max-width: 1024px) {
            z-index: 1;
            justify-content: start;
            align-items: start;
            margin-block-start: 2rem;
            padding-block-end: var(--padding-block-end);
            text-wrap: inherit;
            h3,
            p {
                text-align: start;
            }
        }
    }
</style>
