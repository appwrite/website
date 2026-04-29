/** Cookie + localStorage key — must match server `+page.server.ts` for consistent experiment assignment. */
export const STATSIG_STABLE_ID_KEY = 'statsig_stable_id';

/** Browser SDK key (public). Server uses it for `getClientInitializeResponse` / client bootstrap. */
export const STATSIG_CLIENT_SDK_KEY = 'client-TRp4ODQ3Yfsha0XwmRayqwb7WW0ujUbiGrNlB0pfhTH';

export const STATSIG_EXPERIMENT_BEST_DESCRIPTION = 'best_description';

/** Experiment param key: `layout` (values `0` | `1` | `2`). */
export const STATSIG_EXPERIMENT_HERO_LAYOUT = 'hero_layout';

export const DEFAULT_HERO_SUBTITLE =
    'Appwrite is an open-source, all-in-one development platform. Use built-in backend infrastructure and web hosting, all from a single place.';

export const DEFAULT_HERO_TITLE = 'Build like a team of hundreds';
