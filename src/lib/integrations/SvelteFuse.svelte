<script lang="ts" generics="T">
    import Fuse, { type IFuseOptions, type FuseResult } from 'fuse.js';

    export let list: ReadonlyArray<T>;
    export let options: IFuseOptions<T>;
    export let query: string;

    export let result: FuseResult<T>[];

    $: fuse = new Fuse(list, options);
    $: if (list) {
        fuse.setCollection(list);
    }
    $: if (list || query) {
        result = fuse.search(query);
    }
</script>
