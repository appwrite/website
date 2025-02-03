import { OAuthProvider } from 'appwrite';
import { appwriteInit } from './appwrite';

export const loginGithub = async () => {
    await appwriteInit.account.createOAuth2Token(
        OAuthProvider.Github,
        `${window.location.origin}/init/tickets?success=1`,
        `${window.location.origin}/init/tickets?error=1`,
        ['read:user']
    );
};
