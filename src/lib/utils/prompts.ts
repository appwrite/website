// Utility to load prompt text files from `src/prompts`, including nested folders
// Consumers must pass the file path relative to `src/prompts/`, including extension

const promptsGlob = import.meta.glob('/src/prompts/**/*', {
    query: '?raw',
    import: 'default',
    eager: true
}) as Record<string, string>;

function toRelativeKey(fullPath: string): string {
    // Convert absolute like "/src/prompts/foo/bar.md" to "foo/bar.md"
    return fullPath.replace(/^\/?src\/prompts\//, '');
}

function normalizeInputKey(input: string): string {
    // Normalize user input like "./foo\\bar.md" → "foo/bar.md"
    return input.replace(/^\/*/, '').replace(/\\/g, '/');
}

const nameToPrompt: Record<string, string> = Object.entries(promptsGlob).reduce(
    (acc, [path, contents]) => {
        const key = toRelativeKey(path);
        acc[key] = contents;
        return acc;
    },
    {} as Record<string, string>
);

export function getPrompt(filePathWithExt: string): string | null {
    const key = normalizeInputKey(filePathWithExt);
    return nameToPrompt[key] ?? null;
}

export function hasPrompt(filePathWithExt: string): boolean {
    const key = normalizeInputKey(filePathWithExt);
    return key in nameToPrompt;
}

export function listPrompts(): string[] {
    return Object.keys(nameToPrompt).sort();
}
