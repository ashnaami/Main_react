import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://main-django.onrender.com/api/viewpost/"
      )

      setPosts(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-orange-50 p-10">

      <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
        All Posts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
        >
          <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300 cursor-pointer">

            <img
              src={`https://main-django.onrender.com${post.image}`}
              alt={post.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold mt-4">
              {post.title}
            </h2>

            <p className="text-orange-500">
              {post.category}
            </p>

            <p className="text-gray-600 mt-2 line-clamp-3">
              {post.description}
            </p>

          </div>
        </Link>
        ))}

      </div>

    </div>
  )
}

export default Posts