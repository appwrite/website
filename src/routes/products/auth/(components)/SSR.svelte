<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import MultiCodeContextless from '$routes/products/messaging/(components)/MultiCodeContextless.svelte';
    import { Platform } from '$lib/utils/references';

    const codeSnippets = [
        {
            language: 'server-nodejs',
            platform: 'Next.js',
            content: `import { Account, Messaging, ID } from "appwrite"

// Fetch target ID
const account = new Account(client)
const user = await account.get()
const targetId = user.targets[0].$id

// Subscribe to a topic
const messaging = new Messaging(client)
await messaging.createSubscriber(
    ['news', 'sport'],   // Topic ID
    ID.unique(),         // Subscription ID
    targetId,            // Target ID
)`
        },
        {
            language: 'server-nodejs',
            platform: 'SvelteKit',
            content: `import { Client, Account } from 'node-appwrite'

async function getLoggedInUser() {
  const session = cookies().get("custom-session-cookie");  if (!session) return

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
  const account = new Account(client);

    return await account.get()
}
)`
        }
    ];
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div class="container grid gap-8 md:grid-cols-2">
        <div class="mb-20 flex max-w-md flex-col gap-y-6">
            <span class="web-badges text-micro font-aeonik-fono mr-auto ml-0 uppercase !text-white"
                >SSR_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro">
                Server-side rendering made simple
            </h2>
            <p class="text-body text-secondary font-medium">
                Streamline your development process and enhance performance without sacrificing
                functionality.
            </p>
            <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button is-secondary mt-2">Learn more</a>
        </div>

        <MultiCodeContextless data={codeSnippets} selected={Platform.ServerNodeJs} height={375} />
    </div>
</section>
