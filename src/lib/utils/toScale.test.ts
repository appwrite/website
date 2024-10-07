import { describe, it, expect } from 'vitest';

import { toScale } from './toScale';
import type { TestCases } from './test';

const testCases: TestCases<typeof toScale> = [
    {
        args: [5, [0, 10], [0, 100]],
        expected: 50
    },
    {
        args: [0.5, [0, 1], [0, 100]],
        expected: 50
    },
    {
        args: [0.4, [0.2, 1], [0, 1]],
        expected: 0.25
    }
];

describe('toScale', () => {
    testCases.forEach(({ args, expected }) => {
        it(`should return ${expected} when given ${JSON.stringify(args)}`, () => {
            expect(toScale(...args)).toBe(expected);
        });
    });
});
