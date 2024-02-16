import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { Account, Client, Teams } from '@appwrite.io/console';
import { Query, type Models } from '@appwrite.io/console';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('console');

const account = new Account(client);
const teams = new Teams(client);

enum BillingPlan {
    STARTER = 'tier-0',
    PRO = 'tier-1',
    SCALE = 'tier-2'
}

export async function isProUser() {
    try {
        const orgs = await teams.list([Query.equal('billingPlan', BillingPlan.PRO)]);
        return orgs?.teams?.length > 1;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const sdk = { client, account };

export type AppwriteUser = Models.User<Models.Preferences>;
function isAppwriteUser(user: unknown): user is AppwriteUser {
    return typeof user === 'object' && user !== null && '$id' in user;
}

export function getAppwriteUser(): Promise<AppwriteUser | null> {
    return account
        .get()
        .then((res) => res)
        .catch((e) => {
            console.error(e);
            return null;
        });
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
        getAppwriteUser().then((res) => {
            set(res);
        });
    }

    return {
        subscribe
    };
}

export const user = createAppwriteUser();
export const loggedIn = derived(user, ($user) => $user !== null);
