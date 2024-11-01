import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

import { OAuthProvider } from '@appwrite.io/console';
import { appwriteInit } from '$lib/appwrite/init';
import { getAppwriteUser, type AppwriteUser } from '$lib/utils/console';
import type { ContributionsMatrix, TicketData, TicketDoc } from './tickets/constants';
import { BASE_URL } from '$routes/playground/tickets/constants';

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
    return !!user.github;
}

export interface GithubUser {
    login: string;
    name: string;
    email: string;
}

export async function getGithubUser() {
    try {
        const identitiesList = await appwriteInit.account.listIdentities();
        if (!identitiesList.total) return null;
        const identity = identitiesList.identities[0];
        const { providerAccessToken, provider } = identity;
        if (provider !== 'github') return null;

        const res = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${providerAccessToken}`
            }
        })
            .then((res) => {
                return res.json() as Promise<GithubUser>;
            })
            .then((n) => ({
                login: n.login,
                name: n.name,
                email: n.email
            }));

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

export async function auth(userId: string, secret: string, f = fetch) {
    const response = await f(`${BASE_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, secret })
    });

    return await response.json();
}

export async function getTicketDocByUser(user: User, f = fetch) {
    return await f(`${BASE_URL}/get-ticket-doc?user=${JSON.stringify(user)}`).then(
        (res) => res.json() as Promise<TicketDoc>
    );
}

export async function getTicketDocById(id: string, f = fetch) {
    return await f(`${BASE_URL}/get-ticket-doc?id=${id}`).then(
        (res) => res.json() as Promise<TicketDoc>
    );
}

export async function getTicketContributions(id: string, f = fetch): Promise<ContributionsMatrix> {
    const res = await f(`${BASE_URL}/${id}/get-contributions`);
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

export async function getTicketByUser(user: User, f = fetch) {
    const doc = await getTicketDocByUser(user, f);

    return doc as TicketData;
}

export async function getTicketById(id: string, f = fetch) {
    const doc = await getTicketDocById(id, f);

    return doc as TicketData;
}

export function loginGithub() {
    appwriteInit.account.createOAuth2Token(
        OAuthProvider.Github,
        `${window.location.origin}/init/tickets?success=1`,
        `${window.location.origin}/init/tickets?error=1`,
        ['read:user']
    );
}
