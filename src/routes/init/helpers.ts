import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

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
