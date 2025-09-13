import { describe, expect, it } from 'vitest';

import path from 'node:path';
import fs from 'node:fs/promises';
import { VERSIONS, type Variant } from '../utils/constants';

export type Version = (typeof VERSIONS)[number];

const VARIANTS: Variant[] = ['client', 'server', 'console'];

function getSpecPath(version: Version, variant: Variant): string {
    return path.join(
        process.cwd(),
        `/node_modules/@appwrite.io/repo/app/config/specs/open-api3-${version}-${variant}.json`
    );
}

async function readJSON(filePath: string): Promise<any> {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw.replace(/^\uFEFF/, ''));
}

describe.each(VERSIONS)('OpenAPI specs validation for version %s', (version) => {
    describe.each(VARIANTS)('%s variant', (variant) => {
        it('spec file exists and is a valid OpenAPI 3 document', async () => {
            const file = getSpecPath(version, variant);

            await expect(fs.access(file)).resolves.toBeUndefined();

            const json = await readJSON(file);

            expect(json && typeof json === 'object').toBeTruthy();
            expect(typeof json.openapi).toBe('string');

            expect(json.openapi.startsWith('3')).toBe(true);

            expect(json.info && typeof json.info.title === 'string').toBe(true);
            expect(json.paths && typeof json.paths === 'object').toBe(true);

            expect(Object.keys(json.paths).length).toBeGreaterThan(0);
        });
    });
});
