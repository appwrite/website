export type Reo = {
    init(config: { clientID: string }): void;
};

export type LoadReoScriptConfig = {
    clientID: string;
    version?: string;
    scriptUrlPattern?: string | string[];
};

export async function loadReoScript(config: LoadReoScriptConfig): Promise<Reo> {
    const mod = await import('reodotdev');
    return mod.loadReoScript(config);
}
