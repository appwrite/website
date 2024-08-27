import Box from './box.svelte';
import Code from './code.svelte';
import Controls from './controls.svelte';
import Phone from './phone.svelte';

export const Auth = {
    Phone,
    Box,
    Code,
    Controls
};

import { safeAnimate, sleep, write } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { getElSelector } from '../Products.svelte';

type State = {
    email: string;
    password: string;
    name: string;

    showControls: boolean;
    submitted: boolean;
    controls: {
        GitHub: boolean;
        Google: boolean;
        Apple: boolean;
        Microsoft: boolean;
    };
};

const state = createResettable<State>({
    email: '',
    password: '',
    name: "Walter O'Brian",
    showControls: false,
    submitted: false,
    controls: {
        GitHub: true,
        Google: false,
        Apple: false,
        Microsoft: false
    }
});

const emailToSet = 'walterobrian@example.com';
const passwordToSet = 'password';

const execute = async () => {
    const phone = getElSelector('phone');
    const box = getElSelector('box');
    const code = getElSelector('code');
    const controls = getElSelector('controls');

    // Reset
    const { update } = state.reset();

    await Promise.all([
        safeAnimate(box, { x: 310, y: 140, opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(code, { x: 200, y: 460, opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(phone, { x: 0, y: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(controls, { x: 420, y: 0, opacity: 0 }, { duration: 0.5 })?.finished
    ]);

    // Start
    await safeAnimate(box, { y: [48, 140], opacity: 1 }, { duration: 0.25, delay: 0.25 })?.finished;

    await sleep(50);

    await write(emailToSet, (v) => update((p) => ({ ...p, email: v })), 300);
    await sleep(50);

    await write(passwordToSet, (v) => update((p) => ({ ...p, password: v })), 300);
    await sleep(50);

    await safeAnimate(
        code,
        { x: [200, 200], y: [460 + 16, 460], opacity: [0, 1] },
        { duration: 0.25 }
    )?.finished;

    await sleep(350);

    update((p) => ({ ...p, submitted: true }));

    await sleep(1000);

    update((p) => ({ ...p, showControls: true }));
    safeAnimate(controls, { x: [420, 420], y: [16, 0], opacity: 1 }, { duration: 0.5 });
};

export const authController = {
    execute,
    state
};
