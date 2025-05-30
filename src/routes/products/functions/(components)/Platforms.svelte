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
        'container mb-10 overflow-clip',
        '[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] mask-alpha [filter:brightness(1.5)]'
    )}
>
    <div class="animate-scroll-x flex w-max gap-4 pl-4 md:[animation-play-state:paused]">
        {#each platforms as platform}
            <img src={platform.icon} alt={platform.name} class="size-16" />
        {/each}
        {#each platforms as platform}
            <img src={platform.icon} alt={platform.name} class="size-16" aria-hidden="true" />
        {/each}
    </div>
</div>
