const parsePosts = (posts: Record<string, any>) => {
    return Object.fromEntries(
        Object.entries(posts).map(([key, value]) => {
            return [
                key.replace('../../blog/post/', '').replace('/+page.markdoc', ''),
                value.frontmatter
            ];
        })
    );
};

const posts = parsePosts(
    import.meta.glob('../../blog/post/**/*.markdoc', {
        eager: true
    })
);

export const GET = async () => {
    return new Response(JSON.stringify({ posts, total: Object.keys(posts).length }), {
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });
};
