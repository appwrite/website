<script lang="ts">
    import { onMount } from 'svelte';

    const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    export let text: string = '';
    export let duration: number = 0.8;
    export let speed: number = 0.04;
    export let characterSet: string = defaultChars;
    export let trigger: boolean = true;

    let className: string = '';
    export { className as class };

    let displayText: string = text;
    let isAnimating: boolean = false;

    const scramble = async () => {
        if (isAnimating) return;
        isAnimating = true;

        const steps = duration / speed;
        let step = 0;

        const interval = setInterval(() => {
            let scrambled = '';
            const progress = step / steps;

            for (let i = 0; i < text.length; i++) {
                if (text[i] === ' ') {
                    scrambled += ' ';
                    continue;
                }

                if (progress * text.length > i) {
                    scrambled += text[i];
                } else {
                    scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
                }
            }

            displayText = scrambled;
            step++;

            if (step > steps) {
                clearInterval(interval);
                displayText = text;
                isAnimating = false;
            }
        }, speed * 1000);
    };

    onMount(() => {
        if (!trigger) return;
        scramble();
    });
</script>

<span class={className}>{displayText}</span>
