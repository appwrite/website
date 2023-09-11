import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const modules = import.meta.glob('./**/+page.markdoc', {
		eager: true
	});

	const posts = Object.entries(modules).map(([filepath, module]) => {
		const { frontmatter } = module;
		return {
			filepath,
			title: frontmatter.title,
			description: frontmatter.description
		};
	});

	return {
		posts
	};
};
