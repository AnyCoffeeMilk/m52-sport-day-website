import posts from "../data/posts";

export default function Home() {
    const postsList = posts.map((post, i) => (
        <div className="my-3 p-4 max-w-[800px] text-lg border rounded-md bg-gray-50" key={i}>
            {post.content}
            <div className="text-sm text-gray-400">
                {post.date}
            </div>
        </div>
    ))
    return (
        <div className="mx-2 my-2 grid justify-center">
            { postsList }
        </div>
    )
}