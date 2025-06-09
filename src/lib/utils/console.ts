import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { Account, Client, Teams } from '@appwrite.io/console';
import { Query, type Models } from '@appwrite.io/console';
import { PUBLIC_APPWRITE_ENDPOINT } from '$env/static/public';

const client = new Client();

client.setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject('console');

const account = new Account(client);
const teams = new Teams(client);

const BillingPlan = {
    STARTER: 'tier-0',
    PRO: 'tier-1',
    SCALE: 'tier-2'
} as const;

export async function createSource(
    ref: string | null,
    referrer: string | null,
    utmSource: string | null,
    utmCampaign: string | null,
    utmMedium: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
    const path = `/console/sources`;
    const params = {
        ref,
        referrer,
        utmSource,
        utmCampaign,
        utmMedium
    };

    const uri = new URL(client.config.endpoint + path);
    return await client.call(
        'POST',
        uri,
        {
            'content-type': 'application/json'
        },
        params
    );
}

export async function isProUser() {
    try {
        const orgs = await teams.list([Query.equal('billingPlan', BillingPlan.PRO)]);
        return orgs?.teams?.length > 1;
    } catch {
        return false;
    }
}

export const sdk = { client, account };

export type AppwriteUser = Models.User<Models.Preferences>;
function isAppwriteUser(user: unknown): user is AppwriteUser {
    return typeof user === 'object' && user !== null && '$id' in user;
}

export async function getAppwriteUser(): Promise<AppwriteUser | null> {
    return await account
        .get()
        .then((res) => res)
        .catch(() => null);
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
