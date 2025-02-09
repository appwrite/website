<script lang="ts" context="module">
    const CTX_KEY = Symbol('video-wrapper');

    export const videoCtx = {
        get: () => {
            return getContext<Dialog>(CTX_KEY) ?? createDialog();
        },
        set: (dialog: Dialog) => {
            setContext(CTX_KEY, dialog);
        }
    };
</script>

<script lang="ts">
    import { createDialog, type Dialog } from '@melt-ui/svelte';
    import { getContext, setContext } from 'svelte';

    const dialog = createDialog({
        preventScroll: false,
        forceVisible: true
    });
    videoCtx.set(dialog);

    const {
        states: { open }
    } = dialog;

    function openVideo() {
        open.set(true);
    }
</script>

<slot {openVideo} />
