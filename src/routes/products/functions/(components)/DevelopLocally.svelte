<script lang="ts">
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

<section class="py-4 md:py-20">
    <div
        class="container grid grid-cols-1 items-center justify-between gap-12 md:grid-cols-12 md:flex-row"
    >
        <div
            class="window col-span-7 flex h-[420px] w-full flex-col bg-[#232325]/94 px-3 pb-3 backdrop-blur-lg"
        >
            <header class="grid h-12 w-full grid-cols-12 place-items-center">
                <div class="col-span-2 flex gap-1">
                    <button class="size-2 rounded-full bg-[#EC6A5E]" />
                    <button class="size-2 rounded-full bg-[#F5BF4F]" />
                    <button class="size-2 rounded-full bg-[#6d9e66]" />
                </div>
                <div
                    class="col-span-6 col-start-4 flex h-6 w-full items-center justify-center rounded-full bg-[#1B1B1C]/94 backdrop-blur-lg"
                >
                    <span class="text-[0.625rem] -tracking-[.045%] text-white">localhost:3000</span>
                </div>
            </header>

            <div class="grid size-full grid-cols-2 place-items-center gap-3 rounded-xl">
                <div
                    class="grid size-full flex-1 grid-cols-1 grid-rows-12 gap-2 overflow-hidden rounded-xl"
                >
                    <div class="row-span-8 bg-[#1B1B1C]/94" />
                    <div class="row-span-4 bg-[#1B1B1C]/94" />
                </div>
                <div class="size-full flex-1 rounded-xl bg-white"></div>
            </div>
        </div>
        <div class="col-span-4 col-start-9 mb-10 flex flex-col">
            <h2 class="text-title text-primary font-aeonik-pro my-4 text-pretty">
                Develop your functions locally
            </h2>
            <p class="text-body text-secondary text-pretty font-medium">
                Code and test your functions locally with Appwrite Functions, ensuring full control
                over your development.
            </p>

            <a href="/docs/sdks#server" class="web-button is-secondary mt-8">Learn more</a>
        </div>
    </div>
</section>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .window {
        @include gradients.border-gradient;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        --m-border-radius: 1.5rem;
    }
</style>
