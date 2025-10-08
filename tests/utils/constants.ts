export type Variant = 'client' | 'server' | 'console';

export const VERSIONS = [
    '1.8.x',
    '1.7.x',
    '1.6.x',
    '1.5.x',
    '1.4.x',
    '1.3.x',
    '1.2.x',
    '1.1.x',
    '1.0.x',
    '0.15.x'
] as const;

export type Version = (typeof VERSIONS)[number];
