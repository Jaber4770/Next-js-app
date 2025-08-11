export default async function SinglePost({ params }) {
    const p = await params;
    console.log(p.id)
  return (
      <div>
          <p>singlePost: { p.id}</p>
    </div>
  );
}