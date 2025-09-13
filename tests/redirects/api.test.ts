import fs from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { capitalize } from '$lib/utils/capitalize';
import { Platform, Service, type Variant, VERSIONS } from '../utils/constants';

const latest = String(VERSIONS[0]);

const specCache = new Map<Variant, any | null>();

function specPath(variant: Variant) {
    return path.resolve(
        process.cwd(),
        `/node_modules/@appwrite.io/repo/app/config/specs/open-api3-${latest}-${variant}.json`
    );
}

function loadSpec(variant: Variant): any | null {
    if (specCache.has(variant)) {
        return specCache.get(variant)!;
    }

    try {
        const file = specPath(variant);
        const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
        const parsed = JSON.parse(raw);

        specCache.set(variant, parsed);
        return parsed;
    } catch {
        specCache.set(variant, null);
        return null;
    }
}

function deriveServices(): string[] {
    const seen = new Set<string>();
    const variants: Variant[] = ['client', 'server'];

    for (const variant of variants) {
        const spec = loadSpec(variant);
        if (!spec?.paths) continue;

        for (const pathItem of Object.values(spec.paths)) {
            for (const method of Object.keys(pathItem as string)) {
                const operation = (pathItem as any)[method];
                const group = operation?.['x-appwrite']?.group;
                if (typeof group === 'string' && group.length > 0) {
                    seen.add(group);
                }
            }
        }
    }

    if (seen.size === 0) {
        Object.values(Service).forEach((s) => seen.add(s));
    }

    return Array.from(seen).sort();
}

const SERVICES: string[] = deriveServices();
const PLATFORMS: string[] = Object.values(Platform);

for (const platform of PLATFORMS) {
    test.describe(`Latest \`${platform}\``, () => {
        for (const service of SERVICES) {
            test(`${capitalize(service)}`, async ({ page }) => {
                const url = `/docs/references/cloud/${platform}/${service}`;
                const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
                expect(response?.ok()).toBeTruthy();
            });
        }
    });
}
