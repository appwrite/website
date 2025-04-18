<script lang="ts">
    import { Button } from '$lib/components/ui';
    import { Platform } from '$lib/utils/references';
    import MultiCodeContextless from '$routes/products/messaging/(components)/MultiCodeContextless.svelte';
    import NodeSnippet from './(snippets)/node.txt?raw'
    import PhpSnippet from './(snippets)/php.txt?raw'
    import PythonSnippet from './(snippets)/python.txt?raw'
    import RubySnippet from './(snippets)/ruby.txt?raw'
    import DenoSnippet from './(snippets)/deno.txt?raw'
    import GoSnippet from './(snippets)/go.txt?raw'
    import DartSnippet from './(snippets)/dart.txt?raw'
    import KotlinSnippet from './(snippets)/kotlin.txt?raw'
    import JavaSnippet from './(snippets)/java.txt?raw'
    import SwiftSnippet from './(snippets)/swift.txt?raw'
    import CsharpSnippet from './(snippets)/csharp.txt?raw'

    const codeTopic = [
        {
            language: 'server-nodejs',
            platform: 'Web',
            content: NodeSnippet
        },
        {
            language: 'php',
            platform: 'PHP',
            content: PhpSnippet
        },
        {
            language: 'python',
            platform: 'Python',
            content: PythonSnippet
        },
        {
            language: 'ruby',
            content: RubySnippet
        },
        {
            language: 'deno',
            content: DenoSnippet
        },
        {
            language: 'go',
            content: GoSnippet
        },
        {
            language: 'dart',
            content: DartSnippet
        },
        {
            language: 'kotlin',
            content: KotlinSnippet
        },
        {
            language: 'java',
            content: JavaSnippet
        },
        {
            language: 'swift',
            content: SwiftSnippet
        },
        {
            language: 'csharp',
            content: CsharpSnippet
        }
    ];
</script>

<section class="pt-12 pb-40 md:pt-32">
    <div class="container flex flex-col items-center justify-between md:flex-row md:gap-6">
        <div class="mb-10 flex w-full flex-col md:max-w-lg">
            <h2 class="text-title text-primary font-aeonik-pro my-4">
                Run in your preferred<br /> languages
            </h2>
            <p class="text-body text-secondary font-medium">
                Appwrite Functions support a variety of<br /> languages, ensuring flexibility and<br
                /> compatibility in your projects.
            </p>

            <Button
                variant="secondary"
                href="/docs/products/functions/runtimes"
                class="mt-8 !w-full md:!w-fit">Learn more</Button
            >
        </div>

        <div>
            <MultiCodeContextless data={codeTopic} selected={Platform.ServerNodeJs} height={450} />
        </div>
    </div>
</section>
