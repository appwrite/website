import { createLibrary } from 'svelvg';

createLibrary('../src/icons/svg', {
    outDir: 'src/lib/icons',
    toModuleName: (params: { moduleName: string }) => {
        return `./${params.moduleName.replace(/\.svg$/, '')}`;
    }
});
