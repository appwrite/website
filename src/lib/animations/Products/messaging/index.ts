import Box from './box.svelte';
import Code from './code.svelte';
import Phone from './phone.svelte';

import { safeAnimate, sleep, write } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { getElSelector } from '../Products.svelte';

type Task = {
    id: string;
    title: string;
    checked: boolean;
};

type Message = {
    id: string;
    type: string;
    icon: string;
    status: 'sending' | 'sent';
};

type State = {
    heading: string;
    message: string;
    tasks: Task[];
    messages: Message[];
    tableSlice: number;
    submit: 'loading' | 'success';
};

const state = createResettable<State>({
    heading: '',
    message: '',
    tasks: [
        {
            id: '3397fecdedb13397fecdedb1',
            title: 'Research user needs',
            checked: true
        }
    ],
    messages: [
        {
            id: '...3397fecdedb1',
            type: 'SMS',
            icon: './images/icons/illustrated/dark/sms.svg',
            status: 'sent'
        },
        {
            id: '...2224gabjger4',
            type: 'Email',
            icon: './images/icons/illustrated/dark/email.svg',
            status: 'sent'
        }
    ],
    tableSlice: 2,
    submit: 'loading'
});

const execute = async () => {
    const phone = getElSelector('phone');
    const box = getElSelector('box');
    const code = getElSelector('code');
    const { update } = state.reset();

    await Promise.all([
        safeAnimate(phone, { x: 365, y: 0, width: '275px' }, { duration: 0.5 })?.finished,
        safeAnimate(code, { x: 80, y: 325, opacity: 0, zIndex: 100 }, { duration: 0.5 })?.finished,
        safeAnimate(box, { x: 0, y: 32, opacity: 1 }, { duration: 0.5, delay: 1 })?.finished
    ]);

    await sleep(250);

    update((p) => ({
        ...p,
        tasks: [
            ...p.tasks,
            {
                id: '3397fecdedb13397fecdedb2',
                title: 'Create wireframes',
                checked: false
            }
        ]
    }));
    await sleep(250);

    update((p) => ({
        ...p,
        tableSlice: p.tableSlice + 1
    }));

    await sleep(250);

    update((p) => ({
        ...p,
        tasks: [
            ...p.tasks,
            {
                id: '3397fecdedb13397fecdedb3',
                title: 'Create visual design',
                checked: false
            }
        ]
    }));

    await sleep(250);

    update((p) => ({
        ...p,
        tableSlice: p.tableSlice + 1
    }));

    await sleep(250);

    safeAnimate(code, { opacity: 1 }, { duration: 0.5 })?.finished, await sleep(250);
    await write(
        'New task assigned to you',
        (v) => {
            state.update((n) => ({ ...n, heading: v }));
        },
        300
    );

    await write(
        'You were assigned a new task in your board. Tap to check it out.',
        (v) => {
            state.update((n) => ({ ...n, message: v }));
        },
        300
    );

    await sleep(250);

    update((p) => ({
        ...p,
        messages: [
            ...p.messages,
            {
                id: '...5689fdoerre2',
                type: 'Push',
                icon: './images/icons/illustrated/dark/push.svg',
                status: 'sending'
            }
        ]
    }));

    await sleep(1250);

    update((p) => ({
        ...p,
        submit: 'success',
        messages: p.messages.map((m) => (m.id === '...5689fdoerre2' ? { ...m, status: 'sent' } : m))
    }));
};

export const messagingController = {
    execute,
    state
};

export const Messaging = {
    Phone,
    Box,
    Code
};
