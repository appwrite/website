import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { Account, Client } from '@appwrite.io/console';
import type { Models } from 'appwrite';

const client = new Client();

client.setEndpoint('https://stage.cloud.appwrite.io/v1').setProject('console');

const account = new Account(client);

export const sdk = { client, account };

type AppwriteUser = Models.User<Models.Preferences>;
function isAppwriteUser(user: unknown): user is AppwriteUser {
    return typeof user === 'object' && user !== null && '$id' in user;
}

function createAppwriteUser() {
    const { subscribe, set: _set } = writable<AppwriteUser | null>(null);

    function set(v: AppwriteUser | null) {
        if (v) {
            localStorage.setItem('appwrite:user', JSON.stringify(v));
        } else {
            localStorage.removeItem('appwrite:user');
        }
        _set(v);
    }

    if (browser) {
        const localUser = JSON.parse(localStorage.getItem('appwrite:user') ?? 'null');
        if (isAppwriteUser(localUser)) _set(localUser);

        sdk.account
            .get()
            .then((res) => {
                set(res);
            })
            .catch(() => {
                set(null);
            });
    }

    return {
        subscribe
    };
}

export const user = createAppwriteUser();
export const loggedIn = derived(user, ($user) => $user !== null);
