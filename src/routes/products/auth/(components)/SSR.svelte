<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { Framework, Platform } from '$lib/utils/references';
    import MultiFrameworkCode from './MultiFrameworkCode.svelte';

    const codeSnippets = [
        {
            language: Platform.ClientWeb,
            platform: Framework.NextJs,
            content: `import { Client, Account } from 'node-appwrite'
import { cookies } from 'next/headers'

async function getLoggedInUser() {
  const session = cookies().get("custom-session-cookie");  
  if (!session) return

    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

    client.setSession(session.value)
    const account = new Account(client);

    return await account.get()
}
  `
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.SvelteKit,
            content: `import { Client, Account } from 'node-appwrite'

async function getLoggedInUser() {
  const session = cookies().get("custom-session-cookie");  
  if (!session) return

  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }
`
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Astro,
            content: `import { Client, Account } from 'node-appwrite'

async function getLoggedInUser(context) {
  const session = cookies().get("custom-session-cookie");  
  if (!session) return

  const client = new Client()
    .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }
`
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Nuxt3,
            content: `import { Client, Account } from 'node-appwrite'
import { H3Event, getCookie } from 'h3'

async function getLoggedInUser(event) {
  const session = getCookie(event, "custom-session-cookie");  
  if (!session) return

  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }`
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Remix,
            content: `import { Client, Account } from 'node-appwrite'
import { createCookie } from '@remix-run/node'

export const customSessionCookie = createCookie("custom-session-cookie", {
  maxAge: 604800,
})

async function getLoggedInUser(request) {
  const cookies = request.headers.get("Cookie")  
  const session = await customSessionCookie.parse(cookies)  
  if (!session) return

  const client = new Client()
    .setEndpoint(process.env.PUBLIC_APPWRITE_ENDPOINT)    
    .setProject(process.env.PUBLIC_APPWRITE_PROJECT_ID)

      client.setSession(session.value)
      const account = new Account(client);

    return await account.get()
  }`
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

        <MultiFrameworkCode data={codeSnippets} selected={Framework.NextJs} />
    </div>
</section>
