import { base } from '$app/paths';
import type { AuthorData } from '$markdoc/layouts/Author.svelte';
import type { PostsData } from '$markdoc/layouts/Post.svelte';

export function load() {
	const postsGlob = import.meta.glob('./post/**/*.markdoc', {
		eager: true
	});
	const authorsGlob = import.meta.glob('./author/**/*.markdoc', {
		eager: true
	});

	const posts = Object.entries(postsGlob)
		.map(([filepath, postList]) => {
			const { frontmatter } = postList as {
				frontmatter: PostsData;
			};
			const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
			const postName = slug.slice(slug.lastIndexOf('/') + 1);

			return {
				title: frontmatter.title,
				description: frontmatter.description,
				date: new Date(frontmatter.date),
				cover: frontmatter.cover,
				timeToRead: frontmatter.timeToRead,
				author: frontmatter.author,
				category: frontmatter.category,
				href: `${base}/blog/post/${postName}`
			};
		})
		.sort((a, b) => {
			return b.date.getTime() - a.date.getTime();
		});

	const authors = Object.entries(authorsGlob).map(([_filepath, authorList]) => {
		const { frontmatter } = authorList as {
			frontmatter: AuthorData;
		};

		const name = frontmatter.id ?? frontmatter.name.toLowerCase().replace(' ', '-');

		return {
			name: frontmatter.name,
			role: frontmatter.role,
			avatar: frontmatter.avatar,
			bio: frontmatter.bio,
			twitter: frontmatter.twitter,
			linkedin: frontmatter.linkedin,
			github: frontmatter.github,
			href: `${base}/blog/author/${name}`
		};
	});

	return {
		posts,
		authors
	};
}
