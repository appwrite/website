import type { Models } from '@appwrite.io/console';

export type MockThread = {
    id: string;
    username?: string;
    title: string;
    text: string;
    replies: MockMessage[];
};

export interface DiscordMessage extends Pick<Models.Document, '$id'> {
    threadId: string;
    author: string;
    author_avatar: string;
    message: string;
    role?: string;
    /* `UTC` timestamp */
    timestamp: string;
}

export interface DiscordThread extends Models.Document {
    discord_id: string;
    author: string;
    tags?: string[];
    author_avatar: string;
    seo_description?: string;
    content: string;
    title: string;
    search_meta?: string;
    tldr: string;
    vote_count: number;
    message_count: number;
}

export type MockMessage = {
    username?: string;
    text: string;
};
