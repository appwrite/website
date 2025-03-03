<script lang="ts">
    import { storage } from '$lib/appwrite';
    import Image from '../nodes/Image.svelte';

    export let file_id: string;
    export let bucket_id: string = 'images';
    export let alt: string = '';
    export let title: string = '';
    export let width: number = 0;
    export let height: number = 0;
    export let gravity: string = 'center';
    export let quality: number = 90;
    export let border_width: number = 0;
    export let border_color: string = 'CDCA30';
    export let border_radius: number = 0;
    export let opacity: number = 1;
    export let rotation: number = 0;
    export let background_color: string = '000000';
    export let output: string = 'webp';
    export let just_img: boolean = false;

    const src = storage
        .getFilePreview(
            bucket_id,
            file_id,
            width,
            height,
            gravity as any,
            quality,
            border_width,
            border_color,
            border_radius,
            opacity,
            rotation,
            background_color,
            output as any
        )
        .toString();
</script>

{#if just_img}
    <img {src} {alt} {title} style="margin-bottom: 2rem;" />
{:else}
    <Image {src} {alt} {title} />
{/if}
