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
        'container relative pt-32 pb-40',
        'after:absolute after:inset-0 after:bg-gradient-to-r after:from-[hsl(var(--p-body-bg-color))] after:via-transparent after:to-[hsl(var(--p-body-bg-color))]'
    )}
>
    <div
        style="--columns:{platforms.length}"
        class="grid grid-cols-[repeat(calc(var(--columns)/4),minmax(0,1fr))] place-items-center gap-4 md:grid-cols-[repeat(calc(var(--columns)/2),minmax(0,1fr))] lg:grid-cols-[repeat(var(--columns),minmax(0,1fr))]"
    >
        {#each platforms as platform}
            <img src={platform.icon} alt={platform.name} class="h-16 w-16" />
        {/each}
    </div>
</div>
