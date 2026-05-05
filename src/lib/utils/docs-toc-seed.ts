import { slugify } from '$lib/utils/slugify';

/** Matches entries in `Article.svelte` `LayoutContext` heading records */
export type SeededHeading = {
    title: string;
    step?: number;
    visible: false;
    level: number;
};

/**
 * Build initial heading map from raw Markdoc so the TOC can render on the server and on
 * first paint without waiting for `Heading` `onMount` (avoids layout shift in the aside).
 *
 * Covers `{% section #id ... title="..." %}` and ATX `##` headings in the same source file
 * (content pulled in via `{% partial %}` is not in `rawContent` and is still registered in
 * `Heading` after mount).
 */
export function seedHeadingsFromMarkdocRaw(
    raw: string | null | undefined
): Record<string, SeededHeading> {
    if (!raw) return {};
    const out: Record<string, SeededHeading> = {};

    const sectionRe = /\{%\s*section\s+#([-\w]+)(?:\s+step=(\d+))?\s+title="([^"]*)"\s*%\}/g;
    let m: RegExpExecArray | null;
    while ((m = sectionRe.exec(raw)) !== null) {
        const id = m[1];
        const stepNum = m[2] ? Number(m[2]) : undefined;
        const title = m[3];
        out[id] = { step: stepNum, title, visible: false, level: 2 };
    }

    const atxRe = /^##(?!#)\s+(.+)$/gm;
    while ((m = atxRe.exec(raw)) !== null) {
        const rawTitle = m[1].trim();
        const customId = rawTitle.match(/\{#([-\w]+)\}\s*$/);
        const title = customId ? rawTitle.slice(0, customId.index).trim() : rawTitle;
        const slug = customId ? customId[1] : slugify(title);
        if (!slug || out[slug]) continue;
        out[slug] = { title, visible: false, level: 2 };
    }

    return out;
}
