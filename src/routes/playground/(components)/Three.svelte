<script lang="ts">
    import { T, useTask } from '@threlte/core';
    import { interactivity } from '@threlte/extras';

    let rotation = 0;

    useTask((delta) => {
        rotation += delta;
    });

    interactivity();
</script>

<!-- <T.Mesh rotation.y={rotation}>
    <T.BoxGeometry />
    <T.MeshBasicMaterial color="red" />
</T.Mesh> -->
