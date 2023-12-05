export type MockThread = {
    id: string;
    username?: string;
    title: string;
    text: string;
    replies: MockMessage[];
};

export type MockMessage = {
    username?: string;
    text: string;
};
