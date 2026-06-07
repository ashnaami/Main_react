import React from "react";

function BlogCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition">

      {/* IMAGE */}
      <div className="relative">
        <img
          src="https://picsum.photos/600/400"
          alt=""
          className="w-full h-72 object-cover"
        />

        {/* gradient overlay like Instagram */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h2 className="text-lg font-semibold text-gray-900">
          My First Blog
        </h2>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          This is a sample blog description like an Instagram caption style post preview.
        </p>

        {/* ACTIONS */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">

          <button className="hover:text-orange-500 transition">❤️ Like</button>
          <button className="hover:text-orange-500 transition">💬 Comment</button>
          <button className="hover:text-orange-500 transition">🔖 Save</button>

        </div>

      </div>
    </div>
  );
}

export default BlogCard;