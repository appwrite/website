// See https://kit.svelte.dev/docs/types#app

import type { Account } from 'node-appwrite';

// for information about these interfaces
declare global {
    namespace App {
        interface Locals {
            initUser: {
                github: {
                    login: string;
                    name: string;
                    email: string;
                    avatar_url: string | undefined;
                } | null;
                appwrite: AppwriteUser | null;
            };
            account: Models.User<Models.Preferences>;
            nonce: string;
        }
    }
}

export {};
