import { invalidate } from '$app/navigation';
import type { Models } from '@appwrite.io/console';

export const TICKET_DEP = 'ticket';
export const invalidateTicket = () => {
    invalidate(TICKET_DEP);
};

export type ContributionsMatrix = number[][];

export type TicketVariant = 'default' | 'pink' | 'rainbow';

export type TicketData = Pick<Models.Document, '$id'> & {
    name: string;
    tribe?: string | null
    gh_user?: string;
    aw_email?: string;
    id: number;
    show_contributions?: boolean;
    variant?: TicketVariant;
    is_pro?: boolean;
    contributions?: number[];
};

export type TicketDoc = Omit<TicketData, 'contributions' | 'variant'>;
