export function load() {
	const modules = import.meta.glob('./content/*.markdoc', {
		eager: true
	});

	const posts = Object.entries(modules)
		.map(([filepath, module]) => {
			const { frontmatter } = module as {
				frontmatter: {
					title: string;
					description: string;
					date: string;
					cover: string;
					timeToRead: number;
				};
			};
			return {
				filepath,
				slug: filepath.replace('./content/', '').replace('.markdoc', ''),
				title: frontmatter.title,
				description: frontmatter.description,
				date: new Date(frontmatter.date),
				cover: frontmatter.cover,
				timeToRead: frontmatter.timeToRead
			};
		})
		.sort((a, b) => {
            return b.date.getTime() - a.date.getTime();
        });

	return {
		posts
	};
}
