import { browser } from '$app/environment';
import { appwriteInit } from '$lib/appwrite/init';
import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';
import type { ContributionsMatrix } from './(components)/Ticket.svelte';

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
                return parseFloat((day.contributionCount / max).toFixed(2));
            })
            .toReversed();
    });

    return contributions;
}

function shuffle<T extends Array<unknown>>(array: T) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function getMockContributions() {
    return shuffle<ContributionsMatrix>([
        [0.02, 0.2, 0.29, 0.49, 0.16, 0.24, 0.36],
        [0.13, 0.6, 0.07, 0.09, 0.44, 0.38, 0],
        [0, 0.09, 0.04, 0.22, 0.31, 0.36, 0],
        [0, 0.2, 0.2, 0.4, 0.09, 0.07, 0],
        [0, 0.24, 0.44, 0.36, 0.44, 0.11, 0],
        [0, 0.16, 0.2, 0.13, 0.24, 0.2, 0.04],
        [0, 0.09, 0.16, 0.04, 0.13, 0.07, 0],
        [0, 0, 0, 0.33, 0.29, 0.11, 0],
        [0.27, 0.2, 0.18, 0.27, 0.09, 0.09, 0],
        [0, 0.13, 0.09, 0.16, 0.42, 0.44, 0.31],
        [0, 0, 0, 0.24, 0.38, 0.51, 0],
        [0.82, 0.84, 0.36, 0.49, 0.29, 0, 0],
        [0.24, 0.09, 0.62, 0.4, 0.91, 0.82, 0.82],
        [0.29, 0.11, 0.56, 0.36, 0.24, 0.49, 0.2],
        [0.47, 0.47, 0.58, 0.36, 0.31, 0.33, 2.49],
        [0.18, 1, 0.56, 0.38, 0.31, 0.69, 0],
        [0.11, 0.04, 0.24, 0.24, 0.56, 0.58, 0.36],
        [0.56, 0.11, 0, 1.42, 0, 0.2, 0.04],
        [0.04, 0.18, 0.36, 0.51, 0.33, 0.2, 0.11],
        [0.07, 0.6, 0.29, 0, 0.04, 0.16, 0.13],
        [0.02, 0.09, 0.09, 0.22, 0.13, 0.29, 0.04],
        [0.36, 0.36, 0.09, 0.04, 0.2, 0.09, 0],
        [0.29, 0.58, 0.71, 0.4, 0.51, 0.51, 0.56],
        [0.04, 0.11, 0.29, 0.27, 0.33, 0.24, 0.31],
        [0.4, 0, 0.24, 0.42, 0.33, 0.33, 0],
        [0.27, 0.18, 0.33, 0.33, 0.18, 0.29, 0.22],
        [0.02, 0.8, 0.36, 0.44, 0.36, 0.27, 0.33],
        [0.24, 0.29, 0.2, 0.2, 0.84, 0.71, 0.22],
        [0.13, 0.13, 0.31, 0.24, 0.24, 0.4, 0.42],
        [0.22, 0.18, 0.89, 0.51, 0.8, 0.2, 0.42],
        [0.02, 0.38, 0.29, 0.27, 0.36, 0.78, 0.11],
        [0.29, 1.04, 0.89, 0.24, 0.13, 0.24, 0.22],
        [0, 0.36, 0.51, 0.18, 0.44, 0.31, 0.6],
        [0.33, 0.53, 0.2, 0.36, 0.11, 0.56, 0.13],
        [0, 0.27, 0.84, 0.42, 0.58, 0.29, 0.29],
        [0.22, 0.13, 0.27, 0.24, 0.24, 0.67, 0.02],
        [0, 0, 0.4, 0.13, 0.09, 0.04, 0],
        [0.09, 0.04, 0.13, 0.04, 0, 0, 0],
        [0, 0.42, 0.36, 0.4, 0.64, 0.4, 0.29],
        [0.24, 0.44, 0.47, 0.38, 0.36, 0.27, 0.04],
        [0.24, 0.53, 0.44, 0.13, 0.11, 0.36, 0.11],
        [0, 0.09, 0.31, 0.07, 0.16, 0.76, 0],
        [0.02, 0.22, 0.33, 0.02, 0.18, 0.07, 0.07],
        [0.18, 0.29, 0.2, 0.29, 0.24, 0.36, 0.04],
        [0, 0.02, 0.29, 0.49, 0.11, 0, 0],
        [0.22, 0.2, 0.22, 0.09, 0.36, 0.44, 0],
        [0.27, 0.11, 0, 0.07, 0.24, 0, 0.16],
        [0.33, 0, 0.02, 0.09, 0, 0.11, 0.07],
        [0.09, 0.11, 0.09, 0.16, 0.29, 0.16, 0.11],
        [0, 0.11, 0.42, 0.27, 0.2, 1, 0.24],
        [0.02, 0, 0.04, 0.33, 0.58, 0, 0.02],
        [0, 0.04, 0.18, 0, 0.18, 0, 0.02],
        [0.18, 0.13, 0]
    ]);
}
