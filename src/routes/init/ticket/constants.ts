import { invalidate } from '$app/navigation';
import type { Models } from 'appwrite';
import type { ContributionsMatrix } from '../(components)/Ticket.svelte';

export const TICKET_DEP = 'ticket';
export const invalidateTicket = () => {
    invalidate(TICKET_DEP);
};

export type Ticket = Pick<Models.Document, '$id'> & {
    name: string;
    tribe: string;
    gh_user: string;
    id: number;
    show_contributions: boolean;
    contributions?: ContributionsMatrix;
};
