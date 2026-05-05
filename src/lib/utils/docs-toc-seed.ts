import { slugify } from '$lib/utils/slugify';

/**
 * Strips inline Markdoc fragments often left in heading text (e.g. `## Title {% #slug %}`).
 */
export function stripInlineMarkdocTags(text: string): string {
    return text
        .replace(/\s*\{%\s*#[-\w]+\s*%\}/g, '')
        .replace(/\s*\{#[-\w]+\}/g, '')
        .replace(/\s*\{%[^%]*%\}/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

/** Matches entries in `Article.svelte` `LayoutContext` heading records */
export type SeededHeading = {
    title: string;
    step?: number;
    visible: false;
    level: number;
};

/** Inner attribute string of `{% section … %}` — id, step, and title may appear in any order. */
function parseSectionAttributes(
    attrs: string
): { id: string; title: string; step?: number } | null {
    const idMatch = attrs.match(/#([-\w]+)/);
    if (!idMatch) return null;
    const id = idMatch[1];
    const stepMatch = attrs.match(/\bstep=(\d+)\b/);
    const titleMatch = attrs.match(/\btitle="([^"]*)"/);
    const title = stripInlineMarkdocTags(titleMatch ? titleMatch[1] : '');
    const step = stepMatch ? Number(stepMatch[1]) : undefined;
    return { id, title, step };
}

/**
 * Build initial heading map from raw Markdoc so the TOC can render on the server and on
 * first paint without waiting for `Heading` `onMount` (avoids layout shift in the aside).
 *
 * Covers `{% section … %}` (attributes parsed in any order: `#id`, `step=`, `title="…"`) and
 * ATX `##` headings in the same source file (content pulled in via `{% partial %}` is not in
 * `rawContent` and is still registered in `Heading` after mount).
 */
function stripFrontmatter(raw: string): string {
    return raw.replace(/^---[\s\S]*?---\s*/, '');
}

export function seedHeadingsFromMarkdocRaw(
    raw: string | null | undefined
): Record<string, SeededHeading> {
    if (!raw) return {};
    const body = stripFrontmatter(raw);
    const out: Record<string, SeededHeading> = {};

    const sectionTagRe = /\{%\s*section\s+([^%]+?)\s*%\}/g;
    let m: RegExpExecArray | null;
    while ((m = sectionTagRe.exec(body)) !== null) {
        const parsed = parseSectionAttributes(m[1]);
        if (!parsed) continue;
        const { id, title, step: stepNum } = parsed;
        out[id] = { step: stepNum, title, visible: false, level: 2 };
    }

    const atxH1Re = /^#(?!#)\s+(.+)$/gm;
    while ((m = atxH1Re.exec(body)) !== null) {
        const rest = m[1].trim();
        const markdocId = rest.match(/\s*\{%\s*#([-\w]+)\s*%\}\s*$/);
        const mdCustomId = rest.match(/\s*\{#([-\w]+)\}\s*$/);
        let title: string;
        let slug: string;
        if (markdocId) {
            title = stripInlineMarkdocTags(rest.slice(0, markdocId.index).trim());
            slug = markdocId[1];
        } else if (mdCustomId) {
            title = stripInlineMarkdocTags(rest.slice(0, mdCustomId.index).trim());
            slug = mdCustomId[1];
        } else {
            title = stripInlineMarkdocTags(rest);
            slug = slugify(title);
        }
        if (!slug || out[slug]) continue;
        out[slug] = { title, visible: false, level: 1 };
    }

    const atxRe = /^##(?!#)\s+(.+)$/gm;
    while ((m = atxRe.exec(body)) !== null) {
        const rest = m[1].trim();
        const markdocId = rest.match(/\s*\{%\s*#([-\w]+)\s*%\}\s*$/);
        const mdCustomId = rest.match(/\s*\{#([-\w]+)\}\s*$/);
        let title: string;
        let slug: string;
        if (markdocId) {
            title = stripInlineMarkdocTags(rest.slice(0, markdocId.index).trim());
            slug = markdocId[1];
        } else if (mdCustomId) {
            title = stripInlineMarkdocTags(rest.slice(0, mdCustomId.index).trim());
            slug = mdCustomId[1];
        } else {
            title = stripInlineMarkdocTags(rest);
            slug = slugify(title);
        }
        if (!slug || out[slug]) continue;
        out[slug] = { title, visible: false, level: 2 };
    }

    return out;
}
