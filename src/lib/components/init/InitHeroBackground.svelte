<script lang="ts">
    import { browser } from '$app/environment';
    import {
        accentHslToCss,
        parseCssAccentToHsl,
        type ParsedAccentHsl
    } from '$lib/init/parse-css-accent';
    import { cn } from '$lib/utils/cn';
    import { animate, createTimeline, createTimer, stagger, utils } from 'animejs';

    const ROWS = 13;
    const GRID: [number, number] = [ROWS, ROWS];
    const FROM = 'center' as const;
    const PARTICLE_BRIGHTNESS = 0.8;

    type ParticleTheme = {
        opacityRange: [number, number];
        lightnessRange: [number, number];
        shadowRange: [number, number];
        pulseOpacity: number;
    };

    interface Props {
        compact?: boolean;
        active?: boolean;
        bare?: boolean;
        accentColor?: string;
        particleIsDark?: boolean;
        particleMotionSpeed?: number;
        keepAliveWhenHidden?: boolean;
    }

    let {
        compact = false,
        active = true,
        bare = false,
        accentColor,
        particleIsDark,
        particleMotionSpeed = 1,
        keepAliveWhenHidden = false
    }: Props = $props();

    let containerEl: HTMLDivElement;
    let creatureEl: HTMLDivElement;

    type StaggerFn = (target?: unknown, index?: number, total?: number) => unknown;

    type AnimationRuntime = {
        particleEls: NodeListOf<Element>;
        scaleStagger: StaggerFn;
        grid: [number, number];
        from: typeof FROM;
        mainLoop: ReturnType<typeof createTimer>;
        autoMove: ReturnType<typeof createTimeline>;
        manualMovementTimeout: ReturnType<typeof createTimer>;
        syncLayout: () => void;
        pause: () => void;
        resume: () => void;
    };

    type ThemeState = {
        particleTheme: ParticleTheme;
        opacityStagger: StaggerFn;
        accent: ParsedAccentHsl;
    };

    let runtime: AnimationRuntime | null = null;
    let themeState: ThemeState | null = null;
    const compactRef = { current: false };
    const activeRef = { current: true };
    const keepAliveRef = { current: false };

    $effect(() => {
        compactRef.current = compact;
        runtime?.syncLayout();
    });

    $effect(() => {
        activeRef.current = active;
        if (!runtime) return;
        if (active) {
            runtime.resume();
        } else {
            runtime.pause();
        }
    });

    $effect(() => {
        keepAliveRef.current = keepAliveWhenHidden;
    });

    function getBrandPink() {
        if (!browser) return '#fd366e';
        return (
            getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() ||
            '#fd366e'
        );
    }

    function isDarkChrome() {
        if (!browser) return true;
        return document.body.classList.contains('dark') || !document.body.classList.contains('light');
    }

    function dim(value: number) {
        return value * PARTICLE_BRIGHTNESS;
    }

    function dimBrandPink(color: string) {
        return `color-mix(in srgb, ${color} ${PARTICLE_BRIGHTNESS * 100}%, transparent)`;
    }

    function getParticleTheme(isDark: boolean) {
        if (isDark) {
            return {
                opacityRange: [dim(1), dim(0.5)] as [number, number],
                lightnessRange: [dim(80), dim(50)] as [number, number],
                shadowRange: [dim(5), dim(1)] as [number, number],
                pulseOpacity: dim(1)
            };
        }

        return {
            opacityRange: [0.95, 0.6] as [number, number],
            lightnessRange: [72, 56] as [number, number],
            shadowRange: [8, 2] as [number, number],
            pulseOpacity: 1
        };
    }

    function applyParticleTheme(
        rt: Pick<AnimationRuntime, 'particleEls' | 'scaleStagger' | 'grid' | 'from'>,
        particleTheme: ParticleTheme,
        isDark: boolean,
        accent: ParsedAccentHsl
    ) {
        const { particleEls, scaleStagger, grid, from } = rt;
        const accentCss = accentHslToCss(accent);
        const opacityStagger = stagger(particleTheme.opacityRange, { grid, from });
        const shadowColor = isDark
            ? dimBrandPink(accentCss)
            : `color-mix(in srgb, ${accentCss} 90%, transparent)`;

        utils.set(particleEls, {
            scale: scaleStagger,
            opacity: opacityStagger,
            background: stagger(particleTheme.lightnessRange, {
                grid,
                from,
                modifier: (v) => `hsl(${accent.h}, ${accent.s}%, ${v}%)`
            }),
            boxShadow: stagger(particleTheme.shadowRange, {
                grid,
                from,
                modifier: (v) => `0px 0px ${utils.round(v, 0)}em 0px ${shadowColor}`
            })
        });

        return { opacityStagger, accent };
    }

    let isDark = $derived(particleIsDark ?? isDarkChrome());

    $effect(() => {
        if (!browser || !containerEl || !creatureEl) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const grid = GRID;
        const from = FROM;
        const motion = Math.max(0.12, Math.min(1, particleMotionSpeed));
        const dur = (ms: number) => ms / motion;
        const timeScale = (factor: number) => factor * motion;
        const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from }) as StaggerFn;
        const darkChrome = particleIsDark ?? isDarkChrome();
        const particleTheme = getParticleTheme(darkChrome);
        const accent = parseCssAccentToHsl(accentColor ?? getBrandPink(), containerEl);

        for (let i = 0; i < ROWS * ROWS; i++) {
            const particle = document.createElement('div');
            particle.className = 'init-hero-particle';
            creatureEl.appendChild(particle);
        }

        const particleEls = creatureEl.querySelectorAll('.init-hero-particle');

        const syncLayout = () => {
            const isCompact = compactRef.current;
            const multiplier = isCompact ? 0.0045 : 0.0025;
            const minSize = isCompact ? 0.75 : 1;
            creatureEl.style.fontSize = `${Math.max(containerEl.clientHeight * multiplier, minSize)}px`;
        };

        syncLayout();

        utils.set(creatureEl, {
            width: `${ROWS * 10}em`,
            height: `${ROWS * 10}em`
        });

        const { opacityStagger, accent: appliedAccent } = applyParticleTheme(
            { particleEls, scaleStagger, grid, from },
            particleTheme,
            darkChrome,
            accent
        );
        themeState = {
            particleTheme,
            opacityStagger: opacityStagger as StaggerFn,
            accent: appliedAccent
        };

        utils.set(particleEls, {
            x: 0,
            y: 0,
            zIndex: stagger([ROWS * ROWS, 1], {
                grid,
                from,
                modifier: utils.round(0)
            })
        });

        const getViewport = () => {
            const isCompact = compactRef.current;
            return {
                w: containerEl.clientWidth * (isCompact ? 0.32 : 0.5),
                h: containerEl.clientHeight * (isCompact ? 0.9 : 0.5)
            };
        };

        let viewport = getViewport();
        const cursor = { x: 0, y: 0 };
        let canRun = true;

        const pulse = () => {
            if (!themeState) return;

            animate(particleEls, {
                keyframes: [
                    {
                        scale: 4,
                        opacity: themeState.particleTheme.pulseOpacity,
                        delay: stagger(dur(90), { start: dur(1650), grid, from }),
                        duration: dur(150)
                    },
                    {
                        scale: scaleStagger,
                        opacity: themeState.opacityStagger,
                        ease: 'inOutQuad',
                        duration: dur(600)
                    }
                ]
            });
        };

        const mainLoop = createTimer({
            frameRate: 15,
            onUpdate: () => {
                if (!canRun || !activeRef.current) return;

                animate(particleEls, {
                    x: cursor.x,
                    y: cursor.y,
                    delay: stagger(dur(40), { grid, from }),
                    duration: stagger(dur(120), { start: dur(750), ease: 'inQuad', grid, from }),
                    ease: 'inOut',
                    composition: 'blend'
                });
            }
        });

        const autoMove = createTimeline()
            .add(
                cursor,
                {
                    x: [-viewport.w * 0.45, viewport.w * 0.45],
                    modifier: (x) =>
                        x + Math.sin(mainLoop.currentTime * timeScale(0.0007)) * viewport.w * 0.5,
                    duration: dur(3000),
                    ease: 'inOutExpo',
                    alternate: true,
                    loop: true,
                    onBegin: pulse,
                    onLoop: pulse
                },
                0
            )
            .add(
                cursor,
                {
                    y: [-viewport.h * 0.45, viewport.h * 0.45],
                    modifier: (y) =>
                        y + Math.cos(mainLoop.currentTime * timeScale(0.00012)) * viewport.h * 0.5,
                    duration: dur(1000),
                    ease: 'inOutQuad',
                    alternate: true,
                    loop: true
                },
                0
            );

        const manualMovementTimeout = createTimer({
            duration: dur(1500),
            onComplete: () => {
                if (canRun && activeRef.current) {
                    autoMove.play();
                }
            }
        });

        const pause = () => {
            mainLoop.pause();
            autoMove.pause();
            manualMovementTimeout.pause();
        };

        const resume = () => {
            if (!canRun || !activeRef.current) return;
            if (document.visibilityState === 'hidden' && !keepAliveRef.current) return;
            mainLoop.play();
            autoMove.play();
        };

        const followPointer = (event: MouseEvent | TouchEvent) => {
            if (!canRun || !activeRef.current) return;

            const rect = containerEl.getBoundingClientRect();
            const point =
                event.type === 'touchmove'
                    ? (event as TouchEvent).touches[0]
                    : (event as MouseEvent);

            if (!point) return;

            cursor.x = point.clientX - rect.left - viewport.w;
            cursor.y = point.clientY - rect.top - viewport.h;
            autoMove.pause();
            manualMovementTimeout.restart();
        };

        const handleResize = () => {
            viewport = getViewport();
            syncLayout();
        };

        const handleVisibility = () => {
            if (document.visibilityState === 'hidden') {
                if (keepAliveRef.current) return;
                pause();
                return;
            }
            if (canRun && activeRef.current) {
                resume();
            }
        };

        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                canRun = entry?.isIntersecting ?? true;
                if (
                    canRun &&
                    activeRef.current &&
                    (document.visibilityState === 'visible' || keepAliveRef.current)
                ) {
                    resume();
                } else if (!keepAliveRef.current) {
                    pause();
                }
            },
            { threshold: 0.05 }
        );

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(containerEl);
        intersectionObserver.observe(containerEl);

        containerEl.addEventListener('mousemove', followPointer);
        containerEl.addEventListener('touchmove', followPointer, { passive: true });
        document.addEventListener('visibilitychange', handleVisibility);

        if (activeRef.current) {
            resume();
        }

        runtime = {
            particleEls,
            scaleStagger,
            grid,
            from,
            mainLoop,
            autoMove,
            manualMovementTimeout,
            syncLayout,
            pause,
            resume
        };

        return () => {
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            containerEl.removeEventListener('mousemove', followPointer);
            containerEl.removeEventListener('touchmove', followPointer);
            document.removeEventListener('visibilitychange', handleVisibility);
            pause();
            creatureEl.replaceChildren();
            runtime = null;
            themeState = null;
        };
    });

    $effect(() => {
        if (!runtime || !browser) return;

        const darkChrome = particleIsDark ?? isDarkChrome();
        const particleTheme = getParticleTheme(darkChrome);
        const accent = parseCssAccentToHsl(accentColor ?? getBrandPink(), containerEl);
        const { opacityStagger, accent: appliedAccent } = applyParticleTheme(
            runtime,
            particleTheme,
            darkChrome,
            accent
        );
        themeState = {
            particleTheme,
            opacityStagger: opacityStagger as StaggerFn,
            accent: appliedAccent
        };

        isDark;
        accentColor;
        particleIsDark;
    });
</script>

<div bind:this={containerEl} class="init-hero-background absolute inset-0 overflow-hidden">
    {#if !bare}
        <div
            class={cn('absolute inset-0', compact ? 'bg-transparent' : 'bg-[hsl(var(--p-body-bg-color))]')}
            aria-hidden="true"
        ></div>
    {/if}

    {#if !bare}
        <div
            class={cn(
                'absolute inset-0 bg-[radial-gradient(circle,hsl(var(--web-color-border))_1px,transparent_1px)] bg-size-[18px_18px] transition-opacity duration-500',
                compact && 'opacity-0 mask-[linear-gradient(to_left,transparent,black_35%)]'
            )}
            aria-hidden="true"
        ></div>
    {/if}

    <div
        class={cn(
            'pointer-events-none absolute inset-0 flex overflow-hidden transition-[justify-content,padding] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
            compact ? 'items-center justify-end pe-2 sm:pe-6' : 'items-center justify-center'
        )}
        aria-hidden="true"
    >
        <div
            bind:this={creatureEl}
            class={cn(
                'init-hero-creature flex flex-wrap items-center justify-center will-change-transform [transform-style:preserve-3d]',
                isDark
                    ? '[&>.init-hero-particle]:[mix-blend-mode:plus-lighter]'
                    : '[&>.init-hero-particle]:mix-blend-normal'
            )}
            style="width: 150em; height: 150em;"
        ></div>
    </div>
</div>

<style>
    :global(.init-hero-creature > .init-hero-particle) {
        position: relative;
        margin: 3em;
        width: 4em;
        height: 4em;
        border-radius: 2em;
        will-change: transform;
        transform-style: preserve-3d;
    }
</style>
