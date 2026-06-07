import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await axios.post(
        `https://main-django.onrender.com/api/login/`,
        {
          email,
          password
        }
      )

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/home");
        }

    }

    catch (error) {

      console.log(error)
      alert("Invalid Credentials")
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-[420px]">

        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-200 mt-2">
          Login to continue blogging 
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/80 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/80 outline-none"
          />
        <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
        >
        Login
        </button>
        </form>

        <p className="text-center text-white mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-orange-300 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  )
}

export default Login