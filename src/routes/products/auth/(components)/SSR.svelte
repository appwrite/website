<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { trackEvent } from '$lib/actions/analytics';
    import { Tooltip } from '$lib/components';
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

    const platforms = [
        {
            name: 'Next',
            href: '/docs/quick-starts/nextjs',
            image: `/images/platforms/light/nextjs.svg`
        },
        {
            name: 'Svelte',
            href: '/docs/quick-starts/sveltekit',
            image: `/images/platforms/light/svelte.svg`
        },
        {
            name: 'Nuxt',
            href: '/docs/quick-starts/nuxt',
            image: `/images/platforms/light/nuxt.svg`
        }
    ] as Array<{
        name: string;
        href: string;
        image: string;
    }>;
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div class="container flex flex-col gap-6 md:flex-row">
        <div class="mb-10 flex max-w-lg flex-col">
            <span class="web-badges text-micro font-aeonik-fono mr-auto ml-0 !text-white uppercase"
                >SSR_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro my-4">
                Server-side rendering <br /> made simple
            </h2>
            <p class="text-body text-secondary font-medium">
                Optimize your auth with Appwrite's server-side SDK, enhancing your application's
                performance without sacrificing functionality. Start with our ready-to-ship
                snippets, or follow our quick starts for your favorite framework.
            </p>

            <ul class="mt-8 flex gap-4">
                {#each platforms as platform}
                    <Tooltip>
                        <li>
                            <a
                                href={platform.href}
                                class="platform flex size-14 items-center justify-center rounded-lg bg-white p-2"
                                on:click={() =>
                                    trackEvent({ plausible: { name: `${platform.name} clicked` } })}
                            >
                                <img
                                    src={platform.image}
                                    alt="{platform.name} quick start"
                                    width="32"
                                    height="32"
                                />
                            </a>
                        </li>
                        <svelte:fragment slot="tooltip">{platform.name}</svelte:fragment>
                    </Tooltip>
                {/each}
            </ul>
            <a href="/docs/sdks#server" class="web-button is-secondary mt-8">Learn more</a>
        </div>

        <MultiFrameworkCode data={codeSnippets} selected={Framework.NextJs} />
    </div>
</section>

<style>
    .platform {
        box-shadow: 0px 5.35209px 10.7042px rgba(0, 0, 0, 0.02);
        backdrop-filter: blur(16.7253px);
    }
</style>
