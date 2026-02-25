import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const routesDir = join(__dirname, '../../routes');

/**
 * Svelte preprocessor that injects prompt.md content into markdoc files
 * when `promptAsContent: true` is set in the frontmatter.
 *
 * @returns {import('svelte/compiler').PreprocessorGroup}
 */
export function promptAsContentPreprocessor() {
    return {
        name: 'prompt-as-content',
        markup({ content, filename }) {
            // Only process .markdoc files
            if (!filename?.endsWith('.markdoc')) {
                return;
            }

            // Check for promptAsContent in frontmatter
            const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
            if (!frontmatterMatch) {
                return;
            }

            const frontmatter = frontmatterMatch[1];

            // Check if promptAsContent is true
            if (!/promptAsContent:\s*true/.test(frontmatter)) {
                return;
            }

            // Extract the prompt path
            const promptMatch = frontmatter.match(/prompt:\s*(.+)/);
            if (!promptMatch) {
                console.warn(
                    `[prompt-as-content] promptAsContent is true but no prompt path found in ${filename}`
                );
                return;
            }

            const promptPath = promptMatch[1].trim();
            // Convert route path like "/docs/quick-starts/nextjs" to file path
            const promptFilePath = join(routesDir, promptPath.replace(/^\//, ''), 'prompt.md');

            if (!existsSync(promptFilePath)) {
                console.warn(`[prompt-as-content] prompt.md not found at ${promptFilePath}`);
                return;
            }

            // Read the prompt content
            const promptContent = readFileSync(promptFilePath, 'utf-8');

            // Inject the prompt content after the frontmatter
            const newContent = content.replace(
                /^(---\n[\s\S]*?\n---)\n*/,
                `$1\n\n${promptContent}\n`
            );

            return {
                code: newContent
            };
        }
    };
}
