import { appwriteInit } from '$lib/appwrite/init';
import { redirect } from '@sveltejs/kit';

import { isLoggedInGithub } from '../../helpers';
import type { ContributionsMatrix } from './ticket.svelte';
import { browser } from '$app/environment';

interface GithubContributionsResponse {
    data: {
        user: {
            contributionsCollection: {
                contributionCalendar: {
                    totalContributions: number;
                    weeks: Array<{
                        contributionDays: Array<{
                            contributionCount: number;
                            date: Date;
                        }>;
                    }>;
                };
            };
        };
    };
}

interface GithubUser {
    login: string;
    name: string;
}

export const load = async ({ fetch }) => {
    if (await isLoggedInGithub()) {
        const { providerAccessToken } = await appwriteInit.account.getSession('current');

        const username = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${providerAccessToken}`
            }
        }).then((res) => res.json() as Promise<GithubUser>);

        const { data } = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${providerAccessToken}`
            },
            body: JSON.stringify({
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
                variables: { userName: 'tglide' }
            })
        }).then((res) => res.json() as Promise<GithubContributionsResponse>);
        const { weeks } = data.user.contributionsCollection.contributionCalendar;

        const max = weeks.reduce((acc, week) => {
            const weekMax = week.contributionDays.reduce((acc, day) => {
                return Math.max(acc, day.contributionCount);
            }, 0);
            const newMax = Math.max(acc, weekMax);
            return Math.min(newMax, 45);
        }, 0);

        const contributions: ContributionsMatrix = weeks.map((week) => {
            return week.contributionDays
                .map((day) => {
                    return day.contributionCount / max;
                })
                .toReversed();
        });

        return {
            contributions,
            username
        };
    } else if (browser) {
        throw redirect(307, '/init/ticket');
    }
};
