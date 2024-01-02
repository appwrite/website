import type { Models } from 'appwrite';

export type MockThread = {
    id: string;
    username?: string;
    title: string;
    text: string;
    replies: MockMessage[];
};

export interface DiscordMessage extends Pick<Models.Document, '$id'> {
    author: string;
    author_avatar: string;
    message: string;
    role: string;
    /* `UTC` timestamp */
    timestamp: string;
}

export interface DiscordThread extends Pick<Models.Document, '$id'> {
    title: string;
    discord_id: string;
    content: string;
    author: string;
    author_avatar: string;
    tags?: string[];
    // messages?: DiscordMessage[];
    seo_description?: string;
    tldr: string;
    vote_count: number;
}

export type MockMessage = {
    username?: string;
    text: string;
};
