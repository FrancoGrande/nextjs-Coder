const getPostId = async (postId = '') => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();  
}

const Post = async ({ params }) => {
    const post = await getPostId(params.id);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post