export const getSinglePost = async (id) => {
    const singlePostData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const postData = await singlePostData.json();
    return postData;
}


export async function generateMetadata(
    { params}
) {
    // read route params
    const { id } = await params;
    // fetch data
    const singlePost = await getSinglePost(id);
    return {
        title: singlePost.title,
        description: singlePost.body
    }
}



export default async function SinglePost({ params }) {
    const p = await params;
    const postData = await getSinglePost(p.id);
    return (
        <div className="border-1 border-black p-2 m-2 rounded-lg">
            {/* <p>{ JSON.stringify(postData)}</p> */}
            <p className="font-bold">{postData.id}</p>
            <p className="font-bold">{postData.title}</p>
            <p>{postData.body}</p>
        </div>
    );
}