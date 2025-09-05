import { readdirSync, statSync } from 'fs';
import path, { join } from 'path';
import type { SearchResult } from './types';
import { generateSearchableContent, getMarkdocContent } from './utils';
import { randomUUID } from 'crypto';

export const getSearchablePosts = () => {
    const searchablePosts = [] as Array<SearchResult>;
    const directoryPath = join(process.cwd(), `src/routes/blog/post`);

    readdirSync(directoryPath).forEach((entry) => {
        const filePath = join(directoryPath, entry);
        const stats = statSync(filePath);

        if (stats.isDirectory()) {
            const { title, content } = getMarkdocContent<{
                title: string;
                content: string;
            }>(path.join(filePath, '+page.markdoc'));

            const posts = generateSearchableContent({ title, slug: filePath, content });
            const url = filePath.split('/').pop();

            posts.forEach((post, i) => {
                searchablePosts.push({
                    ...post,
                    url: `/blog/post/${url}`
                });
            });
        }
    });

    return searchablePosts;
};
