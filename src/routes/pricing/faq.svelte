<script lang="ts">
	import { browser } from '$app/environment';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	export let items: {
		question: string;
		answer: string;
	}[] = [
		{
			question: 'When will Appwrite’s paid plans be available?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		},
		{
			question: 'Can I still self-host Appwrite for free?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		},
		{
			question: 'What will happen to my current account when pricing is available?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		},
		{
			question: 'Does Appwrite have a trial period?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		},
		{
			question: 'What payment methods does Appwrite support?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		},
		{
			question: 'What happens if I reach the storage limit in my Pro plan?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		},
		{
			question: 'How can I get the OSS plan?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		},
		{
			question: 'I have a Free Plan account, how do I upgrade to a paid plan?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
		}
	];

	const {
		elements: { root, heading, content, item, trigger },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: ['0'],
		multiple: true,
		forceVisible: true
	});
</script>

<ul
	class="collapsible u-width-full-line"
	style="--p-toggle-border-color: var(--aw-color-smooth);"
	use:melt={$root}
>
	{#each items as faqItem, index (index)}
		<li class="collapsible-item">
			<!-- Progressive Enhancement for kbd navigation & animations -->
			{#if browser}
				<div
					class="collapsible-wrapper"
					use:melt={$item(`${index}`)}
					{...{ open: $isSelected(`${index}`) ? true : undefined }}
				>
					<h3 use:melt={$heading({ level: 3 })}>
						<button class="collapsible-button u-width-full-line" use:melt={$trigger(`${index}`)}>
							<span class="aw-label aw-u-color-text-primary">
								{faqItem.question}
							</span>
							<div class="icon aw-u-color-text-primary">
								<span class="icon-cheveron-down" aria-hidden="true" />
							</div>
						</button>
					</h3>

					{#if $isSelected(`${index}`)}
						<div class="collapsible-content" use:melt={$content(`${index}`)} transition:slide>
							<p class="aw-main-body-400">
								{faqItem.answer}
							</p>
						</div>
					{/if}
				</div>
			{:else}
				<details class="collapsible-wrapper" open={index === 0}>
					<summary class="collapsible-button">
						<span class="aw-label aw-u-color-text-primary">
							{faqItem.question}
						</span>
						<div class="icon aw-u-color-text-primary">
							<span class="icon-cheveron-down" aria-hidden="true" />
						</div>
					</summary>

					<div class="collapsible-content">
						<p class="aw-main-body-400">
							{faqItem.answer}
						</p>
					</div>
				</details>
			{/if}
		</li>
	{/each}
</ul>
