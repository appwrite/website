const posts = import.meta.glob('../../blog/**/*.markdoc', {
    eager: true
});

export const GET = async () => {
    return new Response(JSON.stringify({ posts, total: Object.keys(posts).length }), {
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });
};
