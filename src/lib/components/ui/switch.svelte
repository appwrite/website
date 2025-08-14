<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import { Switch } from 'bits-ui';

    type Props = {
        class?: string;
    } & Switch.RootProps;

    const { class: className, ...rest }: Props = $props();
</script>

<div class="flex items-center">
    <Switch.Root
        class={cn(
            'bg-smooth group relative h-6 w-9 cursor-default rounded-full transition duration-150',
            'data-[state="checked"]:bg-accent',
            className
        )}
        {...rest}
    >
        <Switch.Thumb
            class={cn(
                'absolute top-1/2 block size-5 translate-x-0.5 -translate-y-1/2 rounded-full bg-white transition duration-150',
                'data-[state="checked"]:translate-x-3.5'
            )}
        ></Switch.Thumb>
    </Switch.Root>
</div>
