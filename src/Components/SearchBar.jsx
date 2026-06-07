import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBar() {
  const [category, setCategory] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/search/?category=${category}`
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* SEARCH INPUT */}
      <div className="flex gap-2 bg-gray-100 px-3 py-2 rounded-full w-full max-w-md">
        <input
          className="bg-transparent outline-none w-full text-sm"
          placeholder="Search categories..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="text-orange-500 font-semibold text-sm"
        >
          Search
        </button>
      </div>

      {/* RESULTS */}
      <div className="mt-6 w-full max-w-md space-y-3">

        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div className="bg-white border rounded-xl p-4 hover:bg-gray-50 transition">

              <h2 className="font-semibold text-gray-800">
                {post.title}
              </h2>

              <p className="text-xs text-orange-500 mt-1">
                #{post.category}
              </p>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {post.description}
              </p>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default SearchBar;