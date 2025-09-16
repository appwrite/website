<script lang="ts">
    import { sdkVersions } from '$lib/sdk-versions';

    interface Props {
        sdk: keyof typeof sdkVersions;
    }

    const { sdk }: Props = $props();
    const version = sdkVersions[sdk];
</script>

{version}
