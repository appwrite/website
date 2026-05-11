/**
 * k6 load / smoke test against a local or remote HTTP server.
 *
 * Requires k6: https://k6.io/docs/get-started/installation/
 *   brew install k6
 *
 * Run:
 *   pnpm benchmark:http
 *   BASE_URL=http://127.0.0.1:3000 pnpm benchmark:http
 *   ITERATIONS=200 VUS=10 pnpm benchmark:http
 *   DURATION=1m VUS=20 COOKIE='statsig_stable_id=...' pnpm benchmark:http
 *
 * Env (shell → inherited by k6, read via __ENV):
 *   BASE_URL      default http://127.0.0.1:5173
 *   TARGET_PATH   default /
 *   VUS           virtual users (default 5)
 *   DURATION      e.g. 30s, 1m (default 30s) - used when ITERATIONS is unset
 *   ITERATIONS    if set, uses shared-iterations instead of fixed duration
 *   MAX_DURATION  cap for shared-iterations (default 5m)
 *   COOKIE        optional Cookie header
 */

import http from 'k6/http';
import { check } from 'k6';

const base = (__ENV.BASE_URL || 'http://127.0.0.1:5173').replace(/\/$/, '');
const path = __ENV.TARGET_PATH || '/';
const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;

const vus = Number(__ENV.VUS || 5);
const iterationsEnv = __ENV.ITERATIONS;
const hasIterations = iterationsEnv != null && iterationsEnv !== '' && Number(iterationsEnv) > 0;

export const options = hasIterations
    ? {
          scenarios: {
              bench: {
                  executor: 'shared-iterations',
                  vus: Math.max(1, vus),
                  iterations: Math.max(1, Number(iterationsEnv)),
                  maxDuration: __ENV.MAX_DURATION || '5m'
              }
          },
          thresholds: {
              http_req_failed: ['rate<0.05']
          }
      }
    : {
          vus: Math.max(1, vus),
          duration: __ENV.DURATION || '30s',
          thresholds: {
              http_req_failed: ['rate<0.05']
          }
      };

const headers = { Accept: 'text/html,*/*' };
if (__ENV.COOKIE) {
    headers.Cookie = __ENV.COOKIE;
}

export default function () {
    const res = http.get(url, { headers, tags: { name: 'benchmark' } });
    check(res, {
        'status 2xx': (r) => r.status >= 200 && r.status < 400
    });
}
