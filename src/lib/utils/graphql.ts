type CreateGraphqlFetcherArgs = {
    query: string;
    url: string;
};

type GraphqlFetcherArgs = {
    authorizationToken: string;
    variables: Record<string, unknown>;
};

export function createGraphqlFetcher<T>({ query, url }: CreateGraphqlFetcherArgs) {
    return async ({ authorizationToken, variables }: GraphqlFetcherArgs) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authorizationToken}`
            },
            body: JSON.stringify({ query, variables })
        }).then((res) => res.json() as T);
    };
}
