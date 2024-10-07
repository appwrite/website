import Box from './box.svelte';
import Code from './code.svelte';
import Phone from './phone.svelte';

import { safeAnimate, sleep } from '$lib/animations';
import { createResettable } from '$lib/utils/resettable';
import { getElSelector } from '../Products.svelte';

type File = {
    src: string;
    filename: string;
    type: string;
    size: string;
};

type State = {
    files: File[];
};

const state = createResettable<State>({
    files: []
});

const execute = async () => {
    const phone = getElSelector('phone');
    const box = getElSelector('box');
    const code = getElSelector('code');
    const overlay = getElSelector('overlay');
    const drawer = getElSelector('drawer');
    const upload = getElSelector('upload');
    const uploadBtn = getElSelector('upload-btn');
    const uploadImg = getElSelector('upload-img');
    const uploadLoading = getElSelector('upload-loading');
    const uploadText = getElSelector('upload-text');

    const { update } = state.reset();

    await Promise.all([
        safeAnimate(phone, { x: 0, y: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(box, { opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(code, { opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(uploadLoading, { opacity: 0 }, { duration: 0 })?.finished
    ]);

    await safeAnimate(code, { zIndex: 20 }, { duration: 0 })?.finished;

    update((p) => ({
        ...p,
        files: [
            ...p.files,
            {
                src: '/images/animations/storage-1.png',
                filename: 'Profile.png',
                type: 'image/png',
                size: '362.6 KB'
            }
        ]
    }));

    await sleep(250);

    await Promise.all([
        safeAnimate(overlay, { opacity: 1 }, { duration: 0.25 })?.finished,
        safeAnimate(drawer, { y: [128, 0], opacity: 1 }, { duration: 0.5 })?.finished
    ]);

    await sleep(250);

    await safeAnimate(uploadBtn, { scale: [1, 0.9, 1] }, { duration: 0.25 })?.finished;

    await safeAnimate(code, { x: 300, y: 32 }, { duration: 0 })?.finished;

    await Promise.all([
        safeAnimate(code, { y: [32 - 16, 32], opacity: 1 }, { duration: 0.5 })?.finished,
        safeAnimate(upload, { y: [-16, 0], opacity: 1 }, { duration: 0.5 })?.finished
    ]);

    await sleep(250);

    await safeAnimate(box, { x: 300, y: 300 }, { duration: 0 })?.finished;

    await Promise.all([
        safeAnimate(uploadImg, { x: [64, 48], y: [80, 64], opacity: 1 }, { duration: 0.5 })
            ?.finished,
        safeAnimate(box, { y: [300 - 16, 300], opacity: 1 }, { duration: 1 })?.finished
    ]);

    await sleep(250);

    await Promise.all([
        safeAnimate(uploadText, { opacity: 0 }, { duration: 0.5 })?.finished,
        safeAnimate(uploadLoading, { opacity: 1 }, { duration: 0.5 })?.finished,
        safeAnimate(uploadImg, { opacity: 0, y: 64 + 8 }, { duration: 0.5 })?.finished
    ]);
    await sleep(250);

    await safeAnimate(upload, { opacity: 0, y: 48 }, { duration: 0.5 })?.finished;

    update((p) => ({
        ...p,
        files: [
            ...p.files,
            {
                src: '/images/animations/storage-2.png',
                filename: 'Vector.svg',
                type: 'vector/svg',
                size: '1.5 KB'
            }
        ]
    }));

    await sleep(250);

    update((p) => ({
        ...p,
        files: [
            ...p.files,
            {
                src: '/images/animations/storage-3.png',
                filename: 'img2.webp',
                type: 'image/webp',
                size: '3.2 MB'
            }
        ]
    }));
};

export const storageController = {
    execute,
    state
};

export const Storage = {
    Phone,
    Box,
    Code
};
