import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import WritingAssistant from "../Components/WritingAssistant";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescp] = useState("");
  const [category, setCategory] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://main-django.onrender.com/api/editedpost/${id}/`)
      .then((res) => {
        setTitle(res.data.title);
        setDescp(res.data.description);
        setCategory(res.data.category);
        setExistingImage(res.data.image);
      })
      .catch((err) => {
        console.log("FETCH ERROR:", err.response?.data);
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `https://main-django.onrender.com/api/editpost/${id}/`,
        formData
      );

      alert("Post updated successfully");
      navigate("/profile");
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("ERROR:", error.response?.data);
      alert("Update failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Edit Form */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Edit Post
            </h1>

            <form onSubmit={handleUpdate} className="space-y-5">

              {existingImage && (
                <img
                  src={`https://main-django.onrender.com${existingImage}`}
                  className="w-full h-64 object-cover rounded-xl"
                  alt="post"
                />
              )}

              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                value={description}
                onChange={(e) => setDescp(e.target.value)}
                rows="8"
                placeholder="Description"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                {loading ? "Updating..." : "Update Post"}
              </button>

            </form>
          </div>

          {/* Writing Assistant */}
          <div className="w-full lg:w-[380px]">
            <div className="sticky top-24">
              <div className="bg-white shadow-xl rounded-2xl p-5 border border-gray-100">

                <h2 className="text-lg font-semibold text-orange-500 mb-4">
                   Writing Assistant
                </h2>

                <WritingAssistant />

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EditPost;