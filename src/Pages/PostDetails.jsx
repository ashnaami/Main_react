import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Comments from "../Components/Comments"
import LikeButton from '../Components/LikeButton'
import NavBar from '../Components/NavBar'

function PostDetails() {
  
    const { id } = useParams()

  const [post, setPost] = useState(null)

  useEffect(() => {

    axios.get(
      `http://127.0.0.1:8000/api/singlepost/${id}/`
    )
    .then((res) => setPost(res.data))

  }, [id])

  if (!post) return <h1>Loading...</h1>

  return (
    
    <div className="max-w-4xl mx-auto py-10">
      <div>
         <NavBar />
      </div>
        {post.image && (
            <img
                src={`http://127.0.0.1:8000${post.image}`}
                alt={post.title}
                className="w-full h-[500px] object-cover rounded-xl mb-8"
            />
            )}

      <h1 className="text-5xl font-bold">
        {post.title}
      </h1>

      <p className="text-orange-500 mt-2">
        {post.category}
      </p>

      <p className="mt-6 text-lg">
        {post.description}
      </p>
            <Comments postId={id} />
            
      <LikeButton postId={post.id} />
          </div>
  )
}

export default PostDetails
