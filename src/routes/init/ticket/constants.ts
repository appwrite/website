import { invalidate } from '$app/navigation';

export const TICKET_DEP = 'ticket';
export const invalidateTicket = () => {
    invalidate(TICKET_DEP);
};
