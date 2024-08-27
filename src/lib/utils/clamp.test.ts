import { describe, it, expect } from 'vitest';

import { clamp } from './clamp';
import type { TestCases } from './test';

const testCases: TestCases<typeof clamp> = [
    {
        args: [0, 5, 10],
        expected: 5
    },
    {
        args: [0, -5, 10],
        expected: 0
    },
    {
        args: [0, 15, 10],
        expected: 10
    }
];

describe('clamp', () => {
    testCases.forEach(({ args, expected }) => {
        it(`should return ${expected} when given ${JSON.stringify(args)}`, () => {
            expect(clamp(...args)).toBe(expected);
        });
    });
});
