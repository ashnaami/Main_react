import React, { useEffect, useState } from "react";
import axios from "axios";

function Comments({ postId }) {

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

 
  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `https://main-django.onrender.com/api/viewcmmt/${postId}/`
      );

      setComments(res.data || []);

    } catch (error) {
      console.log("Fetch error:", error.response?.data || error);
      setComments([]);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  // 🔥 ADD COMMENT
  const handleComment = async () => {

    if (!comment.trim()) {
      alert("Please enter a comment");
      return;
    }

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://127.0.0.1:8000/api/comments/", {
        post: postId,
        user: user.id,
        comments: comment
      });

      setComment("");

      // refresh comments
      fetchComments();

    } catch (error) {
      console.log("Comment error:", error.response?.data || error);
      alert("Failed to add comment");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Comments
      </h2>

      {/* INPUT BOX */}
      <div className="flex gap-3 mb-6">

        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3"
        />

        <button
          onClick={handleComment}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 rounded-lg disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post"}
        </button>

      </div>

      {/* COMMENTS LIST */}
      {/* <div className="space-y-4">

        {comments && comments.length > 0 ? (

          comments.map((item) => (

            <div
              key={item.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <p className="text-gray-800">
                {item.comment}
              </p>
            </div>

          )) */}

        {/* ) : (

          <p className="text-gray-500">
            No comments yet.
          </p>

        )} */}

      {/* </div> */}

    </div>
  );
}

export default Comments;