import Phone from './phone.svelte';

import { safeAnimate, sleep } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { getElSelector } from '../Products.svelte';
import { animate } from 'motion-legacy';

type Task = {
    title: string;
    tags: string[];
    images?: string[];
};

type User = {
    name: string;
    color: string;
};

type State = {
    tasks: {
        todo: Task[];
        doing: Task[];
        done: Task[];
    };
    users: User[];
};

const state = createResettable<State>({
    tasks: {
        todo: [
            {
                title: 'Edit images for website',
                tags: ['design', 'content'],
                images: ['./images/animations/storage-2.png', './images/animations/storage-3.png']
            }
        ],
        doing: [
            {
                title: 'Handoff meet',
                tags: ['design', 'dev']
            }
        ],
        done: []
    },
    users: []
});

export const connectionsProg = createResettable(0);

const addUser = (update: typeof state.update, user: User) => {
    update((p) => ({
        ...p,
        users: [...p.users, user]
    }));
};

const addTask = (update: typeof state.update, group: keyof State['tasks'], task: Task) => {
    update((p) => ({
        ...p,
        tasks: {
            ...p.tasks,
            [group]: [task, ...p.tasks[group]]
        }
    }));
};

const execute = async () => {
    const phone = getElSelector('phone');
    const code = getElSelector('code');
    const box = getElSelector('box');

    const walter = getElSelector('user-Walter');
    const aditya = getElSelector('user-Aditya');
    const sara = getElSelector('user-Sara');

    const addTodo = getElSelector('add-todo');
    const addDoing = getElSelector('add-doing');
    const addDone = getElSelector('add-done');

    const graphBox = getElSelector('graph-box');

    const pd = getElSelector('pd');

    const { update } = state.reset();
    const { set: setConn } = connectionsProg.reset();

    await Promise.all([
        safeAnimate(box, { opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(phone, { x: 0, y: 0, width: '660px' }, { duration: 0.5 })?.finished,
        safeAnimate(code, { opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(graphBox, { opacity: 0, x: 0, y: 0, visibility: 'visible' }, { duration: 0 })
            ?.finished,
        safeAnimate(pd, { opacity: 1, y: 0 }, { duration: 0.5 })?.finished
    ]);

    // Graphbox
    sleep(1250).then(async () => {
        await safeAnimate(graphBox, { opacity: 1 }, { duration: 0.5 })?.finished;

        animate(
            (y) => {
                setConn(y);
            },
            { duration: 2.5, easing: 'ease-in' }
        );
    });

    // Walter
    sleep(500).then(async () => {
        addUser(update, { name: 'Walter', color: '#fd366e' });
        await sleep(500);
        await safeAnimate(walter, { x: -200, y: -100, scale: 1 }, { duration: 0.5 })?.finished;
        await Promise.all([
            safeAnimate(walter, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished,
            safeAnimate(addTodo, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished
        ]);

        addTask(update, 'todo', {
            title: 'Handoff meet',
            tags: ['design', 'dev']
        });

        await safeAnimate(walter, { scale: 1, x: -180, y: -160 }, { duration: 0.75, delay: 0.5 })
            ?.finished;

        await sleep(500);

        await safeAnimate(walter, { x: 210, y: -100, scale: 1 }, { duration: 0.5 })?.finished;

        await Promise.all([
            safeAnimate(walter, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished,
            safeAnimate(addDone, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished
        ]);

        addTask(update, 'done', {
            title: 'Create migrations script',
            tags: ['Dev']
        });

        safeAnimate(walter, { scale: 1, x: 230, y: -20 }, { duration: 0.75, delay: 0.5 });

        await sleep(750);

        await safeAnimate(walter, { x: -10, y: -100, scale: 1 }, { duration: 0.5 })?.finished;

        await Promise.all([
            safeAnimate(walter, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished,
            safeAnimate(addDoing, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished
        ]);

        addTask(update, 'doing', {
            title: 'Configure blog SEO',
            tags: ['dev', 'content']
        });

        await safeAnimate(walter, { scale: 1, x: -70, y: 80 }, { duration: 0.75, delay: 0.25 });
    });

    // Aditya
    sleep(1500).then(async () => {
        addUser(update, { name: 'Aditya', color: 'rgba(124, 103, 254, 1)' });
        await sleep(500);
        await safeAnimate(aditya, { x: 200, y: -100, scale: 1 }, { duration: 0.5 })?.finished;
        await Promise.all([
            safeAnimate(aditya, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished,
            safeAnimate(addDone, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished
        ]);

        addTask(update, 'done', {
            title: 'Write up briefing',
            tags: ['dev-rel']
        });

        await safeAnimate(aditya, { scale: 1, x: 180, y: 60 }, { duration: 0.75, delay: 0.5 })
            ?.finished;

        await sleep(750);

        await safeAnimate(aditya, { x: -210, y: -100, scale: 1 }, { duration: 0.5 })?.finished;

        await Promise.all([
            safeAnimate(aditya, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished,
            safeAnimate(addTodo, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished
        ]);

        addTask(update, 'todo', {
            title: 'Review branding blog post',
            tags: ['dev-rel']
        });

        await safeAnimate(aditya, { scale: 1, x: 70, y: -220 }, { duration: 0.75, delay: 0.5 })
            ?.finished;
    });

    // Sara
    sleep(2500).then(async () => {
        addUser(update, { name: 'Sara', color: 'rgba(103, 163, 254, 1)' });
        await sleep(500);
        await safeAnimate(sara, { x: 0, y: -100, scale: 1 }, { duration: 0.5 })?.finished;
        await Promise.all([
            safeAnimate(sara, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished,
            safeAnimate(addDoing, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished
        ]);

        addTask(update, 'doing', {
            title: 'Prepare design system presentation',
            tags: ['design']
        });

        await safeAnimate(sara, { scale: 1, y: 60, x: -50 }, { duration: 0.75, delay: 0.5 })
            ?.finished;
        await sleep(250);

        await safeAnimate(sara, { x: 200, y: -100, scale: 1 }, { duration: 0.5 })?.finished;

        await Promise.all([
            safeAnimate(sara, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished,
            safeAnimate(addDone, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished
        ]);

        addTask(update, 'done', {
            title: 'QA branding animations',
            tags: ['Dev']
        });

        await safeAnimate(sara, { scale: 1, x: 180, y: 60 }, { duration: 0.75, delay: 0.5 })
            ?.finished;
    });
};

export const realtimeController = {
    execute,
    state
};

export const Realtime = {
    Phone
};
