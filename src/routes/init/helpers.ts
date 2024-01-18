import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
import { appwriteInit } from '$lib/appwrite/init';
import { ID, Query } from 'appwrite';
import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

import { getAppwriteUser, type AppwriteUser } from '$lib/utils/console';
import type { ContributionsMatrix, TicketData, TicketDoc, TicketVariant } from './ticket/constants';
import { contributors } from '$lib/contributors';

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

        return await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${providerAccessToken}`
            }
        }).then((res) => res.json() as Promise<GithubUser>);
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
    console.log({ github, appwrite });
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

export async function getTicketDocByUser(user: User) {
    const [gh, aw] = await Promise.all([
        user.github?.login
            ? appwriteInit.database.listDocuments(
                PUBLIC_APPWRITE_DB_INIT_ID,
                PUBLIC_APPWRITE_COL_INIT_ID,
                [Query.equal('gh_user', user.github.login)]
            )
            : null,
        user.appwrite?.$id
            ? appwriteInit.database.listDocuments(
                PUBLIC_APPWRITE_DB_INIT_ID,
                PUBLIC_APPWRITE_COL_INIT_ID,
                [Query.equal('aw_email', user.appwrite.email)]
            )
            : null
    ]);

    if (gh?.total || aw?.total) {
        const gh_doc = gh?.documents[0] as unknown as TicketDoc;
        const aw_doc = aw?.documents[0] as unknown as TicketDoc;
        if (gh_doc && aw_doc && gh_doc.$id !== aw_doc.$id) {
            // Delete the oldest document ids
            const oldest = gh_doc.id < aw_doc.id ? gh_doc.$id : aw_doc.$id;
            const newest = gh_doc.id > aw_doc.id ? gh_doc.$id : aw_doc.$id;
            await appwriteInit.database.updateDocument(
                PUBLIC_APPWRITE_DB_INIT_ID,
                PUBLIC_APPWRITE_COL_INIT_ID,
                oldest,
                {
                    gh_user: null,
                    aw_email: null
                }
            );
            return (await appwriteInit.database.updateDocument(
                PUBLIC_APPWRITE_DB_INIT_ID,
                PUBLIC_APPWRITE_COL_INIT_ID,
                newest,
                {
                    gh_user: user.github?.login,
                    aw_email: user.appwrite?.email
                }
            )) as unknown as TicketDoc;
        }

        const doc = gh_doc ?? aw_doc;

        if (!doc.gh_user || !doc.aw_email) {
            return (await appwriteInit.database.updateDocument(
                PUBLIC_APPWRITE_DB_INIT_ID,
                PUBLIC_APPWRITE_COL_INIT_ID,
                doc.$id,
                {
                    gh_user: user.github?.login,
                    aw_email: user.appwrite?.email
                }
            )) as unknown as TicketDoc;
        }
        return doc;
    } else {
        const allDocs = await appwriteInit.database.listDocuments(
            PUBLIC_APPWRITE_DB_INIT_ID,
            PUBLIC_APPWRITE_COL_INIT_ID
        );
        return (await appwriteInit.database.createDocument(
            PUBLIC_APPWRITE_DB_INIT_ID,
            PUBLIC_APPWRITE_COL_INIT_ID,
            ID.unique(),
            {
                gh_user: user.github?.login ?? undefined,
                aw_email: user.appwrite?.email ?? undefined,
                id: allDocs.total + 1,
                name: user.appwrite?.name ?? user.github?.name
            }
        )) as unknown as TicketDoc;
    }
}

export async function getTicketDocById(id: string) {
    return (await appwriteInit.database.getDocument(
        PUBLIC_APPWRITE_DB_INIT_ID,
        PUBLIC_APPWRITE_COL_INIT_ID,
        id
    )) as unknown as Omit<TicketData, 'contributions' | 'variant'>;
}

export async function getTicketContributions(id: string, f = fetch): Promise<ContributionsMatrix> {
    const res = await f(`/init/ticket/${id}/get-contributions`);
    const { data: contributions } = (await res
        .json()
        .then((r) => r)
        .catch(() => {
            return { data: null };
        })) as { data: ContributionsMatrix | null };

    return contributions ?? [];
}

function getTicketVariant(doc: Omit<TicketData, 'contributions' | 'variant'>): TicketVariant {
    const { gh_user, aw_email } = doc;

    if (gh_user && contributors.includes(gh_user)) {
        return 'rainbow';
    }

    if (aw_email) {
        return 'pink';
    }

    return 'default';
}

export async function getTicketByUser(user: User) {
    console.time('ticket');
    const doc = await getTicketDocByUser(user);
    console.timeEnd('ticket');

    console.time('contributions');
    const contributions = await getTicketContributions(doc.$id);
    console.timeEnd('contributions');
    const variant = getTicketVariant(doc);

    return {
        ...doc,
        contributions,
        variant
    } as TicketData;
}

export async function getTicketById(id: string, f = fetch) {
    const doc = await getTicketDocById(id);
    const contributions = await getTicketContributions(doc.$id, f);
    const variant = getTicketVariant(doc);

    return {
        ...doc,
        contributions,
        variant
    } as TicketData;
}

export function loginGithub() {
    appwriteInit.account.createOAuth2Session(
        'github',
        `${window.location.origin}/init/ticket?success=1`,
        `${window.location.origin}/init/ticket?error=1`,
        ['read:user']
    );
}
