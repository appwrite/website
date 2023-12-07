import { error } from '@sveltejs/kit';
import { getRelatedThreads, getThread } from '../helpers.js';

export const load = async ({ params, fetch }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);
        const related = await getRelatedThreads(thread);
        // const tldrPrompt = `Title: ${thread.name}\nDescription:${thread.content}\nMessages:\n
        // ${thread.messages?.map((m) => `${m.author}: ${m.message}`).join('\n')}`;
        // const response = await fetch('/api/tldr', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ prompt: tldrPrompt })
        // });
        // console.log({ response });
        // const tldr = await response.text();
        // console.log({ tldr });

        const res = await fetch('/api/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ a: 1, b: 2 })
        });

        console.log({ res });

        return { ...thread, related };
    } catch (e) {
        console.log(e);
        throw error(404, 'Thread not found');
    }
};
