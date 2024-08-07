<script lang="ts" generics="T">
    import Fuse, { type IFuseOptions, type FuseResult } from 'fuse.js';

    export let list: ReadonlyArray<unknown>;
    export let options: IFuseOptions<unknown>;
    export let query: string;

    export let result: FuseResult<unknown>[];

    $: fuse = new Fuse(list, options);
    $: if (list) {
        fuse.setCollection(list);
    }
    $: if (list || query) {
        result = fuse.search(query);
    }
</script>
