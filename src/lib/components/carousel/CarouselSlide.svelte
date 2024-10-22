<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    let className = '';

    export { className as class };
</script>

<li
    class={classNames(
        'slide web-carousel-item mr-2 flex-[0_0_100%] cursor-grab active:cursor-grabbing md:flex-[0_0_50%]',
        className
    )}
>
    <div class="embla__slide__number">
        <slot />
    </div>
</li>
