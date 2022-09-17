import posts from "../data/posts";

export default function Home() {
    return (
        <div className="mx-2 my-2">
            { posts.map((post, i) => (
                <div key={i} className="my-4 p-4 text-lg border rounded-md bg-gray-50">
                    { post.content }
                    <div className="text-sm text-gray-400">
                        { post.date }
                    </div>
                </div>
            ))}
        </div>
    )
}