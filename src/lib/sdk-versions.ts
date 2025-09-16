export const sdkVersions = {
    server: '1.8.0',
    'client-web': '20.0.0',
    'client-flutter': '19.0.0',
    'client-apple': '12.0.0',
    'client-android': '10.0.0',
    'client-react-native': '0.13.0',
    'client-graphql': 'October 2021',
    'client-rest': '',
    'console-web': '1.10.0',
    'console-cli': '9.1.0',
    'server-nodejs': '19.0.0',
    'server-php': '17.0.0',
    'server-python': '13.0.0',
    'server-ruby': '18.0.0',
    'server-go': '0.11.0',
    'server-dotnet': '0.17.0',
    'server-dart': '18.0.0',
    'server-kotlin': '11.0.0',
    'server-swift': '12.0.0',
    'server-graphql': 'October 2021',
    'server-rest': ''
} as const;

export type SDKVersions = typeof sdkVersions;
