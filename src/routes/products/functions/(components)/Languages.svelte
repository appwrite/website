<script lang="ts">
    import { Button } from '$lib/components/ui';
    import { Platform } from '$lib/utils/references';
    import MultiCodeContextless from '$routes/products/messaging/(components)/MultiCodeContextless.svelte';
    import SnippetServerNodejs from './(snippets)/server-nodejs.txt';
    import SnippetPhp from './(snippets)/server-php.txt';
    import SnippetPython from './(snippets)/python.txt';
    import SnippetRuby from './(snippets)/ruby.txt';
    import SnippetDeno from './(snippets)/deno.txt';
    import SnippetGo from './(snippets)/go.txt';
    import SnippetDart from './(snippets)/dart.txt';
    import SnippetKotlin from './(snippets)/kotlin.txt';
    import SnippetJava from './(snippets)/java.txt';
    import SnippetSwift from './(snippets)/swift.txt';
    import SnippetCsharp from './(snippets)/csharp.txt';

    const codeTopic = [
        {
            language: 'server-nodejs',
            platform: 'Web',
            content: SnippetServerNodejs
        },
        {
            language: 'php',
            platform: 'PHP',
            content: SnippetPhp
        },
        {
            language: 'python',
            platform: 'Python',
            content: SnippetPython
        },
        {
            language: 'ruby',
            content: SnippetRuby
        },
        {
            language: 'deno',
            content: SnippetDeno
        },
        {
            language: 'go',
            content: SnippetGo
        },
        {
            language: 'dart',
            content: SnippetDart
        },
        {
            language: 'kotlin',
            content: SnippetKotlin
        },
        {
            language: 'java',
            content: SnippetJava
        },
        {
            language: 'swift',
            content: SnippetSwift
        },
        {
            language: 'csharp',
            content: SnippetCsharp
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
