import { appwriteInit } from '$lib/appwrite/init';
import { createGraphqlFetcher } from '$lib/utils/graphql';
import { isLoggedInGithub } from '../../helpers';

export interface GithubContributionsResponse {
    data: Data;
}

export interface Data {
    user: User;
}

export interface User {
    contributionsCollection: ContributionsCollection;
}

export interface ContributionsCollection {
    contributionCalendar: ContributionCalendar;
}

export interface ContributionCalendar {
    totalContributions: number;
    weeks: Week[];
}

export interface Week {
    contributionDays: ContributionDay[];
}

export interface ContributionDay {
    contributionCount: number;
    date: Date;
}

const fetchContributions = createGraphqlFetcher<GithubContributionsResponse>({
    query: `query($userName:String!) { 
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }`,
    url: 'https://api.github.com/graphql'
});

export const load = async () => {
    if (await isLoggedInGithub()) {
        const { providerAccessToken } = await appwriteInit.account.getSession('current');
        console.log(providerAccessToken);
        const contributions = await fetchContributions({
            authorizationToken: providerAccessToken,
            variables: { userName: 'tglide' }
        });

        console.log(
            contributions.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
                (week) => week.contributionDays
            )
        );

        return {
            // username: session
        };
    }
};
