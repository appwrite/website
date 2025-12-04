import { query } from '$app/server';
import { getMarkdownContent } from '$lib/server/markdown';

export const getPageMarkdown = query('unchecked', getMarkdownContent);
