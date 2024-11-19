<script lang="ts">
    import Bun from '../(assets)/platforms/bun-sh.svg';
    import C from '../(assets)/platforms/c-plus-plus.svg';
    import Dart from '../(assets)/platforms/dart.svg';
    import Deno from '../(assets)/platforms/deno.svg';
    import Java from '../(assets)/platforms/java.svg';
    import Kotlin from '../(assets)/platforms/kotlin.svg';
    import Node from '../(assets)/platforms/node-js.svg';
    import Php from '../(assets)/platforms/php.svg';
    import Python from '../(assets)/platforms/python.svg';
    import Ruby from '../(assets)/platforms/ruby.svg';
    import Swift from '../(assets)/platforms/swift.svg';
    import DotNet from '../(assets)/platforms/dot-net.svg';
    import { classNames } from '$lib/utils/classnames';

    const platforms = [
        { name: 'Deno', icon: Deno },
        { name: 'Python', icon: Python },
        { name: 'Dart', icon: Dart },
        { name: 'PHP', icon: Php },
        { name: 'Ruby', icon: Ruby },
        { name: '.NET', icon: DotNet },
        { name: 'Java', icon: Java },
        { name: 'Node.js', icon: Node },
        { name: 'Bun', icon: Bun },
        { name: 'Swift', icon: Swift },
        { name: 'Kotlin', icon: Kotlin },
        { name: 'C++', icon: C }
    ];
</script>

<div
    class={classNames(
        'container relative mb-40',
        'mix-blend-exclusion after:absolute after:inset-0'
    )}
>
    <div
        style="--columns:{platforms.length}"
        class="grid grid-cols-[repeat(var(--columns),minmax(0,1fr))] place-items-center gap-4 [filter:brightness(1.5)] [mask-image:linear-gradient(to_right,rgba(255,255,255,0.08)_0%,_rgba(255,255,255,1)_50%,_rgba(255,255,255,0.08)_100%)] [mask-mode:alpha]"
    >
        {#each platforms as platform}
            <img src={platform.icon} alt={platform.name} class="size-10 md:size-16" />
        {/each}
    </div>
</div>
