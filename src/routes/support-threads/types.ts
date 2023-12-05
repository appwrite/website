import type { Models } from 'appwrite';

export type MockThread = {
    id: string;
    username?: string;
    title: string;
    text: string;
    replies: MockMessage[];
};

export interface DiscordThread extends Pick<Models.Document, '$id'> {
    name: string;
    discord_id: string;
}

export type MockMessage = {
    username?: string;
    text: string;
};
