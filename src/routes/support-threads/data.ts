import type { MockThread } from './types';

export const MockData: MockThread[] = [
    {
        id: '1',
        username: 'appwrite',
        title: 'Welcome to Appwrite!',
        text: 'Welcome to Appwrite! We are glad to have you here. If you have any questions, feel free to ask them here.',
        replies: [
            {
                username: 'user1',
                text: 'Hello! I am new to Appwrite. I am excited to get started.'
            },
            {
                username: 'user2',
                text: 'Hi, I am new too! I am looking forward to learning more about Appwrite.'
            },
            {
                username: 'user3',
                text: 'Welcome! I am happy to help if you have any questions.'
            }
        ]
    },
    {
        id: '2',

        username: 'user1',
        title: 'How do I create a new project?',
        text: 'I am trying to create a new project, but I cannot find the option to do so. Can someone help me?',
        replies: [
            {
                username: 'user2',
                text: 'Go to the dashboard and click on the "Create Project" button. You can then enter the name of your project and click "Create".'
            },
            {
                username: 'user3',
                text: 'You can also create a project from the CLI. See the documentation for more information.'
            }
        ]
    },
    {
        id: '3',
        username: 'user2',
        title: 'How do I create a new collection?',
        text: 'I am trying to create a new collection, but I cannot find the option to do so. Can someone help me?',
        replies: [
            {
                username: 'user1',
                text: 'Go to the dashboard and click on the "Create Collection" button. You can then enter the name of your collection and click "Create".'
            },
            {
                username: 'user3',
                text: 'You can also create a collection from the CLI.'
            }
        ]
    }
];
