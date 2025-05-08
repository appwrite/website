import { safeAnimate } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { animate } from 'motion-legacy';
import { getElSelector } from '../Products.svelte';

const requests = createResettable(0);
const databases = createResettable(0);
const authentication = createResettable(0);
const storage = createResettable(0);
const bandwidth = createResettable(0);
const executions = createResettable(0);
const realtime = createResettable(0);

const execute = async () => {
    const phone = getElSelector('phone');
    const pd = getElSelector('pd');

    const graphBox = getElSelector('graph-box');

    const boxesAndStates = [
        { box: getElSelector('post-auth'), state: authentication.reset() },
        { box: getElSelector('post-storage'), state: storage.reset() },
        { box: getElSelector('post-bandwidth'), state: bandwidth.reset() },
        { box: getElSelector('post-functions'), state: executions.reset() },
        { box: getElSelector('post-databases'), state: databases.reset() },
        { box: getElSelector('post-realtime'), state: realtime.reset() },
        { box: getElSelector('post-requests'), state: requests.reset() }
    ];

    await Promise.all([
        safeAnimate(pd, { opacity: 0, y: -16 }, { duration: 0.5 })?.finished,
        safeAnimate(graphBox, { opacity: 0, visibility: 'hidden' }, { duration: 0.5 })?.finished,
        safeAnimate(phone, { x: '-50%', width: '660px' }, { duration: 1, delay: 0.5 })?.finished
    ]);

    boxesAndStates.forEach(({ box, state }, i) => {
        safeAnimate(box, { opacity: 1, y: [1200, 0] }, { duration: 0.5, delay: i * 0.1 })?.finished;
        animate(state.set, { duration: 2, delay: (i + 1) * 0.25 });
    });
};

export const postController = {
    execute,
    state: {
        requests,
        databases,
        authentication,
        storage,
        bandwidth,
        executions,
        realtime
    }
};
