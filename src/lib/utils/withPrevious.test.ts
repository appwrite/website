import { describe, expect, test } from 'vitest';
import { withPrevious } from './withPrevious';
import { get } from 'svelte/store';

describe('withPrevious', () => {
    test('Should retain previous value (number)', () => {
        const { previous, ...store } = withPrevious(0);
        expect(get(previous)).toBe(0);
        expect(get(store)).toBe(0);
        store.set(1);
        expect(get(previous)).toBe(0);
        expect(get(store)).toBe(1);
        store.set(2);
        expect(get(previous)).toBe(1);
        expect(get(store)).toBe(2);
    });

    test('Should retain previous value (array)', () => {
        const { previous, ...store } = withPrevious([0]);
        expect(get(previous)).toEqual([0]);
        expect(get(store)).toEqual([0]);
        store.set([1]);
        expect(get(previous)).toEqual([0]);
        expect(get(store)).toEqual([1]);
        store.set([2]);
        expect(get(previous)).toEqual([1]);
        expect(get(store)).toEqual([2]);
    });
});
