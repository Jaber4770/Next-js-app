import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json();
    return data;
}

export const metadata = {
    title: "posts",
    description: "loa ding ding ding post",
};

export default async function Post() {
    const posts = await getPosts();
  return (
      <div className="grid grid-cols-4">
          {/* <p>{JSON.stringify(posts)}</p> */}
          {
              posts.map(post => {
                  return <>
                      <div className="border-2  border-l-black p-2 m-2">
                          <p className="font-bold">{ post.title}</p>
                          <p>{post.body}</p>
                          <Link className="btn btn-primary bg-gray-400 p-2 rounded-lg cursor-pointer" href={`/post/${post.id}`}>
                              <button>Details</button>
                          </Link>
                  </div>
                  </>
              })
          }
    </div>
  );

}