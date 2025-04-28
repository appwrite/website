import { dev } from '$app/environment';

type Issue = {
    number: number;
    url: string;
    title: string;
    repository: string;
    tags: string[];
};

const mockIssues: Issue[] = [
    {
        number: 5232,
        url: 'https://github.com/appwrite/appwrite/issues/5232',
        title: 'Feature: Security Scans like SAST, DAST, FOSS, CAST in pipeline',
        repository: 'appwrite/appwrite',
        tags: ['Enhancement', 'Help Wanted', 'Discussion']
    },
    {
        number: 5748,
        url: 'https://github.com/appwrite/appwrite/issues/5748',
        title: 'Feature: overload Feature for Storage.CreateFile for using Blob instead of File',
        repository: 'appwrite/appwrite',
        tags: ['Enhancement', 'Help Wanted', 'Discussion']
    },
    {
        number: 680,
        url: 'https://github.com/appwrite/sdk-generator/issues/680',
        title: 'Feature: Unit Tests',
        repository: 'appwrite/sdk-generator',
        tags: ['Enhancement', 'Help Wanted', 'Discussion']
    },
    {
        number: 679,
        url: 'https://github.com/appwrite/sdk-generator/issues/679',
        title: 'Feature: overload Feature for Storage.CreateFile for using Blob instead of File',
        repository: 'appwrite/sdk-generator',
        tags: ['Enhancement', 'Help Wanted', 'Discussion']
    }
];

export const load = async () => {
    // if (dev) {
    //     return { issues: mockIssues };
    // }

    // fetch issues from GitHub, appwrite/appwrite repo
    const response = await fetch(
        'https://api.github.com/repos/appwrite/appwrite/issues?state=open'
    );
    const issues = await response.json();
    if (issues?.message?.includes('API rate limit exceeded')) {
        return { issues: mockIssues };
    }

    // map issues to our format
    return {
        issues: issues
            .map((issue: any) => ({
                number: issue.number,
                url: issue.html_url,
                title: issue.title,
                repository: issue.repository_url.replace('https://api.github.com/repos/', ''),
                tags: issue.labels.map((label: any) => label.name)
            }))
            .slice(0, 6)
    };
};
