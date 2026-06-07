import React, { useState, useEffect } from "react"
import axios from "axios"

function LikeButton({ postId }) {

  const [likes, setLikes] = useState(0)

  useEffect(() => {
    fetchLikes()
  }, [postId])

  const fetchLikes = async () => {
    try {
      const res = await axios.get(`https://main-django.onrender.com/api/likecount/${postId}/`)

      setLikes(res.data.likes)

    } catch (error) {
      console.log(error)
    }
  }

  const handleLike = async () => {

    try {

      await axios.post(
        `https://main-django.onrender.com/api/like/${postId}/`,
        {
          user: 1
        }
      )

      fetchLikes()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-6">

      <button
        onClick={handleLike}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        ❤️ Like
      </button>

      <p className="mt-2 text-gray-600 font-medium">
        {likes} Likes
      </p>

    </div>
  )
}

export default LikeButton