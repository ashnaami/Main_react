import React from "react";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>

      <div className="relative text-center">

        <h2 className="text-2xl font-bold text-orange-400">
          BloggApp
        </h2>

        <p className="text-gray-400 mt-2">
          Share your creativity with the world ✨
        </p>

        <p className="text-gray-500 text-sm mt-4">
          © 2026 All Rights Reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;