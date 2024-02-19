import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

import { appwriteInit } from '$lib/appwrite/init';
import { contributors } from '$lib/contributors';
import { getAppwriteUser, type AppwriteUser } from '$lib/utils/console';
import type { ContributionsMatrix, TicketData, TicketDoc, TicketVariant } from './ticket/constants';

export function createCountdown(date: Date) {
    const today = new Date();
    const hasReleased = today >= date;

    const [days, hours, minutes, seconds] = [writable(0), writable(0), writable(0), writable(0)];

    function update() {
        const today = new Date();
        const timeRemaining = date.getTime() - today.getTime();

        if (timeRemaining <= 0) {
            // Target date has passed, stop the countdown
            return;
        }

        const totalSeconds = Math.floor(timeRemaining / 1000);
        seconds.set(totalSeconds % 60);
        const totalMinutes = Math.floor(totalSeconds / 60);
        minutes.set(totalMinutes % 60);
        hours.set(Math.floor(totalMinutes / 60));
        days.set(Math.ceil(get(hours) / 24));
    }

    update();

    onMount(() => {
        let frame: number;

        function updateFrame() {
            update();
            // Request the next animation frame to keep updating the countdown
            frame = requestAnimationFrame(() => {
                updateFrame();
            });
        }
        updateFrame();

        return () => cancelAnimationFrame(frame);
    });

    return {
        hasReleased,
        days,
        hours,
        minutes,
        seconds
    };
}

export async function isLoggedIn() {
    const user = await getUser();
    return !!(user.appwrite || user.github);
}

export interface GithubUser {
    login: string;
    name: string;
}

export async function getGithubUser() {
    try {
        const { providerAccessToken, provider } = await appwriteInit.account.getSession('current');
        if (provider !== 'github') return null;

        const res = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${providerAccessToken}`
            }
        }).then((res) => res.json() as Promise<GithubUser>);
        if (!res.login) {
            await appwriteInit.account.deleteSession('current');
            return null;
        }
        return res;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export type User = {
    github: GithubUser | null;
    appwrite: AppwriteUser | null;
};

export async function getUser(): Promise<User> {
    const [github, appwrite] = await Promise.all([getGithubUser(), getAppwriteUser()]);

    return { github, appwrite };
}

export function getMockContributions() {
    const result: ContributionsMatrix = [];
    for (let i = 0; i < 53; i++) {
        result.push([]);
        for (let j = 0; j < 7; j++) {
            result[i].push(Math.floor(Math.random() * 4));
        }
    }
    return result;
}

export async function getTicketDocByUser(user: User, f = fetch) {
    return await f(`/init/tickets/get-ticket-doc?user=${JSON.stringify(user)}`).then(
        (res) => res.json() as Promise<TicketDoc>
    );
}

export async function getTicketDocById(id: string, f = fetch) {
    return await f(`/init/tickets/get-ticket-doc?id=${id}`).then(
        (res) => res.json() as Promise<TicketDoc>
    );
}

export async function getTicketContributions(id: string, f = fetch): Promise<ContributionsMatrix> {

    const res = await f(`/init/tickets/${id}/get-contributions`);
    const { data: contributions } = (await res
        .json()
        .then((r) => {
            return r;
        })
        .catch(() => {
            return { data: null };
        })) as { data: ContributionsMatrix | null };

    return contributions ?? [];
}

export function getTicketVariant(
    doc: Omit<TicketData, 'contributions' | 'variant'>
): TicketVariant {
    const { gh_user, aw_email } = doc;

    if (gh_user && contributors.includes(gh_user)) {
        return 'rainbow';
    }

    if (aw_email) {
        return 'pink';
    }

    return 'default';
}

export async function getTicketByUser(user: User, f = fetch) {
    const doc = await getTicketDocByUser(user, f);

    const variant = getTicketVariant(doc);

    return {
        ...doc,
        variant
    } as TicketData;
}

export async function getTicketById(id: string, f = fetch) {
    const doc = await getTicketDocById(id, f);
    const variant = getTicketVariant(doc);

    return {
        ...doc,
        variant
    } as TicketData;
}

export function loginGithub() {
    appwriteInit.account.createOAuth2Session(
        'github',
        `${window.location.origin}/init/tickets?success=1`,
        `${window.location.origin}/init/tickets?error=1`,
        ['read:user']
    );
}
