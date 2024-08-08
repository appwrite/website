import { base } from '$app/paths';
import readingTime from 'reading-time';
import readability from 'text-readability';
import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';

export function globToTutorial(data: {
	pathname: string;
	tutorials: {
		raw: Record<string, unknown>,
		default: Record<string, unknown>
	}
}) {
	const { difficulty, readtime } = getReadingStats(data);
	return Object.entries(data.tutorials.default)
		.map(([filepath, tutorial]) => {
			const { frontmatter } = tutorial as {
				frontmatter: Tutorial;
			};
			const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
			const tutorialName = data.pathname.split('/').slice(0, -1).join('/');

			// temp fix to not override from pages.
			if ('readtime' in frontmatter) delete frontmatter.readtime;
			if ('difficulty' in frontmatter) delete frontmatter.difficulty;

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

const getReadingStats = (data: object) => {
	const content = Object.entries(data.tutorials.raw).map(([, rawContent]) => {
		const frontmatterEnd = (rawContent as string).lastIndexOf('---') + 3;
		return (rawContent as string).slice(frontmatterEnd).trimStart();
	}).join('\n\n');

	let difficulty: string;
	const fkGrade = readability.fleschKincaidGrade(content);
	const readtime = readingTime(content, { wordsPerMinute: 120 }).minutes;

	// todo: better benchmark as the content is technical.
	if (fkGrade >= 35.0) {
		difficulty = 'beginner'
	} else if (fkGrade >= 20.0 && fkGrade < 35.0) {
		difficulty = 'intermediate'
	} else {
		difficulty = 'advanced'
	}

	return {
		readtime, difficulty
	}
}