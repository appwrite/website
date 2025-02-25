<script lang="ts">
    import { storage } from '$lib/appwrite';
    export let file_id: string;
    export let bucket_id: string = 'images';
    export let alt: string = '';
    export let title: string = '';

    console.log('<><><>bucket_id<><><><><><>>>==>', bucket_id);
    console.log('<><><>file_id<><><><><><>>>==>', file_id);

    // Get the file preview URL from Appwrite Storage
    const imageSrc = storage.getFilePreview(bucket_id, file_id).toString();
    console.log('<><><>imageSrc<><><><><><>>>==>', imageSrc);
</script>

<img src={imageSrc} {alt} {title} />
