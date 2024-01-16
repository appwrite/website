import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
import { appwriteInit } from '$lib/appwrite/init';
import { ID, Query } from 'appwrite';
import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

import { contributors } from '$lib/contributors';
import { getAppwriteUser, type AppwriteUser } from '$lib/utils/console';
import { shuffle } from '$lib/utils/shuffle';
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

        return await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${providerAccessToken}`
            }
        }).then((res) => res.json() as Promise<GithubUser>);
    } catch {
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
    return shuffle<ContributionsMatrix>([
        [0.02, 0.2, 0.29, 0.49, 0.16, 0.24, 0.36],
        [0.13, 0.6, 0.07, 0.09, 0.44, 0.38, 0],
        [0, 0.09, 0.04, 0.22, 0.31, 0.36, 0],
        [0, 0.2, 0.2, 0.4, 0.09, 0.07, 0],
        [0, 0.24, 0.44, 0.36, 0.44, 0.11, 0],
        [0, 0.16, 0.2, 0.13, 0.24, 0.2, 0.04],
        [0, 0.09, 0.16, 0.04, 0.13, 0.07, 0],
        [0, 0, 0, 0.33, 0.29, 0.11, 0],
        [0.27, 0.2, 0.18, 0.27, 0.09, 0.09, 0],
        [0, 0.13, 0.09, 0.16, 0.42, 0.44, 0.31],
        [0, 0, 0, 0.24, 0.38, 0.51, 0],
        [0.82, 0.84, 0.36, 0.49, 0.29, 0, 0],
        [0.24, 0.09, 0.62, 0.4, 0.91, 0.82, 0.82],
        [0.29, 0.11, 0.56, 0.36, 0.24, 0.49, 0.2],
        [0.47, 0.47, 0.58, 0.36, 0.31, 0.33, 2.49],
        [0.18, 1, 0.56, 0.38, 0.31, 0.69, 0],
        [0.11, 0.04, 0.24, 0.24, 0.56, 0.58, 0.36],
        [0.56, 0.11, 0, 1.42, 0, 0.2, 0.04],
        [0.04, 0.18, 0.36, 0.51, 0.33, 0.2, 0.11],
        [0.07, 0.6, 0.29, 0, 0.04, 0.16, 0.13],
        [0.02, 0.09, 0.09, 0.22, 0.13, 0.29, 0.04],
        [0.36, 0.36, 0.09, 0.04, 0.2, 0.09, 0],
        [0.29, 0.58, 0.71, 0.4, 0.51, 0.51, 0.56],
        [0.04, 0.11, 0.29, 0.27, 0.33, 0.24, 0.31],
        [0.4, 0, 0.24, 0.42, 0.33, 0.33, 0],
        [0.27, 0.18, 0.33, 0.33, 0.18, 0.29, 0.22],
        [0.02, 0.8, 0.36, 0.44, 0.36, 0.27, 0.33],
        [0.24, 0.29, 0.2, 0.2, 0.84, 0.71, 0.22],
        [0.13, 0.13, 0.31, 0.24, 0.24, 0.4, 0.42],
        [0.22, 0.18, 0.89, 0.51, 0.8, 0.2, 0.42],
        [0.02, 0.38, 0.29, 0.27, 0.36, 0.78, 0.11],
        [0.29, 1.04, 0.89, 0.24, 0.13, 0.24, 0.22],
        [0, 0.36, 0.51, 0.18, 0.44, 0.31, 0.6],
        [0.33, 0.53, 0.2, 0.36, 0.11, 0.56, 0.13],
        [0, 0.27, 0.84, 0.42, 0.58, 0.29, 0.29],
        [0.22, 0.13, 0.27, 0.24, 0.24, 0.67, 0.02],
        [0, 0, 0.4, 0.13, 0.09, 0.04, 0],
        [0.09, 0.04, 0.13, 0.04, 0, 0, 0],
        [0, 0.42, 0.36, 0.4, 0.64, 0.4, 0.29],
        [0.24, 0.44, 0.47, 0.38, 0.36, 0.27, 0.04],
        [0.24, 0.53, 0.44, 0.13, 0.11, 0.36, 0.11],
        [0, 0.09, 0.31, 0.07, 0.16, 0.76, 0],
        [0.02, 0.22, 0.33, 0.02, 0.18, 0.07, 0.07],
        [0.18, 0.29, 0.2, 0.29, 0.24, 0.36, 0.04],
        [0, 0.02, 0.29, 0.49, 0.11, 0, 0],
        [0.22, 0.2, 0.22, 0.09, 0.36, 0.44, 0],
        [0.27, 0.11, 0, 0.07, 0.24, 0, 0.16],
        [0.33, 0, 0.02, 0.09, 0, 0.11, 0.07],
        [0.09, 0.11, 0.09, 0.16, 0.29, 0.16, 0.11],
        [0, 0.11, 0.42, 0.27, 0.2, 1, 0.24],
        [0.02, 0, 0.04, 0.33, 0.58, 0, 0.02],
        [0, 0.04, 0.18, 0, 0.18, 0, 0.02],
        [0.18, 0.13, 0]
    ]);
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
                  [Query.equal('aw_id', user.appwrite.$id)]
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
                    aw_id: null
                }
            );
            return (await appwriteInit.database.updateDocument(
                PUBLIC_APPWRITE_DB_INIT_ID,
                PUBLIC_APPWRITE_COL_INIT_ID,
                newest,
                {
                    gh_user: user.github?.login,
                    aw_id: user.appwrite?.$id
                }
            )) as unknown as TicketDoc;
        }

        const doc = gh_doc ?? aw_doc;

        if (!doc.gh_user || !doc.aw_id) {
            return (await appwriteInit.database.updateDocument(
                PUBLIC_APPWRITE_DB_INIT_ID,
                PUBLIC_APPWRITE_COL_INIT_ID,
                doc.$id,
                {
                    gh_user: user.github?.login,
                    aw_id: user.appwrite?.$id
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
                aw_id: user.appwrite?.$id ?? undefined,
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
    const { gh_user, aw_id } = doc;

    if (gh_user && contributors.includes(gh_user)) {
        return 'rainbow';
    }

    if (aw_id) {
        return 'pink';
    }

    return 'default';
}

export async function getTicketByUser(user: User) {
    const doc = await getTicketDocByUser(user);
    const contributions = await getTicketContributions(doc.$id);
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
