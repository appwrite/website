declare module 'reodotdev' {
    export function loadReoScript(config: {
        clientID: string;
        version?: string;
        scriptUrlPattern?: string | string[];
    }): Promise<any>;
}
