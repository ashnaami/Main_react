import React, { useState } from "react";
import axios from "axios";
import WritingAssistant from "../Components/WritingAssistant";
import NavBar from "../Components/NavBar";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescp] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    const postdata = new FormData();
    postdata.append("title", title);
    postdata.append("description", description);
    postdata.append("category", category);
    postdata.append("user", storedUser.id);

    if (image) postdata.append("image", image);

    try {
      await axios.post("http://127.0.0.1:8000/api/addpost/", postdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Post successfully added");

      setTitle("");
      setDescp("");
      setCategory("");
      setImage(null);
    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to add post");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">

      <NavBar />

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE - FORM */}
        <div className="flex-1">

          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

            <h1 className="text-3xl font-bold text-gray-800">
              Create New Post ✍️
            </h1>

            <p className="text-gray-500 mt-1 mb-6">
              Share your ideas with the world
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* IMAGE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Featured Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-50"
                />
              </div>

              {/* TITLE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Title
                </label>

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your post title"
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>

                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Travel, Tech, Food..."
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  rows="6"
                  value={description}
                  onChange={(e) => setDescp(e.target.value)}
                  placeholder="Write your story..."
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
              >
                Publish Post 🚀
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE - AI ASSISTANT */}
        <div className="w-full lg:w-[380px]">

          <div className="sticky top-24">

            <div className="bg-white shadow-xl rounded-2xl p-5 border border-gray-100">

              <h2 className="text-lg font-semibold text-orange-500 mb-3">
                 Writing Assistant
              </h2>

              <WritingAssistant />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CreatePost;