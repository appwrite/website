import { error } from '@sveltejs/kit';
import { getRelatedThreads, getThread } from '../helpers.js';
import { deterministicRandom, random } from '$lib/utils/random.js';

export const prerender = false;

export const load = async ({ params, fetch }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);
        const related = await getRelatedThreads(thread);

        const tldrPrompt = `Title: ${thread.name}\nDescription:${thread.content}\nMessages:\n
            ${thread.messages?.map((m) => `${m.author}: ${m.message}`).join('\n')}`;
        const response = await fetch('/api/tldr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: tldrPrompt })
        });

        const tldr = (await response.text()).replace(/TL;DR(:)?/g, '');
        // const tldr =
        //     'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.';

        const upvotes = random(1, 60);

        return { ...thread, related, tldr, upvotes };
    } catch (e) {
        console.log(e);
        throw error(404, 'Thread not found');
    }
};
