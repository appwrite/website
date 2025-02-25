<script lang="ts">
    import { storage } from '$lib/appwrite';
    export let file_id: string;
    export let bucket_id: string = 'images';
    export let alt: string = '';
    export let title: string = '';
    export let width: number = 1800;
    export let height: number = 1800;
    export let gravity: string = 'center';
    export let quality: number = 90;
    export let border_width: number = 5;
    export let border_color: string = 'CDCA30';
    export let border_radius: number = 0;
    export let opacity: number = 1;
    export let rotation: number = 0;
    export let background_color: string = 'FFFFFF';
    export let output: string = 'webp';

    console.log('<><><>bucket_id<><><><><><>>>==>', bucket_id);
    console.log('<><><>file_id<><><><><><>>>==>', file_id);

    // Get the file preview URL from Appwrite Storage
    const imageSrc = storage
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
    console.log('<><><>imageSrc<><><><><><>>>==>', imageSrc);

    /*
    1800, // Width
  0, // Height (ignored if 0)
  'center', // Cropping gravity
  90, // Quality (1-100)
  5, // Border width
  'CDCA30', // Border color (hex)
  15, // Border radius
  1, // Opacity (0-1)
  0, // Rotation (degrees)
  'FFFFFF', // Background color
  'jpg', // Output format */
</script>

<img src={imageSrc} {alt} {title} />
