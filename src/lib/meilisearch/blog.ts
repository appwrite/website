import { readdirSync, statSync } from 'fs';
import path, { join } from 'path';
import type { SearchItem } from './types';
import { generateSearchableContent, getMarkdocContent } from './utils';
import { randomUUID } from 'crypto';
import { groupBy } from 'remeda';

export const getSearchablePosts = () => {
    const searchablePosts = [] as Array<SearchItem>;
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
                    url: `/blog/post/${url}`,
                    uid: `${url}-${randomUUID()}`
                });
            });
        }
    });

    return searchablePosts;
};
