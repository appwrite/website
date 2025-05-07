<script lang="ts">
    import { enhance } from '$app/forms';
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';

    type CustomizationFormProps = {
        stickerPack: string[];
        originalTicketData: {
            name: string;
            title: string;
            sticker?: number | null;
        };
        updatedTicketData: {
            name: string;
            title: string;
            sticker?: number | null;
        };
        formState: {
            editing: boolean;
            saving: boolean;
            saved: boolean;
        };
    };

    let { stickerPack, originalTicketData, updatedTicketData, formState }: CustomizationFormProps =
        $props();
</script>

<form
    method="POST"
    class="mt-4 flex flex-1 flex-col gap-4"
    use:enhance={async () => {
        formState.saving = true;
        return async ({ result, update }) => {
            if (result.type === 'success') {
                originalTicketData = updatedTicketData;
                formState.saved = true;
                formState.saving = false;
            }
            // update({ reset: false });
        };
    }}
>
    <div class="flex flex-col gap-2">
        <label
            for="name"
            class="text-primary font-aeonik-fono text-x-micro tracking-loose uppercase"
            >First name</label
        >
        <input
            bind:value={originalTicketData.name}
            onfocus={() => (formState.editing = true)}
            onblur={() => (formState.editing = false)}
            type="text"
            name="name"
            class="bg-smooth border-offset w-full appearance-none rounded-lg border p-2"
            required
        />
    </div>
    <div class="flex flex-col gap-2">
        <label
            for="title"
            class="text-primary font-aeonik-fono text-x-micro tracking-loose uppercase">Title</label
        >
        <input
            bind:value={originalTicketData.title}
            type="text"
            name="title"
            class="bg-smooth border-offset w-full appearance-none rounded-lg border p-2"
        />
    </div>

    <div class="flex h-full flex-1 flex-col gap-2">
        <span class="text-primary font-aeonik-fono text-x-micro tracking-loose uppercase"
            >Sticker Pack</span
        >
        <div
            class="bg-smooth border-offset grid h-full flex-1 grid-cols-3 place-items-center gap-4 overflow-y-scroll rounded-lg border p-4 md:grid-cols-2"
        >
            <div
                class={classNames(
                    'relative flex aspect-square w-full items-center justify-center rounded-[2px] border-black bg-black outline-2 outline-[var(--color-offset)] outline-dashed',
                    originalTicketData.sticker === null
                        ? 'outline-white'
                        : 'outline-[var(--color-offset)]'
                )}
            >
                <input
                    type="radio"
                    class="absolute inset-0 appearance-none border-none"
                    name="sticker"
                    value=""
                    onclick={() => (originalTicketData.sticker = null)}
                />
                <div
                    class="text-tertiary font-aeonik-fono tracking-loose text-micro bg-smooth flex size-[calc(100%_-_6px)] items-center justify-center rounded-[1px] p-1 uppercase"
                >
                    None
                </div>
            </div>

            {#each stickerPack as s, i}
                <div
                    class={classNames(
                        'relative flex aspect-square w-full items-center justify-center rounded-sm bg-black outline-2 [outline-offset:-1px] transition outline-dashed',
                        originalTicketData.sticker === i
                            ? 'outline-white'
                            : 'outline-[var(--color-offset)]'
                    )}
                >
                    <input
                        type="radio"
                        class="absolute inset-0 appearance-none border-none"
                        name="sticker"
                        value={i}
                        onclick={() => (originalTicketData.sticker = i)}
                    />
                    <div
                        class="bg-smooth flex size-[calc(100%_-_6px)] items-center justify-center rounded-[1px] p-1"
                    >
                        <img src={s} alt="Sticker" class="size-20" />
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <Button type="submit" class="w-full!" variant="secondary">
        {#if formState.saving}
            Saving
        {:else if formState.saved}
            Saved
        {:else}
            Save
        {/if}
    </Button>
</form>
