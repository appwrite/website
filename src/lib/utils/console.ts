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

const ASCII_ART = `
   _                            _ _       
  /_\\  _ __  _ ____      ___ __(_) |_ ___ 
 //_\\\\| '_ \\| '_ \\ \\ /\\ / / '__| | __/ _ \\
/  _  \\ |_) | |_) \\ V  V /| |  | | ||  __/
\\_/ \\_/ .__/| .__/ \\_/\\_/ |_|  |_|\\__\\___|
      |_|   |_|                           
`;

export function displayHiringMessage() {
    if (browser) {
        console.log('%c' + ASCII_ART, 'font-family: monospace; white-space: pre;');
        console.log(
            '%cWe are hiring! 🚀',
            'font-family: Aeonik Pro, -apple-system, BlinkMacSystemFont, sans-serif; font-size: 20px; font-weight: bold; color: #fd366e;'
        );
        console.log(
            '%cJoin us in building the open-source, all-in-one development platform',
            'font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; color: #fd366e;'
        );
        console.log(
            '%cCheck out our open positions at https://appwrite.io/careers',
            'font-family: monospace; color: #666;'
        );
    }
}

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
