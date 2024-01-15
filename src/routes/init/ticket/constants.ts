import { invalidate } from '$app/navigation';
import type { Models } from 'appwrite';

export const TICKET_DEP = 'ticket';
export const invalidateTicket = () => {
    invalidate(TICKET_DEP);
};

export type ContributionsMatrix = number[][];

export type TicketVariant = 'default' | 'pink' | 'rainbow';

export type TicketData = Pick<Models.Document, '$id'> & {
    name: string;
    tribe?: string;
    gh_user?: string;
    id: number;
    show_contributions?: boolean;
    contributions?: ContributionsMatrix;
    variant?: TicketVariant;
};
