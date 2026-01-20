<script lang="ts">
  import Docs from '$lib/layouts/Docs.svelte';
  import Sidebar, { type NavParent, type NavTree } from '$lib/layouts/Sidebar.svelte';

  const parent: NavParent = {
      href: '/docs',
      label: 'AI'
  };

  const navigation: NavTree = [
      {
          label: 'Getting started',
          items: [
              {
                  label: 'Overview',
                  href: '/docs/tooling/ai/'
              },
              {
                  label: 'Quickstart Prompts',
                  href: '/docs/tooling/ai/quickstart-prompts'
              },
              {
                  label: 'AI Dev Tools',
                  href: '/docs/tooling/ai/ai-dev-tools'
              },
              {
                label: "Docs as Markdown",
                href: '/docs/tooling/ai/docs-as-markdown'
              },
              {
                label: "Responsible AI",
                href: '/docs/tooling/ai/responsible-ai'
              },
              
          ]
      },
      {
        label: 'AI Implementation',
        items: [
          {
            label: 'Vector DB and Embeddings',
            href: '/docs/tooling/ai/vector-db-and-embeddings'
          },
          {
            label: 'RAG',
            href: '/docs/tooling/ai/rag'
          },
          {
            label: 'AI in Functions',
            href: '/docs/tooling/ai/ai-in-functions'
          },
          {
            label: 'Persistent Agents with Realtime',
            href: '/docs/tooling/ai/persistent-agents-with-realtime'
          }
        ]
      }
  ];
</script>

<Docs variant="two-side-navs">
  <Sidebar {navigation} {parent} />
  <slot />
</Docs>
