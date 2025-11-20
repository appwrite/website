import * as Sentry from '@sentry/sveltekit';

Sentry.init({
    dsn: 'https://27d41dc8bb67b596f137924ab8599e59@o1063647.ingest.us.sentry.io/4507497727000576',
    tracesSampleRate: 1.0
});
