import * as Sentry from '@sentry/sveltekit';
import { getStatsigServerClient } from '$lib/statsig/server';

Sentry.init({
    dsn: 'https://27d41dc8bb67b596f137924ab8599e59@o1063647.ingest.us.sentry.io/4507497727000576',
    tracesSampleRate: 1.0
});

/** Start Node Statsig `initialize()` before the first HTTP request so `/` load is not cold. */
void getStatsigServerClient().catch(() => {
    /* No `STATSIG_SERVER_SECRET` or network failure - homepage uses defaults until init succeeds. */
});
