import {
    PUBLIC_APPWRITE_COL_MESSAGES_ID,
    PUBLIC_APPWRITE_COL_THREADS_ID,
    PUBLIC_APPWRITE_DB_MAIN_ID
} from '$env/static/public';
import { databases } from '$lib/appwrite';
import { Query } from '@appwrite.io/console';
import type { DiscordMessage, DiscordThread } from './types';

type Ranked<T> = {
    data: T;
    rank: number; // Percentage of query words found, from 0 to 1
};

type FilterThreadsArgs = {
    threads: DiscordThread[];
    q?: string | null;
    tags?: string[];
    allTags?: boolean;
};

export function sanitizeContent(rawContent: string, maxLength: number = 200): string {
    const cleaned = rawContent.replace(
        /```(?:\w+)?\n([\s\S]*?)```|```([\s\S]*?)```/g,
        (_, withLang, withoutLang) => {
            return (withLang || withoutLang).trim();
        }
    );

    return cleaned.length > maxLength ? cleaned.slice(0, maxLength) + '...' : cleaned;
}

export function filterThreads({ q, threads: threadDocs, tags, allTags }: FilterThreadsArgs) {
    const threads = tags
        ? threadDocs.filter((thread) => {
              const threadTags = thread.tags?.map((tag) => tag);
              if (allTags) {
                  return tags?.every((tag) => threadTags?.includes(tag));
              } else {
                  return tags?.some((tag) => threadTags?.includes(tag));
              }
          })
        : threadDocs;

    if (!q) return threads;

    const queryWords = q.toLowerCase().split(/\s+/);
    const rankPerWord = 1 / queryWords.length;
    const res: Ranked<DiscordThread>[] = [];

    threads.forEach((item) => {
        const foundWords = new Set<string>();

        Object.values(item).forEach((value) => {
            const stringified = JSON.stringify(value).toLowerCase();

            queryWords.forEach((word) => {
                if (stringified.includes(word)) {
                    foundWords.add(word);
                }
            });
        });

        const rank = foundWords.size * rankPerWord;

        if (rank > 0) {
            res.push({
                data: item,
                rank
            });
        }
    });

    return res.sort((a, b) => b.rank - a.rank).map(({ data }) => data);
}

type GetThreadsArgs = Omit<FilterThreadsArgs, 'threads'>;

export async function getThreads({ q, tags, allTags }: GetThreadsArgs) {
    let query = [q ? Query.search('search_meta', q) : undefined, Query.orderDesc('$createdAt')];

    tags = tags?.filter(Boolean).map((tag) => tag) ?? [];
    if (tags.length > 0) {
        query = [...query, Query.contains('tags', tags)];
    }

    const data = await databases.listDocuments(
        PUBLIC_APPWRITE_DB_MAIN_ID,
        PUBLIC_APPWRITE_COL_THREADS_ID,
        query.filter(Boolean) as string[]
    );

    const threadDocs = data.documents as unknown as DiscordThread[];
    return filterThreads({ threads: threadDocs, q, tags, allTags });
}

export async function getThread($id: string) {
    return (await databases.getDocument(
        PUBLIC_APPWRITE_DB_MAIN_ID,
        PUBLIC_APPWRITE_COL_THREADS_ID,
        $id
    )) as unknown as DiscordThread;
}

export async function getRelatedThreads(thread: DiscordThread, limit: number = 3) {
    const tags = thread.tags?.filter(Boolean) ?? [];
    const relatedThreads = await getThreads({ q: null, tags, allTags: false });

    return relatedThreads.filter(({ $id }) => $id !== thread.$id).slice(0, limit);
}

export async function getThreadMessages(threadId: string) {
    const data = await databases.listDocuments(
        PUBLIC_APPWRITE_DB_MAIN_ID,
        PUBLIC_APPWRITE_COL_MESSAGES_ID,
        [Query.equal('threadId', threadId)].filter(Boolean) as string[]
    );

    return (data.documents as unknown as DiscordMessage[]).sort(
        (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
}

export async function* iterateAllThreads(total: number | undefined = undefined) {
    let offset = 0;
    const limit = 100;
    while (true) {
        const data = await databases.listDocuments<DiscordThread>(
            PUBLIC_APPWRITE_DB_MAIN_ID,
            PUBLIC_APPWRITE_COL_THREADS_ID,
            [Query.offset(offset), Query.limit(limit)]
        );

        if (data.documents.length === 0) {
            break;
        }

        for (const thread of data.documents) {
            yield thread;
        }

        offset += limit;

        if (total !== undefined && offset >= total) {
            break;
        }
    }
}
