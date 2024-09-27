<script lang="ts">
    export let name: string;
    export let tag: string;
    export let icon: 'x' | 'linkedin' | 'discord' | 'product-hunt';
    export let avatarSrc: string;
</script>

<div class="web-card is-white">
    <div class="web-social-item flex flex-col gap-6">
        <div class="flex justify-between gap-4">
            <div class="web-user-box">
                <img class="web-user-box-image" src={avatarSrc} alt="Avatar of {name}" loading="lazy" />
                <div class="web-user-box-name text-sub-body font-medium">{name}</div>
                <div class="web-user-box-username text-sub-body">{tag}</div>
            </div>
            <span
                class="web-social-item-icon web-icon-{icon}"
                aria-label={icon}
                aria-hidden="true"
            />
        </div>
        <p class="text-sub-body font-medium web-u-text-color-neutral-700">
            <slot />
        </p>
    </div>
</div>
