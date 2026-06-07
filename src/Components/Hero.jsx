import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";

function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">

     
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-100">

        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="w-full h-full object-cover"
          alt="travel"
        />

        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
          className="w-full h-full object-cover"
          alt="food"
        />

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="w-full h-full object-cover"
          alt="technology"
        />

        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          className="w-full h-full object-cover"
          alt="beauty"
        />

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="w-full h-full object-cover"
          alt="nature"
        />

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="w-full h-full object-cover"
          alt="blog"
        />

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="w-full h-full object-cover"
          alt="laptop"
        />

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="w-full h-full object-cover"
          alt="ocean"
        />

      </div>

      
      {/* CONTENT */}
      <div className="relative z-10">

        {/* SEARCH */}
        <div className="flex justify-center pt-10">
          <SearchBar />
        </div>

        {/* HERO TEXT */}
        <section className="text-center py-28 px-4">

          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Create. Share. Inspire.
          </h1>

          <p className="text-white text-lg md:text-xl mt-5 max-w-2xl mx-auto">
            Explore blogs about travel, food, technology, beauty and more — all in one place.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <Link to="/addpost">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full shadow-lg transition">
                + Create Post
              </button>
            </Link>

            {/* <Link to="/posts">
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-full transition">
                Explore Posts
              </button>
            </Link> */}

          </div>

        </section>

      </div>
    </div>
  );
}

export default Hero;