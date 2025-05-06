<script lang="ts">
    import Spinner from '$lib/components/shared/spinner.svelte';
    import VideoDialog from '$lib/components/shared/dialog.svelte';
    import { Button, Icon } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import { loginGithub } from '../(utils)/github';
    import { initDates } from '../+page.svelte';
    import LockupImage from '../(assets)/lockup.png';

    import Badge from './badge.svelte';
    import Lockup from './lockup.svelte';
    import { type PageData } from '../$types';

    type Props = {} & Omit<PageData, 'changelogEntries'>;

    let { claimed, ticketId }: Props = $props();
    let claiming: boolean = $state(false);

    const handleLogin = () => {
        claiming = true;
        loginGithub();
    };
</script>

<div
    class={classNames(
        'relative container -mb-10 flex min-h-[50vh] w-full flex-col items-center justify-center gap-8 px-0 py-20 md:min-h-[80vh]',
        'before:border-offset before:absolute before:inset-0 before:z-0 before:border-r-2 before:border-l-2 before:border-dashed',
        'before:[mask-image:linear-gradient(to_top,transparent,black_150px,black_calc(100%_-_150px),black)]'
    )}
>
    <Badge>{initDates}</Badge>
    <div class="relative z-10 mx-auto px-4 md:w-5/8">
        <img src={LockupImage} alt="Init logo" class="block w-full md:hidden" />
        <Lockup />
    </div>
    <div class="relative z-10 flex w-full max-w-lg flex-col items-center justify-center gap-8">
        <div class="text flex flex-col gap-4 [animation-delay:0.75s]">
            <p class="text-description text-secondary block max-w-lg text-center">
                Join us at Appwrite for another week of exciting new announcements and events.
            </p>

            <nav class="mt-4 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                {#if claimed}
                    <Button href={`/init/tickets/${ticketId}`}>
                        <Icon name="ticket" />Your Init ticket
                    </Button>
                {:else}
                    <Button onclick={handleLogin} disabled={claiming}>
                        {#if claiming}
                            <Spinner />
                        {:else}
                            <Icon name="github" />
                        {/if}Claim your ticket</Button
                    >
                {/if}
                <Button
                    href="https://www.producthunt.com/products/appwrite"
                    variant="secondary"
                    target="_blank"
                    rel="noopener"
                >
                    Follow on Product Hunt
                </Button>
            </nav>
        </div>
    </div>
</div>
