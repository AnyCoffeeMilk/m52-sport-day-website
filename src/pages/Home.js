import { useState, useEffect } from "react"
import fetchPosts from "../data/fetchPosts"
import DOMParserReact from 'dom-parser-react'

export default function Home() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetchPosts().fetchCurrent((data) => {
            return setPosts(data.posts)
        })
    }, [])

    const postsList = posts.map((post, i) => (
        <div className="my-3 p-4 max-w-[800px] border rounded-md bg-gray-50 mx-auto" key={i}>
            <div className="font-bold text-lg">
                {post.title}
            </div>
            <div className="py-1">
                <DOMParserReact source={post.content} />
            </div>
            <div className="text-sm text-gray-400">
                {post.time}
            </div>
        </div>
    ))

    return (
        <div id="posts" className="mx-2 my-2">
            { postsList }
        </div>
    )
}