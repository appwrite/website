import { random } from '$lib/utils/random.js';
import { error } from '@sveltejs/kit';
import { getRelatedThreads, getThread, getThreadMessages } from '../helpers.js';

export const prerender = false;

export const load = async ({ params }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);
        const related = await getRelatedThreads(thread);
        const messages = await getThreadMessages(id);

        // const tldrPrompt = `Title: ${thread.name}\nDescription:${thread.content}\nMessages:\n
        //     ${thread.messages?.map((m) => `${m.author}: ${m.message}`).join('\n')}`;
        // const response = await fetch('/api/tldr', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ prompt: tldrPrompt })
        // });

        // const tldr = (await response.text()).replace(/TL;DR(:)?/g, '');
        const tldr =
            'Solution: Mosh Ontong solved the 500 internal error by moving the log to the top and revisiting all the files to check for red error lines.';

        const upvotes = random(1, 60);

        return { ...thread, related, tldr, upvotes, messages };
    } catch (e) {
        console.log(e);
        throw error(404, 'Thread not found');
    }
};
