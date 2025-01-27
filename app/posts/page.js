import  Link  from 'next/link';

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


const Posts = async () => {
    const data =await getPosts();
    return (
        <div>
            {data.map((post) => (
                <div key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></div>
            ))}
        </div>
    )
        
};

export default Posts;