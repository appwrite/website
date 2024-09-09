import { createLibrary } from 'svelvg';

createLibrary('../src/icons/optimized', {
    outDir: 'src/lib/icons',
    toModuleName: (params: { moduleName: string }) => {
        return `${params.moduleName.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())}`;
    }
});
