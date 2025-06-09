// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownFn = (...args: any[]) => any;

export type TestCases<Fn extends UnknownFn> = {
    args: Parameters<Fn>;
    expected: ReturnType<Fn>;
}[];
