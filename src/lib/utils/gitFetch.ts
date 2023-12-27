export async function getGitHubStars(): Promise<number> {
    const apiUrl = `https://api.github.com/repos/appwrite/appwrite`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data: { stargazers_count: number } = await response.json();
            const decimalNumber: number = data.stargazers_count / 1000;
            return decimalNumber;
        } else {
            throw new Error(`Failed to fetch github data: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        return 0;
    }
}
