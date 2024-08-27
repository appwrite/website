/* eslint-disable @typescript-eslint/ban-types */
type Cancel = () => void;
type Promised<T> = T extends Promise<infer U> ? U : T;

type Args<T> = {
    returned: Promised<T>;
    cancel: Cancel;
};

export type Chain = {
    execute: () => Promise<void>;
    cancel: Cancel;
};

interface ChainFn {
    <A>(fn1: (args: Args<undefined>) => A): Chain;
    <A, B>(fn1: (args: Args<undefined>) => A, fn2: (args: Args<A>) => B): Chain;
    <A, B, C>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C
    ): Chain;
    <A, B, C, D>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D
    ): Chain;
    <A, B, C, D, E>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E
    ): Chain;
    <A, B, C, D, E, F>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E,
        fn6: (args: Args<E>) => F
    ): Chain;
    <A, B, C, D, E, F, G>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E,
        fn6: (args: Args<E>) => F,
        fn7: (args: Args<F>) => G
    ): Chain;
    <A, B, C, D, E, F, G, H>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E,
        fn6: (args: Args<E>) => F,
        fn7: (args: Args<F>) => G,
        fn8: (args: Args<G>) => H
    ): Chain;
    <A, B, C, D, E, F, G, H, I>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E,
        fn6: (args: Args<E>) => F,
        fn7: (args: Args<F>) => G,
        fn8: (args: Args<G>) => H,
        fn9: (args: Args<H>) => I
    ): Chain;
    <A, B, C, D, E, F, G, H, I, J>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E,
        fn6: (args: Args<E>) => F,
        fn7: (args: Args<F>) => G,
        fn8: (args: Args<G>) => H,
        fn9: (args: Args<H>) => I,
        fn10: (args: Args<I>) => J
    ): Chain;
    <A, B, C, D, E, F, G, H, I, J, K>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E,
        fn6: (args: Args<E>) => F,
        fn7: (args: Args<F>) => G,
        fn8: (args: Args<G>) => H,
        fn9: (args: Args<H>) => I,
        fn10: (args: Args<I>) => J,
        fn11: (args: Args<J>) => K
    ): Chain;
    <A, B, C, D, E, F, G, H, I, J, K, L>(
        fn1: (args: Args<undefined>) => A,
        fn2: (args: Args<A>) => B,
        fn3: (args: Args<B>) => C,
        fn4: (args: Args<C>) => D,
        fn5: (args: Args<D>) => E,
        fn6: (args: Args<E>) => F,
        fn7: (args: Args<F>) => G,
        fn8: (args: Args<G>) => H,
        fn9: (args: Args<H>) => I,
        fn10: (args: Args<I>) => J,
        fn11: (args: Args<J>) => K,
        fn12: (args: Args<K>) => L
    ): Chain;
    // So on...
}

/**
 * Method that accepts an array of async callbacks.
 * It returns an execute and cancel method.
 * The execute method will execute the callbacks in order.
 * The cancel method will cancel the execution of the remaining callbacks.
 */
export const chain: ChainFn = (...fns: Function[]) => {
    const cancelled = {} as Record<string, boolean>;

    const cancel = () => {
        Object.keys(cancelled).forEach((key) => (cancelled[key] = true));
    };

    let lastRes: any = undefined;

    const execute = async () => {
        const executionId = stupidId();
        cancelled[executionId] = false;

        for (let i = 0; i < fns.length; i++) {
            const fn = fns[i];
            if (cancelled[executionId]) {
                delete cancelled[executionId];
                return;
            }

            lastRes = await fn({ returned: lastRes, cancel });
        }

        delete cancelled[executionId];
    };

    return { execute, cancel };
};

// Stupid way of generating unique id
const stupidId = () => Math.random().toString(36).substr(2, 9);
