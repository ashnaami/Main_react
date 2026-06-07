import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/logo.png";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white border-b sticky top-0 z-50">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="w-10 h-10 object-contain" />
        <h1 className="text-xl font-bold text-gray-800">BloggApp</h1>
      </div>

      {/* NAV LINKS */}
      <ul className="flex gap-6 text-sm font-medium text-gray-700">
        <li><Link className="hover:text-orange-500" to="/home">Home</Link></li>
        <li><Link className="hover:text-orange-500" to="/posts">Explore</Link></li>
        <li><Link className="hover:text-orange-500" to="/profile">Profile</Link></li>
      </ul>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full"
      >
        Logout
      </button>

    </nav>
  );
}

export default NavBar;