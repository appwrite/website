async function getGitHubStars(): Promise<String | null> {
    const apiUrl: string = `https://api.github.com/repos/appwrite/appwrite`;

    try {
        const response = await fetch(apiUrl);

        if (response.ok) {
            const data: { stargazers_count: number } = await response.json();
            const numStr: number = data.stargazers_count;
            const decimalNumber = numStr / 1000;
            const formatNumber = `${decimalNumber.toFixed(1)}K`;
            return formatNumber;
        } else {
            throw new Error(`Failed to fetch stars: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { getGitHubStars };
