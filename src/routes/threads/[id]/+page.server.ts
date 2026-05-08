import { error } from '@sveltejs/kit';
import { DEFAULT_HOST, createDiscussionForumPageSchema } from '$lib/utils/metadata';
import { getRelatedThreads, getThread, getThreadMessages } from '../helpers.js';

export const load = async ({ params }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);
        const related = await getRelatedThreads(thread);
        const messages = await getThreadMessages(id);

        const canonicalUrl = `${DEFAULT_HOST}/threads/${id}`;
        const structuredDataJsonLd = createDiscussionForumPageSchema({
            canonicalUrl,
            thread: {
                title: thread.title,
                content: thread.content,
                author: thread.author,
                $createdAt: thread.$createdAt,
                vote_count: thread.vote_count
            },
            messages: messages.map((m) => ({
                author: m.author,
                text: m.message,
                timestamp: m.timestamp,
                $id: m.$id
            }))
        });

        return {
            ...thread,
            related,
            messages,
            structuredDataJsonLd
        };
    } catch (e) {
        console.error(e);
        error(404, 'Thread not found');
    }
};
