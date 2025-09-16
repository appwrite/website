<script lang="ts">
    import { sdkVersions } from '$lib/sdk-versions';
    import Fence from '$markdoc/nodes/Fence.svelte';

    interface Props {
        type: keyof typeof sdkVersions;
    }

    const { type }: Props = $props();

    const installCommands = {
        server: {
            command: 'npm i',
            package: 'node-appwrite',
        },
        'client-web': {
            command: 'npm i',
            package: 'appwrite',
        },
        'client-flutter': {
            command: 'flutter pub add',
            package: 'appwrite',
        },
        'client-apple': {
            command: 'swift package add',
            package: 'https://github.com/appwrite/sdk-for-swift',
        },
        'client-android': {
            command: 'implementation',
            package: "'io.appwrite:sdk-android",
        },
        'client-react-native': {
            command: 'npm i',
            package: 'react-native-appwrite',
        },
        'server-nodejs': {
            command: 'npm i',
            package: 'node-appwrite',
        },
        'server-php': {
            command: 'composer require',
            package: 'appwrite/appwrite',
        },
        'server-python': {
            command: 'pip install',
            package: 'appwrite',
            language: 'sh' as const
        },
        'server-ruby': {
            command: 'gem install',
            package: 'appwrite',
        },
        'server-go': {
            command: 'go get',
            package: 'github.com/appwrite/sdk-for-go',
        },
        'server-dotnet': {
            command: 'dotnet add package',
            package: 'Appwrite',
        },
        'server-dart': {
            command: 'dart pub add',
            package: 'dart_appwrite',
        },
        'server-kotlin': {
            command: 'implementation',
            package: "'io.appwrite:sdk-for-kotlin",
        },
        'server-swift': {
            command: 'swift package add',
            package: 'https://github.com/appwrite/sdk-for-swift',
        },
        'console-cli': {
            command: 'npm install -g',
            package: 'appwrite-cli',
        },
        'console-web': {
            command: 'npm i',
            package: '@appwrite/console',
        },
    };

    const version = sdkVersions[type];
    const installInfo = installCommands[type as keyof typeof installCommands];

    const installCommand = (() => {
        if (!installInfo) {
            throw new Error(`Installation command not available for SDK type: ${type}`);
        }
        
        if (type === 'client-android' || type === 'server-kotlin') {
            return `${installInfo.command} ${installInfo.package}:${version}'`;
        } else if (type === 'client-apple' || type === 'server-swift') {
            return `${installInfo.command} ${installInfo.package}`;
        } else if (type === 'server-go') {
            return `${installInfo.command} ${installInfo.package}`;
        } else if (version) {
            return `${installInfo.command} ${installInfo.package}@${version}`;
        } else {
            return `${installInfo.command} ${installInfo.package}`;
        }
    })();
</script>

<Fence
    content={installCommand}
    language={'sh'}
    process={true}
    withLineNumbers={false}
/>
