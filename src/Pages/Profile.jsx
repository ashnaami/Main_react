import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import NavBar from "../Components/NavBar"

function Profile() {
  const [data, setData] = useState(null)
  const [commentsMap, setCommentsMap] = useState({})

  const navigate = useNavigate()

  const storedUser = localStorage.getItem("user")
  const user = storedUser ? JSON.parse(storedUser) : null

  // FETCH PROFILE
  useEffect(() => {
    if (!user) {
      navigate("/login")
      return
    }

    axios
      .get(`https://main-django.onrender.com/api/profile/${user.id}/`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [user, navigate])

  // FETCH COMMENTS
  const fetchComments = async (postId) => {
    try {
      const res = await axios.get(
        `https://main-django.onrender.com/api/viewcmmt/${postId}/`
      )
      return res.data || []
    } catch (err) {
      return []
    }
  }

      useEffect(() => {
      const storedUser = localStorage.getItem("user")
      if (!storedUser) return

      const user = JSON.parse(storedUser)

      axios
        .get(`https://main-django.onrender.com/api/profile/${user.id}/`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }, [])

  // ✅ DELETE POST FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?")
    if (!confirmDelete) return

    try {
      await axios.delete(`https://main-django.onrender.com/api/deletepost/${id}/`)

      // remove from UI instantly
      setData((prev) => ({
        ...prev,
        posts: prev.posts.filter((post) => post.id !== id),
      }))
    } catch (err) {
      console.log(err)
      alert("Delete failed")
    }
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading profile...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <NavBar />

      {/* USER PROFILE */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>

        <p>Name: {data.user.name}</p>
        <p>Email: {data.user.email}</p>
        <p>Phone: {data.user.phone}</p>
      </div>

      {/* POSTS */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">My Posts</h2>

        {data.posts?.length > 0 ? (
          data.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-5 rounded-xl shadow mb-5"
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>

              <p className="text-gray-600">{post.description}</p>

              <p className="text-sm text-gray-500 mt-2">
                Likes: {post.likes}
              </p>

              {/* COMMENTS */}
              <div className="mt-3">
                <h4 className="font-medium">Comments</h4>

                {commentsMap[post.id]?.length > 0 ? (
                  commentsMap[post.id].map((c) => (
                    <div key={c.id} className="bg-gray-100 p-2 rounded mt-1">
                      {c.comment}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">No comments</p>
                )}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-4">

                {/* EDIT BUTTON */}
                <Link to={`/editpost/${post.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">
                    Edit
                  </button>
                </Link>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  )
}

export default Profile