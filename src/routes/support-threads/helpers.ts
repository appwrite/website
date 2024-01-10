import {
    PUBLIC_APPWRITE_COL_MESSAGES_ID,
    PUBLIC_APPWRITE_COL_THREADS_ID,
    PUBLIC_APPWRITE_DB_MAIN_ID,
    PUBLIC_APPWRITE_FN_TLDR_ID
} from '$env/static/public';
import { databases, functions } from '$lib/appwrite';
import { Query } from 'appwrite';
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

export function filterThreads({ q, threads: threadDocs, tags, allTags }: FilterThreadsArgs) {
    const threads = tags
        ? threadDocs.filter((thread) => {
              const lowercaseTags = thread.tags?.map((tag) => tag.toLowerCase());
              if (allTags) {
                  return tags?.every((tag) => lowercaseTags?.includes(tag.toLowerCase()));
              } else {
                  return tags?.some((tag) => lowercaseTags?.includes(tag.toLowerCase()));
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
    tags = tags?.filter(Boolean).map((tag) => tag.toLowerCase()) ?? [];

    const data = await databases.listDocuments(
        PUBLIC_APPWRITE_DB_MAIN_ID,
        PUBLIC_APPWRITE_COL_THREADS_ID,
        [
            q ? Query.search('search_meta', q) : undefined
            // tags ? Query.equal('tags', tags) : undefined
        ].filter(Boolean) as string[]
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

export async function getRelatedThreads(thread: DiscordThread) {
    const tags = thread.tags?.filter(Boolean) ?? [];
    const relatedThreads = await getThreads({ q: null, tags, allTags: false });

    return relatedThreads.filter(({ $id }) => $id !== thread.$id);
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