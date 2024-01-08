import { browser } from '$app/environment';
import { appwriteInit } from '$lib/appwrite/init';
import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';
import type { ContributionsMatrix } from './(components)/ticket.svelte';

export const pad = (num: number) => num.toString().padStart(2, '0');

export function createCountdown(date: Date) {
    const today = new Date();
    const hasReleased = today >= date;

    const [days, hours, minutes, seconds] = [writable(0), writable(0), writable(0), writable(0)];

    function update() {
        const today = new Date();
        const timeRemaining = date.getTime() - today.getTime();

        if (timeRemaining <= 0) {
            // Target date has passed, stop the countdown
            return;
        }

        const totalSeconds = Math.floor(timeRemaining / 1000);
        seconds.set(totalSeconds % 60);
        const totalMinutes = Math.floor(totalSeconds / 60);
        minutes.set(totalMinutes % 60);
        hours.set(Math.floor(totalMinutes / 60));
        days.set(Math.ceil(get(hours) / 24));
    }

    update();

    onMount(() => {
        let frame: number;

        function updateFrame() {
            update();
            // Request the next animation frame to keep updating the countdown
            frame = requestAnimationFrame(() => {
                updateFrame();
            });
        }
        updateFrame();

        return () => cancelAnimationFrame(frame);
    });

    return {
        hasReleased,
        days,
        hours,
        minutes,
        seconds
    };
}

export async function isLoggedInGithub() {
    if (!browser) return false;

    try {
        const { provider } = await appwriteInit.account.getSession('current');
        return provider === 'github';
    } catch {
        return false;
    }
}

interface GithubUser {
    login: string;
    name: string;
}

export async function getGithubUser() {
    const { providerAccessToken } = await appwriteInit.account.getSession('current');

    return await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${providerAccessToken}`
        }
    }).then((res) => res.json() as Promise<GithubUser>);
}

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

export async function getGithubContributions(username: string) {
    const { providerAccessToken } = await appwriteInit.account.getSession('current');

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
            variables: { userName: username }
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

    return contributions;
}
