import MarkdownIt from 'markdown-it';

const md = new MarkdownIt('commonmark');

const inlineMd = new MarkdownIt('commonmark');
inlineMd.renderer.rules.link_open = (tokens, idx, options, _env, self) => {
    const token = tokens[idx];
    const href = token.attrGet('href');
    if (href?.startsWith('http') && !href.startsWith('https://appwrite.io')) {
        token.attrPush(['rel', 'noopener noreferrer']);
        token.attrPush(['target', '_blank']);
    }
    token.attrPush(['class', 'web-link']);
    return self.renderToken(tokens, idx, options);
};

/**
 * Renders inline markdown (code spans, bold, italics, links) without wrapping
 * the output in a block element. Use when the surrounding markup already
 * provides a paragraph or other block container.
 */
export function parseInline(content: string): string {
    return inlineMd.renderInline(content);
}

export function parse(content: string): string {
    const env = {};

    const tokens = md.parse(content, env);
    return md.renderer.render(
        transform_tokens(tokens),
        {
            highlight: null
        },
        env
    );
}

function transform_tokens(tokens: ReturnType<typeof md.parse>): ReturnType<typeof md.parse> {
    return tokens.map((token) => {
        if (token.children) {
            token.children = transform_tokens(token.children);
        }
        switch (token.type) {
            case 'paragraph_open':
                token.attrPush(['class', 'text-paragraph']);
                break;
            case 'link_open': {
                const href = token.attrGet('href');
                if (href?.startsWith('http')) {
                    if (!href.startsWith('https://appwrite.io')) {
                        token.attrPush(['rel', 'noopener noreferrer']);
                        token.attrPush(['target', '_blank']);
                    }
                }
                token.attrPush(['class', 'web-link']);
                break;
            }
        }
        return token;
    });
}
