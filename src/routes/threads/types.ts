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
    author_id?: string;
    author_avatar: string;
    message: string;
    role?: string;
    timestamp: string;
    reaction_count?: number;
    is_edited?: boolean;
}

export interface DiscordThread extends Models.Document {
    discord_id: string;
    author: string;
    author_id?: string;
    tags?: string[];
    author_avatar: string;
    seo_description?: string;
    content: string;
    title: string;
    search_meta?: string;
    tldr: string;
    vote_count: number;
    message_count: number;
    participant_count?: number;
    last_activity?: string;
    is_resolved?: boolean;
}

export interface DiscordAuthor extends Models.Document {
    discord_id: string;
    username: string;
    display_name: string;
    avatar?: string;
    roles?: string[];
    joined_at?: string;
    thread_count: number;
    reply_count: number;
    bio?: string;
}

export type MockMessage = {
    username?: string;
    text: string;
};
