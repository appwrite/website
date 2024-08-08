import { base } from '$app/paths';
import readingTime from 'reading-time';
import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';

export function globToTutorial(data: {
	pathname: string;
	tutorials: {
		raw: Record<string, unknown>,
		default: Record<string, unknown>
	}
}) {
	let isFound = false;
	let difficulty: string;
	const readtime = readingStats(data)

	return Object.entries(data.tutorials.default)
		.map(([filepath, tutorial]) => {
			const { frontmatter } = tutorial as {
				frontmatter: Tutorial;
			};
			const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
			const tutorialName = data.pathname.split('/').slice(0, -1).join('/');

			if (!isFound && 'difficulty' in frontmatter && 'readtime' in frontmatter) {
				isFound = true;
				difficulty = frontmatter.difficulty;
			}

			return {
				readtime,
				difficulty,
				...frontmatter,
				href: `${base}${tutorialName}/${slug}`,
			};
		})
		.sort((a, b) => {
			return a.step - b.step;
		});
}

const readingStats = (data: object) => {
	const content = Object.entries(data.tutorials.raw).map(([, rawContent]) => {
		const frontmatterEnd = (rawContent as string).lastIndexOf('---') + 3;
		return (rawContent as string).slice(frontmatterEnd).trimStart();
	}).join('\n\n');

	return readingTime(content, {
		wordsPerMinute: 120
	}).minutes;
};