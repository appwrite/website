import { describe, expect, test } from 'vitest';
import { getCodeHtml, type Language } from './code';

describe('getCodeHtml', () => {
    test('normalizes code fence language before highlighting', () => {
        const html = getCodeHtml({
            content: 'using Appwrite;',
            language: 'csharp ' as Language
        });

        expect(html).toContain('language-csharp');
        expect(html).not.toContain('language-csharp ');
        expect(html).toContain('hljs-keyword');
    });

    test('uses the fallback language class when language is omitted', () => {
        const html = getCodeHtml({
            content: 'echo appwrite'
        });

        expect(html).toContain('language-sh');
        expect(html).not.toContain('language-undefined');
    });
});
