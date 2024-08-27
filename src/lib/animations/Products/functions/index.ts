import Code from './code.svelte';
import Phone from './phone.svelte';

import { safeAnimate, sleep } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { getElSelector } from '../Products.svelte';

type State = {
    submit: 'idle' | 'loading' | 'success';
};

const state = createResettable<State>({
    submit: 'idle'
});

const execute = async () => {
    const phone = getElSelector('phone');
    const box = getElSelector('box');
    const code = getElSelector('code');

    const { update } = state.reset();

    await Promise.all([
        safeAnimate(phone, { x: 430, y: 0, width: '275px' }, { duration: 0.5 })?.finished,
        safeAnimate(code, { x: 0, y: 200, opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(box, { opacity: 0 }, { duration: 0.5 })?.finished
    ]);

    await sleep(250);

    await safeAnimate(code, { zIndex: 0 }, { duration: 0 })?.finished;
    await safeAnimate(code, { y: [200 - 16, 200], opacity: 1 }, { duration: 0.5 })?.finished;

    await sleep(250);

    update((p) => ({
        ...p,
        submit: 'loading'
    }));

    await sleep(1500);

    update((p) => ({
        ...p,
        submit: 'success'
    }));
};

export const functionsController = {
    execute,
    state
};

export const Functions = {
    Phone,

    Code
};
